import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TournamentsPage from "../pages/Tournaments";
import DashBordBase from "../components/DashBoardBase"

const NavBarBase = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Soccer Amateur App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/tournaments">
                Tournaments
              </Nav.Link>
              <Nav.Link as={Link} to="/ventas">
                Teams
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
        <Route path="/" element={<DashBordBase />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBarBase;
