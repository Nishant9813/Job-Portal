import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="bg-gray-100 px-4 py-2 rounded-full text-[#f83002] font-medium mx-auto">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          Get Your
          <span className="text-[#6a38c2]  animate-fadeInOut">
            <Typewriter
              options={{
                strings: ["Dream Jobs", "Ideal Careers", "Perfect Role"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
          veritatis possimus asperiores maxime hic.
        </p>

        <div className="flex  w-[250px] md:w-[40%] shadow-lg border border-gray-200 items-center rounded-full gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full mx-4 dark:bg-[#020817]"
          />
          <Button className="rounded-full bg-[#6a38c2]">
            <Search className="h-5 w-5"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
