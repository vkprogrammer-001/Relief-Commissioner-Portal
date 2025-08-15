import {
    CustomHeading2,
    ProgressIndicator,
    SummaryCard,
} from "../../utils/CustomUi";

const Analytics = () => {
  const cardSummary = [
    {
      title: "Total Boats",
      value: "1247",
      info: "Registered fleet",
      color: "#3c82f6",
    },
    {
      title: "Inspected",
      value: "856",
      info: "This year",
      color: "#22c55d",
    },
    {
      title: "Pass Rate",
      value: "87%",
      info: "Success rate",
      color: "#a855f7",
    },
    {
      title: "Pending",
      value: "391",
      info: "Awaiting inspection",
      color: "#f97315",
    },
  ];

  const flashCard = [
    {
      value: "742",
      info: "Passed",
      bgColor: "#effdf4",
      valueColor: "#17a34a",
      infoColor: "#166434",
    },
    {
      value: "67",
      info: "Failed",
      bgColor: "#fef2f2",
      valueColor: "#dc2625",
      infoColor: "#991b1b",
    },
    {
      value: "47",
      info: "Conditional",
      bgColor: "#fefce8",
      valueColor: "#ca8a03",
      infoColor: "#854d0f",
    },
  ];

  return (
    <div>
      <div className="analytics-summary-cards">
        {cardSummary.map((card) => (
          <SummaryCard
            title={card.title}
            value={card.value}
            info={card.info}
            dotcolor={card.color}
          />
        ))}
      </div>
      <div className="tab-content border-style-light">
        <CustomHeading2
          title={"Inspection Status Overview"}
          subtitle={"Current year inspection completion status"}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "var(--text-sm)",
          }}
        >
          <p>Inspected</p>
          <p>856/1247</p>
        </div>
        <ProgressIndicator progress={`${(856 / 1247) * 100}`} />
        <div className="flash-cards-container">
          {flashCard.map((card) => (
            <SummaryCard
              value={card.value}
              valueColor={card.valueColor}
              info={card.info}
              infoColor={card.infoColor}
              infoSize="var(--text-sm)"
              containerBg={card.bgColor}
              contentAlign={"center"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
