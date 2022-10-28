import { Component, Fragment } from "react";

class Player2 extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.player2} alt="" width={130} height={130} />
      </Fragment>
    );
  }
}

export default Player2;
