import React from "react";
import styles from "./Groups.module.css";

const StatusBar = () => {
  return (
    <header className={styles.topPhoneBar}>
      <div className={styles.statusBarIPhone}>
        <div className={styles.frame}>
          <time className={styles.time}>9:41</time>
          <span className={styles.dynamicIslandspacer} />
          <div className={styles.levels}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84c725706f87f83afa6f3cfbe03e9496036d6c921957a3f62dc21283b12bf6ce?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78"
              className={styles.img}
              alt="Signal"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b5418d58d6e93c26c01cad3a16111c4d078279a0c0cc6a4c078f3cfefe2dc2?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78"
              className={styles.img2}
              alt="Battery"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
