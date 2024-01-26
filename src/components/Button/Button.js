import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, variation, onClick, className }) => {
  const elementClassNames = classNames(
    styles.button,
    styles[variation],
    className
  );

  return (
    <button className={elementClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
