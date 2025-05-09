"use client";

import { useState } from "react";
import WorkButton from "./WorkButton";
import { buttonWorkData } from "@/constants";
import data from '../data.json';
import { columns } from "./WorkColumns";
import { WorkTable } from "./WorkTable";


const WorkQueue = () => {
  const [workData] = useState(data.work);
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div className="flex flex-col bg-[#1E2233] py-5 px-4 rounded-2xl w-full flex-1 border border-[#313B54]">
      <h2 className="text-[#E5E7EB] text-lg">Work Queue</h2>
      <div className="flex flex-row gap-2 mt-5">
        {buttonWorkData.map((button) => (
          <WorkButton
            key={button.id}
            text={button.text}
            isActive={activeButton === button.id}
            onClick={() => handleButtonClick(button.id)}
          />
        ))}
      </div>

      <div className="mt-6">
        <WorkTable columns={columns} data={workData}/>
      </div>
    </div>
  );
};

export default WorkQueue;
