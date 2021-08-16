import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpense } from "../actions/expenseAction";
import AddExpense from "../Components/AddExpense";
import ViewExpenses from "../Components/ViewExpenses";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchExpense(user));
  }, [dispatch, user]);

  return (
    <>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <AddExpense />
          </Col>
          <Col lg={8} md={8} sm={12}>
            <ViewExpenses />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
