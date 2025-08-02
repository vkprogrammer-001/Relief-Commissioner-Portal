import { CustomHeading2, Tag, CustomTable } from "../../utils/CustomUi";

const DistributionTracking = () => {
  return (
    <div className="tab-content">
      <CustomHeading2
        title={"Distribution Tracking"}
        subtitle={
          "Monitor life jacket distribution across all districts and ghaats"
        }
        titleColor={"#e74f10"}
        titleSize={"var(--text-2xl)"}
        titleWeight={"var(--font-bold)"}
        subtitleSize={"var(--text-lg)"}
        subtitleWeight={"var(--font-medium)"}
        titleMarginBottom={"10px"}
      />
      <CustomTable
        headingList={[
          "District",
          "Ghaat",
          "Boats",
          "Allocated",
          "Distributed",
          "Date",
          "Status",
        ]}
        dataList={[
          [
            "Varanasi",
            "Dashashwamedh Ghaat",
            "5",
            "50",
            "45",
            "2024-01-15",
            <Tag tagName={"completed"} />,
          ],
          [
            "Lucknow",
            "Gomti Ghaat",
            "3",
            "30",
            "30",
            "2024-01-15",
            <Tag tagName={"completed"} />,
          ],
        ]}
        borderColor="#e2e8f0"
        headerBg="#f7f9fb"
      />
    </div>
  );
};

export default DistributionTracking;
