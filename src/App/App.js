import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import FlexGrowLayout from './components/FlexGrowLayout/FlexGrowLayout';
import MemeForm from './components/MemeForm/MemeForm';
import { initialState as CurrentMemeInitialState } from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import {REST_ADR,REST_ENDPOINTS} from './config/config';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startTime: new Date(), currentMeme: CurrentMemeInitialState, images:[]};
    console.log(this.state);
  }
  componentDidMount() {
    fetch(`${REST_ADR}${REST_ENDPOINTS.IMAGES}`)
      .then(f=>f.json())
      .then(o=>{
        this.setState({images:o})
        return o;
      });
  }
  render() {
    return <div className="App">
      <FlexGrowLayout >
        <MemeViewer meme={this.state.currentMeme} />
        <MemeForm images={this.state.images} onSubmit={(valeurDuMeme) => {console.log(valeurDuMeme);this.setState({ currentMeme: valeurDuMeme })}} />
      </FlexGrowLayout>

      {JSON.stringify(this.state)}
    </div>
  }
}

export default App;
