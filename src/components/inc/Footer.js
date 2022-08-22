import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
return(
    <section className="bg-dark text-white py-5">
    <div className="container">
    <div className="row">
                <div className="col-md-4">
                <h6>Company Info</h6>
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                </p>
                </div>

                <div className="col-md-4">
                <h6>Quick Links</h6>
                <hr/>
                <div><Link to="/" className="text-decoration-none text-white">Home</Link></div>
                <div><Link to="/about" className="text-decoration-none text-white">About US</Link></div>
                <div><Link to="/contact" className="text-decoration-none text-white">Contact Us</Link></div>
                </div>
    </div> 
    </div>
    </section>  
    )
}

export default Footer;