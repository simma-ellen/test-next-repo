// @ts-ignore
import { Button } from "@simmalugnt-se/next-components";
import { useState } from "react";
import Icon, { IconTypes } from "./ui/icon";

enum ButtonType {
  Primary = "bg-red-700 hover:bg-red-600 text-white",
  Secondary = "bg-stone-400 hover:bg-stone-300 text-stone-900",
  Base = "px-6 py-3 transition-colors duration-300 rounded-sm font-medium",
  DisabledPrimary = "bg-red-600 opacity-50 text-white",
}

export default function Kitchensink() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="h-screen p-24">
      <div className="flex gap-4">
        {/* Regular buttons  */}
        <Button
          className={`${ButtonType.Base} ${ButtonType.Primary}`}
          href="https://google.se"
          target="_blank"
          caption="I'm a button"
        />
        <Button
          className={`${ButtonType.Base} ${ButtonType.Secondary}`}
          href="https://google.se"
          target="_blank"
          caption="I'm a button too"
        />
        {/* Disabled button  */}
        <Button
          className={`${ButtonType.Base} ${ButtonType.DisabledPrimary}`}
          href="https://google.se"
          target="_blank"
          caption="I'm a disabled button"
          disabled={true}
          onClick={() => alert("I'm a disabled button")}
        />
      </div>

      {/* Button with children  */}
      <div className="mt-6">
        <Button
          className={`${ButtonType.Base} ${ButtonType.Primary} inline-flex items-center gap-4 justify-between mb-4`}
          onClick={() => alert("I'm a button")}
        >
          <Icon type={IconTypes.Plus} />
          Hello
          <Icon type={IconTypes.Check} />
        </Button>
      </div>
      {/* Button with special effect on hover */}
      <div className="mt-6">
        <Button
          className={`${ButtonType.Base} ${ButtonType.Primary} inline-grid gap-2 relative overflow-hidden`}
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="z-[1]">My little caption</span>
          <div
            className={`hover-bg absolute bottom-0 left-[-1%] -z-1 h-full w-[102%] transform transition-transform duration-150 ease-out bg-blue-600 ${
              hovered ? "translate-y-0" : "translate-y-full"
            }`}
          ></div>
        </Button>
      </div>
    </div>
  );
}
