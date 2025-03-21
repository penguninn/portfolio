import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { IoLogoGithub } from "react-icons/io5";
import Logo from "./logo";
import { DropdownMenu } from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full fixed flex justify-center items-center bg-[var(--nav-background)]">
      <div className="flex w-full max-w-2xl p-2.5 justify-between items-center">
        <div className="mr-12">
          <Logo />
        </div>
        <div className="w-full flex justify-start items-center">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-5">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/projects">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/posts">Posts</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    target="_blank"
                    to="https://github.com/penguninn"
                    className="flex flex-row justify-center items-center"
                  >
                    <IoLogoGithub />
                    Source
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-end items-center">
          <ModeToggle />
          <div className="ml-3 inline-block md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-9 h-9">
                  <RxHamburgerMenu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36">
                <DropdownMenuItem>
                  <Link to="/projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/posts">Posts</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    target="_blank"
                    to="https://github.com/penguninn"
                    className="flex flex-row justify-center items-center"
                  >
                    <IoLogoGithub />
                    Source
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
