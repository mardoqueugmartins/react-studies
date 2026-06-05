import './App.css'

// Imagem em assets
import night from './assets/night.jpg'

// useState
import Data from './components/Data';

function App() {
  return (
    <div className='App' style={{paddingBottom: "50px"}}>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <img src="/img.jpg" alt="Street" />
      {/* Imagem em assets */}
      <img src={night} alt="Night" />
      {/* useState */}
      <Data />
    </div>
  );
}

export default App
