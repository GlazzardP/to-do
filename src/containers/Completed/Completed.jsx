import React from "react";
import styles from "./Completed.module.scss";

const Completed = props => {
  const { completed } = props;

  return (
    <>
      {completed.map(item => {
        return <div className={styles.indCom}>{item.taskName}</div>;
      })}
    </>
  );
};

export default Completed;
