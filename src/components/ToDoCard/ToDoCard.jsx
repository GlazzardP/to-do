import React from "react";
import styles from "./ToDoCard.module.scss";

const ToDoCard = props => {
  const { toDoItems, deleteTask, completeTask, completed } = props;


  // const updateCompleted = item => {
  //   // const currentFavouritedArticles = [...favouriteArticles];
  //   const newCompletedTasks = [...completed, item];
  //   completeTask(newCompletedTasks);
  // };



  const getItemJsx = () => {
    return toDoItems.map(item => (
      <div className={styles.card}>

        <h3>{item.taskName}</h3>
        <p>Complete: {item.completionDate}</p>
        <p>Importance:  {item.importance}</p>
        <path onClick={() => deleteTask(item)}>Completed task</path>
        {/* <path onClick={() => updateCompleted(item)}>Complete(DL) task</path> */}

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
