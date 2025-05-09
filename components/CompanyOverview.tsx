import Image from "next/image";
import { CircleAlert, MoveRight } from "lucide-react";

const CompanyOverview = () => {
  return (
    <div className="flex flex-row mt-11 gap-10 justify-between">
      <div className="flex flex-row">
        <div className="flex items-start">
          <Image src="/icons/Logo.svg" alt="Logo" width={102} height={102} />
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="text-[#E5E7EB] text-2xl">Maritime Logistics Corp</h1>
          <div className="flex flex-row gap-3 mt-3">
            <div className="text-[#E5E7EB]">
              <p className="text-sm">425 Harbor Boulevard, Suite 300</p>
              <p className="text-sm">Seattle, WA 98104</p>
            </div>
            <div className="w-px h-full bg-[#313B54]" />
            <div>
              <p className="uppercase text-[#94A3B8] text-sm">Existing account</p>
              <p className=" text-[#E5E7EB] text-sm">54383</p>
            </div>
            <div className="w-px h-full bg-[#313B54]" />
            <div>
              <p className="uppercase text-[#94A3B8] text-sm">Broker</p>
              <p className=" text-[#E5E7EB] text-sm">Marsh McLennan</p>
            </div>
            <div className="w-px h-full bg-[#313B54]" />
            <div>
              <p className="uppercase text-[#94A3B8] text-sm">Underwriter</p>
              <p className=" text-[#E5E7EB] text-sm">Kate Johnson</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#1E2233] border border-[#FDD261] p-4 rounded-3xl mt-[-50px] ">
        <div className="flex flex-row items-center gap-1">
          <CircleAlert className="text-[#FDD261] w-5 h-5" />
          <h2 className="text-[#FDD261] text-lg">Needs Attention</h2>
        </div>

        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-col">
            <p className="text-[#E5E7EB] text-sm">Marine Survey Required</p>
            <p className="text-[#8A8C98] text-sm">Scheduled for 06/12/2025</p>
            <div className="flex flex-row items-center text-center gap-0.5 cursor-pointer">
              <p className="text-[#3B82F6] text-sm">Review Details link</p>
              <MoveRight className="text-[#3B82F6] w-5 h-5" strokeWidth={1} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#E5E7EB] text-sm">Loss Control Complete</p>
            <p className="text-[#8A8C98] text-sm">Last inspection 02/15/2025</p>
            <div className="flex flex-row items-center gap-0.5 cursor-pointer">
              <p className="text-[#3B82F6] text-sm">View report</p>
              <MoveRight className="text-[#3B82F6] w-5 h-5" strokeWidth={1} />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[#E5E7EB] text-sm">Claims Review Required</p>
            <p className="text-[#8A8C98] text-sm">3 open claims // $245,000 TTl</p>
            <div className="flex flex-row items-center gap-0.5 cursor-pointer">
              <p className="text-[#3B82F6] text-sm">View claims</p>
              <MoveRight className="text-[#3B82F6] w-5 h-5" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
