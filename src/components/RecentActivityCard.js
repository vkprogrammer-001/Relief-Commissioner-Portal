import { CustomHeading2, CustomHeading3 } from "../utility/CustomUi";
import { icons } from "../utility/icons.js";
import "../styles/component-styles.css";

const RecentActivityCard = () => {
  const menu = [
    {
      title: "New boat registered",
      subtitle: "Varanasi Ghaat",
      icon: <icons.IoBoatOutline style={{color:"#079669"}}/>,
      tag: "completed",
      time: "2 hours ago",
    },
    {
      title: "Inspection completed",
      subtitle: "Allahabad District",
      icon: <icons.IoMdCheckmarkCircleOutline style={{color:"#2463eb"}}/>,
      tag: "completed",
      time: "4 hours ago",
    },
    {
      title: "Life jackets distributed",
      subtitle: "Lucknow Ghaat",
      icon: <icons.LuShield style={{color:"#ea580b"}}/>,
      tag: "completed",
      time: "1 day ago",
    },
    {
      title: "Boat maintenance",
      subtitle: "Agra District",
      icon: <icons.BsExclamationTriangle style={{color:"#ca8a03"}}/>,
      tag: "pending",
      time: "2 days ago",
    },
  ];

  return (
    <div className="recent-activity-card">
      <CustomHeading2
        title={"Recent Activity"}
        subtitle={"Latest updates from across the state"}
        icon={
          <icons.TbActivityHeartbeat
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        }
        bg={"var(--gradient-bg-first)"}
      />
      {menu.map((item) => (
        <div className="activity-item" key={item.title}>
          <div className="activity-heading">
            <CustomHeading3
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          </div>
          <div className="activity-Info">
            <div
              className="activity-tag"
              style={{

                color: item.tag === "completed" ? "#166434" : "#854d0f",
                background: item.tag === "completed" ? "#dcfce7" : "#fef9c3",
                border:
                  item.tag === "completed"
                    ? "1px solid #bbf7d0"
                    : "1px solid #ffef8a",
              }}
            >
              {item.tag}
            </div>
            <p style={{ fontSize: "10px", color: "#475569" }}>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivityCard;
