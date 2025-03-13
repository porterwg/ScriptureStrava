"use client";
import React from "react";
import { StatusBar } from "./StatusBar";
import { Header } from "./Header";
import { Post } from "./Post";
import { NavigationBar } from "./NavigationBar";

export const SocialFeed: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
        rel="stylesheet"
      />
      <main className="flex flex-col w-full h-screen bg-white max-w-[393px] max-md:max-w-full">
        <StatusBar />
        <Header title="Posts" />
        <section className="flex overflow-y-auto flex-col flex-1 gap-5 px-6 py-0">
          <Post
            profileName="Porter Graham"
            profileSvg={`<svg id="I39:234;67:711" width="220" height="68" viewBox="0 0 220 68" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="profile-icon" style="width: 220px; height: 68px"> <circle cx="34" cy="34" r="33.5" fill="url(#pattern0_175_337)" stroke="black"></circle> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="League Spartan" font-size="20" letter-spacing="0em"><tspan x="98" y="38.8">Porter Graham</tspan></text> <defs> <pattern id="pattern0_175_337" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_175_337" transform="scale(0.00102041)"></use> </pattern>  </defs> </svg>`}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c2460afb09ea5efa0e5b21946277e2142a87c3ad"
            imageAlt="Football celebration"
            description="We won :)"
          />
          <Post
            profileName="Jordan Goddard"
            profileSvg={`<svg id="I49:288;67:711" width="232" height="68" viewBox="0 0 232 68" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="profile-icon" style="width: 220px; height: 68px"> <circle cx="34" cy="34" r="33.5" fill="url(#pattern0_175_149)" stroke="black"></circle> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="League Spartan" font-size="20" letter-spacing="0em"><tspan x="98" y="38.8">Jordan Goddard</tspan></text> <defs> <pattern id="pattern0_175_149" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_175_149" transform="translate(0 -0.25) scale(0.0025)"></use> </pattern>  </defs> </svg>`}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5179314ff60ab7d1435286f4eae2ff36596aca5b"
            imageAlt="Temple"
            description="I love to see the temple!"
          />
          <p className="mt-5 text-lg text-center text-black">No more posts!</p>
        </section>
        <NavigationBar />
      </main>
    </>
  );
};

export default SocialFeed;
