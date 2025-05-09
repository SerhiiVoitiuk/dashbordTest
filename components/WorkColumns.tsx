import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { CircleEllipsis } from "lucide-react";
import Avatar from "./Avatar";
import { getInitials } from "@/lib/utils";

export const columns: ColumnDef<WorkItem>[] = [
  {
    accessorKey: "originator",
    header: () => (
      <span className="text-xs pl-1 uppercase text-[#94A3B8]">Originator</span>
    ),
    cell: ({ row }) => {
      const originator = row.original.originator;

      return (
        <div className="flex flex-row gap-1 items-center pl-2">
          <Avatar
            text={originator === "Me" ? "ME" : getInitials(originator)}
            size="8"
            textSize="text-xs"
          />
          <div>{originator}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "client",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Client/Line</span>
    ),
    cell: ({ row }) => {
      const client = row.original.client;
      const line = row.original.line;
      return (
        <div>
          <div>{client}</div>
          <p className="text-xs text-[#94A3B8]">{line}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Type</span>
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
            className={`w-2 h-2 rounded-full ${status === 'New' ? 'bg-[#3B82F6]' : status === 'Completed' ? 'bg-[#3BB979]' : 'bg-[#FDD261]'}`}
          ></div>
          <span>{status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "created",
    header: () => (
      <span className="text-xs uppercase text-[#94A3B8]">Created</span>
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
