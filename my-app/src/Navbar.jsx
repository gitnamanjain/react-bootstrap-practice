import React from "react";
import logo from "./camera.png"
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="pos-f-t">
                <nav className="navbar navbar-dark bg-dark widthnavbar">
                    <img src={logo} style={{ width: "30px" }} />
                    <a class="navbar-brand" href="#">Albums</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
