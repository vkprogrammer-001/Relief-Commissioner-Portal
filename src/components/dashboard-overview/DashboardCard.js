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
      title: "Active Ghaats",
      value: 156,
      icon: (
        <icons.MdOutlineWaves
          style={{ height: "25px", width: "25px",  }}
        />
      ),
      bg: "var(--gradient-bg-third)",
      textColor: "#1f3a8a",
      color: "#edfbff",
      hikeValue: "+5",
    },
    {
      title: "Districts Covered",
      value: 75,
      icon: (
        <icons.IoLocationOutline
          style={{ height: "25px", width: "25px",  }}
        />
      ),
      bg: "var(--gradient-bg-fourth)",
      textColor: "#581c87",
      color: "#fcf2fb",
      hikeValue: "100%",
    },
    {
      title: "Life Jackets",
      value: 3741,
      icon: (
        <icons.LuShield
          style={{ height: "25px", width: "25px",  }}
        />
      ),
      bg: "var(--gradient-bg-fifth)",
      textColor: "#7c2d12",
      color: "#fff5f0",
      hikeValue: "+127",
    },
  ];
  return (
    <div className="dashboard-card-container">
      {cardMenu.map((item) => (
        <div
          className="dashboard-card"
          key={item.title}
          style={{ background: item.color }}
        >
          <div className="card-icon">
            <span className="first-icon" style={{ background: item.bg }}>
              {item.icon}
            </span>
            <span>
              <icons.IoIosTrendingUp
                style={{
                  height: "20px",
                  width: "20px",
                  color: "#22c55d",
                }}
              />
            </span>
          </div>
          <div className="card-content">
            <h5 className="card-title" style={{ color: item.textColor,fontSize: "var(--text-sm)" }}>
              {item.title}
            </h5>
            <p
              className="card-value"
              style={{
                color: item.textColor,
                fontSize: "var(--text-3xl)",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              {item.value}
            </p>
            <p
              className="hike-value"
              style={{ paddingTop: "10px", color: "#17a34a", fontSize: "var(--text-sm)" }}
            >
              <icons.FiArrowUpRight />
              {item.hikeValue + " from last month"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
