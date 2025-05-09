import { MoveRight } from "lucide-react";
import React from "react";

const PerformanceMetrics = () => {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-[#E5E7EB] text-2xl">Performance Metrics</h1>

      <div className="flex flex-row mt-7 gap-3 justify-between">
        <div className="flex flex-col bg-[#1E2233] p-5 rounded-2xl justify-between w-full border border-[#313B54]">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-4">
              <p className="text-[#E5E7EB] text-2xl">Winnability</p>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#1E40AF]" />
                <div className="w-2 h-2 rounded-full bg-[#1E40AF]" />
                <div className="w-2 h-2 rounded-full bg-[#1E40AF]" />
                <div className="w-2 h-2 rounded-full bg-[#1E40AF]" />
              </div>
            </div>
            <div className="text-[#E5E7EB] text-3xl mt-5 capitalize whitespace-nowrap">
              Very Strong
            </div>
          </div>

          <div className="flex flex-row items-center gap-0.5 cursor-pointer">
            <p className="text-[#3B82F6] text-sm">See all factors</p>
            <MoveRight className="text-[#3B82F6] w-5 h-5" strokeWidth={1} />
          </div>
        </div>

        <div className="flex flex-col bg-[#1E2233] p-5 rounded-2xl justify-between w-full border border-[#313B54]">
          <div className="flex flex-col">
            <div className="text-[#E5E7EB] text-2xl">Loss Ratio</div>
            <div>
              <div className="text-[#E5E7EB] text-3xl capitalize mt-5">
                25%
                <span className="text-2xl lowercase ml-2.5 text-[#8A8C98] whitespace-nowrap">
                  vs 42% target
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-0.5 cursor-pointer">
            <p className="text-[#3B82F6] text-sm">View history</p>
            <MoveRight className="text-[#3B82F6] w-5 h-5" strokeWidth={1} />
          </div>
        </div>

        <div className="flex flex-col bg-[#1E2233] p-5 rounded-2xl justify-between w-full border border-[#313B54]">
          <div className="flex flex-row items-center">
            <p className="text-[#E5E7EB] text-2xl">Premium growth</p>
          </div>

          <div className="text-[#E5E7EB] text-3xl capitalize mt-5">
            <div className="flex items-center">
              <span>12.4%</span>
              <span className="text-2xl lowercase ml-2.5 text-[#8A8C98] whitespace-nowrap">
                YoY increase 
              </span>
            </div>
            <span className="text-2xl lowercase text-[#8A8C98]">
              $123M vs 150M Target
            </span>
          </div>

          <div className="flex flex-row items-center gap-0.5 mt-17 cursor-pointer">
            <p className="text-[#3B82F6] text-sm">View trend </p>
            <MoveRight className="text-[#3B82F6] w-5 h-5" strokeWidth={1} />
          </div>
        </div>

        <div className="flex flex-col bg-[#1E2233] p-3 rounded-2xl max-h-44 w-full border border-[#313B54]">
          <div className="grid grid-cols-[auto_1fr] gap-3 w-full">
            <div>
              <p className="text-[#E5E7EB] text-2xl whitespace-nowrap">
                Exposure Distribution
              </p>
            </div>
            <div></div>
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="h-5.5 bg-[#313853] rounded-r-3xl overflow-hidden flex">
                  <div className="bg-target rounded-r-3xl w-[170px]" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[#E5E7EB] font-bold text-xs whitespace-nowrap">
                Marine Cargo: 71.4%
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="h-5.5 bg-[#313853] rounded-r-3xl overflow-hidden flex">
                  <div className="bg-target rounded-r-3xl w-[127px]" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[#E5E7EB] font-bold text-xs whitespace-nowrap">
                General Liability: 20%
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="h-5.5 bg-[#313853] rounded-r-3xl overflow-hidden flex">
                  <div className="bg-target rounded-r-3xl w-[99px]" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[#E5E7EB] font-bold text-xs whitespace-nowrap">
                Workers Comp: 8.6%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
