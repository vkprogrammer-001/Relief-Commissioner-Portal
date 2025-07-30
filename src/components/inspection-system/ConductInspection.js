import {
  CustomHeading2,
  InputBox,
  DropDownMenu,
  TextAreaBox,
  CustomButton,
} from "../../utils/CustomUi.js";

import {
  inspectionChecklist,
  hullCondition,
  engineCondition,
  safetyEquipment,
  overallCondition,
} from "../../data/inspectionTypes.js";

const ConductInspection = () => {
  return (
    <div>
      <CustomHeading2
        title={"Annual Boat Inspection Form"}
        titleSize={"var(--text-2xl)"}
        subtitle={
          "Complete annual safety and compliance inspection for rescue boats"
        }
      />
      <form className="inspection-form" style={{ marginTop: "10px" }}>
        <div className="form-group" style={{ gap: "10px" }}>
          <InputBox
            label={"Boat Registration Number"}
            type={"text"}
            placeholder={"UP-XXX-000"}
            height={"40px"}
            borderRadius={8}
            required={true}
          />
          <InputBox
            label={"Inspection Date"}
            type={"date"}
            dateType={"date"}
            height={"40px"}
            borderRadius={8}
            required={true}
          />
          <InputBox
            label={"Inspection Name"}
            type={"text"}
            placeholder={"Enter inspector name"}
            height={"40px"}
            borderRadius={8}
            required={true}
          />
          <InputBox
            label={"Inspector ID"}
            type={"text"}
            placeholder={"Enter inspector ID"}
            height={"40px"}
            borderRadius={8}
            required={true}
          />
        </div>
        <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "15px" }}>
          Inspection Checklist
        </h3>
        <div className="form-group" style={{ gap: "14px" }}>
          {inspectionChecklist.map((items) => (
            <InputBox key={items} label={items} type={"checkbox"} />
          ))}
        </div>
        <div className="form-group" style={{ gap: "10px" }}>
          <DropDownMenu
            label={"Hull Condition"}
            placeholder={"Select condition"}
            options={hullCondition}
            required={true}
            height={"40px"}
            borderRadius={8}
          />
          <DropDownMenu
            label={"Engine Condition"}
            placeholder={"Select condition"}
            options={engineCondition}
            required={true}
            height={"40px"}
            borderRadius={8}
          />
          <DropDownMenu
            label={"Safety Equipment"}
            placeholder={"Select status"}
            options={safetyEquipment}
            required={true}
            height={"40px"}
            borderRadius={8}
          />
          <DropDownMenu
            label={"Overall Status"}
            placeholder={"Select status"}
            options={overallCondition}
            required={true}
            height={"40px"}
            borderRadius={8}
          />
        </div>
        <TextAreaBox
          label={"Recommendations"}
          placeholder={"Any recommendation for maintenance or improvement"}
          borderRadius={8}
        />
        <TextAreaBox
          label={"Inspection Remarks"}
          placeholder={"Additional comments about the inspection"}
          borderRadius={8}
        />
        <CustomButton
          label={"Complete Inspection"}
          backgroundColor={"#2463eb"}
          hoverColor={"#1c4ed8"}
        />
      </form>
    </div>
  );
};

export default ConductInspection;
