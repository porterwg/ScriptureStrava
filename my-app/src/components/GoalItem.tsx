import React from "react";

interface GoalItemProps {
  title: string;
  subtitle: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ title, subtitle }) => {
  return (
    <article className="flex items-start mb-5">
      <div className="flex justify-center items-center mr-3 w-4 h-4 rounded bg-[#38bdf8]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="check"
          style={{ width: "16px", height: "16px" }}
        >
          <path
            d="M13.3334 4L6.00008 11.3333L2.66675 8"
            stroke="#F5F5F5"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="mb-1 text-base text-stone-900">{title}</h3>
        <p className="text-base text-neutral-500">{subtitle}</p>
      </div>
    </article>
  );
};

export default GoalItem;
