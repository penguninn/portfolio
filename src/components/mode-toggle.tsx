import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("vite-ui-theme");

  return (
    <Button
      className="cursor-pointer"
      variant="outline"
      size="icon"
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-800 ease-in-out dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-800 ease-in-out dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>

    // <DropdownMenu>
    // <DropdownMenuTrigger asChild>
    // </DropdownMenuTrigger>
    // <DropdownMenuContent align="end">
    // <DropdownMenuItem onClick={()=> setTheme("light")}>
    // Light
    // </DropdownMenuItem>
    // <DropdownMenuItem onClick={()=> setTheme("dark")}>
    // Dark
    // </DropdownMenuItem>
    // <DropdownMenuItem onClick={()=> setTheme("system")}>
    // System
    // </DropdownMenuItem>
    // </DropdownMenuContent>
    // </DropdownMenu>
  );
}
