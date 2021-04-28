import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm';
import { initialState as CurrentMemeInitialState } from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
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
      <MemeViewer meme={this.state.currentMeme} />
      <MemeForm onSubmit={(valeurDuMeme) => {
        console.log(valeurDuMeme)
        this.setState({ currentMeme: valeurDuMeme })
      }} />
      {JSON.stringify(this.state)}
    </div>
  }
}

export default App;
