import "./App.css";

// Imagem em assets
import night from "./assets/night.jpg";
import ConditionalRender from "./components/ConditionalRender";

// useState
import Data from "./components/Data";

// Renderização de lista
import ListRender from "./components/ListRender";
import ShowUserName from "./components/ShowUserName";

// Desestruturando de props
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "50px" }}>
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
      {/* Props */}
      <ShowUserName name="Mardoqueu" />
      {/* Desestruturando Props */}
      <CarDetails brand="Volkswagen" km={0} color="Branco" />
      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={100} color="Preto" />
      <CarDetails km={0} color="Vermelha" brand="BMW" />
    </div>
  );
}

export default App;
