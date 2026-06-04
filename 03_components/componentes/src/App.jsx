import './App.css'

import FirstComponent from './components/FirstComponent'
// Template expressions
import TemplateExpression from './components/TemplateExpression'
// Hierarquia de componentes
import MyComponent from './components/MyComponent'

function App() {

  return <div className="App">
    <h1>Fundamentos React</h1>
    <FirstComponent />
    <TemplateExpression />
    {/** Eu estou aqui também */}
    <MyComponent />
  </div>

}

export default App
