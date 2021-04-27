import './App.css';
import Button from './components/Button/Button';
const uneVar = 'Demat Breizh';
function App() {
  return (
    <div className="App">
      <Button label="Ok"
        lorsqueJeClickSurLeBoutton={(value) => {
          console.log('J\'ai ete clicke donc fais qqch stp');
        }}
        style={{ textDecoration: 'underline', fontStyle: 'italic' }} />
      <Button label="Cancel" couleurDeFond={'tomato'} taillePolice={24} lorsqueJeClickSurLeBoutton={(value) => { }} />
      <Button label="Don't know" couleurDeFond="skyblue" lorsqueJeClickSurLeBoutton={(value) => { }} />
    </div>
  );
}

export default App;
