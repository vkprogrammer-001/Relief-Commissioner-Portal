import { CustomHeading4 } from "../utility/CustomUi";
import { icons } from "../utility/icons";

const RecordDistribution = () => {
  return (
    <div>
      <CustomHeading4
        title={"Record Life Jacket Distribution"}
        subtitle={
          "Document and track life jacket distribution to rescue boats and ghaats"
        }
        icon={
          <icons.LuShield
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        }
        textColor={"var(--gradient-bg-fifth)"}
        bg={"var(--gradient-bg-fifth)"}
      />
    </div>
  );
};

export default RecordDistribution;
