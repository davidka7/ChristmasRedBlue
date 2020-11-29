import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Modals.css";

function Modals(props) {
  const [show, setShow] = useState(false);
  const [tries] = useState(2);
  const [points] = useState(props.data.points);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className={`outliners z${points}-size`}
        onClick={handleShow}
        bg="light"
      >
        <Card.Title className="fonty">{props.data.points}</Card.Title>

        <small bg="dark" className="text-muted no-wrapper">
          {tries} Tries
        </small>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}
export default Modals;
