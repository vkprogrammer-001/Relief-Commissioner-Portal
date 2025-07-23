import { CustomHeading1, TabBar } from "../utility/CustomUi";
import RegisterNewBoat from "../components/RegisterNewBoat";
import RegisteredBoats from "../components/RegisteredBoats";
import { icons } from "../utility/icons.js";

const Boats = () => {
  const tabs = [
    {
      id: "Register New Boat",
      icon: icons.IoBoatOutline(),
      content: <RegisterNewBoat />,

    },
    {
      id: "Boat Directory",
      icon: icons.LuFileImage(),
      content: <RegisteredBoats />,
    },
  ];
  return (
    <div>
      <CustomHeading1
        title={"Boat Management"}
        subtitle={
          "Register and track rescue boats with comprehensive documentation and real-time monitoring"
        }
        icon={
          <icons.IoBoatOutline
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        }
        bg={"var(--gradient-bg-second)"}
        textColor={"linear-gradient(to right, #07966a, #0d9486)"}
      />
      <TabBar tabs={tabs} color={"#079669"} />
    </div>
  );
};
export default Boats;
