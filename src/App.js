import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import red from "./red.png";
import blue from "./blue.png";
import christmas from "./christmas.json";
function App() {
  const [blueSave, setBlueSave] = useState(0);
  const [formState, setFormState] = useState("");
  const [redSave, setRedSave] = useState(0);
  const [teamTurn, setTeamTurn] = useState("redTeam");
  const [trueorfalse, settrueorfalse] = useState(true);
  const [algo, setAlgo] = useState(0);
  const handleChange = () => {
    settrueorfalse(false);
  };
  const handleAlgo = () => {
    if (teamTurn == "redTeam" && formState == christmas[algo].answer) {
      setRedSave(redSave + 1);
    } else if (teamTurn == "blueTeam" && formState == christmas[algo].answer) {
      setBlueSave(blueSave + 1);
    } else if (teamTurn == "redTeam" && formState == christmas[algo].answer1) {
      setRedSave(redSave + 1);
    } else if (teamTurn == "blueTeam" && formState == christmas[algo].answer1) {
      setBlueSave(blueSave + 1);
    } else if (teamTurn == "redTeam" && formState == christmas[algo].answer2) {
      setRedSave(redSave + 1);
    } else if (teamTurn == "blueTeam" && formState == christmas[algo].answer2) {
      setBlueSave(blueSave + 1);
    } else if (teamTurn == "redTeam" && formState == christmas[algo].answer3) {
      setRedSave(redSave + 1);
    } else if (teamTurn == "blueTeam" && formState == christmas[algo].answer3) {
      setBlueSave(blueSave + 1);
    }

    setAlgo(algo + 1);
    teamTurn == "redTeam" ? setTeamTurn("blueTeam") : setTeamTurn("redTeam");
    setFormState("");
  };
  const handleAnswer = (e) => {
    setFormState(e.target.value);
  };

  return (
    <div>
      {trueorfalse ? (
        <div className="presents">
          <button>Sound</button>
          <div onClick={handleChange} className="presents">
            <br />
            Click here to Conitnue
          </div>
        </div>
      ) : (
        <div>
          {" "}
          {algo !== 11 ? (
            <div>
              <br />
              <br />
              <div className="presents">
                {" "}
                {algo !== 0 ? (
                  <div>
                    <div>{algo == 10 ? "Last Question" : ""}</div>Previous
                    Answer:{christmas[algo - 1].answer}.{" "}
                  </div>
                ) : (
                  ""
                )}
                {christmas[algo].question}
              </div>{" "}
              <div>
                {" "}
                <textarea
                  className="quest-continue"
                  placeHolder="Wright Here"
                  value={formState}
                  onChange={handleAnswer}
                ></textarea>{" "}
                <button onClick={handleAlgo} className="quest-continue1">
                  Check?
                </button>
              </div>
              <div className="displayer">
                <div className="blue-box">
                  <img src={blue} />
                  <div className={`blue-answer-${teamTurn}`}>
                    {blueSave}
                  </div>{" "}
                </div>
                <div className="red-box">
                  <img src={red} />
                  <div className={`red-answer-${teamTurn}`}>{redSave}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="presents">
              <br />
              <br />
              Thanks for Playing, {redSave > blueSave ? "Red Team" : ""}{" "}
              {redSave < blueSave ? "Red Team" : ""}{" "}
              {redSave == blueSave ? "Both Teams" : ""} Wins!!
            </div>
          )}
        </div>
      )}{" "}
    </div>
  );
}

export default App;
