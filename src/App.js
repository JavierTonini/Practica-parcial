import { useState } from "react";
import Match from "./Components/match/Match";

const App = () => {
  const [showMatch, setShowMatch] = useState(false);
  const [nameTeamA, setNameTeamA] = useState("");
  const [nameTeamB, setNameTeamB] = useState("");

  const changeNameHandlerA = (event) => {
    setNameTeamA(event.target.value);
  };

  const changeNameHandlerB = (event) => {
    setNameTeamB(event.target.value);
  };

  const showMatchHandler = () => {
    if (nameTeamA !== "" && nameTeamB !== "") {
      setShowMatch(!showMatch);
    } else {
      alert("Complete los campos");
    }
  };
  return (
    <div className="App">
      {showMatch === false && (
        <div>
          <label>Ingrese nombre equipo 1</label>
          <input type="text" onChange={changeNameHandlerA} />
          <br />
          <label>Ingrese nombre equipo 2 </label>
          <input type="text" onChange={changeNameHandlerB} />
          <br />
          <button type="button" onClick={showMatchHandler}>
            Iniciar Partida
          </button>
        </div>
      )}
      {showMatch === true && (
        <Match nameTeamA={nameTeamA} nameTeamB={nameTeamB} />
      )}
      {showMatch === true && (
        <button type="button" onClick={showMatchHandler}>
          Terminar partida
        </button>
      )}
    </div>
  );
};

export default App;
