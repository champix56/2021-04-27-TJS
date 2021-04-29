import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  LinkContainer
} from 'react-router-bootstrap'

const NavBar = () => (
  <Navbar bg="dark" variant="dark" data-testid="NavBar">
    <LinkContainer to="/home">
      <Navbar.Brand>Meme generator</Navbar.Brand>
    </LinkContainer>
    <Nav
      activeKey="/thumbnail"

    >
      <Nav.Item>
        <LinkContainer to="/thumbnail">
          <Nav.Link >Thumbnail</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/editor">
          <Nav.Link to="/editor">Nouveau meme</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
