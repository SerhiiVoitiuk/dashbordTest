import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { CircleEllipsis } from "lucide-react";
import { calculateTotal, getLossRatioColor } from "@/lib/utils";
import { Ship, ShieldCheck, ShieldUser } from "lucide-react";

function getLineIcon(line: string) {
  let icon = null;
  let bgColor = "";

  switch (line) {
    case "Marine Cargo":
      icon = <Ship className="h-3 w-3 stroke-white" />;
      bgColor = "bg-[#3B82F6]";
      break;
    case "General Liability":
      icon = <ShieldCheck className="h-3 w-3 stroke-white" />;
      bgColor = "bg-[#3BB979]";
      break;
    case "Workers Comp":
      icon = <ShieldUser className="h-3 w-3 stroke-white" />;
      bgColor = "bg-[#6A3BF6]";
      break;
    case "Umbrella":
      icon = <ShieldCheck className="h-3 w-3 stroke-white" />;
      bgColor = "bg-[#B93B3B]";
      break;
    default:
      return null;
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full ${bgColor} w-5 h-5`}
    >
      {icon}
    </div>
  );
}

export const columns: ColumnDef<PoliciesData>[] = [
  {
    accessorKey: "accountName",
    header: () => (
      <span className="pl-1 text-xs uppercase text-[#94A3B8]">Line</span>
    ),
    cell: ({ row }) => {
      const line = row.original.line;
      const lineCode = row.original.lineCode;
      return (
        <div className="pl-2">
          <div className="flex items-center gap-1">
            {getLineIcon(line)}
            <span>{line}</span>
          </div>
          <p className="text-xs text-[#94A3B8]">{lineCode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "effDate",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">eff.Date</span>
    ),
  },
  {
    accessorKey: "expDate",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">exp.Date</span>
    ),
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
              status === "Active" ? "bg-[#3BB979]" : "bg-[#FDD261]"
            }`}
          ></div>
          <span>{status}</span>
        </div>
      );
    },
    footer: (info) => {
      const rowsLength = info.table.getFilteredRowModel().rows.length;
      return (
        <span className="text-base pl-1 uppercase text-[#E5E7EB]">
          Total({rowsLength}):
        </span>
      );
    },
  },
  {
    accessorKey: "expiringTech",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Expiring Tech</span>
    ),
    cell: ({ row }) => {
      const expiringTech = row.original.expiringTech;
      return (
        <div className="flex justify-start ml-1">
          <span>${expiringTech}</span>
        </div>
      );
    },
    footer: (info) => {
      const total = calculateTotal(
        info.table.getFilteredRowModel().rows,
        "expiringTech"
      );
      return <span className="text-base pl-1 text-[#E5E7EB]">${total}</span>;
    },
  },
  {
    accessorKey: "expiringPremium",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Expiring Premium</span>
    ),
    cell: ({ row }) => {
      const expiringPremium = row.original.expiringPremium;
      return (
        <div className="flex justify-start ml-1">
          <span>${expiringPremium}</span>
        </div>
      );
    },
    footer: (info) => {
      const total = calculateTotal(
        info.table.getFilteredRowModel().rows,
        "expiringPremium"
      );
      return <span className="text-base pl-1 text-[#E5E7EB]">${total}</span>;
    },
  },
  {
    accessorKey: "renewalToTech",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Renewal To Tech</span>
    ),
    cell: ({ row }) => {
      const renewalToTech = row.original.renewalToTech;
      return (
        <div className="flex justify-start ml-1">
          <span>${renewalToTech}</span>
        </div>
      );
    },
    footer: (info) => {
      const total = calculateTotal(
        info.table.getFilteredRowModel().rows,
        "renewalToTech"
      );
      return <span className="text-base pl-1 text-[#E5E7EB]">${total}</span>;
    },
  },
  {
    accessorKey: "renewalTech",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Renewal Tech</span>
    ),
    cell: ({ row }) => {
      const renewalTech = row.original.renewalTech;
      return (
        <div className="flex justify-start ml-1">
          <span>${renewalTech}</span>
        </div>
      );
    },
    footer: (info) => {
      const total = calculateTotal(
        info.table.getFilteredRowModel().rows,
        "renewalTech"
      );
      return <span className="text-base pl-1 text-[#E5E7EB]">${total}</span>;
    },
  },
  {
    accessorKey: "renewalPremium",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Renewal Premium</span>
    ),
    cell: ({ row }) => {
      const renewalPremium = row.original.renewalPremium;
      return (
        <div className="flex justify-start ml-1">
          <span>${renewalPremium}</span>
        </div>
      );
    },
    footer: (info) => {
      const total = calculateTotal(
        info.table.getFilteredRowModel().rows,
        "renewalPremium"
      );
      return <span className="text-base pl-1 text-[#E5E7EB]">${total}</span>;
    },
  },
  {
    accessorKey: "rateChange",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Rate Change</span>
    ),
    cell: ({ row }) => {
      const rateChange = row.original.rateChange;
      return (
        <div className="flex justify-start ml-1">
          <span
            className={`text-sm ${
              rateChange === "6.1" || rateChange === "10.0"
                ? "text-[#B93B3B]"
                : "text-[#E5E7EB]"
            }`}
          >
            {rateChange}
            {!isNaN(Number(rateChange.replace(/,/g, "."))) ? "%" : ""}
          </span>
        </div>
      );
    },
    footer: () => <span className="pl-1 uppercase text-[#E5E7EB]">6.9%</span>,
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
          {!isNaN(Number(lossRatio.replace(/,/g, "."))) ? (
            <div
              className={`inline-flex rounded-3xl px-3 py-1 ${getLossRatioColor(
                lossRatio
              )}`}
            >
              <span
                className={`text-sm ${
                  lossRatio === "55" || lossRatio === "58,3"
                    ? "text-[#041B2E] font-bold"
                    : "text-[#E5E7EB]"
                }`}
              >
                {lossRatio}%
              </span>
            </div>
          ) : (
            <span className="text-sm text-[#E5E7EB]">{lossRatio}</span>
          )}
        </div>
      );
    },
    footer: () => (
      <div className="flex justify-center">
        <div className="inline-flex rounded-3xl px-3 py-1 bg-[#FDD261]">
          <span className="text-sm text-[#041B2E] font-bold">55%</span>
        </div>
      </div>
    ),
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
