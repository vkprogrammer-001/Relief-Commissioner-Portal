import {
  Analytics,
  ConductInspection,
  InspectionRecord,
  InspectionSchedule,
} from "../components/index";
import { TabBar } from "../utils/CustomUi";

const Inspection = () => {
  const tabs = [
    {
      id: "Conduct Inspection",
      content: <ConductInspection />,
    },
    {
      id: "Inspection Records",
      content: <InspectionRecord />,
    },
    {
      id: "Inspection Schedule",
      content: <InspectionSchedule />,
    },
    {
      id: "Analytics",
      content: <Analytics />,
    },
  ];
  return (
    <div>
      <TabBar tabs={tabs} color={"#020817"} />
    </div>
  );
};

export default Inspection;
