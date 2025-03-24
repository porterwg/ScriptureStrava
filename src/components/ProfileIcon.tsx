import React from "react";

interface ProfileIconProps {
  svg: string;
  name: string;
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({ svg, name }) => {
  return (
    <div aria-label={`${name}'s profile`}>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};
