import { jacketsPerBoat, upDistricts } from "../../data/index";
import {
  CustomButton,
  CustomHeading4,
  DropDownMenu,
  InputBox,
  TextAreaBox,
} from "../../utils/CustomUi";
import { icons } from "../../utils/icons";

const RecordDistribution = () => {
  return (
    <div className="tab-content">
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
      <form action="">
        <div className="form-group">
          <DropDownMenu
            label={"District"}
            options={upDistricts}
            required={"required"}
            focusColor={"#f97318"}
          />

          <InputBox
            label={"Ghaat Name"}
            type={"text"}
            placeholder={"Enter ghaat name"}
            required={"required"}
            focusColor={"#f97318"}
          />

          <InputBox
            label={"Number of Boats"}
            type={"Number"}
            placeholder={"Enter number of boats"}
            required={"required"}
            focusColor={"#f97318"}
          />

          <DropDownMenu
            label={"Jackets Per Boat"}
            options={jacketsPerBoat}
            required={"required"}
            placeholder={"Select Jackets"}
            focusColor={"#f97318"}
          />

          <InputBox
            label={"Total Jackets Distributed"}
            type={"Number"}
            placeholder={"Enter total jackets distributed"}
            required={"required"}
            focusColor={"#f97318"}
          />

          <InputBox
            label={"Distribution Date"}
            type={"Date"}
            dateType={"date"}
            focusColor={"#f97318"}
          />
          <InputBox
            label={"Recieved By"}
            type={"text"}
            placeholder={"Name of recieving official"}
            focusColor={"#f97318"}
          />
          <InputBox
            label={"Contact Number"}
            type={"text"}
            placeholder={"Enter contact number"}
            focusColor={"#f97318"}
          />
          <div></div>
        </div>
        <TextAreaBox
          label={"Distribution Notes"}
          placeholder={"Any additional information about the distribution"}
          required={"required"}
          focusColor={"#f97318"}
        />
        <CustomButton
          label={"Register Ghaat"}
          onClick={() => {}}
          icon={<icons.LuShield style={{ width: "18px", height: "18px" }} />}
          color={"#ffffff"}
          backgroundColor={"var(--gradient-bg-fifth)"}
          hoverColor={"linear-gradient(to right, #ea580b, #dc2625)"}
        />
      </form>
    </div>
  );
};

export default RecordDistribution;
