import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { reducer1, reducer2, reducer3 } from "./actions/dragger";

import "./Modals.css";

function Modals({
  team1,
  team2,
  team3,
  TeamPlaying,
  data,
  reducer1,
  reducer2,
  reducer3,
}) {
  const [show, setShow] = useState(false);
  const [tries] = useState(2);
  const [points] = useState(data.points);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newValue, setNewValue] = useState("");
  const handleValue = (e) => {
    setNewValue(e.target.value);
  };
  const handleSubmit = (e) => {
    if (data.answer === newValue) {
      if (TeamPlaying === team1) {
        e.persist();

        reducer1(data.points);
      } else if (TeamPlaying === team2) {
        e.persist();
        reducer2(data.points);
      } else if (TeamPlaying === team3) {
        e.persist();
        reducer3(data.points);
      }
    }
  };
  return (
    <>
      <Card
        className={`outliners z${points}-size`}
        onClick={handleShow}
        bg="light"
      >
        <Card.Title className="fonty">{data.points}</Card.Title>

        <small bg="dark" className="text-muted no-wrapper">
          {tries} Tries
        </small>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.question}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fonty">
          <input onChange={handleValue}></input>
        </Modal.Body>
        <Modal.Footer>
          <div onClick={handleSubmit}>
            <Button variant="primary" onClick={handleClose}>
              Check Answer
            </Button>
          </div>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    reducer1: (points) => reducer1(points, dispatch),
    reducer2: (points) => reducer2(points, dispatch),
    reducer3: (points) => reducer3(points, dispatch),
    // reducer1: (points) => reducer1(points, dispatch),
    // reducer2: (points) => reducer2(points, dispatch),
    // reducer3: (points) => reducer3(points, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Modals);
