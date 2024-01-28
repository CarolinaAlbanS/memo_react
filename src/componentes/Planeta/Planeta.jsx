import React from "react";

const Planeta = ({ infoPlaneta, actualizar }) => {
  const actualizaOnClick = () => {
    actualizar(infoPlaneta);
  };

  if (infoPlaneta.resuelto) {
    return (
      <img
        className="planeta"
        src="http://localhost:3000/fotos/tick.svg"
        alt="imagenes"
      />
    );
  }

  if (infoPlaneta.reverso) {
    return <img className="planeta" src={infoPlaneta.img} alt="imagenes" />;
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
