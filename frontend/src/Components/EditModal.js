import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const EditModal = (props) => {
  return (
    <>
      <Modal backdrop="static" {...props} size="lg" centered>
        <Modal.Header>
          <Modal.Body>
            <Row>
              <Col className="d-flex justify-content-evenly align-items-center">
                <h4>Your Expense Details</h4>
                {/* </Col> */}
                {/* <Col lg={3} md={3} sm={3}> */}
                <Button
                  onClick={props.onHide}
                  variant="outline-danger"
                  size="sm"
                >
                  Close
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Expense Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Expense Note</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Expense Amount</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Row>
              <Col
                className="d-flex justify-content-evenly"
                lg={12}
                md={12}
                sm={12}
              >
                <Button onClick={props.onHide}>Delete</Button>
                <Button onClick={props.onHide}>Edit</Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
