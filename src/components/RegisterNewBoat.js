import { CustomHeading4, UploadImage } from "../utility/CustomUi";
import { icons } from "../utility/icons";

const RegisterNewBoat = () => {
  const handleImageUpload = (uploadData) => {
    console.log('Image uploaded:', uploadData);
    
    // uploadData contains:
    // - file: The actual file object
    // - gpsCoordinates: { latitude, longitude, altitude, timestamp }
    // - metadata: { camera, model, dateTime, etc. }
    // - hasGPS: boolean
    // - uploadedAt: ISO timestamp
    
    // Send to your backend or store in state
    if (uploadData.hasGPS) {
      console.log(`Location: ${uploadData.gpsCoordinates.latitude}, ${uploadData.gpsCoordinates.longitude}`);
    }
  };
  return (
    <div>
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
      <UploadImage
        title="Upload Boat Geotagged Photo"
        subtitle={
          <p style={{ fontsize: "14px", color: "#047857", padding: "8px 0" }}>
            Capture or upload photo of the boat with visible registration number
            and <span style={{ fontWeight: "bold" }}>GPS coordinates</span>{" "}
            (from phone camera).
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
    </div>
  );
};

export default RegisterNewBoat;
