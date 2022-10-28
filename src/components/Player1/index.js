import { Component, Fragment } from "react";

class Player1 extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.player1} alt="" width={200} height={200} />
      </Fragment>
    );
  }
}

export default Player1;
