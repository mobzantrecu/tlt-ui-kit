import buttonStyles from "./Button.module.css";

interface ButtonProps {
  /**
   * Optional click handler
   */
  onClick: () => void;
  /**
   * Children of the button, this can be any element
   */
  children: JSX.Element;
  /**
   * Type of the button
   */
  type?: "primary" | "only-text";
  /**
   * Modifier of the button
   */
  modifier?: "outline" | "default" | "tertiary";
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
  /**
   * Id for testing
   */
  testId?: string;

  /**
   * Is button disabled
   */
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  modifier = "default",
  type = "primary",
  layoutComponentClasses = "",
  testId,
  disabled,
}: ButtonProps) => {
  const styles = `${buttonStyles.button} ${buttonStyles[type]} ${buttonStyles[modifier]} `;

  return (
    <button
      onClick={onClick}
      className={`${styles} ${layoutComponentClasses}`}
      data-test-id={testId}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
