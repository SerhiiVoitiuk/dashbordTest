import React from "react";

interface BarTargetProps {
  targetGoal: string;
  gotTarget: string;
  percent?: string;
}

const BarTarget = ({ targetGoal, gotTarget, percent }: BarTargetProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="relative w-full mt-1.5">
        <div className="absolute top-6 left-20 flex flex-col items-center">
          <span className="text-[8px] text-[#94A3B8]/50 uppercase">
            {percent}%
          </span>
        </div>
        <div className="w-full h-6 bg-[#313853] rounded-r-3xl overflow-hidden flex">
          <div className="bg-target rounded-r-3xl" style={{ width: "99px" }} />

          <div
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            style={{
              transform: "translateX(-15%)",
            }}
          >
            <span className="text-xs font-bold text-[#E5E7EB]">{`$${gotTarget}M`}</span>
          </div>
        </div>
      </div>
      <div className="text-[#E5E7EB] font-bold text-xs">${targetGoal}M</div>
    </div>
  );
};

export default BarTarget;
