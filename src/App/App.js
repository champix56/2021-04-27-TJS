import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import FlexGrowLayout from './components/FlexGrowLayout/FlexGrowLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import NavBar from './components/NavBar/NavBar';
import Thumbnail from './components/Thumbnail/Thumbnail';
import {REST_ADR,REST_ENDPOINTS} from './config/config';
import store, {initialState as storeInitialState} from './store/store';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      startTime: new Date(), 
      currentMeme: storeInitialState.currentMeme, 
      images:storeInitialState.images
      };
    console.log(this.state);
  }
  componentDidMount() {
    this.setState({
      currentMeme:store.getState().currentMeme,
      images:store.getState().images
    });
      store.subscribe(()=>{
        this.setState({
          currentMeme:store.getState().currentMeme,
          images:store.getState().images
        });
      })
  }
  render() {
    return <div className="App">
    <NavBar/>
    <Thumbnail images={this.state.images}/>
      <FlexGrowLayout >
        <MemeViewer meme={{...this.state.currentMeme, image:this.state.images.find(elem=>elem.id===this.state.currentMeme.imageId)}} />
        <MemeForm />
      </FlexGrowLayout>

      {JSON.stringify(this.state)}
    </div>
  }
}

export default App;
