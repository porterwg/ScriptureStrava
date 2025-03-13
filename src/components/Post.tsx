import React from "react";
import { ProfileIcon } from "./ProfileIcon";

interface PostProps {
  profileName: string;
  profileSvg: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

export const Post: React.FC<PostProps> = ({
  profileName,
  profileSvg,
  imageUrl,
  imageAlt,
  description,
}) => {
  return (
    <article className="flex flex-col gap-4 mb-5">
      <header className="flex gap-8 items-center">
        <ProfileIcon svg={profileSvg} name={profileName} />
      </header>
      <img
        src={imageUrl}
        className="object-cover w-full rounded-2xl border border-black border-solid h-[354px] max-sm:h-[250px]"
        alt={imageAlt}
      />
      <p className="text-xl text-black">{description}</p>
    </article>
  );
};
