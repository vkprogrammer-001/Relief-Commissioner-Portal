import "../../styles/component-styles.css";
import { CustomHeading2, Tag } from "../../utils/CustomUi.js";
import { icons } from "../../utils/icons.js";

const RecentActivityCard = () => {
  const menu = [
    {
      title: "New boat registered",
      subtitle: "Varanasi Ghat",
      icon: <icons.IoBoatOutline style={{ color: "#079669" }} />,
      tag: "completed",
      time: "2 hours ago",
    },
    {
      title: "Inspection completed",
      subtitle: "Allahabad District",
      icon: <icons.IoMdCheckmarkCircleOutline style={{ color: "#2463eb" }} />,
      tag: "completed",
      time: "4 hours ago",
    },
    {
      title: "Life jackets distributed",
      subtitle: "Lucknow Ghat",
      icon: <icons.LuShield style={{ color: "#ea580b" }} />,
      tag: "completed",
      time: "1 day ago",
    },
    {
      title: "Boat maintenance",
      subtitle: "Agra District",
      icon: <icons.BsExclamationTriangle style={{ color: "#ca8a03" }} />,
      tag: "pending",
      time: "2 days ago",
    },
  ];

  return (
    <div className="recent-activity-card">
      <CustomHeading2
        title={"Recent Activity"}
        subtitle={"Latest updates from across the state"}
        icon={<icons.TbActivityHeartbeat />}
        iconBg={"var(--gradient-bg-first)"}
      />
      {menu.map((item) => (
        <div className="activity-item" key={item.title}>
          <div className="activity-heading">
            <CustomHeading2
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              titleSize={"var(--text-sm)"}
              subtitleSize={"var(--text-xs)"}
              iconSize={"16px"}
            />
          </div>
          <div className="activity-Info">
            <Tag tagName={item.tag} />
            <p style={{ color: "#475569" }}>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivityCard;
