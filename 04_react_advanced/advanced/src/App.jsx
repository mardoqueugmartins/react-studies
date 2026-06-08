import './App.css'

// Imagem em assets
import night from './assets/night.jpg'
import ConditionalRender from './components/ConditionalRender';

// useState
import Data from './components/Data';

// Renderização de lista
import ListRender from './components/ListRender';

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
      {/* RenderList */}
      <ListRender />
      {/* ConditionalRender */}
      <ConditionalRender />
    </div>
  );
}

export default App
