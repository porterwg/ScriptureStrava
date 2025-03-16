"use client";

import React from "react";

interface SegmentedControlProps {
  activeTab: "goals" | "posts";
  onTabChange: (tab: "goals" | "posts") => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav className="flex overflow-hidden mx-7 my-5 border border-solid border-zinc-500 rounded-[100px]">
      <button
        className={`flex flex-1 gap-2 justify-center items-center p-3.5 cursor-pointer ${
          activeTab === "goals" ? "bg-gray-100" : ""
        }`}
        onClick={() => onTabChange("goals")}
        aria-pressed={activeTab === "goals"}
      >
        {activeTab === "goals" && (
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="check-icon"
            style={{ width: "18px", height: "18px" }}
          >
            <path
              d="M7.91245 13.5L3.63745 9.225L4.7062 8.15625L7.91245 11.3625L14.7937 4.48125L15.8625 5.55L7.91245 13.5Z"
              fill="#4A4459"
            />
          </svg>
        )}
        <span>Goals</span>
      </button>
      <button
        className={`flex flex-1 gap-2 justify-center items-center p-3.5 cursor-pointer ${
          activeTab === "posts" ? "bg-gray-100" : ""
        }`}
        onClick={() => onTabChange("posts")}
        aria-pressed={activeTab === "posts"}
      >
        {activeTab === "posts" && (
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="check-icon"
            style={{ width: "18px", height: "18px" }}
          >
            <path
              d="M7.91245 13.5L3.63745 9.225L4.7062 8.15625L7.91245 11.3625L14.7937 4.48125L15.8625 5.55L7.91245 13.5Z"
              fill="#4A4459"
            />
          </svg>
        )}
        <span>Posts</span>
      </button>
    </nav>
  );
};

export default SegmentedControl;
