import "../../styles/component-styles.css";
import {
  CustomDotText,
  CustomHeading2,
  ProgressIndicator,
} from "../../utils/CustomUi.js";
import { icons } from "../../utils/icons.js";

const TopDistrictsCard = () => {
  const menu = [
    {
      districts: "Lucknow",
      boats: 45,
      ghats: 8,
      percentage: 92,
      color: "#12b981",
    },
    {
      districts: "Varanasi",
      boats: 38,
      ghats: 12,
      percentage: 88,
      color: "#3c82f6",
    },
    {
      districts: "Allahabad",
      boats: 32,
      ghats: 6,
      percentage: 85,
      color: "#a855f7",
    },
    {
      districts: "Agra",
      boats: 28,
      ghats: 4,
      percentage: 78,
      color: "#f97315",
    },
    {
      districts: "Kanpur",
      boats: 35,
      ghats: 7,
      percentage: 82,
      color: "#ec4899",
    },
  ];
  return (
    <div className="top-districts">
      <CustomHeading2
        title={"Top Districts by Completion"}
        subtitle={"Data entry and registration progress"}
        icon={
          <icons.IoLocationOutline
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        }
        iconBg={"var(--gradient-bg-fourth)"}
      />
      {menu.map((item) => (
        <div className="district-card" key={item.districts}>
          <div className="district-info-top">
            <CustomDotText text={item.districts} dotcolor={item.color} />
            <p>{item.percentage}%</p>
          </div>
          <ProgressIndicator progress={item.percentage} />
          <div className="district-info-bottom">
            <div
              style={{
                color: "#64758b",
                alignItems: "center",
                display: "flex",
                gap: "5px",
              }}
            >
              <icons.IoBoatOutline /> {item.boats} boats
            </div>
            <div
              style={{
                color: "#64758b",
                alignItems: "center",
                display: "flex",
                gap: "5px",
              }}
            >
              <icons.MdOutlineWaves /> {item.ghats} ghats
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopDistrictsCard;
