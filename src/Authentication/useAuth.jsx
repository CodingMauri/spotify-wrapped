import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  // ...

  // Refresh Token
  const intervalRef = useRef();
  console.log(code)
  const getCodeUrl = () => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then(res => {
        // console.log(res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/" // Redirect to root URL
      });
     
  };

  useEffect(() => {
    getCodeUrl()
  },[code])


  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    intervalRef.current = setInterval(() => {
      axios
        .post("/refresh", { refreshToken })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
          setRefreshToken(res.data.refreshToken);
        })
        .catch(() => (window.location = "/"));
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(intervalRef.current);
  }, [refreshToken, expiresIn]);

  return accessToken;
}
