import { Component, Fragment } from "react";

class Player1 extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.player1} alt="" width={130} height={130} />
      </Fragment>
    );
  }
}

export default Player1;
