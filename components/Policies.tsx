import React from "react";
import {
  Ship,
  ShieldCheck,
  ShieldUser,
  Building2,
  Umbrella,
} from "lucide-react";

const Policies = () => {
  return (
    <div className="flex flex-col mt-20">
      <h1 className="text-[#E5E7EB] text-2xl">Policies</h1>

      <div className="flex flex-row justify-between w-full gap-4 bg-[#1E2233] rounded-2xl px-5 py-5 mt-5 border border-[#313B54]">
        <div className="flex flex-col py-5 px-5 bg-[#252A3D] rounded-2xl w-full">
          <div className="flex flex-row gap-2">
            <Ship className="w-6 h-6 text-[#3B82F6]" />
            <div className="text-[#E5E7EB] text-base font-bold">
              Marine Cargo
            </div>
          </div>
          <div className="flex flex-col mt-1.5">
            <p className="text-sm text-[#8A8B98]">Premium: $625.000</p>
            <p className="text-sm text-[#8A8B98]">Eff.Date 6/30/2026</p>
          </div>
        </div>

        <div className="flex flex-col py-5 px-5 bg-[#252A3D] rounded-2xl w-full">
          <div className="flex flex-row gap-2">
            <ShieldCheck className="w-6 h-6 text-[#3BB979]" />
            <div className="text-[#E5E7EB] text-base font-bold">
              General Liability
            </div>
          </div>
          <div className="flex flex-col mt-1.5">
            <p className="text-sm text-[#8A8B98]">Premium: $175.000</p>
            <p className="text-sm text-[#8A8B98]">Eff.Date 6/30/2026</p>
          </div>
        </div>

        <div className="flex flex-col py-5 px-5 bg-[#252A3D] rounded-2xl w-full">
          <div className="flex flex-row gap-2">
            <ShieldUser className="w-6 h-6 text-[#6A3BF6]" />
            <div className="text-[#E5E7EB] text-base font-bold">
              Workers Comp
            </div>
          </div>
          <div className="flex flex-col mt-1.5">
            <p className="text-sm text-[#8A8B98]">Premium: $75.000</p>
            <p className="text-sm text-[#8A8B98]">Eff.Date ---</p>
          </div>
        </div>

        <div className="flex flex-col py-5 px-5 bg-[#252A3D] rounded-2xl w-full">
          <div className="flex flex-row gap-2">
            <Building2 className="w-6 h-6 text-[#FDD261]" />
            <div className="text-[#E5E7EB] text-base font-bold">Prorerty</div>
          </div>
          <div className="flex flex-col mt-1.5">
            <p className="text-sm text-[#8A8B98]">Premium: $64,829.83</p>
            <p className="text-sm text-[#8A8B98]">Eff.Date ---</p>
          </div>
        </div>

        <div className="flex flex-col py-5 px-5 bg-[#252A3D] rounded-2xl w-full">
          <div className="flex flex-row gap-2">
            <Umbrella className="w-6 h-6 text-[#B93B3B]" />
            <div className="text-[#E5E7EB] text-base font-bold">Umbrella</div>
          </div>
          <div className="flex flex-col mt-1.5">
            <p className="text-sm text-[#8A8B98]">Premium: $275,000</p>
            <p className="text-sm text-[#8A8B98]">Eff.Date 13/03/2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
