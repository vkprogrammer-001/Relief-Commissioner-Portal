import { RegisterNewGhats, RegisteredGhats } from "../components/index.js";
import { CustomHeading1, TabBar } from "../utils/CustomUi.js";
import { icons } from "../utils/icons.js";

const Ghats = () => {
  const tabs = [
    {
      id: "Register New Ghat",
      icon: icons.IoCameraOutline(),
      content: <RegisterNewGhats />,
    },
    {
      id: "Ghat Directory",
      icon: icons.IoLocationOutline(),
      content: <RegisteredGhats />,
    },
  ];

  return (
    <div>
      <CustomHeading1
        title={"Ghat Management"}
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

export default Ghats;
