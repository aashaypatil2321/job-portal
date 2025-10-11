import { Avatar, Rating } from "@mantine/core";
import React from "react";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-20">
      <div className="  text-4xl font-semibold text-mine-shaft-100 text-center pb-5 mb-10">
        What <span className="text-bright-sun-400">User</span> Says about us?
      </div>

    <div className="flex justify-evenly">
          {
        testimonials.map((data , index) =>   <div key={index} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 rounded-xl mt-10 p-3">
        <div className="flex gap-2 items-center">
            <Avatar className="!h-16 !w-16" src="avatar.png"  alt="it's me" />
            <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">{data.name}</div>
                <Rating value={data.rating} fractions={2} readOnly />
            </div>
        </div>
        <div className="text-mine-shaft-300 text-sm">
            {data.testimonial}
        </div>
      </div>)
      }
    </div>

     
    </div>
  );
};

export default Testimonials;
