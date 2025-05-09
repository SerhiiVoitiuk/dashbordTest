"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const buildHref = (index: number) =>
    "/" + segments.slice(0, index + 1).join("/");

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center">
        <BreadcrumbItem>
          <Link href="/" className="text-[#E5E7EB] text-xs cursor-pointer">
            Dashboard
          </Link>
        </BreadcrumbItem>

        {segments.map((segment, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-2">//</span>

            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                <BreadcrumbPage className="text-[#E5E7EB] text-xs flex items-center cursor-pointer">
                  <span>{capitalize(segment)}</span>
                  <span className="mx-2">//</span>
                  <span className="text-[#3B82F6]">Maritime Logistics Corp</span>
                </BreadcrumbPage>
              ) : (
                <Link
                  href={buildHref(index)}
                  className="text-[#E5E7EB] text-xs"
                >
                  {capitalize(segment)}
                </Link>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
