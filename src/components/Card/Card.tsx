import ColorVariants from "../constants";
import cardStyles from "./card.module.css";

interface CardProps {
  /**
   * Children of the text
   */
  children: JSX.Element;
  /**
   * Border color of the card
   */
  borderVariant?: ColorVariants;
  /**
   * Background of the card
   */
  backgroundVariant?: ColorVariants;
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

const Card = ({
  children,
  layoutComponentClasses = "",
  borderVariant = "transparent",
  backgroundVariant = "primary-white",
}: CardProps) => {
  return (
    <section
      className={`${cardStyles.card} ${layoutComponentClasses}`}
      style={{
        borderColor: `var(--${borderVariant})`,
        backgroundColor: `var(--${backgroundVariant})`,
      }}
    >
      {children}
    </section>
  );
};

export default Card;
