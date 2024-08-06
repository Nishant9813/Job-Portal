import React, { useState } from "react";
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

const Navbar = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => setPopoverOpen(!popoverOpen);

  return (
    <div className="border-2 border-black w-screen mx-auto">
      <div className="w-full flex items-center justify-between px-6 py-4 bg-black text-white">
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger>
              <Button variant="none"><TiThMenu className="size-5"/></Button>
            </DrawerTrigger>
            <DrawerContent className="w-64 h-full bg-white ">
              <DrawerHeader>
                <DrawerTitle>Navigation Menu</DrawerTitle>
                <DrawerDescription>
                  Select an option from the menu.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
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
            <p className="text-xl font-bold hidden md:block" >
              F <span className="text-red-600">Portal</span>
            </p>
          </Link>
        </div>
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
        <div className="flex flex-col justify-center items-center">
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
      </div>
    </div>
  );
};

export default Navbar;
