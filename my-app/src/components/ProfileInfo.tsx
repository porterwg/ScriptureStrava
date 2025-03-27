import React from "react";

interface ProfileInfoProps {
  username: string;
  weeklyTime: string;
  dailyTime: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  username,
  weeklyTime,
  dailyTime,
}) => {
  return (
    <section className="px-12 py-5 max-sm:px-8 max-sm:py-4">
      <h1 className="mb-2.5 text-2xl text-black">{username}</h1>
      <div className="text-base text-black">
        <p className="mb-2">Average Weekly Time: {weeklyTime}</p>
        <p className="mb-2">Total Time Today: {dailyTime}</p>
      </div>
    </section>
  );
};

export default ProfileInfo;
