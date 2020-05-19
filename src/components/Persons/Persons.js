import React, { Component } from "react";
import Person from "./Person/Person";

// Person Listing Component
// Commit 5th changed to class based
// Demo of Update Component LifeCycle here:
class Persons extends Component {
  // Comment since not really using it
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // Not used cause the current version is not supporting anymore
  // componentWillReceiveProps(props) {
  //   console.log("[Person.js] componentWillReceiveProps", props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate");
    // true > keep updating
    // false > cancle update
    return true;
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot !" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
