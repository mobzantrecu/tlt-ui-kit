import textStyles from "./text.module.css";

import { createElement } from "react";

interface Text {
  /**
   * Weight of the font
   */
  fontWeight?: "normal" | "bold" | "medium";
  /**
   * Size of the font
   */
  fontSize: number | string;
  /**
   * Children of the text
   */
  children: JSX.Element | string;
  /**
   * Render tag, this can be any html component
   */
  renderAs?: keyof React.ReactHTML;
  /**
   * Style modifier
   */
  variant?: "underline" | "default";

  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

type HtmlTextElementProps = {
  name: string;
  children: JSX.Element;
  fontSize: number | string;
  fontWeight?: "normal" | "bold" | "medium";
  variant?: "underline" | "default";
  layoutComponentClasses?: string;
};

const HtmlTextElement = ({
  name,
  children,
  fontSize,
  fontWeight,
  layoutComponentClasses = "",
}: HtmlTextElementProps) => {
  const weight = fontWeight === "medium" ? 500 : fontWeight;

  return createElement(
    name,
    {
      style: { fontSize, fontWeight: weight },
      className: layoutComponentClasses,
    },
    children
  );
};

const Text = ({
  fontSize,
  children,
  layoutComponentClasses = "",
  variant = "default",
  renderAs = "span",
  fontWeight = "normal",
}: Text) => {
  return (
    <HtmlTextElement
      name={renderAs}
      fontSize={fontSize}
      fontWeight={fontWeight}
      layoutComponentClasses={`${textStyles[variant]} ${layoutComponentClasses}`}
    >
      {typeof children === "string" ? <>{children}</> : children}
    </HtmlTextElement>
  );
};

export default Text;
