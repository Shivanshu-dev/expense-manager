import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { deleteExpense, updateOneExpense } from "../actions/expenseAction";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const EditModal = (props) => {
  const { expense } = useSelector((state) => state.expenses);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  let editID = props.value;

  const expenseToEdit = expense?.filter((item) => item._id === editID);

  const [newTitle, setNewTitle] = useState(expenseToEdit[0]?.title);
  const [newNote, setNewNote] = useState(expenseToEdit[0]?.note);
  const [date, setDate] = useState(expenseToEdit[0]?.date);
  const [newAmount, setNewAmount] = useState(expenseToEdit[0]?.amount);

  let editTitle = (e) => {
    setNewTitle(e);
  };

  let editNote = (e) => {
    setNewNote(e);
  };

  let editAmount = (e) => {
    setNewAmount(e);
  };

  let deleteOneExpense = () => {
    // console.log(editID);
    dispatch(deleteExpense(user, editID));
    props.onHide();
  };

  let updateExpense = () => {
    const newData = {
      newTitle,
      newNote,
      date,
      newAmount,
    };
    console.log(editID);
    dispatch(updateOneExpense(user, newData, editID));
    props.onHide();
  };

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
              <Form.Control
                value={newTitle}
                onChange={(e) => editTitle(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Expense Note</Form.Label>
              <Form.Control
                value={newNote}
                onChange={(e) => editNote(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control value={date} readOnly type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Expense Amount</Form.Label>
              <Form.Control
                value={newAmount}
                onChange={(e) => editAmount(e.target.value.replace(/\D/, ""))}
                type="text"
              />
            </Form.Group>
            <Row>
              <Col
                className="d-flex justify-content-evenly"
                lg={12}
                md={12}
                sm={12}
              >
                <Button onClick={deleteOneExpense}>Delete</Button>
                <Button onClick={updateExpense}>Edit</Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
