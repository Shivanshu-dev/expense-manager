import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Head from "./Components/Head";
import Dashboard from "./screen/Dashboard";
import Login from "./screen/Login";
import Register from "./screen/Register";
import UserHead from "./Components/UserHead";

function App() {
  const { user } = useSelector((state) => state.users);

  return (
    <BrowserRouter>
      <Head />
      {Object.keys(user).length === 0 ? null : <UserHead />}
      <Container className="components-container" fluid>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          {Object.keys(user).length === 0 ? null : (
            <Route exact path="/dashboard" component={Dashboard} />
          )}
          {Object.keys(user).length === 0 ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="/dashboard" />
          )}
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
