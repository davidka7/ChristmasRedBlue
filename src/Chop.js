import React, { useState } from "react";
import Modals from "./Modals";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Chop.css";
// import darkImage from "./dark1.jpg";
import data1 from "./1.json";
import data2 from "./2.json";
import data3 from "./3.json";
import data4 from "./4.json";
import data5 from "./5.json";

function Chop() {
  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team3, setTeam3] = useState("");
  const [team1color, setTeam1color] = useState("light");
  const [team2color, setTeam2color] = useState("light");
  const [team3color, setTeam3color] = useState("light");
  const handleTrue = () => {
    setTrueOrFalse(true);
  };
  const teams1 = (e) => {
    setTeam1(e.target.value);
  };
  const teams2 = (e) => {
    setTeam2(e.target.value);
  };
  const teams3 = (e) => {
    setTeam3(e.target.value);
  };
  const teamcolors1 = (e) => {
    setTeam1color(e.target.value);
  };
  const teamcolors2 = (e) => {
    setTeam2color(e.target.value);
  };
  const teamcolors3 = (e) => {
    setTeam3color(e.target.value);
  };
  return (
    <div className="full-size">
      {trueOrFalse ? (
        <div>
          <div>
            <br />
            <CardDeck className="paddings">
              {" "}
              <Card bg={team1color} className={`life${team1color}`}>
                <Card.Title className="second-Click "> Team {team1}</Card.Title>
                <Card.Title className="second-Click"> Points: </Card.Title>
              </Card>
              <Card bg={team2color} classname={`life${team2color}`}>
                <Card.Title className="second-Click">Team {team2}</Card.Title>
                <Card.Title className="second-Click"> Points: </Card.Title>
              </Card>
              <Card bg={team3color} className={`life${team3color}`}>
                <Card.Title className="second-Click">Team {team3}</Card.Title>
                <Card.Title className="second-Click"> Points: </Card.Title>
              </Card>
            </CardDeck>
            <CardDeck className="paddings">
              {" "}
              <Card bg="transparent" className="special-font">
                <div className="special-font1"> Team Turn</div>
              </Card>
            </CardDeck>
            <br />
            <br />
            <CardDeck className="paddings">
              {data1.map((data) => {
                return <Modals key data={data} />;
              })}
            </CardDeck>
            <br /> <br />
            <CardDeck className="paddings">
              {data2.map((data) => {
                return <Modals key data={data} />;
              })}
            </CardDeck>
            <br /> <br />
            <CardDeck className="paddings">
              {data3.map((data) => {
                return <Modals key data={data} />;
              })}
            </CardDeck>
            <br /> <br />
            <CardDeck className="paddings">
              {data4.map((data) => {
                return <Modals key data={data} />;
              })}
            </CardDeck>
            <br /> <br />
            <CardDeck className="paddings">
              {data5.map((data) => {
                return <Modals key data={data} />;
              })}
            </CardDeck>
          </div>
        </div>
      ) : (
        <div className="first-Click">
          Name Your Teams
          <CardDeck className="paddings">
            <Card className="special-corner" bg={team1color}>
              {" "}
              <Card.Body className="paddings1">
                <div>
                  <label className="second-Click">Teams Name:</label>
                  <input onChange={teams1} className="maxer"></input>
                </div>
                <div>
                  <label className="second-Click">
                    Teams Color:{" "}
                    <Button
                      onClick={teamcolors1}
                      value="secondary"
                      variant="secondary"
                    >
                      {" "}
                    </Button>
                    <Button
                      value="danger"
                      onClick={teamcolors1}
                      variant="danger"
                    >
                      {" "}
                    </Button>
                    <Button
                      value="success"
                      onClick={teamcolors1}
                      variant="success"
                    >
                      {" "}
                    </Button>
                    <Button value="info" onClick={teamcolors1} variant="info">
                      {" "}
                    </Button>
                  </label>
                </div>
              </Card.Body>
            </Card>
            <Card className="special-corner" bg={team2color}>
              {" "}
              <Card.Body className="paddings1">
                <div>
                  <label className="second-Click">Teams Name:</label>
                  <input onChange={teams2} className="maxer"></input>
                </div>
                <div>
                  <label className="second-Click">
                    Teams Color:
                    <Button
                      value="secondary"
                      onClick={teamcolors2}
                      variant="secondary"
                    >
                      {" "}
                    </Button>
                    <Button
                      value="danger"
                      onClick={teamcolors2}
                      variant="danger"
                    >
                      {" "}
                    </Button>
                    <Button
                      value="success"
                      onClick={teamcolors2}
                      variant="success"
                    >
                      {" "}
                    </Button>
                    <Button value="info" onClick={teamcolors2} variant="info">
                      {" "}
                    </Button>
                  </label>
                </div>
              </Card.Body>
            </Card>
            <Card className="special-corner" bg={team3color}>
              {" "}
              <Card.Body className="paddings1">
                <div>
                  <label className="second-Click">Teams Name:</label>
                  <input onChange={teams3} className="maxer"></input>
                </div>
                <div>
                  <label className="second-Click">
                    Teams Color:
                    <Button
                      onClick={teamcolors3}
                      value="secondary"
                      variant="secondary"
                    >
                      {" "}
                    </Button>
                    <Button
                      value="danger"
                      onClick={teamcolors3}
                      variant="danger"
                    >
                      {" "}
                    </Button>
                    <Button
                      value="success"
                      onClick={teamcolors3}
                      variant="success"
                    >
                      {" "}
                    </Button>
                    <Button value="info" onClick={teamcolors3} variant="info">
                      {" "}
                    </Button>
                  </label>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>
          <Button
            variant="transparent"
            className="first-Click outlinerz"
            onClick={handleTrue}
          >
            Continue To The Jeopardy War
          </Button>
        </div>
      )}
    </div>
  );
}

export default Chop;
