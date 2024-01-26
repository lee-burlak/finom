import Invoicing from "../Invoicing/Invoicing";
import PlanDetails from "../PlanDetails/PlanDetails";

const PlanAndLimits = ({ className }) => {
  return (
    <div className={className}>
      <Invoicing />
      <PlanDetails />
    </div>
  );
};

export default PlanAndLimits;
