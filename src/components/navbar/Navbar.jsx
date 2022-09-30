import "./navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

const handleClick = () => {
  navigate("/")
}

  return (
    <div className="navbar">
    <div className="navContainer">
      <span onClick={handleClick} className="logo">mybooking</span>
      <div className="navItems">
        <button className="navButton">Register</button>
        <button className="navButton">Login</button>
      </div>
    </div>
  </div>
  )
}

export default Navbar
