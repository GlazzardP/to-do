import React from "react";
import styles from "./ToDoCard.module.scss";
// import { Card } from "react-bootstrap";

const ToDoCard = props => {
  const { todoItems, deleteTask, completeTask } = props;
  // const [todoItems, setTodoItems] = useState([]);
  // const [newItem, setNewItem] = useState("");

  // const fetchTodos = () => {
  //   firestore
  //     .collection("diary")
  //     .doc("tasks")
  //     .get()
  //     .then(doc => {
  //       const retrievedItems = doc.data().items;
  //       setTodoItems(retrievedItems);
  //       // console.log(todoItems);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // const addNewTask = () => {
  //   const newItems = [...todoItems, newItem];

  //   const newDoc = {
  //     items: newItems
  //   };

  //   firestore
  //     .collection("diary")
  //     .doc("tasks")
  //     .set(newDoc)
  //     .then(() => {
  //       fetchTodos();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const deleteTask = item => {
  //   const newArray = [...todoItems];
  //   const position = newArray.indexOf(item);
  //   newArray.splice(position, 1);

  //   const newDoc = {
  //     items: newArray
  //   };

  //   firestore
  //     .collection("diary")
  //     .doc("tasks")
  //     .set(newDoc)
  //     .then(() => {
  //       fetchTodos();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const completeTask = item => {
  //   const updatedFavourites = [...completed, item];
  //   console.log(updatedFavourites);
  //   markCardAsComplete(updatedFavourites);
  // };

  const getItemJsx = () => {
    return todoItems.map(item => (
      <div className={styles.card}>

        {/* <img variant="top" src={item.imageURL} /> */}
        <h3>{item.taskName}</h3>
        <p>Start date: {item.startDate}</p>
        <p>Complete: {item.completionDate}</p>
        {/* <p>Image Link: {item.imageURl}</p> */}
        {/* {console.log(item)} */}
        <path onClick={() => deleteTask(item)}>Delete task</path>
        <path onClick={() => completeTask(item)}>Complete(DL) task</path>
        {/* </Card.Body> */}
        {/* </Card> */}
      </div>
    ));
  };

  return (
    <>
      {getItemJsx()}
    </>
  );
};

export default ToDoCard;
