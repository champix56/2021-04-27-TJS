import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../Button/Button';
export const initialState = { name: '', text: { x: 0, y: 0, value: '', bold: false, underline: false, color: '#000000' }, image: '' }
function MemeForm(props) {
  const [state, setstate] = useState(initialState);
  return <form data-testid="MemeForm" className={styles.MemeForm}>
    <h1>Meme Editor</h1>
    <label htmlFor="meme-name">Nom du meme</label><br />
    <input type="text" id="meme-name" placeholder="saisir nom" value={state.name} onChange={(evt) => {
      setstate({ ...state, name: evt.target.value });
    }} /><br />
    <label htmlFor="meme-image">Image</label><br />
    <select id="meme-image" value={state.image} onChange={(evt) => {
      setstate({ ...state, image: evt.target.value });
    }}  >
      <option value="img/empty.jpg">empty</option>
      <option value="img/5element.jpg">5eme element</option>
    </select>
    <div className={styles.textEditor}>
      <label htmlFor="meme-text">Text</label><br />
      <input type="text" value={state.text.value} onChange={(evt) => {
        setstate({ ...state, text: { ...state.text, value: evt.target.value } });
      }} />
      <div className={styles.inlineContainer}>
        <label>
          <input type="number" value={state.text.x} onChange={(evt) => {
            setstate({ ...state, text: { ...state.text, x: evt.target.value } });
          }} /> : X
          </label>
         /
        <label>Y :
        <input type="number" value={state.text.y} onChange={(evt) => {
            setstate({ ...state, text: { ...state.text, y: evt.target.value } });
          }} />
        </label>
      </div>
      <label>Couleur du text</label><br />
      <input type="color" value={state.text.color} onChange={(evt) => {
        setstate({ ...state, text: { ...state.text, color: evt.target.value } });
      }} /><br />
      <div className={styles.inlineContainer}>
        <label><input type="checkbox" checked={state.text.underline} onChange={(evt)=>{
        setstate({ ...state, text: { ...state.text, underline: evt.target.checked } });
        }} /> : underline</label> / 
        <label>bold : <input type="checkbox"  checked={state.text.bold} onChange={(evt)=>{
        setstate({ ...state, text: { ...state.text, bold: evt.target.checked } });
        }} /></label>
      </div>
      <div style={{ margin: '20px 0' }}>
        <Button label="cancel" couleurDeFond="tomato" lorsqueJeClickSurLeBoutton={()=>{setstate(initialState)}} />
        <Button label="save" couleurDeFond="skyblue" lorsqueJeClickSurLeBoutton={()=>{props.onSubmit(state)}} />
      </div>
      {/* {JSON.stringify(state)} */}
    </div>
  </form>
}

MemeForm.propTypes = {onSubmit:PropTypes.func.isRequired,};

MemeForm.defaultProps = {};

export default MemeForm;
