import React from "react";
import { useState } from "react";

const Planeta = ({ info, actualizar }) => {
  // const [resuelto, setResuelto] = useState(false);
  // const [reverso, setReverso] = useState();

  const actualizaOnClick = () => {
    actualizar(info);
  };

  if (info.resuelto) {
    return (
      <img
        className="planeta"
        src="http://localhost:3000/fotos/tick.svg"
        alt="imagenes"
      />
    );
  }
  if (info.reverso) {
    return (
      <img
        className="planeta"
        onClick={actualizaOnClick}
        src={info.img}
        alt="imagenes"
      />
    );
  }

  return (
    <img
      onClick={actualizaOnClick}
      src="http://localhost:3000/fotos/universe.svg"
      alt="imagen"
    />
  );
};

export default Planeta;
// necesito array para gusrdarme las cartas que han sido clicadas, necesito tambien añadir un identificador al elemento html
// tengo que decir que si el id son iguales la jugada es nula
// si la longitud es 2 y son distintos que me lo resetee
// si los dos son iguales la imagen pasar a ser la de check
// si la condicion es === 2 && con un tambien son diferentes hay que resetearlas
