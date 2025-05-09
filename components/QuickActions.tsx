import { Button } from "@/components/ui/button";

const quickActionsData = [
  {
    id: 1,
    text: "New Submission",
  },
  {
    id: 2,
    text: "Quote Builder",
  },
  {
    id: 3,
    text: "Risks Models",
  },
  {
    id: 4,
    text: "Documents Upload",
  },
];

const QuickActions = () => {
  return (
    <div className="flex flex-col bg-[#1E2233] py-5 px-4 rounded-2xl w-full border border-[#313B54]">
      <h2 className="text-[#E5E7EB] text-lg">Quick actions</h2>
      <div className="flex w-full flex-col gap-1.5 mt-5">
        {quickActionsData.map((action) => (
          <Button
            key={action.id}
            className="h-10 w-full rounded-3xl text-1xl font-bold cursor-pointer bg-[#3B82F6] text-white hover:bg-[#3B82F6] hover:text-white text-xs"
          >
            {action.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
