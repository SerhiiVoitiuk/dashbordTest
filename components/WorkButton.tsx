import { Button } from "@/components/ui/button";

interface Props {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const WorkButton = ({ text, isActive, onClick } : Props) => {
  return (
    <Button
      onClick={onClick}
      className={`rounded-3xl text-base px-4 py-1.5 cursor-pointer ${
        isActive ? "bg-[#3B82F6] text-[#F5F7FA] hover:bg-[#3B82F6] hover:text-[#F5F7FA]" : "bg-[#0C0F17] hover:bg-[#0C0F17] text-[#C5C9D3] hover:text-[#C5C9D3]"
      }`}
    >
      {text}
    </Button>
  );
};

export default WorkButton;
