import {
  boatTypes,
  registrationAuthority,
  supportStaff,
  upDistricts,
} from "../../data/index";
import {
  CustomButton,
  CustomHeading4,
  DropDownMenu,
  InputBox,
  TextAreaBox,
  UploadImage,
} from "../../utils/CustomUi";
import { icons } from "../../utils/icons";

const RegisterNewBoat = () => {
  const handleImageUpload = (uploadData) => {
    console.log("Image uploaded:", uploadData);

    // uploadData contains:
    // - file: The actual file object
    // - gpsCoordinates: { latitude, longitude, altitude, timestamp }
    // - metadata: { camera, model, dateTime, etc. }
    // - hasGPS: boolean
    // - uploadedAt: ISO timestamp

    // Send to your backend or store in state
    if (uploadData.hasGPS) {
      console.log(
        `Location: ${uploadData.gpsCoordinates.latitude}, ${uploadData.gpsCoordinates.longitude}`
      );
    }
  };
  return (
    <div className="tab-content">
      <CustomHeading4
        title={"Register Rescue Boat"}
        subtitle={
          "Document and register a new rescue boat with complete specifications and visual proof"
        }
        icon={
          <icons.IoBoatOutline
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        }
        textColor={"var(--gradient-bg-second)"}
        bg={"var(--gradient-bg-second)"}
      />
      <form action="">
        <UploadImage
          title="Upload Boat Geotagged Photo"
          subtitle={
            <p style={{ fontsize: "var(--text-sm)", color: "#047857", padding: "8px 0" }}>
              Capture or upload photo of the boat with visible registration
              number and{" "}
              <span style={{ fontWeight: "var(--font-bold)" }}>GPS coordinates</span> (from
              phone camera).
            </p>
          }
          info={
            "Location info will be extracted from uploaded photo for official records."
          }
          onImageUpload={handleImageUpload}
          iconBg={"#12b981"}
          borderColor={"#6fe8b8"}
          bgColor={"#effdf8"}
          titleColor={"#064e3b"}
          buttonColor={"var(--gradient-bg-second)"}
          hoverColor={"linear-gradient(to right, #04956c, #0d9486)"}
        />
        <div className="form-group">
          <InputBox
            label={"Registration Number"}
            type={"text"}
            placeholder={"UP-XXX-000"}
            required={"required"}
            focusColor={"#13ba82"}
          />

          <DropDownMenu
            label={"District"}
            options={upDistricts}
            required={"required"}
            focusColor={"#13ba82"}
          />

          <DropDownMenu
            label={"Boat Type"}
            options={boatTypes}
            required={"required"}
            focusColor={"#13ba82"}
            placeholder={"Select Type"}
          />

          <InputBox
            label={"Pilot Name"}
            type={"text"}
            placeholder={"Enter pilots's full name"}
            required={"required"}
            focusColor={"#13ba82"}
          />

          <InputBox
            label={"Pilot License Number"}
            type={"text"}
            placeholder={"License Number"}
            required={"required"}
            focusColor={"#13ba82"}
          />

          <DropDownMenu
            label={"Support Staff"}
            options={supportStaff}
            required={"required"}
            focusColor={"#13ba82"}
            placeholder={"Number of Staff"}
          />

          <InputBox
            label={"Engine Details"}
            type={"text"}
            placeholder={"eg., 40Hp Yamaha"}
            required={"required"}
            focusColor={"#13ba82"}
          />

          <InputBox
            label={"Passenger Capacity"}
            type={"number"}
            placeholder={"Maximum passengers"}
            focusColor={"#13ba82"}
          />

          <InputBox
            label={"Year of Manufacture"}
            type={"date"}
            dateType={"year"}
            placeholder={"YYYY"}
            focusColor={"#13ba82"}
          />

          <InputBox
            label={"Assigned Ghaat"}
            type={"text"}
            required={"required"}
            placeholder={"Enter ghaat name"}
            focusColor={"#13ba82"}
          />

          <DropDownMenu
            label={"Registration Authority"}
            options={registrationAuthority}
            required={"required"}
            focusColor={"#13ba82"}
            placeholder={"Select Authority"}
          />
          <div></div>
        </div>
        <TextAreaBox
          label={"Additional Remarks"}
          placeholder={"Any additional information about the boat"}
          required={null}
          focusColor={"#13ba82"}
        />
        <CustomButton
          label={"Register Boat"}
          onClick={() => {}}
          icon={
            <icons.IoBoatOutline style={{ width: "18px", height: "18px" }} />
          }
          color={"#ffffff"}
          backgroundColor={"var(--gradient-bg-second)"}
          hoverColor={"linear-gradient(to right, #04956c, #0d9486)"}
        />
      </form>
    </div>
  );
};

export default RegisterNewBoat;
