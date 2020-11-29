// import "./App.css";
import React from // , { useState }
"react";
// import red from "./red.png";
// import blue from "./blue.png";
// import christmas from "./christmas.json";
// import useSound from "use-sound";
// import boopSfx from "./santa.mp3";
// import soundUrl from "./nah.mp3";
function App() {
  // // const boopSfx = "santa.mp3";
  // const [blueSave, setBlueSave] = useState(0);
  // const [play] = useSound(boopSfx, { volume: 1 });

  // const [formState, setFormState] = useState("");
  // const [redSave, setRedSave] = useState(0);
  // const [teamTurn, setTeamTurn] = useState("redTeam");
  // const [trueorfalse, settrueorfalse] = useState(true);
  // const [algo, setAlgo] = useState(0);
  // const handleChange = () => {
  //   settrueorfalse(false);
  // };
  // const handleClick = () => {
  //   play();
  // };
  // const handleAlgo = () => {
  //   if (teamTurn === "redTeam" && formState === christmas[algo].answer) {
  //     setRedSave(redSave + 1);
  //   } else if (
  //     teamTurn === "blueTeam" &&
  //     formState === christmas[algo].answer
  //   ) {
  //     setBlueSave(blueSave + 1);
  //   } else if (
  //     teamTurn === "redTeam" &&
  //     formState === christmas[algo].answer1
  //   ) {
  //     setRedSave(redSave + 1);
  //   } else if (
  //     teamTurn === "blueTeam" &&
  //     formState === christmas[algo].answer1
  //   ) {
  //     setBlueSave(blueSave + 1);
  //   } else if (
  //     teamTurn === "redTeam" &&
  //     formState === christmas[algo].answer2
  //   ) {
  //     setRedSave(redSave + 1);
  //   } else if (
  //     teamTurn === "blueTeam" &&
  //     formState === christmas[algo].answer2
  //   ) {
  //     setBlueSave(blueSave + 1);
  //   } else if (
  //     teamTurn === "redTeam" &&
  //     formState === christmas[algo].answer3
  //   ) {
  //     setRedSave(redSave + 1);
  //   } else if (
  //     teamTurn === "blueTeam" &&
  //     formState === christmas[algo].answer3
  //   ) {
  //     setBlueSave(blueSave + 1);
  //   }

  //   setAlgo(algo + 1);
  //   teamTurn === "redTeam" ? setTeamTurn("blueTeam") : setTeamTurn("redTeam");
  //   setFormState("");
  // };
  // const handleAnswer = (e) => {
  //   setFormState(e.target.value);
  // };

  return (
    <div>
      {/* {trueorfalse ? (
        <div className="presents">
          <br />
          <button className="presents" onClick={handleClick}>
            Listen to Santas Message
          </button>
          <div
            // onClick={handleChange}
            // onMouseEnter={() => {
            //   setIsHovering(true);
            //   play1();
            // }}
            // onMouseLeave={() => {
            //   setIsHovering(false);
            //   stop1();
            // }}
            onClick={handleChange}
            className="presents"
          >
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
                    <div>{algo === 10 ? "Last Question" : ""}</div>Previous
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
                  placeHolder="Click on this text to wright"
                  value={formState}
                  onChange={handleAnswer}
                ></textarea>{" "}
                <button
                  // onMouseEnter={() => {
                  //   setIsHovering(true);
                  //   play1();
                  // }}
                  // onMouseLeave={() => {
                  //   setIsHovering(false);
                  //   stop();
                  // }}
                  onClick={handleAlgo}
                  className="quest-continue1"
                  // isHovering={isHovering}
                >
                  {" "}
                  Ready to Submit Answer, Click Here
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
              {redSave < blueSave ? "Blue Team" : ""}{" "}
              {redSave === blueSave ? "Both Teams" : ""} Wins!!
            </div>
          )}
        </div>
      )}{" "} */}
    </div>
  );
}

export default App;
