import { useRef, useState} from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/main.css";




function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    

    return (        
        <header >
            <h3> <a href="#Home"> ‹VM /› </a> </h3>
            <nav ref={navRef} >
                <a href="#Home" onClick={showNavbar}>Home</a>
                <a href="#sobre" onClick={showNavbar}>Sobre</a>
                <a href="#tecnologia" onClick={showNavbar}>Tecnologias</a>
                <a href="#Contato" onClick={showNavbar}>Contato</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes /> 
                </button>
            </nav>
                <button className="nav-btn nav" onClick={showNavbar}>
                    <FaBars /> 
                </button>
        </header>
        
    );
}

export default Navbar;