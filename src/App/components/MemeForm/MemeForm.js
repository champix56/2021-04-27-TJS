import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../Button/Button';
import store, { initialState, REDUCER_ACTIONS } from '../../store/store';
//import {useParams, useHistory, useLocation} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

function MemeForm(props) {
  const [state, setstate] = useState(initialState.currentMeme);
  const [images, setimages] = useState(initialState.images);
  // console.log(useParams());
  // console.log(useHistory());
  // console.log(useLocation());
  console.log(props);
  useEffect(() => {
    setimages(store.getState().images);
    store.subscribe(() => {
      setimages(store.getState().images);
      setstate(store.getState().currentMeme);
    })
  
  }, []);
useEffect(() => {
  if(undefined!==props.match.params.id){
    store.dispatch({type:REDUCER_ACTIONS.SET_CURRENT_MEME_ID, value:Number(props.match.params.id)})
  }
}, [store.getState().images,store.getState().memes]);


  return <form data-testid="MemeForm" className={styles.MemeForm}>
    <h1>Meme Editor</h1>
    <label htmlFor="meme-name">Nom du meme</label><br />
    <input type="text" id="meme-name" placeholder="saisir nom" value={state.name} onChange={(evt) => {
      setstate({ ...state, name: evt.target.value });
    }} /><br />
    <label htmlFor="meme-image">Image</label><br />
    <select id="meme-image" value={state.imageId} onChange={(evt) => {
      setstate({ ...state, imageId: Number(evt.target.value) });
    }}  >
      <option value=""></option>

      {
        images.map((e, i) => <option key={'option-image-' + i} value={e.id}>{e.nom}</option>)
      }
      {/* <option value="img/5element.jpg">5eme element</option> */}
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
        <label><input type="checkbox" checked={state.text.underline} onChange={(evt) => {
          setstate({ ...state, text: { ...state.text, underline: evt.target.checked } });
        }} /> : underline</label> /
        <label>bold : <input type="checkbox" checked={state.text.bold} onChange={(evt) => {
          setstate({ ...state, text: { ...state.text, bold: evt.target.checked } });
        }} /></label>
      </div>
      <div style={{ margin: '20px 0' }}>
        <Button label="cancel" couleurDeFond="tomato" lorsqueJeClickSurLeBoutton={() => { 
          setstate(initialState.currentMeme);
          store.dispatch({type:REDUCER_ACTIONS.CLEAR_CURRENT});
         }} />
        <Button label="save" couleurDeFond="skyblue" lorsqueJeClickSurLeBoutton={() => {
          store.dispatch({type:REDUCER_ACTIONS.SET_CURRENT,value:state});
        }} />
      </div>
      {/* {JSON.stringify(state)} */}
    </div>
  </form>
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default withRouter(MemeForm);
