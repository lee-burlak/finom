import classNames from "classnames";
import styles from "./Chat.module.css";
import chat from "../../assets/images/icons/chat.svg";

const Chat = ({ className }) => {
  const chatClassNames = classNames(styles.chat, className);

  return (
    <div className={chatClassNames}>
      <img src={chat} alt="Chat icon" />
    </div>
  );
};

export default Chat;
