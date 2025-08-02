import { rivers, roadAccessibility, upDistricts } from "../../data/index";
import {
  CustomButton,
  CustomHeading4,
  DropDownMenu,
  InputBox,
  TextAreaBox,
  UploadImage,
} from "../../utils/CustomUi";
import { icons } from "../../utils/icons";

const RegisterNewGhats = () => {
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
        title={"Register New River Port"}
        subtitle={
          "Document and register a new ghat with precise location data and visual proof"
        }
        icon={
          <icons.MdOutlineWaves
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        }
        textColor={"var(--gradient-bg-third)"}
        bg={"var(--gradient-bg-third)"}
      />
      <form action="">
        <UploadImage
          title="Upload Ghat Geotagged Photo"
          subtitle={
            <p style={{ fontsize: "14px", color: "#1c4ed8", padding: "8px 0" }}>
              Capture or upload photo of the ghat with{" "}
              <span style={{ fontWeight: "bold" }}>GPS coordinates</span> (from
              phone camera).
            </p>
          }
          info={
            "Location info will be extracted from uploaded photo for official records."
          }
          onImageUpload={handleImageUpload}
          iconBg={"#3c82f6"}
          borderColor={"#92c5fd"}
          bgColor={"#eef7ff"}
          titleColor={"#1f3a8a"}
          buttonColor={"var(--gradient-bg-third)"}
          hoverColor={"linear-gradient(to right, #2565e9, #098db6)"}
        />
        <div className="form-group">
          <InputBox
            label={"Ghat Name"}
            type={"text"}
            placeholder={"Enter ghat name"}
            required={"required"}
            focusColor={"#4d87f7"}
          />

          <DropDownMenu
            label={"District"}
            options={upDistricts}
            required={"required"}
            focusColor={"#4d87f7"}
          />

          <DropDownMenu
            label={"River Name"}
            options={rivers}
            required={"required"}
            focusColor={"#4d87f7"}
            placeholder={"Select River"}
          />

          <InputBox
            label={"Boat Capacity"}
            type={"text"}
            placeholder={"Maximum boats allowed"}
            required={"required"}
            focusColor={"#4d87f7"}
          />

          <DropDownMenu
            label={"Road Accessibility"}
            options={roadAccessibility}
            required={"required"}
            focusColor={"#4d87f7"}
            placeholder={"Select Accessibility"}
          />

          <InputBox
            label={"Contact Person"}
            type={"text"}
            placeholder={"Name of local person"}
            required={"required"}
            focusColor={"#4d87f7"}
          />

          <InputBox
            label={"Contact Number"}
            type={"text"}
            placeholder={"Mobile number"}
            required={"required"}
            focusColor={"#4d87f7"}
          />

          <InputBox
            label={"Nearest Hospital"}
            type={"text"}
            placeholder={"Hospital name and distance"}
            focusColor={"#4d87f7"}
          />
          <div></div>
        </div>
        <TextAreaBox
          label={"Available Facilities"}
          placeholder={"eg. Boat Parking, First Aid Station, Communication Tower, Storage etc."}
          required={"required"}
          focusColor={"#4d87f7"}
        />
        <TextAreaBox
          label={"Additional Information"}
          placeholder={"Any additional information about the ghat"}
          required={null}
          focusColor={"#4d87f7"}
        />
        <CustomButton
          label={"Register Ghat"}
          onClick={() => {}}
          icon={
            <icons.MdOutlineWaves style={{ width: "18px", height: "18px" }} />
          }
          color={"#ffffff"}
          backgroundColor={"var(--gradient-bg-third)"}
          hoverColor={"linear-gradient(to right, #2565e9, #098db6)"}
        />
      </form>
    </div>
  );
};

export default RegisterNewGhats;
