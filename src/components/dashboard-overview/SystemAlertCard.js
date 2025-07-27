import "../../styles/component-styles.css";
import { CustomDotText, CustomHeading2 } from "../../utils/CustomUi.js";
import { icons } from "../../utils/icons.js";

const SystemAlertCard = () => {
  const menu = [
    {
      message: "15 boats pending annual inspection in Meerut district",
      dotColor: "#ecb40e",
    },
    {
      message: "Life jacket shortage reported in 3 ghaats",
      dotColor: "#f04647",
    },
    {
      message: "New registration forms available for submission",
      dotColor: "#3c82f6",
    },
  ];
  return (
    <div className="system-alert-card">
      <CustomHeading2
        title={"System Alerts"}
        icon={
          <icons.BsExclamationTriangle
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        }
        bg={"var(--gradient-bg-fifth)"}
        textColor={"#78350f"}
      />
      {menu.map((item) => (
        <div className="alert-list" key={item.message}>
          <CustomDotText
            text={item.message}
            color={"#92400d"}
            dotcolor={item.dotColor}
            dotblink={"blinking-dot"}
          />
        </div>
      ))}
    </div>
  );
};

export default SystemAlertCard;
