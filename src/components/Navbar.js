import React from "react";

import logo from "./../images/logo.png";

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="nav-logo" src={logo} alt="nav-logo"></img>
            <span className="title">my travel journal</span>
        </div>
    );
}
