// import React from 'react';
import React, { useState } from 'react';
import ImageSlider from "./ImageSlider";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../css/style.css";


const Signup = () => {
    const slides = [
        { image: "https://picsum.photos/250/400?grayscale", title: 'img1' },
        { image: 'https://picsum.photos/seed/img3/250/400?grayscale', title: 'img2' },
        { image: 'https://picsum.photos/seed/img1/250/400?grayscale', title: 'img3' }

    ];

    const containerStyles = {
        width: "100%",
        height: "100%",
        margin: "auto 80%",
    };
    return (
        <div class="round">
            <section className='signup'>
                <div className="container">
                    <div className="singup-content">

                        <div className="signup-img">
                            <div className='img-container'>
                                <ImageSlider slides={slides} />
                            </div>
                        </div>

                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form action="/login" className="register-form" id='register-form' method='post'>
    <div className="form-group">
        <label htmlFor="name">
            <i className="zmdi zmdi-account material-icons-name"></i>
        </label>
        <input type="text" name='name' autoComplete='off' id='name' placeholder='Your Name' />
    </div>

    <div className="form-group">
        <label htmlFor="age">
            <i className="zmdi zmdi-calendar material-icons-name"></i>
        </label>
        <input type="number" name='age' autoComplete='off' id='age' placeholder='Your Age' />
    </div>

    <div className="form-group">
        <label htmlFor="country">
            <i className="zmdi zmdi-globe material-icons-name"></i>
        </label>
        <input type="text" name='country' autoComplete='off' id='country' placeholder='Your Country' />
    </div>

    <div className="form-group">
        <label htmlFor="email">
            <i className="zmdi zmdi-email material-icons-name"></i>
        </label>
        <input type="email" name='email' autoComplete='off' id='email' placeholder='Your Email' />
    </div>

    <div className="form-group">
        <label htmlFor="password">
            <i className="zmdi zmdi-lock material-icons-name"></i>
        </label>
        <input type="password" name='password' autoComplete='off' id='password' placeholder='Password' />
    </div>



    <div className="form-group">
        <label htmlFor="cPass">
            <i className="zmdi zmdi-lock material-icons-name"></i>
        </label>
        <input type="password" name='cPass' autoComplete='off' id='cPass' placeholder='Confirm Password' />
    </div>

    <div className="form-group">
        <label htmlFor="userType">
            User Type:
        </label>
        <select name="userType" id="userType">
            <option value="faculty">Faculty</option>
            <option value="researcher">Researcher</option>
            <option value="academician">Academician</option>
        </select>
    </div>

    <div>
        <button type="submit" className="form-btn" name="signup-button">SIGN UP</button>
    </div>

    <div>
        <Link to="/" className="form-btn" method="get">LOGIN ?</Link>
    </div>
</form>

                            {/* <div className="other-btn">
                                <a href=""><i class="zmdi zmdi-google material-icons-name"></i></a>
                                <a href=""><i class="zmdi zmdi-facebook material-icons-name"></i></a>
                                <a href=""><i class="zmdi zmdi-linkedin material-icons-name"></i></a>

                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;