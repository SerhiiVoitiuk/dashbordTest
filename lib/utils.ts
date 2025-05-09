import { Row } from "@tanstack/react-table";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export function getLossRatioColor(lossRatio: string): string {
  const value = parseInt(lossRatio, 10);

  if (value > 60) {
    return "bg-[#B93B3B]";
  } else if (value > 35) {
    return "bg-[#FDD261]";
  } else {
    return "bg-[#3BB979]";
  }
}

export function calculateTotal<T extends object>(
  rows: Row<T>[],
  key: keyof T
): string {
  const total = rows.reduce((sum, row) => {
    const value = row.original[key];
    const cleanedValue =
      typeof value === 'string' ? value.replace(/,/g, '').trim() : value;
    const numberValue = Number(cleanedValue);
    if (!isNaN(numberValue)) {
      return sum + numberValue;
    }
    return sum;
  }, 0);

  return total.toLocaleString('en-US');
}