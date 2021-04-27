import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: -1, lastClickedTime: null };
    console.log(this.state);
  }
  componentDidMount() {
    this.setState({ counter: 0 })
  }
  render() {
    return <div className="App">
      <div style={{ padding: '20px' }}>les bouttons on ete clickés : {this.state.counter} fois<br />
        {this.state.lastClickedTime && 'dernier click ' + this.state.lastClickedTime.toISOString()}
        <MemeForm />
        </div>
      
      <Button label="add" lorsqueJeClickSurLeBoutton={() => {
        this.setState({ counter: this.state.counter + 1, lastClickedTime: new Date() });
        console.log(this.state);
      }} />
      <Button label="init" couleurDeFond="red" lorsqueJeClickSurLeBoutton={() => {

      }} />
    </div>
  }
}

export default App;
