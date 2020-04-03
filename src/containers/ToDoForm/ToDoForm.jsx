import React from "react";
import styles from "./ToDoForm.module.scss";


const ToDoForm = (props) => {
const {newItem, setNewItem, addNewTask} = props; 
  return (
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

        <p onClick={addNewTask}>Add new task</p>
      </section>
  );
};

export default ToDoForm;
