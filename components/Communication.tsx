import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Paperclip } from "lucide-react";

const Communication = () => {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-[#E5E7EB] text-2xl">Communication</h1>

      <div className="flex flex-col w-full gap-4 bg-[#1E2233] rounded-2xl px-5 py-5 mt-5 border border-[#313B54] justify-between">
        <div className="flex flex-row gap-2.5">
          <Input
            className="border border-[#293245] w-62 h-7 pl-4 rounded-2xl placeholder:text-[#596275] text-[#E5E7EB]"
            placeholder="Search"
          />
          <Button className="border border-[#3B82F6] bg-transparent hover:bg-transparent text-[#3B82F6] hover:text-[#3B82F6] w-25 h-7 pl-4 rounded-2xl cursor-pointer">
            Filter
          </Button>
          <Button className="border border-[#3B82F6] bg-transparent hover:bg-transparent text-[#3B82F6] hover:text-[#3B82F6] w-25 h-7 pl-4 rounded-2xl cursor-pointer">
            Group
          </Button>
        </div>

        <div className="flex flex-row mt-10 gap-3.5 justify-between">
          <div className="flex flex-col gap-4 flex-1">
            <div className="pt-8 pb-5 px-5.5 bg-[#252A3D] rounded-2xl border border-[#1E40AF] flex flex-col">
              <div className="flex flex-row gap-2.5 items-center">
                <div className="bg-[#1E40AF] px-3.5 py-2 rounded-full text-[#E5E7EB] font-bold">
                  New
                </div>
                <h1 className="text-[#E5E7EB] text-2xl ">
                  Policy Renewal - Auto Insurance 5/15/25
                </h1>
              </div>
              <div className="flex flex-col mt-4 gap-4">
                <p className="text-[#8A8C98] text-lg">
                  Michael Roberts // Arp 5
                </p>
                <p className="text-[#E5E7EB] text-lg">
                  Hello Arthur, I`m reaching out to regarding the upcoming auto
                  policy renewal for Real Estate Group, LLC. The current policy
                  expiries on 6/30/2024. Would you like to review coverage
                  options before proceeding with the renewal? I`ve attached the
                  current policy details and premium breakdown for your
                  reference.
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-2.5">
                <div className="bg-[#3BB979]/50 px-4 w-41 h-7 text-center rounded-full text-[#E5E7EB] flex flex-row items-center gap-3 cursor-pointer">
                  <Paperclip className="text-[#E5E7EB] h-3 w-3" />
                  <span>3 attachments</span>
                </div>
                <div className="bg-[#3B82F6] px-3.5 py-2 w-30 h-10 rounded-full text-[#E5E7EB] text-center cursor-pointer">
                  Reply
                </div>
              </div>
            </div>

            <div className="pt-8 pb-5 px-5.5 bg-[#252A3D] rounded-2xl border border-[#3B82F6] flex flex-col">
              <div className="flex flex-row gap-2.5 items-center">
                <div className="bg-[#1E40AF] px-3.5 py-2 rounded-full text-[#E5E7EB] font-bold">
                  New
                </div>
                <h1 className="text-[#E5E7EB] text-2xl">
                  New Quote Request - Workers Comp Insurance
                </h1>
              </div>
              <div className="flex flex-col mt-4 gap-4">
                <p className="text-[#8A8C98] text-lg">Sarah Chen // Apr 5</p>
                <p className="text-[#E5E7EB] text-lg">
                  Hello Arthur, Real Estate Group has expressed interest in
                  adding workers compensation coverage to their insurance
                  portfolio. I`ve completed the initial risk assessment based
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-2.5">
                <div className="bg-[#3BB979]/50 px-4 w-41 h-7 text-center rounded-full text-[#E5E7EB] flex flex-row items-center gap-3 cursor-pointer">
                  <Paperclip className="text-[#E5E7EB] h-3 w-3" />
                  <span>3 attachments</span>
                </div>
                <div className="bg-[#3B82F6] px-3.5 py-2 w-30 h-10 rounded-full text-[#E5E7EB] text-center cursor-pointer">
                  Reply
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <div className="pt-8 pb-5 px-5.5 bg-[#252A3D] rounded-2xl flex flex-col">
              <div className="flex flex-row gap-2.5 items-center">
                <div className="bg-[#1E40AF] px-3.5 py-2 rounded-full text-[#E5E7EB]">
                  Responded
                </div>
                <h1 className="text-[#E5E7EB] text-2xl">
                  Fwd: New Submission - BPM Real Estate - EFF 4/1/2024
                </h1>
              </div>
              <div className="flex flex-col mt-4 gap-4">
                <p className="text-[#8A8C98] text-lg">
                  Joshua Dunmire // Mar 25
                </p>
                <p className="text-[#E5E7EB] text-lg">
                  Arthur, attached please find our submission for the above mentioned applicant. We have... 
                </p>
              </div>
            </div>

            <div className="pt-8 pb-5 px-5.5 bg-[#252A3D] rounded-2xl flex flex-col">
              <div className="flex flex-row gap-2.5 items-center">
                <h1 className="text-[#E5E7EB] text-2xl">
                  New Business: BPM Real Estate Group, LLC
                </h1>
              </div>
              <div className="flex flex-col mt-4 gap-4">
                <p className="text-[#8A8C98] text-lg">Isabel Kreller // Feb 28 </p>
                <p className="text-[#E5E7EB] text-lg">
                  Hello Arthur, I am pleased to present you with a submission on this client&#39;s upco...  
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-2.5">
                <div className="bg-[#3BB979]/50 px-4 w-41 h-7 text-center rounded-full text-[#E5E7EB] flex flex-row items-center gap-3 cursor-pointer">
                  <Paperclip className="text-[#E5E7EB] h-3 w-3" />
                  <span>5 attachments</span>
                </div>
                <div className="bg-[#3B82F6] px-3.5 py-2 w-30 h-10 rounded-full text-[#E5E7EB] text-center cursor-pointer">
                  Reply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
