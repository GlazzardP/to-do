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
      <>
        <p>{item.startDate}</p>
        <p>{item.imageURl}</p>
        <p>{item.completionDate}</p>
        <p>{item.taskName}</p>
        <button onClick={() => deleteTask(item)}>Delete task</button>
      </>
    ));
  };

  return (
    <>
      <section className={styles.addCard}>
        <input
          type="text"
          placeholder="Name"
          onInput={event =>
            setNewItem({ ...newItem, taskName: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Date?"
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
          placeholder="ImageURL, because why not?"
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
