import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm';
import { initialState as CurrentMemeInitialState } from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import Navbar from './components/Navbar/Navbar';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startTime: new Date(), currentMeme: CurrentMemeInitialState };
    console.log(this.state);
  }
  // componentDidMount() {
  //   this.setState({ counter: 0 })
  // }
  render() {
    return <div className="App">
    <Navbar/>
      <div style={{ display: 'flex', height: '80vh' }}>
        <div style={{ height: '100%', flexGrow: 1 }}>
          <MemeViewer meme={this.state.currentMeme} />
        </div>
        <div>
          <MemeForm onSubmit={(valeurDuMeme) => {
            console.log(valeurDuMeme)
            this.setState({ currentMeme: valeurDuMeme })
          }} />
        </div>
      </div>


      {JSON.stringify(this.state)}
    </div>
  }
}

export default App;
