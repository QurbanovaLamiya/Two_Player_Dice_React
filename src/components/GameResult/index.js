import { Component} from "react";
import gameResultStyle from "./gameResult.module.css"

class GameResult extends Component {
  render() {
    return (
      <div className={gameResultStyle.gameResult}>
        <h3>{this.props.title}</h3>
        <h5>Dice:</h5>
        <h5>Score:</h5>
        <h5>Result:</h5>
      </div>
    );
  }
}

export default GameResult;
