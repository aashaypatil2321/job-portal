import { Carousel } from "@mantine/carousel";
import React from "react";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-20">
      <div className="  text-4xl font-semibold text-mine-shaft-100 text-center pb-5 mb-10">
        Browsed By <span className="text-bright-sun-400">Job</span> Category
      </div>

      <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">
        Explore Diverse Job Oppurtinities tailored to your skills. Start your
        career journey today!
      </div>

      <Carousel
        slideSize="22%"
        slideGap="md"
        controlsOffset="sm"
        controlSize={26}
        withControls
        withIndicators={false}
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 "
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide>
            <div className="flex flex-col items-center w-64 m-auto gap-2 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 !shadow-bright-sun-300 border rounded-xl p-4 border-bright-sun-400 transition  duration-300 ease-in-out">
              <div className="p-2 bg-bright-sun-300 rounded-full ">
                <img
                  className="h-8 w-8"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>

              <div className="text-mine-shaft-100 text-lx font-semibold">
                {category.name}
              </div>

              <div className="text-sm text-mine-shaft-300 text-center">
                {category.desc}
              </div>

              <div className="text-bright-sun-300 text-lg">
                {category.jobs} New Job's Posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
