import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AiOutlineLogout } from "react-icons/ai";
import { Button } from "../ui/button";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

const Navbar = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const togglePopover = () => setPopoverOpen(!popoverOpen);

  return (
    <div className="w-screen mx-auto">
      <div className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 text-black dark:text-white ">
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger>
              <Button variant="none">
                <TiThMenu className="size-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-64 h-full">
              <DrawerHeader>
                <DrawerTitle>Navigation Menu</DrawerTitle>
                <DrawerDescription>
                  Select an option from the menu.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {
                 !loggedIn ? <><Link to="/register"><Button className="w-full">Sign Up</Button></Link>
                <Link to="/login"><Button className="w-full">Login</Button></Link></>: "" 
                }
                
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 w-12" />
          </Link>
          <Link to="/">
            <p className="text-xl font-bold  md:block">
              F <span className="text-red-600">Portal</span>
            </p>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="hidden md:flex space-x-5">
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <DropdownMenu>
              <DropdownMenuTrigger>Browse</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/billing">Billing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-500"
            >
              {theme === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </button>
          </div>
          {!loggedIn ? (
            <div className="items-center gap-5 hidden md:flex">
             <Link to="/login"><Button variant="outline">Login</Button></Link>
             <Link to="/register"><Button className="bg-[#6a38c2] hover:bg-[#5b30a6] dark:text-white">
                Sign up
              </Button>
              </Link> 
            </div>
          ) : (
            <div>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Profile</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4>Your Name</h4>
                        <p className="text-sm text-muted-foreground">
                          Full Stack Web Developer
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <Link to="/jobs" onClick={togglePopover}>
                        <Button variant="link">
                          <CgProfile className="m-3" />
                          View Profile
                        </Button>
                      </Link>
                      <Link to="/browse" onClick={togglePopover}>
                        <Button variant="link">
                          <AiOutlineLogout className="m-3" />
                          Logout
                        </Button>
                      </Link>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
