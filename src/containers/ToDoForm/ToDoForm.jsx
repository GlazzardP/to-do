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
        {/* <input
          type="text"
          placeholder="When do you aim to complete this task?"
          onInput={event =>
            setNewItem({ ...newItem, startDate: event.target.value })
          }
        /> */}
        <input
          type="text"
          placeholder="When does this need to be done by?"
          onInput={event =>
            setNewItem({ ...newItem, completionDate: event.target.value })
          }
        />
        {/* <select onInput={event => setNewItem({...newItem, Importance: event.target.value})}>
          <option value="littleImportance">I'll get to it one day</option>
          <option value="mediumImportance">Needs to be done this week</option>
          <option value="highImportance">I should have already done this</option>
        </select> */}


        <p onClick={addNewTask}>Add new task</p>
      </section>
  );
};

export default ToDoForm;
