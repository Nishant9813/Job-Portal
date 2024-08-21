import { Bookmark } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const JobCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 dark:bg-black">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={"kj"} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab
          pariatur atque, iure deleniti aperiam.{" "}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          24 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Job type
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          12lpaLPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] dark:text-white dark:hover:bg-black dark:hover:border dark:hover:border-white">Save For Later</Button>
      </div>
    </div>
  );
};

export default JobCard;
