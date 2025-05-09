import React from "react";
import Search from "./Search";
import Avatar from "./Avatar";

const ProfileHeader = () => {
  return (
    <header className="flex flex-col w-full mt-6">
      <div className="flex flex-row justify-between items-center px-[60px]">
        <h1 className="text-[#E5E7EB] text-sm lg:text-2xl ">
          Hi Arthur, welcome! You have 12 open tasks.
        </h1>
        <div className="flex gap-2.5">
          <Search />
          <Avatar text="AR"/>
        </div>
      </div>
      <hr className="border-t-[1px] border-[#313B54] w-full mt-5" />
    </header>
  );
};
export default ProfileHeader;
