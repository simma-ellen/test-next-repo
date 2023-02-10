import Plus from "assets/images/icons/plus.svg";
import Check from "assets/images/icons/check.svg";

const components = {
  plus: Plus,
  check: Check,
};

export enum IconTypes {
  Plus = "plus",
  Check = "check",
}

type Props = {
  className?: string;
  type?: IconTypes;
  size?: number;
  color?: string;
};

export default function Icon({
  className = "",
  type = IconTypes.Check,
  size = 6,
  color = "inherit",
}: Props) {
  const Component = components[type];

  return (
    <div
      className={`inline-flex justify-center items-center w-${size} h-${size} min-h-${size} min-w-${size} text-${color}`}
      style={{ minWidth: `${size / 4}rem`, minHeight: `${size / 4}rem` }}
    >
      <Component className={className} />
    </div>
  );
}
