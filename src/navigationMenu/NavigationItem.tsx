import * as React from "react";

interface NavigationItemProps {
  title: string;
}

function NavigationItem({ title }: NavigationItemProps) {
  return (
    <a
      href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="text-4xl leading-6 text-black hover:text-sky-500 transition-colors"
      aria-label={title}
    >
      {title}
    </a>
  );
}

export default NavigationItem;
