import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import SubmitButton from "./SubmitButton";
import { addExpense } from "../actions/expenseAction";

const AddExpense = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  let handleTitle = (e) => {
    setTitle(e);
  };

  let handleNote = (e) => {
    setNote(e);
  };

  let handleDate = (e) => {
    setDate(e);
  };

  let handleAmount = (e) => {
    setAmount(e);
  };

  let handleAddExpense = (e) => {
    e.preventDefault();
    const data = {
      title,
      note,
      amount,
      date,
    };

    dispatch(addExpense(data));
  };

  return (
    <>
      <Container className="add-expense-container">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Form onSubmit={handleAddExpense}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={title}
                  onChange={(e) => handleTitle(e.target.value)}
                  type="text"
                  required
                  placeholder="Enter Title"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Note</Form.Label>

                <Form.Control
                  as="textarea"
                  type="text"
                  value={note}
                  required
                  onChange={(e) => handleNote(e.target.value)}
                  placeholder="Enter A Short Note"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  required
                  onChange={(e) => handleDate(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="text"
                  value={amount}
                  required
                  onChange={(e) => handleAmount(e.target.value)}
                  placeholder="Enter Amount"
                />
              </Form.Group>

              <SubmitButton classname="add-expense" name="Add Expense" />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddExpense;
