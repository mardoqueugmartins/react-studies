import './App.css'

// Imagem em assets
import night from './assets/night.jpg'

function App() {
  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <img src="/img.jpg" alt="Street" />
      {/* Imagem em assets */}
      <img src={night} alt="Night" />
    </div>
  );
}

export default App
