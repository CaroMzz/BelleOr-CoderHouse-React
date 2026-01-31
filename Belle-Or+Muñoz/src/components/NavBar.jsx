import CartWidget from "./CartWidget"
import './NavBar.css'

import logo from "../assets/logo-BelleOr.png";

function NavBar() {
    return(
        <div className="navbar">
            <img src={logo} alt="Logo de Belle Or" />
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar