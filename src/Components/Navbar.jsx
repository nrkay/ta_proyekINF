import { useState } from "react";
import styles from '../StyleSheet/NavbarStyle.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {


    return (
        <div className="section-nav fixed-top border-0">
            <nav className="navbar nav-bg navbar-expand-lg px-4 border-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-light"><GiHamburgerMenu /></span>
                    </button>
                    <div className="main-nav collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link active text-light" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/article"} className="nav-link active text-light" >Article</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/community"} className="nav-link active text-light" >Community</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/discussion"} className="nav-link active text-light" >Discussion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );
}

export default Navbar;