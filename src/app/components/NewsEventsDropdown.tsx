import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function NewsEventsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#121212] text-[14px] flex items-center gap-1 hover:opacity-70 transition-opacity whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          News & Events
          <ChevronDown
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
          News
        </DropdownMenuItem>
        <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
          Events
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
