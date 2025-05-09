"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CircleArrowDown, CircleArrowUp, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const AccountDetails = () => {
  const [openItem, setOpenItem] = useState("item-1");

  const handleValueChange = (value: string) => {
    setOpenItem(value);
  };

  return (
    <div className="flex flex-col mt-19">
      <h1 className="text-[#E5E7EB] text-2xl">Account Details</h1>

      <div className="flex flex-row bg-[#1E2233] rounded-2xl mt-8 py-8 px-5 gap-10 border border-[#313B54]">
        <div className="flex">
          <Accordion
            type="single"
            value={openItem}
            onValueChange={handleValueChange}
            collapsible
            className="w-[255px]"
          >
            <AccordionItem
              value="item-1"
              className={`rounded-xl py-2 px-5 text-[#E5E7EB] ${
                openItem === "item-1" ? "bg-[#252A3D] mb-2" : "bg-[#1E2233]"
              }`}
            >
              <AccordionTrigger className="text-[#E5E7EB] text-lg uppercase cursor-pointer [&>svg]:hidden">
                <span>Decision support</span>
                <span
                  className={`flex items-center justify-center w-7 h-8 rounded-sm bg-[#252A38] text-[#E5E7EB] text-lg relative -translate-y-4 ${
                    openItem === "item-1" ? "border border-[#E5E7EB]" : ""
                  } `}
                >
                  4
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[#3B82F6]">
                Winnability
              </AccordionContent>
              <AccordionContent>
                Exposure Review & Suggested Coverage
              </AccordionContent>
              <AccordionContent>Portfolio strategy Alignment</AccordionContent>
              <AccordionContent>Broker Analytics</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className={`rounded-xl py-2 px-5 text-[#E5E7EB] ${
                openItem === "item-2" ? "bg-[#252A3D] mb-2" : "bg-[#1E2233]"
              }`}
            >
              <AccordionTrigger className="text-[#E5E7EB] text-lg uppercase cursor-pointer justify-between [&>svg]:hidden">
                <span>Risk Assessment</span>
                <span
                  className={`flex items-center justify-center w-7 h-8 rounded-sm bg-[#252A38] text-[#E5E7EB] text-lg relative -translate-y-4 ${
                    openItem === "item-2" ? "border border-[#E5E7EB]" : ""
                  } `}
                >
                  6
                </span>
              </AccordionTrigger>
              <AccordionContent>Portfolio strategy Alignment</AccordionContent>
              <AccordionContent>Portfolio strategy Alignment</AccordionContent>
              <AccordionContent>Broker Analytics</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className={`rounded-xl py-2 px-5 text-[#E5E7EB] ${
                openItem === "item-3" ? "bg-[#252A3D]" : "bg-[#1E2233]"
              }`}
            >
              <AccordionTrigger className="text-[#E5E7EB] text-lg uppercase cursor-pointer justify-between [&>svg]:hidden">
                <span>Documents and compliance</span>
                <span
                  className={`flex items-center justify-center w-7 h-8 rounded-sm bg-[#252A38] text-[#E5E7EB] text-lg relative -translate-y-4 ${
                    openItem === "item-3" ? "border border-[#E5E7EB]" : ""
                  } `}
                >
                  2
                </span>
              </AccordionTrigger>
              <AccordionContent>Portfolio strategy Alignment</AccordionContent>
              <AccordionContent>Broker Analytics</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="relative flex flex-col w-full">
          <div className="border-l-1 border-dashed border-[#8A8B98] absolute left-[-20px] top-0 bottom-0"></div>
          <div className="text-[#E5E7EB] text-3xl">Winnability</div>

          <div className="flex flex-row mt-5 gap-2">
            <div className="flex flex-col bg-[#252A3D] p-5 rounded-2xl justify-between w-full">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-4">
                  <p className="text-[#E5E7EB] text-2xl">Overall Score</p>
                </div>
                <div className="text-[#E5E7EB] mt-5 flex flex-row gap-1">
                  <div className="text-4xl">82%</div>
                  <div className="flex gap-2 items-center rounded-3xl border border-[#3B82F6] py-1 px-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                    </div>
                    <span className="text-[#3B82F6] capitalize text-sm">
                      Very Strong
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#252A3D] p-5 rounded-2xl justify-between w-full">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-4">
                  <p className="text-[#E5E7EB] text-2xl">Historical trend</p>
                </div>
                <div className="flex justify-center items-center p-4">
                  <svg
                    width="100%"
                    height="46"
                    viewBox="0 0 284 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 44L29.73 31.35L56.31 34.89L90.58 21.23L129.87 18.7L170.69 31.35L209.98 10.6H248.11L282 2"
                      stroke="#3B82F6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[#8A8B98] text-xs mt-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>Nov</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#252A3D] p-5 rounded-2xl justify-between w-full">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-4">
                  <p className="text-[#E5E7EB] text-2xl">Position</p>
                </div>

                <div className="flex flex-row items-center">
                  <div className="flex items-center mt-2 gap-3">
                    <div className="w-[213px]">
                      <div className="h-5.5 bg-[#313853] rounded-r-3xl overflow-hidden flex">
                        <div className="bg-target rounded-r-3xl w-[185px]" />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-[#E5E7EB] font-bold text-xs whitespace-nowrap">
                        Your score: 82%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="flex items-center mt-2 gap-3">
                    <div className="w-[213px]">
                      <div className="h-5.5 bg-[#313853] rounded-r-3xl overflow-hidden flex">
                        <div className="bg-target rounded-r-3xl w-[138px]" />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-[#E5E7EB] font-bold text-xs whitespace-nowrap">
                        Market Avg: 68%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="flex items-center mt-2 gap-3">
                    <div className="w-[213px]">
                      <div className="h-5.5 bg-[#313853] rounded-r-3xl overflow-hidden flex">
                        <div className="bg-target rounded-r-3xl w-[193px]" />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="text-[#E5E7EB] font-bold text-xs whitespace-nowrap">
                        Top competitor: 88%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-6 gap-2">
            <div className="flex flex-col bg-[#252A3D] p-5 rounded-2xl justify-between w-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <CircleArrowUp className="text-[#3BB979] h-7 w-7" />
                  <div className="text-[#E5E7EB] text-xl">
                    Increasing Winnability
                  </div>
                </div>

                <div className="flex flex-row items-center mt-11">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#3BB979] border-[#3BB979] flex justify-center items-center">
                    1
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">
                      Brokers relationship
                    </div>
                    <div className="flex items-center mt-2 gap-3">
                      <div className="w-[274px]">
                        <div className="h-5 bg-increasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">+28%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-5">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#3BB979] border-[#3BB979] flex justify-center items-center">
                    2
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">Loss history</div>
                    <div className="flex items-center mt-2 gap-3">
                      <div className="w-[225px]">
                        <div className="h-5 bg-increasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">+22%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-5">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#3BB979] border-[#3BB979] flex justify-center items-center">
                    3
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">Industry growth</div>
                    <div className="flex items-center mt-2 gap-3">
                      <div className="w-[182px]">
                        <div className="h-5 bg-increasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">+16%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-5">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#3BB979] border-[#3BB979] flex justify-center items-center">
                    4
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">
                      Multiline opportunity
                    </div>
                    <div className="flex items-center mt-2 gap-3">
                      <div className="w-[182px]">
                        <div className="h-5 bg-increasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">+11%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#252A3D] p-5 rounded-2xl justify-between w-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <CircleArrowDown className="text-[#FDD261] h-7 w-7" />
                  <div className="text-[#E5E7EB] text-xl">
                    Decreasing Winnability
                  </div>
                </div>

                <div className="flex flex-row items-center mt-11">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#FDD261] border-[#FDD261] flex justify-center items-center">
                    1
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">Premium pricing</div>
                    <div className="flex items-center mt-2 gap-3">
                      <div className="w-[274px]">
                        <div className="h-5 bg-decreasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">-24%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-5">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#FDD261] border-[#FDD261] flex justify-center items-center">
                    2
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">Total exposure</div>
                    <div className="flex items-center mt-2 gap-3">
                      <div className="w-[225px]">
                        <div className="h-5 bg-decreasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">-18%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-5">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#FDD261] border-[#FDD261] flex justify-center items-center">
                    3
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">Loss ration trend</div>
                    <div className="flex items-center mt-2 gap-3">
                      <div className="w-[182px]">
                        <div className="h-5 bg-decreasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">-13%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-5">
                  <div className="h-12 w-12 rounded-3xl border-2 text-[#FDD261] border-[#FDD261] flex justify-center items-center">
                    4
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="flex text-[#E5E7EB]">
                      Market competition
                    </div>
                    <div className="flex items-center mt-2 gap-16">
                      <div className="w-[128px]">
                        <div className="h-5 bg-decreasing rounded-r-3xl overflow-hidden flex" />
                      </div>

                      <div className="flex justify-center">
                        <div className="text-[#8A8B98] text-xs">-5%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6 bg-[#252A3D] p-5 rounded-2xl justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <Rocket className="text-[#3BB979]" />
              <span className="text-[#3BB979] text-lg">
                AI-Powered Recommendations
              </span>
            </div>

            <div className="flex flex-row items-center justify-between mt-8 gap-15">
              <div className="flex flex-col">
                <p className="text-[#E5E7EB]">
                  Offer 5% premium discount in exchange for 3-year commitment
                </p>
                <p className="text-[#8A8B98]">
                  Historical win rate increases 24% with multi-year commitments.
                  Current pricing is 12% above market average. This approach
                  would strengthen retention while maintaining adequate
                  profitability.
                </p>
              </div>

              <Button className="bg-[#3BB979] hover:bg-[#3BB979] text-[#1D2125] hover:text-[#1D2125] py-5 px-12 rounded-3xl cursor-pointer">
                Apply
              </Button>
            </div>

            <div className="flex flex-row items-center justify-between mt-8 gap-15">
              <div className="flex flex-col">
                <p className="text-[#E5E7EB]">
                  Propose risk control services for cargo handling procedures
                </p>
                <p className="text-[#8A8B98]">
                  Can potentially reduce loss ratio by 15-20% based on similar maritime accounts in your portfolio.
                  Specific focus on loading/unloading operations would address the most frequent claim scenarios.
                </p>
              </div>

              <Button className="bg-[#3BB979] hover:bg-[#3BB979] text-[#1D2125] hover:text-[#1D2125] py-5 px-12 rounded-3xl cursor-pointer">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
