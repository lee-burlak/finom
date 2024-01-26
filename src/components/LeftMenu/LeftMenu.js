import { NavLink } from "react-router-dom";
import styles from "./LeftMenu.module.css";
import classNames from "classnames";

const LeftMenu = ({ className, dataCompany, dataPersonal }) => {
  const personalItems = dataPersonal.map((item, index) => {
    return (
      <NavLink
        key={index}
        to={item.route}
        className={({ isActive }) =>
          classNames([styles.item, isActive ? styles.active : ""])
        }
      >
        {item.name}
      </NavLink>
    );
  });

  const companyItems = dataCompany.map((item, index) => {
    return (
      <NavLink
        key={index}
        to={item.route}
        className={({ isActive }) =>
          classNames([styles.item, isActive ? styles.active : ""])
        }
      >
        {item.name}
      </NavLink>
    );
  });

  const menuStyles = classNames(className, styles.menu);

  return (
    <div className={menuStyles}>
      <div>
        <div className={styles.header}>Personal</div>
        <div className={styles.list}>{personalItems}</div>
      </div>
      <div>
        <div className={styles.header}>Tesla s.r.L.</div>
        <div className={styles.list}>{companyItems}</div>
      </div>
    </div>
  );
};

export default LeftMenu;
