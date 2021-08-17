import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import EditModal from "./EditModal";
import { settitleFilter } from "../actions/filterAction";

const ViewExpenses = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [editItem, setEditItem] = useState("");
  const [filter, setFilter] = useState("");
  const { expense } = useSelector((state) => state.expenses);

  const { titleFilter } = useSelector((state) => state.filters);

  let checkedit = (e) => {
    setEditItem(e.target.getAttribute("value"));
    setModalShow(true);
  };

  let filteredExpenses = expense.filter((item) => {
    return item.title.toLowerCase().includes(titleFilter.toLowerCase());
  });

  let hideModal = () => {
    setEditItem("");
    setModalShow(false);
  };

  let handleFilter = (e) => {
    setFilter(e);
    dispatch(settitleFilter(e));
  };

  return (
    <Container>
      <Row>
        <Col className="expenses-heading" lg={8} md={8} sm={6}>
          <h3 className="view-expense-heading">
            Your Expenses Will Appear Here
          </h3>
        </Col>
        <Col lg={4} md={4} sm={6}>
          <input
            onChange={(e) => handleFilter(e.target.value)}
            type="text"
            value={filter}
            placeholder="Search By Title"
          />
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
        {filteredExpenses.map((item) => (
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
              <h5 className="expense-amount">Rs - {item.amount}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ViewExpenses;
