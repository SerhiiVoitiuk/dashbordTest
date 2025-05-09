import MarketIntelligence from "@/components/MarketIntelligence";
import MyAccounts from "@/components/MyAccounts";
import PortfolioGoals from "@/components/PortfolioGoals";
import QuickActions from "@/components/QuickActions";
import WorkQueue from "@/components/WorkQueue";
import { getAccountsData, getWorkData } from "@/lib/actions/data";

export default async function Home() {
  const accountsData = await getAccountsData();
  const workData = await getWorkData();

  return (
    <section className="flex flex-col mt-5 w-full">
      <div className="flex flex-row gap-4 w-full">
        <WorkQueue workData={workData} />
        <PortfolioGoals />
        <div className="flex flex-col gap-3.5">
          <QuickActions />
          <MarketIntelligence />
        </div>
      </div>
      <MyAccounts accountsData={accountsData} />
    </section>
  );
}
