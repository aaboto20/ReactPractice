import React from "react"
import airbnb_logo from "./airbnb_logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb_logo} alt="Logo" className="nav--logo" height="60px"/>
        </nav>
    )
}