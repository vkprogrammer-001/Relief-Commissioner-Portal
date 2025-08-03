import {
  DistrictSummaryCards,
  DistrictMonitoringDashboard,
  LowPerformingDistricts,
  TopPerformingDistricts,
} from "../components";
const Districts = () => {
  return (
    <div>
      <DistrictSummaryCards />
      <DistrictMonitoringDashboard />
      <div className="districts-bottom-section">
        <TopPerformingDistricts />
        <LowPerformingDistricts />
      </div>
    </div>
  );
};

export default Districts;
