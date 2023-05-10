import { ChangeEvent } from "react";

import radioStyles from "./radio.module.css";

interface RadioProps {
  /**
   * Action handler of the radio
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Is this radio checked
   */
  isChecked: boolean;
  /**
   * Value of the radio
   */
  value: any;
  /**
   * Text of the radio
   */
  label: string;
  /**
   * If the radio is disabled
   */
  disabled?: boolean;
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

const Radio = ({
  isChecked,
  label,
  onChange,
  value,
  disabled,
  layoutComponentClasses = "",
}: RadioProps) => {
  return (
    <div className={`${radioStyles.radio} ${layoutComponentClasses}`}>
      <input
        type="radio"
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

export default Radio;
