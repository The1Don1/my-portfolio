import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import { motion } from "framer-motion";
import "react-toggle/style.css";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar({switchTheme}) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (

    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/my-portfolio/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" defaultActiveKey="#home">
        <Nav.Item>
              <Nav.Link as={Link} to="/my-portfolio/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px", marginRight: "6px", color: "var(--color-purple-3)" }} /> 
                <span style={{ color: "var(--color-purple-3)" }}>Home</span>
              </Nav.Link>
            </Nav.Item>

        <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px", color: "var(--color-purple-3)" }} />
                <span style={{ color: "var(--color-purple-3)" }}>About</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", color: "var(--color-purple-3)" }}
                />{" "}
                  <span style={{ color: "var(--color-purple-3)" }}>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px", color: "var(--color-purple-3)" }} />
                <span style={{ color: "var(--color-purple-3)" }}>Resume</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item  className = "Dark-Toggle">
        <Toggle
            onChange={switchTheme}
            aria-label="Dark mode toggle"
        />
        </Nav.Item>
        </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
