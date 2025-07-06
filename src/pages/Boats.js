import { CustomHeading1 } from "../utility/CustomUi";
import { icons } from "../utility/icons.js";

const Boats = () => {
    return (
        <div>
            <CustomHeading1 title={"Boat Management"} subtitle={"Register and track rescue boats with comprehensive documentation and real-time monitoring"} icon={<icons.IoBoatOutline style={{
              width: "32px",
              height: "32px",
            }}/>} bg={"var(--gradient-bg-second)"} textColor={"linear-gradient(to right, #07966a, #0d9486)"}/>
        </div>
    )
}
export default Boats;