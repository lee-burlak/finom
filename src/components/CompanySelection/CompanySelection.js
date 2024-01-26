import styles from "./CompanySelection.module.css";
import classNames from "classnames";
import CompanyAvatar from "../CompanyAvatar/CompanyAvatar";
import Dropdown from "../Dropdown/Dropdown";

const options = [{ name: "Test company" }, { name: "Test company 2" }];

const CompanySelection = ({ className }) => {
  const companyName = "TESLA S.R.L.";

  const selectionClassNames = classNames(styles.companySelection, className);

  return (
    <div className={selectionClassNames}>
      <CompanyAvatar companyName={companyName} />
      <Dropdown value={companyName} options={options} />
    </div>
  );
};

export default CompanySelection;
