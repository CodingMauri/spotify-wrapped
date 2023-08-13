import Home from "./Components/Home";
import "tailwindcss/tailwind.css"
import "./App.css"
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <>
      <Navbar /> 
      <Home />
      <Dashboard />
    </>
  );
}

export default App;
