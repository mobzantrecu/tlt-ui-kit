import ColorVariants from "../constants";
import inputStyles from "./input.module.css";

interface InputProps {
  /**
   * Handle input change event
   */
  handleChange?: () => void;
  /**
   * Icon on the right side
   */
  iconElement?: JSX.Element;
  /**
   * placeholder of the input
   */
  placeholder?: string;
  /**
   * Type of the input
   */
  type?: React.HTMLInputTypeAttribute;
  /**
   * Border color of the input
   */
  borderVariant?: ColorVariants;
  /**
   * Background of the input
   */
  backgroundVariant?: ColorVariants;
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

const Input = ({
  type = "text",
  layoutComponentClasses = "",
  borderVariant = "success-green",
  backgroundVariant = "primary-white",
  placeholder,
  iconElement,
  handleChange,
}: InputProps) => {
  return (
    <section
      style={{
        borderColor: `var(--${borderVariant})`,
        backgroundColor: `var(--${backgroundVariant})`,
      }}
      className={`${inputStyles.input_container} ${layoutComponentClasses}`}
    >
      <input
      style={{
        backgroundColor: `var(--${backgroundVariant})`,
      }} type={type} placeholder={placeholder} onChange={handleChange} />
      {iconElement && <div>{iconElement}</div>}
    </section>
  );
};

export default Input;
