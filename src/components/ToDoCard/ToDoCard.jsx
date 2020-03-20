import React, { useState, useEffect } from "react";
import styles from "./ToDoCard.module.scss";
import { firestore } from "../../firebase";

const ToDoCard = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const fetchTodos = () => {
    firestore
      .collection("diary")
      .doc("tasks")
      .get()
      .then(doc => {
        const retrievedItems = doc.data().items;
        setTodoItems(retrievedItems);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // const addToDb = () => {
  // const newItems = [...todoItems, newItem.toLowerCase()];

  const addNewTask = () => {
    // const userId = "barry365";

    const newDoc = {
      crearionDate: "12/12/12/",
      targetCompletionDate: "11/11/11",
      taskName: "test",
      imageURl: ""
    };

    firestore
      .collection("diary")
      .doc("tasks")
      .set(newDoc)
      .then(() => {
        fetchTodos();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <section className={styles.addCard}>
        <input type="text" placeholder="Name of your task" />
        <input
          type="text"
          placeholder="When do you want to have completed your task by?"
        />
        <input type="text" placeholder="When did you start your task?" />
        <input type="text" placeholder="ImageURL, because why not?" />
        <button onClick={addNewTask}>Add new task</button>{" "}
      </section>
    </>
  );
};

export default ToDoCard;
