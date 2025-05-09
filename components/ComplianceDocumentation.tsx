import React from "react";
import { CircleCheck, MoveRight } from "lucide-react";

const ComplianceDocumentation = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center gap-2 w-full">
        <h1 className="text-[#E5E7EB] text-2xl">Compliance & Documentation</h1>
        <div className="flex flex-row items-center mt-2 text-xs text-[#3B82F6] cursor-pointer">
          <p className="mr-1 flex text-center">See history</p>
          <MoveRight className="w-3 h-3" />
        </div>
      </div>

      <div className="flex flex-row bg-[#1E2233] rounded-2xl items-center mt-4.5 py-5 px-11 border border-[#313B54]">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="flex items-center gap-2">
            <CircleCheck className="w-6 h-6 text-[#3BB979]" />
            <span className="text-[#E5E7EB] text-base">KYC verification</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck className="w-6 h-6 text-[#3BB979]" />
            <span className="text-[#E5E7EB] text-base">
              Required Documentation
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck className="w-6 h-6 text-[#3BB979]" />
            <span className="text-[#E5E7EB] text-base">
              Regulatory approval
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck className="w-6 h-6 text-[#3BB979]" />
            <span className="text-[#E5E7EB] text-base">
              Financial Verification
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceDocumentation;
