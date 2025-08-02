import { SummaryCard } from "../../utils/CustomUi";

const DistrictSummaryCards = () => {
  const cardSummary = [
    {
      title: "Total Districts",
      value: "16",
      info: "All 75 districts covered",
      color: "#3c82f6",
    },
    {
      title: "Total Boats",
      value: "415",
      info: "Across all districts",
      color: "#22c55d",
    },
    {
      title: "Total Ghaats",
      value: "83",
      info: "River ports operational",
      color: "#a855f7",
    },
    {
      title: "Avg Completion",
      value: "77%",
      info: "Data entry progress",
      color: "#f97315",
    },
  ];
  return (
    <div className="district-summary-cards">
      {cardSummary.map((card) => (
        <SummaryCard
          title={card.title}
          value={card.value}
          info={card.info}
          dotcolor={card.color}
        />
      ))}
    </div>
  );
};

export default DistrictSummaryCards;
