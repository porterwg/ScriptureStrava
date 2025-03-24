import * as React from "react";
import NavigationItem from "./NavigationItem";

function NavigationMenu() {
  const menuItems = [
    { title: "Home", id: "home" },
    { title: "Profile", id: "profile" },
    { title: "Groups", id: "groups" },
    { title: "Inspiration", id: "inspiration" },
    { title: "Gospel Library", id: "gospel-library" },
  ];

  return (
    <nav className="flex flex-col gap-10 px-20 pt-44 max-sm:px-5">
      {menuItems.map((item) => (
        <NavigationItem key={item.id} title={item.title} />
      ))}
    </nav>
  );
}

export default NavigationMenu;
