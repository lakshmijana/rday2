
import React, { Component } from "react";
import "./foot.css"

class Footerr extends Component{
    render(){
        return(
            <>

<footer className="footer">
            <div className="footer-content">
                <h3>Mehfil</h3>
                <p>Your place for music, culture, and community.</p>
                <ul className="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mehfil. All rights reserved.</p>
            </div>
        </footer>
            </>
        )
    }
}
export default Footerr;