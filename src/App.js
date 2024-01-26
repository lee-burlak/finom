import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import PageContent from "./components/PageContent/PageContent";
import Chat from "./components/Chat/Chat";

const dataPersonal = [
  { name: "Profile", route: "/profile" },
  { name: "Security", route: "/security" },
  { name: "Notifications", route: "/notifications" },
];

const dataCompany = [
  { name: "Business profile", route: "/business-profile" },
  { name: "E-invoicing", route: "/e-invoicing" },
  { name: "Plan and limits", route: "/plan-and-limits" },
  { name: "Team", route: "/team" },
];

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <div className={styles.content}>
          <LeftMenu
            className={styles.menu}
            dataPersonal={dataPersonal}
            dataCompany={dataCompany}
          />
          <PageContent className={styles.contentBox} />
        </div>

        <Chat className={styles.chat} />
      </div>
    </Router>
  );
};

export default App;
