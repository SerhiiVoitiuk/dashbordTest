"use client";


import { PoliciesTable } from "./PoliciesTable";
import { columns } from "./PoliciesColumns";

const PoliciesAccount = ({ policiesData }: {policiesData: PoliciesData[]}) => {

  return (
    <div className="flex flex-col mt-10.5">
      <h1 className="text-[#E5E7EB] text-2xl">Policies</h1>

      <div className="flex flex-col bg-[#1E2233] my-9 py-5 pb-13 px-4 rounded-2xl w-full border border-[#313B54]">
        <PoliciesTable columns={columns} data={policiesData} />
      </div>
    </div>
  );
};

export default PoliciesAccount;
