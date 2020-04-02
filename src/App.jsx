import React from "react";
import "./App.module.scss";
// import { firestore } from "./firebase.js";
import ToDoCard from "./components/ToDoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Completed from "./containers/Completed";

const App = () => {
  const [completed, markCardAsComplete] = useState([]);

  return (
    <>
      <ToDoCard markCardAsComplete={markCardAsComplete} completed={completed} />
      <Completed completed={completed} />
    </>
  );
};

export default App;
