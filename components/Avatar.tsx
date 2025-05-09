import React from "react";

type AvatarProps = {
  text: string;
  size?: string;
  bgColor?: string;
  textSize?: string;
  isBorder?: boolean;
};

const Avatar = ({
  text,
  size = "12",
  bgColor = "bg-blue-fade",
  textSize = "text-xl",
  isBorder = true,
}: AvatarProps) => {
  return (
    <div
      className={`${bgColor} rounded-full w-${size} h-${size} flex justify-center items-center ${isBorder ? 'border border-[#000000]' : ''}`}
    >
      <p className={`${textSize} text-white p-2`}>{text}</p>
    </div>
  );
};

export default Avatar;
