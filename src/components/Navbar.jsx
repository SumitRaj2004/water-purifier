import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useApp } from "../contexts/AppContext";

const Navbar = () => {
    const { isOpen, setIsOpen } = useApp();
    return (
        <nav className={`navbar ${isOpen ? "open" : ""}`} id="header-section">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <h1>
                        Repair<span>MyRO</span>
                    </h1>
                </a>
                <ul className="navbar-items">
                    <li onClick={() => setIsOpen(false)}>
                        <a href="#header-section">Home</a>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <a href="#who-section">Who we are</a>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <a href="#services-section">Services</a>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <a href="#reviews-section">Reviews</a>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <a href="#contact-section">Contact</a>
                    </li>
                </ul>
                <button className="nav-icons">
                    {isOpen ? <AiOutlineClose className="close-icon" onClick={() => setIsOpen(false)} /> : <GiHamburgerMenu className="open-icon" onClick={() => setIsOpen(true)} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
