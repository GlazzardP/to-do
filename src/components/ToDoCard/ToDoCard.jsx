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
        <p>{item.completionDate}</p>
        {/* <p>Importance:  {item.importance}</p> */}
        <span className-={styles.completeButton} onClick={() => deleteTask(item)}>Mark task as complete</span>
        {/* <path onClick={() => updateCompleted(item)}>Complete(DL) task</path> */}

      </div>
    ));
  };

  return (
    <section className={styles.cards}>
      {getItemJsx()}
    </section>
  );
};

export default ToDoCard;
