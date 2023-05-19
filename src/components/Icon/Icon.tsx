import iconStyles from "./icon.module.css";
import arrowIcon from "../../assets/icons/arrows.svg";
import eyesIcon from "../../assets/icons/eyes.svg";
import fingerIcon from "../../assets/icons/finger.svg";
import fireIcon from "../../assets/icons/fire.svg";
import openBoxIcon from "../../assets/icons/open-box.svg";
import recycleIcon from "../../assets/icons/recycle.svg";
import thunderIcon from "../../assets/icons/thunder.svg";
import umbrellaIcon from "../../assets/icons/umbrella.svg";
import warningIcon from "../../assets/icons/warning.svg";
import worldIcon from "../../assets/icons/world.svg";

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
