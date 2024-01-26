import styles from "./Invoicing.module.css";
import Button from "../Button/Button";
import InvoicingPremium from "../InvoicingPremium/InvoicingPremium";
import ContentBlock from "../ContentBlock/ContentBlock";
import star from "../../assets/images/icons/star.svg";

const Invoicing = () => {
  return (
    <ContentBlock>
      <div className={styles.headerBox}>
        <h2 className={styles.header}>Invoicing Start</h2>
        <Button variation="plain" className={styles.changeButton}>
          Change plan
        </Button>
      </div>

      <div className={styles.price}>
        6,99 € <span>/mo</span>
      </div>

      <div className={styles.charge}>
        <div>We’ll charge 6,99 € on Jul 24, 2020</div>
        <Button variation="plain" className={styles.cnahgeCard}>
          Change card *** 5423 or billing info
        </Button>
      </div>

      <div className={styles.switch}>
        <Button variation="blue">Switch to annual plan</Button>
        <div>and save 24,00 € a year</div>
      </div>

      <h3 className={styles.explore}>
        Explore new features
        <img src={star} alt="Star icon" />
      </h3>

      <InvoicingPremium />
    </ContentBlock>
  );
};

export default Invoicing;
