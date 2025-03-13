import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="px-6 py-5 mb-2.5 text-6xl text-black max-md:text-5xl max-sm:text-4xl">
      {title}
    </h1>
  );
};
