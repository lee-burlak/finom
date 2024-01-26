import { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";
import chevron from "../../assets/images/icons/chevron.svg";
import classNames from "classnames";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={index}
        className={styles.dropdownOption}
      >
        {option.name}
      </div>
    );
  });

  const chevronClassList = classNames({ [styles.hide]: isOpen });

  return (
    <div ref={divEl} className={styles.dropdownBox}>
      <div onClick={handleClick} className={styles.dropdownValue}>
        <span>{value || "Select..."}</span>
        <img src={chevron} alt="Chevron icon" className={chevronClassList} />
      </div>
      <div>
        {isOpen && <div className={styles.dropdown}>{renderedOptions}</div>}
      </div>
    </div>
  );
}

export default Dropdown;
