import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/client/theme/Globalstyle';
import { darkTheme, lightTheme } from 'components/client/theme/Theme';
import { useDarkMode } from '../theme/useDarkMode';
import Toggle from '../theme/Toggler';

function UINavbar() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;

  const Logo = styled.img`
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 4rem;
    height: 3rem;
    outline: none;
  `;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <Logo src="./logo.png" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Showreel">
                  Showreel
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </Container>
        </Navbar>
      </>
    </ThemeProvider>
  );
}
export default UINavbar;
