import { Text } from "../Text";
import tagStyles from "./tag.module.css";

interface TagProps {
  /**
   * Children of the tag
   */
  children: string;
  /**
   * Children of the tag
   */
  modifier?: "no-background" | "default";
  /**
   * Name of the icon on the left
   */
  leftIcon?: string;
  /**
   * Can the tag be closed or deleted
   */
  closable?: boolean;
  /**
   * Action handler for closeable tags
   */
  onClose?: () => void;
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

const Tag = ({
  children,
  leftIcon,
  closable,
  onClose,
  layoutComponentClasses = "",
  modifier = "default",
}: TagProps) => {
  return (
    <div
      className={`${tagStyles.tag} ${tagStyles[modifier]} ${layoutComponentClasses} `}
      style={{ display: "flex" }}
    >
      {leftIcon && <span className={tagStyles.icons}>i</span>}
      <Text fontSize={"0.7rem"}>{children}</Text>
      {closable && (
        <button
          onClick={onClose}
          className={`${tagStyles.icons} ${tagStyles.closeButton}`}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Tag;
