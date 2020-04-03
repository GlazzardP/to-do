import React, { useEffect, useState} from "react";
import { firestore } from "./firebase";
import styles from "./App.module.scss";
import ToDoCard from "./components/ToDoCard";
import Completed from "./containers/Completed";
import ToDoForm from "./containers/ToDoForm";
{/* <style> @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200&display=swap'); </style> */}



const App = () => {
  const [completed, markCardAsComplete] = useState([]);
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
        console.log(retrievedItems);
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

  // const completeTask = item => {
  //   const updatedFavourites = [...completed, item];
  //   console.log(updatedFavourites);
  //   markCardAsComplete(updatedFavourites);
  // };

  return (
    <article className={styles.background}>
      <h1>To Do</h1>
      <ToDoForm setNewItem={setNewItem} newItem={newItem} addNewTask={addNewTask}/>
      <ToDoCard markCardAsComplete={markCardAsComplete} completed={completed} addNewTask={addNewTask} todoItems={todoItems} deleteTask={deleteTask}/>
      <Completed completed={completed} />
    </article>
  );
};

export default App;
