import React from 'react'
import { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../App.css';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



function Login() {
    const [showA, setShowA] = useState(false);
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);

    const toggleShowA = () => setShowA(!showA);
    const login = function (e) {
        e.preventDefault();
        toggleShowA();
        document.getElementById("login-form").reset();
    };

    const handleReset = () => {
        formRef.current.reset();
        toggleShowA();
      };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();        
            setValidated(true);    
        } else {
        setValidated(false);
        handleReset();
        }

        // setValidated(true);
    };

    return (
        <div className="LogIn">
            <Toast show={showA} onClose={toggleShowA} className='toast' delay={3000} autohide>
                <Toast.Body>Great you have successfully logged In!</Toast.Body>
            </Toast>
            <div className='leftSide'>
                <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5 w-100">
                    <Form ref={formRef} id='login-form' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="UserName"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Password</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    aria-describedby="inputGroupPrepend"
                                    placeholder="Password"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please type password.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Button className="btn btn-primary-custom btn-sm w-100 mt-4" id="liveToastBtn" type="submit">Log In</Button>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default Login;