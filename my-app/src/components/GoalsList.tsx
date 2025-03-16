import React from "react";
import GoalItem from "./GoalItem";

const goals = [
  { title: "Meditate", subtitle: "Every Day" },
  { title: "Post Inspiration", subtitle: "Every Month" },
  { title: "Read Scriptures", subtitle: "Every Day" },
  { title: "Pray", subtitle: "Every Morning" },
  { title: "Pray", subtitle: "Every Night" },
  { title: "Go to Temple", subtitle: "Every Month" },
  { title: "Get to Church", subtitle: "Every Week" },
];

const GoalsList: React.FC = () => {
  return (
    <section className="px-14 py-0 max-sm:px-8 max-sm:py-0 overflow-y-auto h-[calc(100vh-200px)] pb-16">
      <div className="goals-container">
        {goals.map((goal, index) => (
          <GoalItem key={index} title={goal.title} subtitle={goal.subtitle} />
        ))}
      </div>
    </section>
  );
};

export default GoalsList;
