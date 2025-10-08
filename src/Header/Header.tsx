import React from "react";
import {
  IconAnchor,
  IconAsset,
  IconBell,
  IconSettings,
} from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-20 flex text-white justify-between px-6 items-center ">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-10 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold ">JobHook</div>
      </div>
     {NavLinks() }
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          <div>marshal</div>
          <Avatar src="" alt="its image here" />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full ">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" size={9} processing offset={6}>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
