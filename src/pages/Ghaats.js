import { CustomHeading1 } from "../utility/CustomUi";
import { icons } from "../utility/icons.js";

const Ghaats = () => {
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
    </div>
  );
};

export default Ghaats;
