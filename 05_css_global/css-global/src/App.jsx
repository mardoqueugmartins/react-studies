import './App.css'

// 2 - CSS de Componente
import MyComponents from './components/MyComponents'

function App() {
  return (
    <div>
      {/* 1 - CSS global */}
      <h1>CSS no React</h1>
      {/* 2 - CSS de Componente */}
      <MyComponents />
      <p>Pegou o CSS do componente.</p>
    </div>
  )
}

export default App
