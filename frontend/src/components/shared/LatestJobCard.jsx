import React from "react";
import { Badge } from "@/components/ui/badge";

const LatestJobCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl border border-gray-200 bg-white cursor-pointer dark:bg-black">
      <div>
        <h1 className="font-medium text-lg">Compnay Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing .</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Postition
        </Badge>
        <Badge className="text-[#f83002] font-bold" variant="ghost">
          part Time
        </Badge>
        <Badge className="text-[#7209bc] font-bold" variant="ghost">
          24LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
