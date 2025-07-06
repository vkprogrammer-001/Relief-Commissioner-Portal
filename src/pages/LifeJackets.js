import { CustomHeading1 } from "../utility/CustomUi";
import { icons } from "../utility/icons.js";

const LifeJackets = () => {
  return (
    <div>
      <CustomHeading1
        title={"Life Jacket Distribution"}
        subtitle={
          "Manage and track life jacket distribution across all rescue boats and ghaats"
        }
        icon={
          <icons.MdOutlineWaves
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        }
        bg={"var(--gradient-bg-fifth)"}
        textColor={"linear-gradient(to right, #ea580e, #dc2625)"}
      />
    </div>
  );
};

export default LifeJackets;
