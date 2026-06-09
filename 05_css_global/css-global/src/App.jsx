import './App.css'

// 2 - CSS de Componente
import MyComponents from './components/MyComponents'

// 4 - CSS Inline Dinâmico
const n = 15;

// 5 - Classe Dinâmica
const redTittle = true;

// 6 - CSS Modules
import Title from './components/title';


function App() {
  return (
    <div>
      {/* 1 - CSS global */}
      <h1>CSS no React</h1>
      {/* 2 - CSS de Componente */}
      <MyComponents />
      <p>Pegou o CSS do componente.</p>
      {/* 3 - Inline Style */}
      <p style={{ color: "gray", padding: "20px 20px 20px 0" }}>
        Este elemento tem estilos inline.
      </p>
      {/* 4 - CSS Inline Style Dinâmico */}
      <h2 style={n > 10 ? { color: "green" } : { color: "red" }}>
        CSS Inline Dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "green" } : { color: "red" }}>
        CSS Inline Dinâmico
      </h2>
      {/* 5 - Classe Dinâmica */}
      <h2 className={redTittle? "red-title" : "title"}>Esse título vai ter uma classe dinâmica</h2>
      {/* 6 - CSS Module */}
      <Title />
    </div>
  );
}

export default App
