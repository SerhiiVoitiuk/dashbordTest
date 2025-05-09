import MarketIntelligence from "@/components/MarketIntelligence";
import MyAccounts from "@/components/MyAccounts";
import PortfolioGoals from "@/components/PortfolioGoals";
import QuickActions from "@/components/QuickActions";
import WorkQueue from "@/components/WorkQueue";

export default function Home() {
  return (
    <section className="flex flex-col mt-5 w-full">
      <div className="flex flex-row gap-4 w-full">
        <WorkQueue />
        <PortfolioGoals />
        <div className="flex flex-col gap-3.5">
          <QuickActions />
          <MarketIntelligence />
        </div>
      </div>
      <MyAccounts />
    </section>
  );
}
