import React from "react";

import styles from "./Groups.module.css";

import GroupCard from "./GroupCard";

const GroupSection = ({ title, groups, children }) => {
  return (
    <section className={styles.groupSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.groupGrid}>
        {groups.map((group, index) => (
          <GroupCard key={index} {...group} />
        ))}
      </div>
      {children}
    </section>
  );
};

export default GroupSection;
