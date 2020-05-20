import React, { useEffect } from "react";

import classes from "./Cockpit.css";

// JSX Component
const cockpit = (props) => {
  // This will basically print out the console for
  // each and every lifecycle creation or updation
  // The function of lifecycle: getDerivedStateFromProps
  // is not functional in this useEffect(), that will be
  // similiar to useState()
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Https request ...
    const timer = setTimeout(() => {
      alert("Save Data To Cloud Baby!");
    }, 1000);
    return () => {
      // The timer is cleared when Cockpit is unmounted
      // So you dont see the alert when u hit "remove Cockpit"
      // button
      clearTimeout(timer);
      // Hit remove cockpit button to see the log down below
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  // passing empty array > execute for the 1st time only
  // passing props.persons > see note or run code for details

  // This function should run for every update cycle
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working !</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
