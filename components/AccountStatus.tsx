import React from "react";
import { CircleCheck } from "lucide-react";

const AccountStatus = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-[#E5E7EB] text-2xl">Account Status</h1>

      <div className="flex flex-row bg-[#1E2233] rounded-2xl items-center mt-4.5 py-10 px-16 border border-[#313B54]">
        <div className="relative flex flex-col items-center">
          <CircleCheck className="w-6 h-6 text-[#3BB979]" />
          <span className="absolute top-full mt-1 text-[#E5E7EB] text-base">
            Submitted
          </span>
        </div>
        <div className="flex-grow border-t border-dashed border-[#3BB979]" />
        <div className="relative flex flex-col items-center">
          <CircleCheck className="w-6 h-6 text-[#3BB979]" />
          <span className="absolute top-full mt-1 text-[#E5E7EB] text-base">
            Review
          </span>
        </div>
        <div className="flex-grow border-t border-dashed border-[#3BB979]" />
        <div className="relative flex flex-col items-center">
          <CircleCheck className="w-6 h-6 text-[#3BB979]" />
          <span className="absolute top-full mt-1 text-[#E5E7EB] text-base">
            Quote
          </span>
        </div>
        <div className="flex-grow border-t border-dashed border-[#3BB979]" />
        <div className="relative flex flex-col items-center">
          <CircleCheck className="w-6 h-6 text-[#3BB979]" />
          <span className="absolute top-full mt-1 text-[#E5E7EB] text-base">
            Bind
          </span>
        </div>
        <div className="flex-grow border-t border-dashed border-[#3BB979]" />
        <div className="relative flex flex-col items-center">
          <CircleCheck className="w-6 h-6 text-[#3BB979]" />
          <span className="absolute top-full mt-1 text-[#E5E7EB] text-base">
            Issue
          </span>
        </div>
        <div className="flex-grow border-t border-dashed border-[#8A8B98]" />
        <div className="relative flex flex-col items-center">
          <CircleCheck className="w-6 h-6 text-[#8A8B98]" />
          <span className="absolute top-full mt-1 text-[#E5E7EB] text-base">
            Renew
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;
