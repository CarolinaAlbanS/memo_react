import React, { useState } from "react";
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
  const [coleccion, setColeccion] = useState(colleccionOriginal);
  const [jugada, setJugada] = useState([]);

  const actualizar = (planetaClickado) => {
    let jugadaActual = [planetaClickado, ...jugada];

    planetaClickado.reverso = true;

    if (jugadaActual.length === 2) {
      const exito = jugadaExitosa(jugadaActual);
      if (exito) {
        const colecActualizada = actualizarPlanetasExito(
          jugadaActual,
          coleccion
        );
        setColeccion(colecActualizada);
      } else {
        setJugada([]);
        setTimeout(() => {
          const coleccionActualizada = ocultarPlanetas(coleccion);
          setColeccion(coleccionActualizada);
        }, 700);
      }
      return;
    }

    setJugada(jugadaActual);
  };

  const jugadaExitosa = (jugada) => {
    const planeta1 = jugada[0];
    const planeta2 = jugada[1];
    return planeta1.name === planeta2.name && planeta1.id !== planeta2.id;
  };

  const ocultarPlanetas = (coleccion) => {
    return coleccion.map((p) => {
      return { ...p, reverso: false };
    });
  };

  const actualizarPlanetasExito = (jugada, coleccion) => {
    const planeta1 = jugada[0];
    const planeta2 = jugada[1];
    return coleccion.map((p) => {
      if (p.id === planeta1.id || p.id === planeta2.id) {
        return { ...p, resuelto: true };
      }
      return p;
    });
  };

  return (
    <div className="car">
      {coleccion.map((planeta, index) => (
        <div className="planeta" key={index}>
          <Planeta infoPlaneta={planeta} actualizar={actualizar}></Planeta>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
