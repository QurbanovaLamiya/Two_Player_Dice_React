import { Component, Fragment } from "react";
import { PropTypes } from "prop-types";

class Player2 extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.player2} alt="" width={130} height={130} />
      </Fragment>
    );
  }
}

Player2.propTypes = {
  player2: PropTypes.string,
};

export default Player2;
