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
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  const [team3, setTeam3] = useState();
  const [team1color, setTeam1color] = useState("light");
  const [team2color, setTeam2color] = useState("light");
  const [team3color, setTeam3color] = useState("light");
  const handleTrue = () => {
    setTrueOrFalse(true);
  };

  return (
    <div className="full-size">
      {trueOrFalse ? (
        <div>
          <div>
            <CardDeck></CardDeck>
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
                  <input className="maxer"></input>
                </div>
                <div>
                  <label className="second-Click">
                    Teams Color: <Button variant="secondary"> </Button>
                    <Button variant="danger"> </Button>
                    <Button> </Button>
                    <Button> </Button>
                  </label>
                </div>
              </Card.Body>
            </Card>
            <Card className="special-corner" bg={team2color}>
              {" "}
              <Card.Body className="paddings1">
                <div>
                  <label className="second-Click">Teams Name:</label>
                  <input className="maxer"></input>
                </div>
                <div>
                  <label className="second-Click">
                    Teams Color:<Button variant="secondary"> </Button>
                    <Button variant="danger"> </Button>
                    <Button> </Button>
                    <Button> </Button>
                  </label>
                </div>
              </Card.Body>
            </Card>
            <Card className="special-corner" bg={team3color}>
              {" "}
              <Card.Body className="paddings1">
                <div>
                  <label className="second-Click">Teams Name:</label>
                  <input className="maxer"></input>
                </div>
                <div>
                  <label className="second-Click">
                    Teams Color:<Button variant="secondary"> </Button>
                    <Button variant="danger"> </Button>
                    <Button> </Button>
                    <Button> </Button>
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
