import { useState } from "react";
import Button from "../Button/Button";
import styles from "./InvoicingPremium.module.css";
import checkMark from "../../assets/images/icons/check-mark.svg";
import close from "../../assets/images/icons/close.svg";
import classNames from "classnames";

const data = [
  { name: "Unlimited outgoing e-invoices" },
  { name: "Unlimited connected banks" },
  { name: "10 users" },
  { name: "Expense management" },
];

const advantages = data.map((item, index) => {
  return (
    <li key={index} className={styles.advantage}>
      <img src={checkMark} alt="List mark" />
      <span>{item.name}</span>
    </li>
  );
});

const InvoicingPremium = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = () => setIsOpen(!isOpen);

  const blockStyles = classNames(styles.animatedBlock, {
    [styles.hide]: !isOpen,
  });

  return (
    <div className={styles.invoicing}>
      <div className={blockStyles}>
        <Button
          variation="plain"
          className={styles.closeButton}
          onClick={handleButtonClick}
        >
          <img src={close} alt="Close icon" />
        </Button>

        <div>
          <h4 className={styles.header}>Invoicing Premium</h4>
          <ul>{advantages}</ul>
        </div>

        <div className={styles.priceBox}>
          <div className={styles.price}>€20.99 /mo</div>
          <div className={styles.clarification}>
            billed annually or 24.99 € billed monthly
          </div>
          <Button variation="red">Upgrade</Button>
        </div>
      </div>
    </div>
  );
};

export default InvoicingPremium;
