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
    console.log(info);
    let jugadaActual = [{ name: info.name, id: info.id }, ...jugada];
    const nuevaColeccion = colleccion.map((planeta) => planeta);

    if (jugadaActual.length == 2) {
      if (
        jugadaActual[0].name === jugadaActual[1]?.name &&
        jugadaActual[0].id != jugadaActual[1]?.id
      ) {
        // bien
        nuevaColeccion.forEach((planeta) => {
          if (
            planeta.id === jugadaActual[0].id ||
            planeta.id === jugadaActual[1].id
          ) {
            planeta.resuelto = true;
          }
        });
      } else {
        // mal
        // dar la vuelta
      }
      jugadaActual = [];
    } else {
      nuevaColeccion.forEach((planeta) =>
        planeta.id == jugadaActual[0].id || planeta.id == jugadaActual[1]?.id
          ? (planeta.reverso = true)
          : false
      );
    }

    setJugada(jugadaActual);
    actualizarPlaneta(nuevaColeccion);
  };

  const actualizarPlaneta = (nuevaColeccion) => {
    setColleccion(nuevaColeccion);
    console.log(jugada);
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
