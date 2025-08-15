import {
  DashboardCard,
  RecentActivityCard,
  SystemAlertCard,
  TopDistrictsCard,
} from "../components/index.js";
import { CustomHeading1 } from "../utils/CustomUi.js";
import { icons } from "../utils/icons.js";

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
              className="dashboard-icon"
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
      
      {/* Dashboard Cards */}
      <div className="dashboard-cards-section">
        <DashboardCard />
      </div>
      
      {/* Main Content Grid */}
      <div className="dashboard-content">
        <div className="dashboard-content-left">
          <RecentActivityCard />
        </div>
        <div className="dashboard-content-right">
          <TopDistrictsCard />
        </div>
      </div>
      
      {/* System Alerts */}
      <div className="dashboard-alerts-section">
        <SystemAlertCard />
      </div>
    </div>
  );
};

export default Dashboard;