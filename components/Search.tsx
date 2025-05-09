import React from "react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="sm:sm:w-[240px] lg:w-[479px] flex">
      <Input
        placeholder="Search"
        className="placeholder-[#596275]  h-12 pl-4 bg-[#1E2233] rounded-3xl border border-[#000000] text-[#E5E7EB] shadow-[4px_0px_4px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
};

export default Search;
