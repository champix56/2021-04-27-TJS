import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
const NavBar = () => (
  <Navbar bg="dark" variant="dark" data-testid="NavBar">
    <Navbar.Brand href="#home">
      Meme generator
    </Navbar.Brand>
    <Nav
      activeKey="/thumbnail"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/editor">Nouveau meme</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
