import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (

  <svg className={styles.MemeViewer} data-testid="MemeViewer">
  {props.meme&&
    <text x={props.meme.x} y={props.meme.y}>{props.meme.text}</text>}
  </svg>
);

MemeViewer.propTypes = {};

MemeViewer.defaultProps = {};

export default MemeViewer;
