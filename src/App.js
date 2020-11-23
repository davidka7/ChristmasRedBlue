import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import red from "./red.png";
import blue from "./blue.png";
import christmas from "./christmas.json";
function App() {
  const [blueSave, setBlueSave] = useState("0");
  const [formState, setFormState] = useState("");
  const [redSave, setRedSave] = useState("0");
  const [teamTurn, setTeamTurn] = useState("redTeam");
  const [trueorfalse, settrueorfalse] = useState(true);
  const [algo, setAlgo] = useState(0);
  const handleChange = () => {
    settrueorfalse(false);
  };
  const handleAlgo = () => {
    teamTurn == "redTeam" && e.target.value == christmas[algo].answer
      ? setRedSave(redSave + 1)
      : "";
    teamTurn == "blueTeam" && e.target.value == christmas[algo].answer
      ? setRedSave(redSave + 1)
      : "";
    setAlgo(algo + 1);
    teamTurn == "redTeam" ? setTeamTurn("blueTeam") : setTeamTurn("redTeam");
  };
  const handleAnswer = (e) => {
    setFormState(e.target.value);
  };

  return (
    <div>
      {trueorfalse ? (
        <div onClick={handleChange} className="presents">
          Hello Meet Santa, this year Santa ate to much cookies <br />
          and was put on a timeout. So he coudn't prepare to much <br />
          presents for you. So you in groups of two will compete <br />
          to see who knows santa better.! If you can guess more <br />
          right then you win the presents, AND IF NOT you will be <br />
          put on the naughty list next year!. Each team that guesses <br />
          a right answer will get a point on their christmas box. <br />
          Team with most points at end of questionere wins!!!! <br />
          The color will define the teams turn. Click on this text to start.{" "}
          <br />
          HOHO
        </div>
      ) : (
        <div>
          <div className={teamTurn}>{christmas[algo].question}</div>{" "}
          <div>
            {" "}
            <textarea
              className="quest-continue"
              placeHolder="Wright Here"
              value={formState}
              onChange={handleAnswer}
            ></textarea>{" "}
            <button Onclick={handleAlgo} className="quest-continue">
              Check?
            </button>
          </div>
          <div className="displayer">
            <div></div>
            <div className="blue-box">
              <img src={blue} />
              <div className="blue-answer">{blueSave}</div>{" "}
            </div>
            <div className="red-box">
              <img src={red} />
              <div className="red-answer">{redSave}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
