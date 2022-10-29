import { Component } from "react";
import gameResultStyle from "./gameResult.module.css";

class GameResult extends Component {
  render() {
    return (
      <div className={gameResultStyle.gameResult}>
        <h2>{this.props.title}</h2>
        <h3>Dice: {this.props.player}</h3>
        <h3>
          Result:
          <span
            className={
              this.props.result === "Win"
                ? gameResultStyle.win
                : this.props.result === "Lose"
                ? gameResultStyle.lose
                : gameResultStyle.draw
            }
          >
              {this.props.result}
          </span>
        </h3>
      </div>
    );
  }
}

export default GameResult;
