import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-[#121622] min-h-screen p-10">
      <Button
        asChild
        className=" w-fit bg-[#3B82F6] hover:bg-[#3B82F6] text-xs font-bold text-[#F5F7FA] hover:text-[#F5F7FA]"
      >
        <Link href="/" className="flex items-center gap-2 px-4 py-2">
          <ArrowLeft className="w-6 h-6 text-[#F5F7FA]" />
          Go Back
        </Link>
      </Button>

      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#F5F7FA]">
            Page Not Found
          </h1>
          <p className="text-lg text-[#F5F7FA]">
            This page has not been created yet or does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}
