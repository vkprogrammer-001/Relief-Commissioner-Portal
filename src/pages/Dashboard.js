import DashboardCard from "../components/DashboardCard";
import RecentActivityCard from "../components/RecentActivityCard";
import TopDistrictsCard from "../components/TopDistrictsCard";
import SystemAlertCard from "../components/SystemAlertCard";
import { CustomHeading1 } from "../utility/CustomUi";
import { icons } from "../utility/icons.js";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <CustomHeading1
          title={"Operations Dashboard"}
          subtitle={
            "Real-time monitoring and management of rescue operations across Uttar Pradesh"
          }
          icon={
            <icons.TbActivityHeartbeat
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          }
          bg={"var(--gradient-bg-first)"}
          textColor={"linear-gradient(to right, #2562ea, #4e47e6)"}
        />
      </div>
      <DashboardCard />
      <div className="dashboard-content">
        <RecentActivityCard />
        <TopDistrictsCard />
      </div>
      <SystemAlertCard />
    </div>
  );
};

export default Dashboard;
