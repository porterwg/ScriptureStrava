"use client";
import * as React from "react";
import { StatusBar } from "./StatusBar";
import { ConferenceCard } from "./ConferenceCard";
import { InspirationQuote } from "./InspirationQuote";
import { NavigationBar } from "./NavigationBar";

export const MainLayout: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=SF+Pro:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <main className="relative mx-auto my-0 w-full bg-white h-[852px] max-w-[393px] max-sm:h-screen">
        <StatusBar />
        <section className="flex flex-col gap-4 p-8 max-sm:p-4">
          <ConferenceCard />
          <InspirationQuote />
        </section>
        <NavigationBar />
      </main>
    </>
  );
};

export default MainLayout;
