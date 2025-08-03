import { CustomHeading2 } from "../../utils/CustomUi";
import { districtCompletionData } from "../../data";

const LowPerformingDistricts = () => {
  const lowPerformingDistricts = districtCompletionData.filter((item) => {
    return item.status === "Fair";
  });

  return (
    <div className="tab-content box-style1">
      <CustomHeading2
        title={"Needs Attention"}
        titleSize={"var(--text-2xl)"}
        subtitle={"Districts requiring immediate focus"}
      />
      {lowPerformingDistricts.length > 0 ? (
        lowPerformingDistricts.map((item) => (
          <div
            className="district-info-top"
            style={{
              backgroundColor: "#fefce8",
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

export default LowPerformingDistricts;
