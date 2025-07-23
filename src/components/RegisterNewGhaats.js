import { CustomHeading4, UploadImage } from "../utility/CustomUi";
import { icons } from "../utility/icons";

const RegisterNewGhaats = () => {
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
    <div>
      <CustomHeading4
        title={"Register New River Port"}
        subtitle={
          "Document and register a new ghaat with precise location data and visual proof"
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
      <UploadImage
        title="Upload Ghaat Geotagged Photo"
        subtitle={
          <p style={{ fontsize: "14px", color: "#1c4ed8", padding: "8px 0" }}>
            Capture or upload photo of the ghaat with <span style={{ fontWeight: "bold" }}>GPS coordinates</span>{" "}
            (from phone camera).
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
    </div>
  );
};

export default RegisterNewGhaats;
