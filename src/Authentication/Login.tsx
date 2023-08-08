import React from 'react'
import "../CSS/Login.css"
import { clientId,redirectURI } from '../../apiConfig'
  export default function Login() {

    const handleLogin = () => {
      window.location.href = `https://accounts.spotify.com/authorize`
    }

  return (
    <div className = "login-page">

    </div>
  )
}
