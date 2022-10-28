import { Component, Fragment } from "react";
import Button from "../Button";
import Images from "../DiceImage";
import Player1 from "../Player1";
import Player2 from "../Player2";
import RollDiceStyle from "./rollDice.module.css";

class RollDice extends Component {
  constructor() {
    super();

    this.state = {
      dataImg: Images,
      player1: Images.dice1,
      player2: Images.dice1,
      draw: false,
    };
  }

  startGame = () => {
    let random1 = Math.ceil(Math.random() * 6);
    let random2 = Math.ceil(Math.random() * 6);

    this.setState({
      player1: this.state.dataImg[`dice${random1}`],
      player2: this.state.dataImg[`dice${random2}`],
      draw: true,
    });
  };

  clearGame = () => {
    this.setState({
      player1: Images.dice1,
      player2: Images.dice1,
      draw: false,
    });
  };

  render() {
    return (
      <Fragment>
        <h1 className={RollDiceStyle.header}>Dice Game</h1>
        <div className={RollDiceStyle.container}>
          <Button button={this.startGame} title="Go Roll" />
          <Button button={this.clearGame} title="Clear" />
        </div>
        <div className={RollDiceStyle.dice}>
          <Player1 player1={this.state.player1} />
          <Player2 player2={this.state.player2} />
        </div>
      </Fragment>
    );
  }
}

export default RollDice;
