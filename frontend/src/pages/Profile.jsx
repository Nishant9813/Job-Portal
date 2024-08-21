import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 m-5">
        <div className="max-w-7xl mx-auto bg-white dark:bg-black border border-gray-200 rounded-2xl my-5 p-8">
          <div className="flex justify-end h-6 md:hidden lg:hidden xl:hidden">
            {" "}
            <Button className="rounded-full" variant="outline">
              <Pen />
            </Button>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-centers gap-5">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div>
                <h1 className="font-medium text-xl">Full Name</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum iusto labore{" "}
                </p>
              </div>
            </div>
            <Button className="text-right hidden md:block" variant="outline">
              <Pen />
            </Button>
          </div>
          <div className="my-5">
            <div className="flex item-center gap-4 my-2 ">
              <Mail />
              <span>Nishant@gamil.com</span>
            </div>
            <div className="flex item-center gap-4 my-2">
              <Contact />
              <span>8965465155</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
