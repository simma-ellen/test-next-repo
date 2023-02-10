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
        <Button
          className={`${ButtonType.Base} ${ButtonType.DisabledPrimary}`}
          href="https://google.se"
          target="_blank"
          caption="I'm a disabled button"
          disabled={true}
          onClick={() => alert("I'm a disabled button")}
        />
      </div>

      <div className="mt-6">
        <Button
          className={`${ButtonType.Base} ${ButtonType.Primary} inline-flex items-center gap-4 justify-between mb-4`}
          onClick={() => alert("I'm a button")}
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Icon type={IconTypes.Plus} />
          Hello
          <Icon type={IconTypes.Check} />
        </Button>
        <p
          className={`transition-opacity duration-500 ${
            hovered ? "opacity-1" : "opacity-0"
          }`}
        >
          Hovering
        </p>
        <p
          className={`transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-1"
          }`}
        >
          Not hovering
        </p>
      </div>
    </div>
  );
}
