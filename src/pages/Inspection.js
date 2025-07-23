import { TabBar } from "../utility/CustomUi";
import RegisterNewBoat from "../components/RegisterNewBoat";

const Inspection = () => {
  const tabs = [
    {
      id: "Conduct Inspection",
      content: <RegisterNewBoat />,
    },
    {
      id: "Inspection Records",
      content: <RegisterNewBoat />,
    },
    {
      id: "Inspection Schedule",
      content: <RegisterNewBoat />,
    },
    {
      id: "Analytics",
      content: <RegisterNewBoat />,
    },
  ];
  return (
    <div>
      <TabBar tabs={tabs} color={"#020817"}/>
    </div>
  );
};

export default Inspection;
