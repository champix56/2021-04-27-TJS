import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: -1, lastClickedTime: null, formContent:null };
    console.log(this.state);
  }
  componentDidMount() {
    this.setState({ counter: 0 })
  }
  render() {
    return <div className="App">
      <div style={{ padding: '20px' }}>
        <MemeForm onSubmit={(content)=>{
          this.setState({formContent:content})
        }} />
        </div>
      <MemeViewer meme={this.state.formContent}></MemeViewer>
      {JSON.stringify(this.state)}
    </div>
  }
}

export default App;
