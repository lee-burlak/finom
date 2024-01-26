import logo from "../../assets/images/logo.svg";
import rocket from "../../assets/images/icons/rocket.svg";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import CompanySelection from "../CompanySelection/CompanySelection";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const menuLinks = [
  { name: "Money", link: "/" },
  { name: "Team", link: "/" },
  { name: "Cards", link: "/" },
  { name: "Help center", link: "/" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="Finom Logo" />
      </a>

      <div className={styles.center}>
        <HeaderMenu links={menuLinks} />

        <Button variation="grey" className={styles.button}>
          <img src={rocket} alt="Rocket icon" />
          <span>Upgrade plan</span>
        </Button>
      </div>

      <CompanySelection className={styles.selection} />
    </header>
  );
};

export default Header;
