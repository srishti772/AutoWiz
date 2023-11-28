import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../App.css';
import Toast from 'react-bootstrap/Toast';

function SignUp() {
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const signin = function (e) {
        e.preventDefault();
        toggleShowA();
        document.getElementById("SignIn-form").reset();
    }
    return (
        <div className="SignIn">
            <Toast show={showA} onClose={toggleShowA} className='toast' delay={3000} autohide>
                <Toast.Body>Great you have successfully signed up!</Toast.Body>
            </Toast>
            <div className='leftSide'>
                <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5 w-100">
                    <form className="needs-validation" onSubmit={signin} id='SignIn-form'>
                        <div className="mb-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <label className="form-label text-dark mb-2" for="signin-email">Email address</label>
                            </div>
                            <input className="form-control form-control-sm form-control-light" type="email" id="signin-email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <label className="form-label text-dark mb-2" for="signin-userame">User Name</label>
                            </div>
                            <input className="form-control form-control-sm form-control-light" type="text" id="signin-username" placeholder="Enter your username" required />
                        </div>
                        <div className="mb-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <label className="form-label text-dark mb-0" for="signin-password">Password</label>
                            </div>
                            <div className="password-toggle">
                                <input className="form-control form-control-sm form-control-light" type="password" id="signin-password" placeholder="Enter password" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <label className="form-label text-dark mb-0" for="signin-confirm-password">Confirm Password</label>
                            </div>
                            <div className="password-toggle">
                                <input className="form-control form-control-sm form-control-light" type="password" id="signin-confirm-password" placeholder="Enter password" required />
                            </div>
                        </div>
                        <button className="btn btn-primary-custom btn-sm w-100" type="submit" id="liveToastBtn" >Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default SignUp;