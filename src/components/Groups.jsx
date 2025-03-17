"use client";
import React from "react";
import styles from "./Groups.module.css";

// import StatusBar from "./components/StatusBar";
// import GroupCard from "./components/GroupCard";
// import NavigationBar from "./components/NavigationBar";
// import GroupSection from "./components/GroupSection";

import StatusBar from "./StatusBar.jsx";
import GroupCard from "./GroupCard.jsx";
import NavigationBar from "./NavigationBar.jsx";
import GroupSection from "./GroupSection.jsx";

function Groups() {
  return (
    <main className={styles.groups}>
      <StatusBar />
      <section className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Groups</h1>
        </header>

        <div className={styles.groupsContainer}>
          <GroupSection
            title="Your Groups"
            groups={[
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/5ca06ea2187bd3545230a1931befc37c02bb58158a860b8daa4e7b936d24d2f3?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78",
                name: "24th Ward",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/c76510bdc37a786c7e063ab5dae84ef1f22a371dae96bedb89777ffacb7f0219?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78",
                name: "24th RS",
              },
            ]}
          />

          <GroupSection
            title="Explore Groups"
            groups={[
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/f9a6e1a9a3048b327b3e182ee492d1ea435b7ebaab27eda841dccf42adac1714?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78",
                name: "189th Ward",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/184da0fc797c22fa8237a628669c3280a5239711aed76e16d583d27535be3cf6?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78",
                name: "24th YW",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/d3f17ec8b86da7f55551d91e253937f6fa09694faf7fd91027833a4e72e0a5cf?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78",
                name: "124th Ward",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/453b8c571fb32872790d812e16147f03b0ea3390387fd3b1850b8e75a17fef55?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78",
                name: "24th YM",
              },
            ]}
          >
            <div className={styles.extraContent}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b919d020eb2fbb0a9fbf9c16dbe138c05db97e65c3da64987e03d8835c46158d?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78"
                className={styles.extraImage}
                alt=""
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9126534d5ddce983b938cdaccf7062c140f4c1c4417b18c753d3c36d7e0c76f1?placeholderIfAbsent=true&apiKey=b8f6c940fd94406dbc1ba16fc42cde78"
                className={styles.extraImage}
                alt=""
              />
            </div>
          </GroupSection>
        </div>
      </section>

      <NavigationBar />
    </main>
  );
}

export default Groups;
