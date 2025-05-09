import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { CircleEllipsis } from "lucide-react";
import { getLossRatioColor } from "@/lib/utils";

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "accountName",
    header: () => (
      <span className="pl-1 text-xs uppercase text-[#94A3B8]">
        Account Name/Type
      </span>
    ),
    cell: ({ row }) => {
      const accountName = row.original.accountName;
      const type = row.original.type;
      return (
        <div className="pl-2">
          <div>{accountName}</div>
          <p className="text-xs text-[#94A3B8]">{type}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "line",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Line</span>
    ),
  },
  {
    accessorKey: "broker",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Broker</span>
    ),
  },
  {
    accessorKey: "renewalDate",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Renewal Date</span>
    ),
  },
  {
    accessorKey: "premium",
    header: () => (
      <div className="flex justify-end text-xs uppercase text-[#94A3B8]">
        Premium
      </div>
    ),
    cell: ({ row }) => {
      const premium = row.original.premium;
      return (
        <div className="flex justify-end pr-1">
          <span className="text-sm font-bold text-[#3B82F6]">${premium}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "ratedPremium",
    header: () => (
      <div className="flex justify-end text-xs uppercase text-[#94A3B8]">
        Rated Premium
      </div>
    ),
    cell: ({ row }) => {
      const ratedPremium = row.original.ratedPremium;
      return (
        <div className="flex justify-end pr-1">
          <span className="text-sm text-[#E5E7EB]">${ratedPremium}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "lossRatio",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Loss Ratio</span>
    ),
    cell: ({ row }) => {
      const lossRatio = row.original.lossRatio;
      return (
        <div className="flex justify-center">
          <div
            className={`inline-flex rounded-3xl px-3 py-1 ${getLossRatioColor(
              lossRatio
            )}`}
          >
            <span
              className={`text-sm ${
                lossRatio === "38"
                  ? "text-[#041B2E] font-bold"
                  : "text-[#E5E7EB]"
              }`}
            >
              {lossRatio}%
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "appetite",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Appetite</span>
    ),
    cell: ({ row }) => {
      const appetite = row.original.appetite;
      return (
        <div className="inline-flex w-full justify-center rounded-3xl bg-[#1E40AF]/50 py-1 px-3">
          <span className="uppercase">{appetite}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Status</span>
    ),
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              status === "Active" ? "bg-[#3BB979]" : "bg-[#1E40AF]"
            }`}
          ></div>
          <span>{status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "triage",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Triage</span>
    ),
    cell: ({ row }) => {
      const triage = row.original.triage;
      return (
        <div className="inline-flex w-full justify-center rounded-3xl border border-[#3B82F6] py-1 px-2">
          <span className="text-[#3B82F6]">{triage}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "winnability",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Winnability</span>
    ),
    cell: ({ row }) => {
      const winnability = row.original.winnability;
      return (
        <div className="inline-flex gap-2 max-w-40 items-center rounded-3xl border border-[#3B82F6] py-1 px-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
          </div>
          <span className="text-[#3B82F6] capitalize">{winnability}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <div className="pr-2">
        <CircleEllipsis className="h-6 w-6 text-[#E5E7EB] cursor-pointer rotate-90" />
      </div>
    ),
  },
];
