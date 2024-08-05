import React from "react";
import logo from "../assets/logo.png";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
const Navbar = () => {
  return (
    <div className="border-2 border-black w-screen mx-auto">
      <div className="w-full flex items-center justify-between px-6 py-4 bg-black text-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <p className="text-xl font-bold">
            F <span className="text-red-600">Portal</span>
          </p>
        </div>
        <div className="hidden xl:flex space-x-3">
        {/* <NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
        </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu> */}
<p>Hoem</p>
<p>Hoem</p>
<p>Hoem</p>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Profile</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
