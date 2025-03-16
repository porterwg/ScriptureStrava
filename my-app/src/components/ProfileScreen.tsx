"use client";

import React from "react";
import StatusBar from "./StatusBar";
import ProfileInfo from "./ProfileInfo";
import SegmentedControl from "./SegmentedControl";
import GoalsList from "./GoalsList";
import PostsList from "./PostsList";
import NavigationBar from "./NavigationBar";

const ProfileScreen: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"goals" | "posts">("goals");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className="relative w-full h-screen bg-white max-w-[393px] max-sm:h-screen overflow-hidden">
        <StatusBar />
        <ProfileInfo
          username="@PorterGraham213"
          weeklyTime="2hr 3min"
          dailyTime="3hr 15min"
        />
        <SegmentedControl activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "goals" ? <GoalsList /> : <PostsList />}
        <NavigationBar />
      </main>
    </>
  );
};

export default ProfileScreen;
