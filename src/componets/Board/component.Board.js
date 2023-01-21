import React from "react";
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, InputGroup, Navbar, Nav } from 'react-bootstrap';

export default function Board() {



return (
    <Container fluid="md">
        <Router>
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>App Amateur Soccer</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as= {Link} to='/'>Home</Nav.Link>
                <Nav.Link as= {Link} to='/teams'>Teams</Nav.Link>
                <Nav.Link as= {Link} to='/players'>Players</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </div>
            <div>
                <Routes>
                    {/* <Route path='/teams' element={}/>
                    <Route path='/players' element={}/> */}
                </Routes>
            </div>
        </Router>
    </Container>        
);

};