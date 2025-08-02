import {
  DistributionTracking,
  RecordDistribution,
} from "../components/index.js";
import { CustomHeading1, SummaryCard, TabBar } from "../utils/CustomUi.js";
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

  const summaryCards = [
    {
      title: "Total Life Jackets",
      value: "80",
      icon: <icons.BsBoxSeam />,
      bg:"#fff6ef",
      textColor:"#9a3413",
      iconbg:"#f97315"

    },{
      title: "Distributed",
      value: "75",
      icon: <icons.LuShield />,
      bg:"#eefdf4",
      textColor:"#166434",
      iconbg:"#22c55d"
    },{
      title: "Distribution Rate",
      value: "93.8%",
      icon: <icons.IoIosTrendingUp />,
      bg:"#eef7ff",
      textColor:"#1d40b0",
      iconbg:"#3c82f6"
    }
  ];

  return (
    <div>
      <CustomHeading1
        title={"Life Jacket Distribution"}
        subtitle={
          "Manage and track life jacket distribution across all rescue boats and ghats"
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
      <div className="life-jacket-distribution-summary-container">
        {summaryCards.map((card) => (
          <SummaryCard
            title={card.title}
            value={card.value}
            leftIcon={card.icon}
            leftIconBg={card.iconbg}
            leftIconSize="24px"
            containerBg={card.bg}
            containerShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            titleColor={card.textColor}
            valueColor={card.textColor}
          />
        ))}
      </div>
      <TabBar tabs={tabs} color={"#ea580b"} />
    </div>
  );
};

export default LifeJackets;
