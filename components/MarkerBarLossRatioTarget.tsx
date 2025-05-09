import Image from "next/image";

interface MarkerBarProps {
  topValue: number;
  percent: number;
  greenWidth: number;
}

export function MarkerBarLossRatioTarget({ topValue, percent, greenWidth }: MarkerBarProps) {
  const totalWidth = 240;
  const topPositionPx = (topValue / 100) * totalWidth;
  const bottomOffsetPercent = topValue - percent;
  const roundedValue = Math.round(bottomOffsetPercent * 10) / 10;
  const bottomPositionPx = (roundedValue / 100) * greenWidth;
  const textPositionPx = (percent / 100) * greenWidth;
  

  return (
    <div className="relative w-60 flex mt-9">
      <div
        className="absolute -top-8 flex flex-col items-center"
        style={{ left: `${topPositionPx}px`, transform: "translateX(-50%)" }}
      >
        <span className="text-xs text-[#94A3B8]/50">TG {topValue}%</span>
        <Image
          src="/icons/ArrowDown.svg"
          alt="ArrowDownIcon"
          width={17}
          height={11}
        />
      </div>

      <div
        className="absolute top-6 flex flex-col items-center"
        style={{ left: `${bottomPositionPx}px`, transform: "translateX(50%)" }}
      >
        
        <Image
          src="/icons/ArrowUp.svg"
          alt="ArrowUpIcon"
          width={17}
          height={11}
        />
        <span className="text-xs text-[#3BB979]">-{roundedValue}%(GOOD)</span>
      </div>

      <div className="w-60 h-6 bg-gray-200 rounded-3xl overflow-hidden flex">
        <div className="bg-[#3BB979]" style={{ width: `${greenWidth}px` }} />
        <div className="bg-[#FDD261]" style={{ width: "58px" }} />
        <div className="bg-[#CC0101] flex-1" />

        <div
          className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
          style={{ left: `${textPositionPx}px`, transform: "translateX(-30%)" }}
        >
          <span className="text-xs font-bold text-[#E5E7EB]">{`48.2%`}</span>
        </div>
      </div>
    </div>
  );
}
