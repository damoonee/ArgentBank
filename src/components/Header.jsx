import React from "react";
import Logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import "../css/Header.css"


function Header () {
    return (
        <header>
        <h1 className="sr-only">Argent Bank</h1>
        <Link to="/" className="nav-header">
            <img className="logo-bank" src={Logo} alt="Bank Logo" />
        </Link>
        </header>
    )
}

export default Header