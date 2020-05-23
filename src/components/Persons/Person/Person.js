import React, { Component, Fragment } from "react";
import Auxi from "../../../hoc/Auxi";
import withClass from "../../../hoc/WithClass";
import classes from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // 1st way of using ref
    // this.inputEl.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Auxi>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // 1st way of using ref
          // ref={(inputEl) => {
          //   this.inputEl = inputEl;
          // }}

          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxi>
    );
  }
}

// Determining the expected data type passed by props
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
