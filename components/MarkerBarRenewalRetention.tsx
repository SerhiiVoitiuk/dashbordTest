import Image from "next/image";

interface MarkerBarProps {
  topValue: string;
  percent: number;
  greenWidth: number;
}

export function MarkerBarRenewalRetention({
  topValue,
  percent,
  greenWidth,
}: MarkerBarProps) { 
  return (
    <div className="relative w-60 flex mt-9">
      <div
        className="absolute -top-6 flex flex-col items-center"
        style={{ transform: "translateX(160%)" }}
      >
        <span className="text-xs text-[#94A3B8]/50">TG {topValue}%</span>
      </div>

      <div
        className="absolute top-6 flex flex-col items-center"
        style={{ transform: "translateX(160%)" }}
      >
        <Image
          src="/icons/ArrowUp.svg"
          alt="ArrowUpIcon"
          width={17}
          height={11}
        />
        <span className="text-xs text-[#3BB979] uppercase">On Target</span>
      </div>

      <div className="w-full h-6 bg-gray-200 rounded-3xl overflow-hidden flex">
        <div className="bg-[#CC0101] flex-1" />
        <div className="bg-[#FDD261]" style={{ width: "80px" }} />
        <div className="bg-[#3BB979]" style={{ width: `${greenWidth}px` }} />
        <div className="bg-[#FDD261]" style={{ width: "84px" }} />

        <div
          className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
          style={{ transform: "translateX(8%)" }}
        >
          <span className="text-xs font-bold text-[#E5E7EB]">{`${percent}%`}</span>
        </div>
      </div>
    </div>
  );
}
