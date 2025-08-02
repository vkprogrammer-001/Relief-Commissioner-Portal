import { SummaryCard } from "../../utils/CustomUi.js";
import { icons } from "../../utils/icons.js";

const DashboardCard = () => {
  const cardMenu = [
    {
      title: "Total Boats",
      value: 1249,
      icon: (
        <icons.IoBoatOutline
          style={{
            height: "25px",
            width: "25px",
            borderRadius: "12px",
          }}
        />
      ),
      bg: "var(--gradient-bg-second)",
      textColor: "#064e3b",
      color: "#effdf9",
      hikeValue: "+23",
    },
    {
      title: "Active Ghats",
      value: 156,
      icon: <icons.MdOutlineWaves style={{ height: "25px", width: "25px" }} />,
      bg: "var(--gradient-bg-third)",
      textColor: "#1f3a8a",
      color: "#edfbff",
      hikeValue: "+5",
    },
    {
      title: "Districts Covered",
      value: 75,
      icon: (
        <icons.IoLocationOutline style={{ height: "25px", width: "25px" }} />
      ),
      bg: "var(--gradient-bg-fourth)",
      textColor: "#581c87",
      color: "#fcf2fb",
      hikeValue: "100%",
    },
    {
      title: "Life Jackets",
      value: 3741,
      icon: <icons.LuShield style={{ height: "25px", width: "25px" }} />,
      bg: "var(--gradient-bg-fifth)",
      textColor: "#7c2d12",
      color: "#fff5f0",
      hikeValue: "+127",
    },
  ];
  return (
    <div className="dashboard-card-container">
      {cardMenu.map((item) => (
        <SummaryCard
          title={item.title}
          value={item.value}
          info={`${item.hikeValue} from last month`}
          infoColor="#17a34a"
          mainIcon={item.icon}
          mainIconBg={item.bg}
          containerBg={item.color}
          containerBorder={"none"}
          containerBorderRadius="15px"
          titleColor={item.textColor}
          valueColor={item.textColor}
          valueSize="var(--text-3xl)"
          infoSize="var(--text-sm)"
          rightIcon={
            <icons.IoIosTrendingUp
              style={{
                height: "20px",
                width: "20px",
                color: "#22c55d",
              }}
            />
          }
          containerShadow={"0 4px 10px -1px rgba(0, 0, 0, 0.2)"}
          infoIcon={<icons.FiArrowUpRight />}
          hovered={true}
        />
      ))}
    </div>
  );
};

export default DashboardCard;
