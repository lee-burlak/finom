import { useState, useEffect, useRef } from "react";
import styles from "./HeaderMenu.module.css";
import box from "../../assets/images/icons/wrapped-present.svg";
import burger from "../../assets/images/icons/hamburger-menu.svg";

const HeaderMenu = ({ links }) => {
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

  const menuItems = links.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.link}>{item.name}</a>
      </li>
    );
  });

  return (
    <div ref={divEl}>
      <div className={styles.burgerMenu} onClick={handleClick}>
        <img src={burger} alt="Burger menu icon" />
      </div>

      {isOpen && (
        <div className={styles.burgerItems}>
          <ul>
            {menuItems}
            <li>
              <a href="/" className={styles.invite}>
                <img src={box} alt="Wrapped gift icon" />
                <span>Invite your parthers</span>
              </a>
            </li>
          </ul>
        </div>
      )}

      <ul className={styles.menu}>
        {menuItems}
        <li>
          <a href="/" className={styles.invite}>
            <img src={box} alt="Wrapped gift icon" />
            <span>Invite your parthers</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
