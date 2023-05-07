import styles from "./progressBar.module.css";

interface ProgressBarProps {
  /**
   * With of the filling bar
   */
  fillingWidth: number | string;
  /**
   * If the parent needs to change the styles of the button
   */
  layoutComponentClasses?: string;
}

function ProgressBar({
  layoutComponentClasses = "",
  fillingWidth = 0,
}: ProgressBarProps) {
  return (
    <div className={`${styles.progressBar} ${layoutComponentClasses}`}>
      <div className={styles.fillingBar} style={{ width: fillingWidth }}></div>
    </div>
  );
}

export default ProgressBar;
