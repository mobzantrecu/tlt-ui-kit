import { ChangeEvent } from "react";

import checkboxStyles from "./checkbox.module.css";

interface CheckboxProps {
  /**
   * Action handler of the checkbox
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Is this checkbox checked
   */
  isChecked: boolean;
  /**
   * Value of the checkbox
   */
  value: any;
  /**
   * Text of the checkbox
   */
  label: string;
  /**
   * If the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

const Checkbox = ({
  isChecked,
  label,
  onChange,
  value,
  disabled,
  layoutComponentClasses = "",
}: CheckboxProps) => {
  return (
    <div className={`${checkboxStyles.checkbox} ${layoutComponentClasses}`}>
      <input
        className={checkboxStyles.checkbox}
        type="checkbox"
        disabled={disabled}
        id={value}
        name={value}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
