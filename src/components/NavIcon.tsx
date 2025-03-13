import React from "react";

interface NavIconProps {
  svg: string;
  label: string;
}

export const NavIcon: React.FC<NavIconProps> = ({ svg, label }) => {
  return (
    <button aria-label={label} className="focus:outline-none">
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </button>
  );
};
