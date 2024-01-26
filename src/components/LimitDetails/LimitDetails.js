import styles from "./LimitDetails.module.css";
import classNames from "classnames";

const LimitDetails = ({
  title,
  engagedCount,
  totalCount,
  children,
  color,
  className,
}) => {
  const lineWidth =
    totalCount === null ? 100 : engagedCount / (totalCount / 100);

  const lineStyles = classNames(styles.percentageLine, styles[color]);

  const blockStyles = classNames(styles.limit, className);

  const count =
    totalCount === null ? (
      "Unlimited"
    ) : (
      <>
        <span className={styles.engagedCount}>{engagedCount}</span>
        <span>/</span>
        <span>{totalCount}</span>
      </>
    );

  return (
    <div className={blockStyles}>
      <div className={styles.top}>
        <div>{title}</div>

        <div className={styles.count}>{count}</div>
      </div>

      <div className={lineStyles}>
        <div className={styles.percentageBackground}></div>
        <div
          className={styles.percentageColor}
          style={{ width: lineWidth + "%" }}
        ></div>
      </div>

      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default LimitDetails;
