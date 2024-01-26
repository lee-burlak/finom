import styles from "./CompanyAvatar.module.css";

const CompanyAvatar = ({ companyName }) => {
  const letter = companyName.charAt(0);

  return <div className={styles.avatar}>{letter}</div>;
};

export default CompanyAvatar;
