import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.module.scss';
import MemeViewer from '../MemeViewer/MemeViewer';
import { REST_ADR, REST_ENDPOINTS } from '../../config/config';
import FlowLayout from '../FlowLayout/FlowLayout';
// const meme = JSON.parse(' {"id": 0,"nom": "hyperGreen","text": {"x": 400,"y": 500,"value": "Hyper green !!!","color": "#00AF00","bold": false,"underline": true},"imageId":0}')
const Thumbnail = (props) => {
  const [memes, setmemes] = useState([]);
  useEffect(() => {
    fetch(`${REST_ADR}${REST_ENDPOINTS.MEMES}`)
      .then(f => f.json(), f => [])
      .then(arr => {
        setmemes(arr)
      })
  }, []);
  return (
    <div className={styles.Thumbnail} data-testid="Thumbnail">
      <FlowLayout>
        {memes.map((e, i) => <MemeViewer meme={{ ...e, image: props.images.find(ee => ee.id === e.imageId) }} key={'thumb-' + i} />)}
      </FlowLayout>
    </div>
  );
}

Thumbnail.propTypes = {
  images: PropTypes.array.isRequired,
};

Thumbnail.defaultProps = {};

export default Thumbnail;
