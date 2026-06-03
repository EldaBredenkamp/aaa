import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ProgrammesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#121212] text-[14px] flex items-center gap-1 hover:opacity-70 transition-opacity"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Programmes
          <ChevronDown
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-['Roboto:SemiBold',sans-serif] text-[#121212]">
            By Level
          </DropdownMenuLabel>
          <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
            Short Courses
          </DropdownMenuItem>
          <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
            Higher Certificates
          </DropdownMenuItem>
          <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
            Diplomas
          </DropdownMenuItem>
          <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
            Undergraduate Degrees
          </DropdownMenuItem>
          <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
            Postgraduate Degrees
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-['Roboto:SemiBold',sans-serif] text-[#121212]">
            By Ways to Study
          </DropdownMenuLabel>
          <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
            Online
          </DropdownMenuItem>
          <DropdownMenuItem className="font-['Roboto:Regular',sans-serif] cursor-pointer">
            On Campus
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
