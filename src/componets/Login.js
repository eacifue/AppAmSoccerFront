import React from 'react';
import { Card, Nav, Form, FormControl, Button, Navbar, Container, Row, Col, FormGroup, FormLabel, InputGroup  } from 'react-bootstrap';

export default function Login() {
    return (
        <div>
            <Container>
                <Row className='row justify-content-center'>
                    <Col className='col-xl-10 col-lg-12 col-md-9'>
                        <Card className='card o-hidden border-0 shadow-lg my-5'>
                            <Card.Body className="card-body p-0">
                                <Row>
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <Form className='user'>
                                            
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <FormGroup classNameName="form-group">
                                                    <FormControl className="custom-control custom-checkbox small">
                                                        <InputGroup.Checkbox className="custom-control-input" id="customCheck" />
                                                        <FormLabel className="custom-control-label" >Remember
                                                            Me</FormLabel>
                                                    </FormControl>
                                                </FormGroup>
                                                <a href="index.html" className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </a>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </Form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}