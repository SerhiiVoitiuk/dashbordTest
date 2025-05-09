import React from "react";

const MarketIntelligence = () => {
  return (
    <div className="flex flex-col bg-[#1E2233] py-6 px-4 rounded-2xl w-full border border-[#313B54]">
      <h2 className="text-[#E5E7EB] font-bold text-lg">Market Intelligence</h2>

      <div className="flex flex-col mt-2.5 w-full">
        <div className="flex flex-row gap-2.5">
          <div className="w-4 h-3 rounded-full bg-[#B93B3B]" />
          <p className="text-[#E5E7EB] font-bold">
            Rate hardening in Ceber market - + 15% YoY
          </p>
        </div>
        <hr className="border-t-[1px] border-[#313B54] w-full mt-2" />
        <div className="flex flex-row gap-2.5 mt-3">
          <div className="w-4 h-3 rounded-full bg-[#FDD261]" />
          <p className="text-[#E5E7EB] font-bold">
            New capacity entering Marine market
          </p>
        </div>
        <hr className="border-t-[1px] border-[#313B54] w-full mt-2" />
        <div className="flex flex-row gap-2.5 mt-3">
          <div className="w-4 h-3 rounded-full bg-[#1E40AF]" />
          <p className="text-[#E5E7EB] font-bold">
            Environmental regulatory changes in CA
          </p>
        </div>
        <hr className="border-t-[1px] border-[#313B54] w-full mt-2" />
      </div>
    </div>
  );
};

export default MarketIntelligence;
