import React, { useEffect, useState } from "react";
import "../gallery/Gallery.css";
import Planeta from "../Planeta/Planeta";

const Gallery = ({ cards }) => {
  const colleccionOriginal = cards.map((card) => {
    return {
      id: card.id,
      name: card.name,
      img: card.img,
      reverso: false,
      resuelto: false,
    };
  });
  const [colleccion, setColleccion] = useState(colleccionOriginal);
  const [jugada, setJugada] = useState([]);

  const cartaArriba = (info) => {
    const jugada2 = [{ name: info.name, id: info.id }, ...jugada];
    //jugada.push({ name: info.name, id: info.id });
    setJugada(jugada2);
    console.log(jugada2);
    console.log(jugada);

    if (jugada[0].name === jugada[1]?.name && jugada[0].id != jugada[1]?.id) {
      // jugada correcta
      info.resuelto = !info.resuelto;
    } else if (jugada.length === 2) {
      // reseteamos
      info.reverso = !info.reverso;
    }

    info.reverso = true;
    actualizarPlaneta(info);

    console.log(jugada);
  };

  const actualizarPlaneta = (planeta) => {
    const index = colleccion.findIndex((p) => p.id === planeta.id);
    console.log(index);
    colleccion[index] = planeta;
    console.log(colleccion);
    setColleccion(colleccion);
  };

  return (
    <div className="car">
      {colleccion.map((planeta, index) => (
        <div className="planeta" key={index}>
          <Planeta info={planeta} actualizar={cartaArriba}></Planeta>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
