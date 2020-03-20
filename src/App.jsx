import React from "react";
import "./App.module.scss";
import { firestore } from "./firebase.js";
import ToDoCard from "./components/ToDoCard";

const App = () => {
  return (
    <>
      <ToDoCard />
      <button>Mark task as complete</button>
    </>
  );
};

export default App;
