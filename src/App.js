import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, Switch
} from "react-router-dom";
import LoginComponent from "./componets/Login/Login";
import BoardComponent from "./componets/Board/component.Board";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Login" component={LoginComponent} />
        <Route exact path="/Board" component={BoardComponent} />
      </Switch>
    </div>
  );
}

export default App;
