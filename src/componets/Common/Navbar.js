import React from 'react';
import {Nav, Form, FormControl, Button, Navbar, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

export default function NavegationBar(){

    return(
        <Router>
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>App Amateur Soccer</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as= {Link} to='/'>Home</Nav.Link>
                <Nav.Link as= {Link} to='/tournaments'>Tournaments</Nav.Link>
                <Nav.Link as= {Link} to='/teams'>Teams</Nav.Link>
                <Nav.Link as= {Link} to='/players'>Players</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </div>
            <div>
                <Routes>
                    {/* <Route path='/inventario' element={<Inventario/>}/>
                    <Route path='/ventas' element={<Ventas/>}/> */}
                </Routes>
            </div>
        </Router>
    );
};