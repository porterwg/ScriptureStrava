"use client";

import * as React from "react";
import StatusBar from "./StatusBar";
import NavigationMenu from "./NavigationMenu";

function MobileNavigation() {
  return (
    <main className="flex flex-col w-full bg-white min-h-[screen]">
      <StatusBar />
      <NavigationMenu />
    </main>
  );
}

export default MobileNavigation;
