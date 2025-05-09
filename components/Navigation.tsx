"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { links } from "@/constants";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row mt-4 px-[60px]">
      <Carousel className="w-full">
        <div className="flex flex-row justify-between">
          <CarouselContent className="flex">
            {links.map((link, index) => {
              const isSelected =
                (link.route !== "/" &&
                  pathname.includes(link.route) &&
                  link.route.length > 1) ||
                pathname === link.route;

              return (
                <CarouselItem
                  key={link.id}
                  className={cn("basis-auto", index === 0 ? "pl-4" : "pl-2")}
                >
                  <Link href={link.route}>
                    <div
                      className={cn(
                        "flex flex-row justify-center gap-2 items-center w-full max-w-full overflow-hidden p-3 rounded-3xl",
                        isSelected
                          ? "bg-[#3B82F6]"
                          : "bg-[#0C0F17] border-2 border-[#313B54]"
                      )}
                    >
                      <link.Icon
                        width={20}
                        height={20}
                        className={cn(
                          isSelected ? "text-white" : "text-[#3B82F6]"
                        )}
                      />
                      <span
                        className={cn(
                          "text-bold",
                          isSelected ? "text-white" : "text-[#C5CAD3]"
                        )}
                      >
                        {link.text}
                      </span>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex items-center">
            <CarouselPrevious className="bg-[#0C0F17] text-[#313B54] border-2 border-[#313B54] hover:bg-[#0C0F17] hover:text-[#313B54] cursor-pointer" />
            <CarouselNext className="bg-[#0C0F17] text-[#313B54] border-2 border-[#313B54] hover:bg-[#0C0F17] hover:text-[#313B54] cursor-pointer" />
          </div>
        </div>
      </Carousel>
    </nav>
  );
};

export default Navigation;
