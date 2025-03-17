import React from "react";
import styles from "./Groups.module.css";

const GroupCard = ({ image, name }) => {
  return (
    <article className={styles.groupCard}>
      <img src={image} className={styles.groupImage} alt={name} />
      <h3 className={styles.groupName}>{name}</h3>
    </article>
  );
};

export default GroupCard;
