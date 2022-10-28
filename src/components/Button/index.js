import { Component, Fragment } from "react";
import ButtonStyle from "./button.module.css";

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

export default Button;
