import React, { useState } from "react";

const Buttons = ({ match, nameTeamA, nameTeamB }) => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const validationwinner = () => {
    if (teamA + 1 === parseInt(match, 10)) {
      alert(`Ganador equipo ${nameTeamA}`);
      setTeamA(0);
      setTeamB(0);
    }
    if (teamB + 1 === parseInt(match, 10)) {
      alert(`Ganador equipo ${nameTeamB}`);
      setTeamA(0);
      setTeamB(0);
    }
  };
  const decreaseScoreTeamA = () => {
    if (teamA === 0) {
      alert("Error");
    } else {
      setTeamA(teamA - 1);
    }
  };
  const incrementScoreTeamA = () => {
    setTeamA(teamA + 1);
    validationwinner();
  };

  const decreaseScoreTeamB = () => {
    if (teamB === 0) {
      alert("Error");
    } else {
      setTeamB(teamB - 1);
    }
  };

  const incrementScoreTeamB = () => {
    setTeamB(teamB + 1);
    validationwinner();
  };

  return (
    <div>
      <br />
      <label>
        Puntaje equipo {nameTeamA}: {teamA}
      </label>
      <button onClick={decreaseScoreTeamA}>-</button>
      <button onClick={incrementScoreTeamA}>+</button>
      <br />
      <label>
        Puntaje equipo {nameTeamB}: {teamB}
      </label>
      <button onClick={decreaseScoreTeamB}>-</button>
      <button onClick={incrementScoreTeamB}>+</button>
    </div>
  );
};

export default Buttons;
