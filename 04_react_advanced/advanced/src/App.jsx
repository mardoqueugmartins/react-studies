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

// Renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Azul", km: 5000 },
  { id: 3, brand: "Renault", color: "Laranja", km: 12000 },
]

// Fragments
import Fragment from "./components/Fragment";

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
      {/* Renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        />
      ))}
      {/* Fragment */}
      <Fragment />
    </div>
  );
}

export default App;
