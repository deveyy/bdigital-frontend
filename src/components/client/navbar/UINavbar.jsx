import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/client/theme/Globalstyle';
import { darkTheme, lightTheme } from 'components/client/theme/Theme';
import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../theme/useDarkMode';
import Toggle from '../theme/Toggler';

function UINavbar() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand to="/">
              <img
                src="./logo.png"
                width="60"
                height="50"
                alt="bdigital logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/showreel">
                  Showreel
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </Navbar>
      </>
    </ThemeProvider>
  );
}
export default UINavbar;
