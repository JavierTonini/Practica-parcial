import React, { useRef, useState } from "react";
import Buttons from "../buttons/Buttons";

const Match = ({ nameTeamA, nameTeamB }) => {
  const [match, setMatch] = useState(0);
  const [newMatch, setNewMatch] = useState(0);
  const borderRef = useRef(null);

  const pointsHandler = (event) => {
    setMatch(event.target.value);
  };
  const validationHandler = () => {
    if (match < 18 || match > 30) {
      alert("error");
      borderRef.current.focus();
      borderRef.current.style.borderColor = "red";
      borderRef.current.style.outline = "none";
    } else {
      borderRef.current.focus();
      borderRef.current.style.borderColor = "green";
      borderRef.current.style.outline = "none";
      setNewMatch(match);
    }
  };

  return (
    <div>
      <label>Ingresar valor de finalizacion del partido</label>
      <input type="number" ref={borderRef} onChange={pointsHandler} />
      <button onClick={validationHandler}>Cargar valor</button>
      <br />
      <br />
      <label>Partida a {newMatch} puntos</label>
      <Buttons match={match} nameTeamA={nameTeamA} nameTeamB={nameTeamB} />
    </div>
  );
};

export default Match;
