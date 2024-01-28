import logo from "./logo.svg";
import "./App.css";
import Cuerpo from "./componentes/cuerpo/Cuerpo";
import Gallery from "./componentes/gallery/Gallery";

const cardArray = [
  {
    id: 1,
    name: "earth",
    img: "http://localhost:3000/fotos/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "http://localhost:3000/fotos/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "http://localhost:3000/fotos/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "http://localhost:3000/fotos/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "http://localhost:3000/fotos/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "http://localhost:3000/fotos/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "http://localhost:3000/fotos/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "http://localhost:3000/fotos/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "http://localhost:3000/fotos/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "http://localhost:3000/fotos/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "http://localhost:3000/fotos/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "http://localhost:3000/fotos/uranus.svg",
  },
];

function App() {
  return (
    <>
      <Cuerpo cards={cardArray}></Cuerpo>
    </>
  );
}

export default App;
