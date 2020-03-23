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
        // console.log(todoItems);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addNewTask = () => {
    const newItems = [...todoItems, newItem];

    const newDoc = {
      items: newItems
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

  const deleteTask = item => {
    const newArray = [...todoItems];
    const position = newArray.indexOf(item);
    newArray.splice(position, 1);

    const newDoc = {
      items: newArray
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

  const getItemJsx = () => {
    return todoItems.map(item => (
      <section className={styles.Task}>
        <p>Task: {item.taskName}</p>
        <p>Start date: {item.startDate}</p>

        <p>Complete: {item.completionDate}</p>

        <p>Image Link: {item.imageURl}</p>
        <button onClick={() => deleteTask(item)}>Delete task</button>
      </section>
    ));
  };

  return (
    <>
      <section className={styles.addCard}>
        <input
          type="text"
          placeholder="Name of task"
          onInput={event =>
            setNewItem({ ...newItem, taskName: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="When do you aim to complete this task?"
          onInput={event =>
            setNewItem({ ...newItem, startDate: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="When did you start your task?"
          onInput={event =>
            setNewItem({ ...newItem, completionDate: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          onInput={event =>
            setNewItem({ ...newItem, imageURl: event.target.value })
          }
        />

        <button onClick={addNewTask}>Add new task</button>
      </section>
      {getItemJsx()}
    </>
  );
};

export default ToDoCard;
