import React from 'react'
import "./style.css"


const Navbar = () => {
    return (
        <>

            {/* navbar */}
            <nav className="main-nav">
                <img src={"/img/logo.png"} alt="" className="logo" />
                <ul className="main-menu">
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Windows</a></li>
                    <li><a href="#">Surface</a></li>
                    <li><a href="#">Xbox</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Supports</a></li>
                </ul>
                <ul class="right-menu">
                    <li><a href="#"><i className="fas fa-search"></i></a></li>
                    <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;