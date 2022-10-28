import { Component, Fragment } from "react";

class Player2 extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.player2} alt="" width={200} height={200} />
      </Fragment>
    );
  }
}

export default Player2;
