import React from "react";
import { MarkerBarLossRatioTarget } from "./MarkerBarLossRatioTarget";
import { MarkerBarRenewalRetention } from "./MarkerBarRenewalRetention";
import BarTarget from "./BarTarget";

const PortfolioGoals = () => {
  return (
    <div className="flex flex-col bg-[#1E2233] py-5 px-4 rounded-2xl border border-[#313B54]">
      <h2 className="text-[#E5E7EB] text-lg">Portfolio goals</h2>
      <div className="flex flex-col mt-5">
        <p className="text-[#94A3B8] text-[9px] font-bold uppercase">
          Portfolio loss ratio target
        </p>

        <MarkerBarLossRatioTarget
          topValue={55}
          percent={48.2}
          greenWidth={91}
        />
      </div>

      <div className="flex flex-col mt-14">
        <p className="text-[#94A3B8] text-[9px] font-bold uppercase">
          Renewal Retention
        </p>

        <MarkerBarRenewalRetention
          topValue="85-90"
          percent={88}
          greenWidth={34}
        />
      </div>

      <div className="flex flex-col mt-15">
        <p className="text-[#94A3B8] text-[9px] font-bold uppercase">
          New business Target
        </p>

        <BarTarget targetGoal="12" gotTarget="8.1" percent="67"/>
      </div>

      <div className="flex flex-col mt-8">
        <p className="text-[#94A3B8] text-[9px] font-bold uppercase">
          Annual GWP Target
        </p>

        <BarTarget targetGoal="42" gotTarget="28.4" percent="68"/>
      </div>
    </div>
  );
};

export default PortfolioGoals;
