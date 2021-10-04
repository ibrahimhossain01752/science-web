import React from 'react';
import './Footer.css';
//Footer
const Footer = () => {
    return (
        <div className="footer">
            <h3>Meet us & we can help you</h3>
            <p>Email:<input type="text" placeholder="Your email" /></p>
            <p>Password:<input type="text" placeholder="Your Password" /></p>
            <button className="btn-regular">Submit</button>
        </div>
    );
};

export default Footer;