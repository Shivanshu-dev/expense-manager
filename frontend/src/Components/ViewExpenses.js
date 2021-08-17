import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import EditModal from "./EditModal";

const ViewExpenses = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editItem, setEditItem] = useState("");
  const { expense } = useSelector((state) => state.expenses);

  let checkedit = (e) => {
    setEditItem(e.target.getAttribute("value"));
    setModalShow(true);
  };

  let hideModal = () => {
    setEditItem("");
    setModalShow(false);
  };

  return (
    <Container>
      <Row>
        <Col className="expenses-heading" lg={12} md={12} sm={12}>
          <h3>Your Expenses Will Appear Here</h3>
        </Col>
      </Row>
      {editItem.length !== 0 && (
        <EditModal
          value={editItem}
          show={modalShow}
          onHide={() => hideModal()}
        />
      )}
      <Row>
        {expense.map((item) => (
          <Col key={item._id} lg={4} md={6} sm={12}>
            <div className="view-expense-div">
              <h4
                onClick={checkedit}
                value={item._id}
                className="expense-title"
              >
                {item.title}
              </h4>

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
