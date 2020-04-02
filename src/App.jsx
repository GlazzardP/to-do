import React from "react";
import styles from "./App.module.scss";
// import { firestore } from "./firebase.js";
import ToDoCard from "./components/ToDoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Completed from "./containers/Completed";

const App = () => {
  const [completed, markCardAsComplete] = useState([]);

  return (
    <article className={styles.background}>
      <h1>To Do</h1>
      <ToDoCard markCardAsComplete={markCardAsComplete} completed={completed} />
      <Completed completed={completed} />
    </article>
  );
};

export default App;
