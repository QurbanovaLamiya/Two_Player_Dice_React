import { Component, Fragment } from "react";
import { PropTypes } from "prop-types";

class Player1 extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.player1} alt="" width={130} height={130} />
      </Fragment>
    );
  }
}

Player1.propTypes = {
  player1: PropTypes.string,
};

export default Player1;
