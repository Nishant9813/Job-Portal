import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="flex align-top">
      <Carousel className="w-full max-w-[40%]  mx-auto my-10 gap">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2  2xl:basis-1/3">
                <Button variant="outline" className="rounded-full shadow-slate-700 gap-5">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
