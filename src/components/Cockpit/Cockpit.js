import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  // Creating a new reference
  // same as: React.createRef() in class-based
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    // this automatically click the button to show all persons
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      {
        // Using this when we dont have const authContext = useContext(AuthContext);
        // Remember to get rid of the curly brackets, just using it to
        // Comment
        // <AuthContext.Consumer>
        // {(context) => <button onClick={context.login}>Login</button>}
        // </AuthContext.Consumer>
      }
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(cockpit);
