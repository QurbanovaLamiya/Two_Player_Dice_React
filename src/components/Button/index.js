import { Component, Fragment } from "react";
import ButtonStyle from "./button.module.css";
import { PropTypes } from "prop-types";

class Button extends Component {
  render() {
    return (
      <Fragment>
        <button className={ButtonStyle.button} onClick={this.props.button}>
          {this.props.title}
        </button>
      </Fragment>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  button: PropTypes.func,
};

export default Button;
