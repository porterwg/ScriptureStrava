import React from "react";
import styles from "./Groups.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e1b4729281d0a5be092feb5040d780f27d43a4bfb149fe1252c2efc84858a8?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78"
        className={styles.img11}
        alt="Nav item 1"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9424a120136a61b88152672a454e5cd35d2493c3c840e5cfad87dcd83173b3?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78"
        className={styles.img12}
        alt="Nav item 2"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/52d8872e5277cae4fdc779046fa7933360333cfcb121e260f30d719109f7bc5a?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78"
        className={styles.img13}
        alt="Nav item 3"
      />
    </nav>
  );
};

export default NavigationBar;
