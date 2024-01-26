import styles from "./PlanDetails.module.css";
import LimitDetails from "../LimitDetails/LimitDetails";
import ContentBlock from "../ContentBlock/ContentBlock";

const Statistics = () => {
  return (
    <ContentBlock>
      <div className={styles.tabsSwitcher}>
        <div className={styles.active}>Limits</div>
        <div>Invoices</div>
      </div>

      <div className={styles.detailsBox}>
        <div className={styles.detailsColumn}>
          <LimitDetails
            title="Team members"
            engagedCount={3}
            totalCount={6}
            color="blue"
            className={styles.limit}
          >
            Need more members? <a href="/">Upgrade your plan</a>
          </LimitDetails>

          <LimitDetails
            title="Connected sources (banks)"
            engagedCount={5}
            totalCount={5}
            color="red"
            className={styles.limit}
          >
            Need more banks to connect? <a href="/">Upgrade your plan</a>
          </LimitDetails>
        </div>

        <div className={styles.detailsColumn}>
          <LimitDetails
            title="Outgoing e-invoices"
            totalCount={null}
            color="blue"
            className={styles.limit}
          >
            Send as many e-invoices as you want
          </LimitDetails>
        </div>
      </div>
    </ContentBlock>
  );
};

export default Statistics;
