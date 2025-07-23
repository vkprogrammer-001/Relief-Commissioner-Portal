import RegisteredGhaats from "../components/RegisteredGhaats.js";
import RegisterNewGhaats from "../components/RegisterNewGhaats.js";
import { CustomHeading1, TabBar } from "../utility/CustomUi";
import { icons } from "../utility/icons.js";

const Ghaats = () => {
  const tabs = [
    {
      id: "Register New Ghaat",
      icon: icons.IoCameraOutline(),
      content: <RegisterNewGhaats />,

    },
    {
      id: "Ghaat Directory",
      icon: icons.IoLocationOutline(),
      content: <RegisteredGhaats />,
    },
  ];

  return (
    <div>
      <CustomHeading1
        title={"Ghaat Management"}
        subtitle={
          "Register and manage river ports across Uttar Pradesh with advanced geolocation and photo documentation"
        }
        icon={
          <icons.MdOutlineWaves
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        }
        bg={"var(--gradient-bg-third)"}
        textColor={"linear-gradient(to right, #2564ea, #0690b3)"}
      />
      <TabBar tabs={tabs} color={"#2362eb"} />
    </div>
  );
};

export default Ghaats;
