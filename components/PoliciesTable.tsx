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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface PoliciesTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const buttonAccountData = [
  {
    id: 1,
    text: "Filter",
  },
  {
    id: 3,
    text: "Group",
  },
];

const globalFilterFn: FilterFn<any> = (row, _columnId, filterValue) => {
  const search = filterValue.toLowerCase();

  const searchableFields = [
    row.original.line,
    row.original.lineCode,
    row.original.effDate,
    row.original.status,
    row.original.expiringTech,
    row.original.expiringPremium,
    row.original.renewalToTech,
    row.original.renewalTech,
    row.original.renewalPremium,
    row.original.rateChange,
    row.original.lossRatio,
  ];

  return searchableFields.some((field) =>
    String(field ?? "")
      .toLowerCase()
      .includes(search)
  );
};

export function PoliciesTable<TData, TValue>({
  columns,
  data,
}: PoliciesTableProps<TData, TValue>) {
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
        <Input
          placeholder="Search"
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="border border-[#293245] w-62 h-7 pl-4 rounded-2xl placeholder:text-[#596275] text-[#E5E7EB] mr-3"
        />
        <div className="flex flex-row gap-2">
          {buttonAccountData.map((button) => (
            <Button
              key={button.id}
              className="border border-[#3B82F6] bg-transparent hover:bg-transparent text-[#3B82F6] hover:text-[#3B82F6] w-25 h-7 pl-4 rounded-2xl cursor-pointer"
            >
              {button.text}
            </Button>
          ))}
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
                  className={`text-[#E5E7EB] border-b-[1px] border-[#313B54] text-sm ${
                    index % 2 !== 0 ? "bg-[#252A3D]" : ""
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border-b-[1px] py-2 border-[#313B54]"
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
          {table.getRowModel().rows?.length > 0 && (
            <TableFooter className="bg-[#252A3D]">
              {table.getFooterGroups().map((footerGroup) => (
                <TableRow key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <TableCell
                      key={header.id}
                      className="border-b-[1px] border-[#313B54] text-xs uppercase text-[#94A3B8]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableFooter>
          )}
        </Table>
      </div>
    </>
  );
}
