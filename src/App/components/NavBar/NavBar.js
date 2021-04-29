import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Navbar } from 'react-bootstrap';
const NavBar = () => (
  <Navbar bg="dark" variant="dark" data-testid="NavBar">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
