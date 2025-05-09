import React from "react";

type AvatarProps = {
  text: string;
  size?: string;
  bgColor?: string;
  textSize?: string;
};

const Avatar = ({
  text,
  size = "12",
  bgColor = "bg-blue-fade",
  textSize = "text-xl",
}: AvatarProps) => {
  return (
    <div
      className={`${bgColor} rounded-full w-${size} h-${size} flex justify-center items-center border border-[#000000]`}
    >
      <p className={`${textSize} text-white p-2`}>{text}</p>
    </div>
  );
};

export default Avatar;
