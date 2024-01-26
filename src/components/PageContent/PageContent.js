import { Routes, Route } from "react-router-dom";
import PlanAndLimits from "../PlanAndLimits/PlanAndLimits";
import Team from "../Team/Team";
import EInvoicing from "../EInvoicing/EInvoicing";
import BusinessProfile from "../BusinessProfile/BusinessProfile";
import Notifications from "../Notifications/Notifications";
import Security from "../Security/Security";
import Profile from "../Profile/Profile";

const PageContent = ({ className }) => {
  return (
    <div className={className}>
      <Routes>
        <Route path="/" element={<PlanAndLimits />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/security" element={<Security />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/business-profile" element={<BusinessProfile />} />
        <Route path="/e-invoicing" element={<EInvoicing />} />
        <Route path="/plan-and-limits" element={<PlanAndLimits />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
};

export default PageContent;
