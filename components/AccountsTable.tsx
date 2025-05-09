"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  FilterFn,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AccountsTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const buttonAccountData = [
  {
    id: 1,
    text: "Filter",
  },
  {
    id: 2,
    text: "Sort",
  },
  {
    id: 3,
    text: "Group",
  },
  {
    id: 4,
    text: "+New",
  },
];

const globalFilterFn: FilterFn<any> = (row, _columnId, filterValue) => {
  const search = filterValue.toLowerCase();

  const searchableFields = [
    row.original.accountName,
    row.original.type,
    row.original.line,
    row.original.broker,
    row.original.renewalDate,
    row.original.premium,
    row.original.ratedPremium,
    row.original.lossRatio,
    row.original.appetite,
    row.original.status,
    row.original.triage,
    row.original.winnability,
  ];

  return searchableFields.some((field) =>
    String(field ?? "")
      .toLowerCase()
      .includes(search)
  );
};

export function AccountsTable<TData, TValue>({
  columns,
  data,
}: AccountsTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <>
      <div className="flex pb-6">
        <h2 className="text-[#E5E7EB] text-2xl">My accounts</h2>
        <Input
          placeholder="Search"
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-64 ml-7 py-1.5 mr-4 border-0 bg-[#232838] rounded-3xl placeholder:text-[#596275]/50 text-[#E5E7EB]"
        />
        <div className="flex flex-row gap-2">
          {buttonAccountData.map((button, index) => {
            const isLast = index === buttonAccountData.length - 1;
            return (
              <Button
                key={button.id}
                className={`rounded-3xl text-xs px-8 py-1.5 cursor-pointer ${
                  isLast
                    ? "text-white bg-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
                    : "text-[#3B82F6] hover:text-[#3B82F6] bg-transparent hover:bg-transparent border border-[#3B82F6] hover:border-[#3B82F6]"
                }`}
              >
                {button.text}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="rounded-md">
        <Table>
          <TableHeader className="bg-[#252A3D]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`text-[#E5E7EB] border-b-[1px] border-[#313B54] text-xs ${
                    index % 2 !== 0 ? "bg-[#252A3D]" : ""
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border-b-[1px] border-[#313B54]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No searching results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
