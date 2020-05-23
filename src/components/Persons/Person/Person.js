import React, { Component, Fragment } from "react";
import Auxi from "../../../hoc/Auxi";
import withClass from "../../../hoc/WithClass";
import classes from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // React embedded method
  // Only usable in class-based component
  static contextType = AuthContext;

  componentDidMount() {
    // 1st way of using ref
    // this.inputEl.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Auxi>
        {/* Using this when we dont have  static contextType = AuthContext; 
            like above
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>
          }
        </AuthContext.Consumer> */}

        {
          // Do the exact same thing like the commented part above
          // But must have static contextType = AuthContext; to use this
          this.context.authenticated ? (
            <p>Authenticated</p>
          ) : (
            <p>Please Login</p>
          )
        }
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
