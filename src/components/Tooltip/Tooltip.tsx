import ColorVariants from "../constants";
import styles from "./tooltip.module.css";

interface TooltipProps {
  /**
   * Children of the tooltip
   */
  children: JSX.Element | string;
  /**
   * Background color of the tooltip
   */
  backgroundVariant?: ColorVariants;
  /**
   * Text color of the tooltip
   */
  textVariant?: ColorVariants;
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

function Tooltip({
  children,
  textVariant = "primary-black",
  backgroundVariant = "secondary-green",
  layoutComponentClasses = "",
}: TooltipProps) {
  return (
    <div
      className={`${styles.tooltip} ${layoutComponentClasses}`}
      style={{
        color: `var(--${textVariant})`,
        backgroundColor: `var(--${backgroundVariant})`,
      }}
    >
      {children}
    </div>
  );
}

export default Tooltip;
