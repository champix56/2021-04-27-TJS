import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = (props) => {
  const [formContent, setformContent] = useState({
    name: 'tjs', text: '', x: 0, y: 0, imgId: -1
  });

  return (
    <form className={styles.MemeForm} data-testid="MemeForm" onSubmit={(evt) => {
      evt.preventDefault();
      props.onSubmit(formContent);
    }}>
      <label htmlFor="name">Nom du meme</label><br />
      <input id="name" type="text" placeholder="nom de la formation" value={formContent.name} onChange={(evt) => {
        setformContent({ ...formContent, name: evt.target.value });
      }} /><br />
      <label>Image du meme</label><br />
      <select value={formContent.imgId} onChange={(evt) => {
        setformContent({ ...formContent, imgId: evt.target.value });
      }} >
        <option value="img/noimg.jpg">default</option>
      </select><br />
      <div>
        <h2>Contenu</h2>
        <label>Texte</label><br />
        <input type="text" value={formContent.text} onChange={(evt) => {
          setformContent({ ...formContent, text: evt.target.value });
        }} ></input><br />
        <label>X : </label>
        <input type="number" value={formContent.x} onChange={(evt) => {
          setformContent({ ...formContent, x: Number(evt.target.value) });
        }} ></input>, <label>y : </label>
        <input type="number" value={formContent.y} onChange={(evt) => {
          setformContent({ ...formContent, y: Number(evt.target.value) });
        }} ></input>
      </div>
      <input type="submit" value="Soumettre" /><br />
      <div style={{ color: formContent.color }}>voici le contenu actuelement saisie :{JSON.stringify(formContent)}</div>
    </form>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
