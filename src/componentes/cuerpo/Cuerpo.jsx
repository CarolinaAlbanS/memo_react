import React, { useEffect, useState } from "react";
import Gallery from "../gallery/Gallery";
import "../cuerpo/Cuerpo.css";

const Cuerpo = ({ cards }) => {
  return (
    <div className="cuerpo">
      <h1>JUEGO DEL MEMO</h1>
      <Gallery cards={cards}></Gallery>
    </div>
  );
};

export default Cuerpo;
