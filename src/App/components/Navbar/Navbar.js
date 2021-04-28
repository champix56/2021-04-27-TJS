import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <nav className="navbar navbar-inverse" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#"><span style={{color:'tomato'}}>Meme</span><span style={{color:'blue'}}>.</span><span style={{fontStyle:'italic' ,color:'grey'}}>js</span></a>
      </div>
    
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Liste</a></li>
          <li><a href="#">Creation</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
