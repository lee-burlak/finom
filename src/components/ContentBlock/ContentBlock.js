import styles from "./ContentBlock.module.css";

const ContentBlock = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default ContentBlock;
