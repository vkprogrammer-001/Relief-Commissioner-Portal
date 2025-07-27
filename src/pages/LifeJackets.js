import {
  DistributionTracking,
  RecordDistribution,
} from "../components/index.js";
import { CustomHeading1, TabBar } from "../utils/CustomUi.js";
import { icons } from "../utils/icons.js";

const LifeJackets = () => {
  const tabs = [
    {
      id: "Record Distribution",
      icon: icons.IoCameraOutline(),
      content: <RecordDistribution />,
    },
    {
      id: "Distribution Tracking",
      icon: icons.FiArrowUpRight(),
      content: <DistributionTracking />,
    },
  ];

  return (
    <div>
      <CustomHeading1
        title={"Life Jacket Distribution"}
        subtitle={
          "Manage and track life jacket distribution across all rescue boats and ghaats"
        }
        icon={
          <icons.MdOutlineWaves
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        }
        bg={"var(--gradient-bg-fifth)"}
        textColor={"linear-gradient(to right, #ea580e, #dc2625)"}
      />
      <TabBar tabs={tabs} color={"#ea580b"} />
    </div>
  );
};

export default LifeJackets;
