import { CustomHeading2 } from "../../utils/CustomUi";
import { districtCompletionData } from "../../data";

const TopPerformingDistricts = () => {
  const topPerformingDistricts = districtCompletionData.filter((item) => {
    return item.status === "Excellent" || item.status === "Good";
  });

  return (
    <div className="tab-content box-style1">
      <CustomHeading2
        title={"Top Performing Districts"}
        titleSize={"var(--text-2xl)"}
        subtitle={"Districts with highest completion rates"}
      />
      {topPerformingDistricts.length > 0 ? (
        topPerformingDistricts.map((item) => (
          <div
            className="district-info-top"
            style={{
              backgroundColor: "#f7f9fa",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
            key={item.district}
          >
            <CustomHeading2
              title={item.district}
              titleSize={"var(--text-base)"}
              titleWeight={"var(--font-semibold)"}
              subtitle={`${item.boats} boats, ${item.ghats} ghats`}
            />
            <div>
              <p style={{ display: "flex", justifyContent: "end" }}>
                {item.completion}
              </p>
              <p>{item.status}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default TopPerformingDistricts;
