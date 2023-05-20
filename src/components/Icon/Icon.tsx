import iconStyles from "./icon.module.css";

import arrowIcon from "../../../public/icons/arrows.svg";
import eyesIcon from "../../../public/icons/eyes.svg";
import fingerIcon from "../../../public/icons/finger.svg";
import fireIcon from "../../../public/icons/fire.svg";
import openBoxIcon from "../../../public/icons/open-box.svg";
import recycleIcon from "../../../public/icons/recycle.svg";
import thunderIcon from "../../../public/icons/thunder.svg";
import umbrellaIcon from "../../../public/icons/umbrella.svg";
import warningIcon from "../../../public/icons/warning.svg";
import worldIcon from "../../../public/icons/world.svg";

const imageMap = {
  arrows: arrowIcon,
  eyes: eyesIcon,
  finger: fingerIcon,
  fire: fireIcon,
  "open-box": openBoxIcon,
  recycle: recycleIcon,
  thunder: thunderIcon,
  umbrella: umbrellaIcon,
  warning: warningIcon,
  world: worldIcon,
};

interface IconProps {
  /**
   * Icon name
   */
  icon:
    | "arrows"
    | "eyes"
    | "finger"
    | "open-box"
    | "fire"
    | "recycle"
    | "thunder"
    | "umbrella"
    | "warning"
    | "world";
  /**
   * Icon size
   */
  size?: "xs" | "s" | "m" | "l";
  /**
   * If the parent needs to change the styles of the Icon
   */
  layoutComponentClasses?: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Icon = ({
  icon,
  onClick,
  size = "s",
}: IconProps) => {
  return (
    <img
      onClick={onClick}
      className={`${iconStyles[size]}`}
      loading="lazy"
      src={imageMap[icon]}
    />
  );
};

export default Icon;
