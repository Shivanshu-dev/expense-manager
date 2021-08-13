import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import EditModal from "./EditModal";

const ViewExpenses = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { expense } = useSelector((state) => state.expenses);

  return (
    <Container>
      <Row>
        <Col className="expenses-heading" lg={12} md={12} sm={12}>
          <h3>Your Expenses Will Appear Here</h3>
        </Col>
      </Row>
      <Row>
        {expense.map((item) => (
          <Col lg={4} md={6} sm={12}>
            <EditModal show={modalShow} onHide={() => setModalShow(false)} />
            <div
              onClick={() => setModalShow(true)}
              className="view-expense-div"
            >
              <h4 className="expense-title">{item.title}</h4>

              <p className="expense-description">{item.note}</p>
              <p className="expense-date">{item.date}</p>
              <h5 className="expense-amount">{item.amount}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ViewExpenses;
