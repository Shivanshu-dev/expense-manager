import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Head from "./Components/Head";
import Dashboard from "./screen/Dashboard";
import Login from "./screen/Login";
import Register from "./screen/Register";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Container className="components-container" fluid>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
