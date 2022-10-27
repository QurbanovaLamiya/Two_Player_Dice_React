import { Component, Fragment } from "react";
import RollDice from "./components/RollDice";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <RollDice />
      </Fragment>
    );
  }
}

export default App;
