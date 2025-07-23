import "./Custom.css";
import { useState } from "react";
import { icons } from "./icons";

const CustomHeading1 = ({
  title,
  subtitle,
  icon,
  bg,
  iconColor,
  textColor,
}) => {
  return (
    <div>
      <div className="title">
        <div
          style={{
            height: "56px",
            width: "56px",
            padding: "12px",
            borderRadius: "12px",
            background: bg,
            color: iconColor ? iconColor : "#fff",
          }}
        >
          {icon}
        </div>
        <h2
          style={{
            fontSize: "2.5rem",
            paddingLeft: "10px",
            background: textColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>
      </div>
      <h4
        style={{
          fontWeight: "500",
          color: "#65768c",
          margin: "20px 0",
          textAlign: "center",
        }}
      >
        {subtitle}
      </h4>
    </div>
  );
};

const CustomHeading2 = ({
  title,
  subtitle,
  icon,
  bg,
  iconColor,
  textColor,
}) => {
  return (
    <div className="custom-heading">
      <div
        style={{
          height: "40px",
          width: "40px",
          padding: "10px",
          borderRadius: "10px",
          background: bg,
          color: iconColor ? iconColor : "#fff",
        }}
      >
        {icon}
      </div>
      <div className="heading-text">
        <h4
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: textColor ? textColor : "#0f172a",
          }}
        >
          {title}
        </h4>
        {subtitle ? <p style={{ color: "#475569" }}>{subtitle}</p> : null}
      </div>
    </div>
  );
};

const CustomHeading3 = ({ title, subtitle, icon }) => {
  return (
    <div className="custom-heading">
      <span
        style={{ padding: "8px", borderRadius: "10px", background: "#ffffff" }}
      >
        {icon}
      </span>
      <div className="heading-text">
        <h4 style={{ fontWeight: "bold", fontSize: "14px" }}>{title}</h4>
        {subtitle ? (
          <p style={{ fontSize: "10px", color: "#475569" }}>{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
};

const CustomHeading4 = ({
  title,
  subtitle,
  icon,
  bg,
  iconColor,
  textColor,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          height: "56px",
          width: "56px",
          padding: "12px",
          borderRadius: "12px",
          background: bg,
          color: iconColor ? iconColor : "#fff",
        }}
      >
        {icon}
      </div>
      <h2
        style={{
          fontSize: "24px",
          margin: "14px 0",
          background: textColor,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h2>
      <h4
        style={{
          fontWeight: "500",
          color: "#65768c",
          textAlign: "center",
        }}
      >
        {subtitle}
      </h4>
    </div>
  );
};

const CustomButton = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

const CustomDotText = ({
  text,
  color,
  dotcolor,
  fontSize,
  fontWeight,
  dotblink,
}) => {
  return (
    <div className="custom-dot-text ">
      <div
        className={`dot ${dotblink}`}
        style={{ background: `${dotcolor}` }}
      ></div>
      <span
        style={{
          color: `${color}`,
          fontSize: `${fontSize}px`,
          fontWeight: `${fontWeight}`,
        }}
      >
        {text}
      </span>
    </div>
  );
};

const ProgressIndicator = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
};

const TabBar = ({ tabs, color }) => {
  const [activeTab, setActiveItem] = useState(tabs[0].id);
  const onTabChange = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <div>
      <div className="tab-bar">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
            style={activeTab === tab.id ? { color: color } : {}}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            <span className="tab-label">{tab.id}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (activeTab === tab.id ? tab.content : ""))}
      </div>
    </div>
  );
};

const UploadImage = ({
  title,
  subtitle,
  info,
  iconBg,
  iconColor,
  borderColor,
  bgColor,
  titleColor,
  buttonColor,
  hoverColor,
  onImageUpload,
  acceptedFormats = "image/*",
  maxSizeMB = 5,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [gpsData, setGpsData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  // Function to extract GPS coordinates from EXIF data
  const extractGPSFromExif = (file) => {
    return new Promise((resolve) => {

      const EXIF = window.ExifReader || require("exifreader");

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const tags = EXIF.load(e.target.result);

          // Extract GPS coordinates
          const gpsInfo = {
            latitude: null,
            longitude: null,
            altitude: null,
            timestamp: null,
            hasGPS: false,
          };

          if (tags.GPSLatitude && tags.GPSLongitude) {
            // Convert GPS coordinates to decimal degrees
            const lat = convertDMSToDD(
              tags.GPSLatitude.description,
              tags.GPSLatitudeRef?.description
            );
            const lng = convertDMSToDD(
              tags.GPSLongitude.description,
              tags.GPSLongitudeRef?.description
            );

            gpsInfo.latitude = lat;
            gpsInfo.longitude = lng;
            gpsInfo.hasGPS = true;

            if (tags.GPSAltitude) {
              gpsInfo.altitude = parseFloat(tags.GPSAltitude.description);
            }

            if (tags.GPSTimeStamp && tags.GPSDateStamp) {
              gpsInfo.timestamp = `${tags.GPSDateStamp.description} ${tags.GPSTimeStamp.description}`;
            }
          }

          // Extract other useful metadata
          const metadata = {
            camera: tags.Make?.description || "Unknown",
            model: tags.Model?.description || "Unknown",
            dateTime: tags.DateTime?.description || "Unknown",
            imageWidth: tags.ImageWidth?.value || "Unknown",
            imageHeight: tags.ImageLength?.value || "Unknown",
          };

          resolve({ gpsInfo, metadata });
        } catch (error) {
          console.warn("Could not extract EXIF data:", error);
          resolve({
            gpsInfo: { hasGPS: false },
            metadata: {},
          });
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  // Convert Degrees, Minutes, Seconds to Decimal Degrees
  const convertDMSToDD = (dms, ref) => {
    if (!dms) return null;

    const parts = dms.split(" ");
    if (parts.length < 3) return null;

    const degrees = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);

    let dd = degrees + minutes / 60 + seconds / 3600;

    if (ref === "S" || ref === "W") {
      dd = dd * -1;
    }

    return dd;
  };

  // Handle file selection
  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setError(null);
    setIsProcessing(true);

    try {
      // Validate file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        throw new Error(`File size exceeds ${maxSizeMB}MB limit`);
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        throw new Error("Please select a valid image file");
      }

      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      // Extract GPS and metadata
      const { gpsInfo, metadata } = await extractGPSFromExif(file);
      setGpsData({ ...gpsInfo, metadata });

      // Prepare data for parent component
      const uploadData = {
        file,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        gpsCoordinates: gpsInfo.hasGPS
          ? {
              latitude: gpsInfo.latitude,
              longitude: gpsInfo.longitude,
              altitude: gpsInfo.altitude,
              timestamp: gpsInfo.timestamp,
            }
          : null,
        metadata,
        hasGPS: gpsInfo.hasGPS,
        uploadedAt: new Date().toISOString(),
      };

      // Call parent callback
      if (onImageUpload) {
        onImageUpload(uploadData);
      }
    } catch (err) {
      setError(err.message);
      setImagePreview(null);
      setGpsData(null);
    } finally {
      setIsProcessing(false);
    }
  };

  // Clear selection
  const clearSelection = () => {
    setImagePreview(null);
    setGpsData(null);
    setError(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
  };

  return (
    <div
      className="upload-image-container"
      style={{
        background: bgColor || "#f8f9fa",
        border: `2px dashed ${borderColor || "#dee2e6"}`,
        position: "relative",
      }}
    >
      {/* Upload Area */}
      {!imagePreview && (
        <>
          <div
            style={{
              height: "48px",
              width: "48px",
              padding: "12px",
              margin: "24px 0",
              borderRadius: "30px",
              background: iconBg || "#007bff",
              color: iconColor || "#fff",
            }}
          >
            <icons.IoCameraOutline
              style={{
                height: "24px",
                width: "24px",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: titleColor || "#333",
            }}
          >
            {title || "Upload Photo"}
          </p>
          <p style={{ fontSize: "14px", color: "#666", margin: "8px 0" }}>
            {subtitle ||
              "Location info will be extracted from uploaded photo for official records."}
          </p>
          <p style={{ fontSize: "12px", color: "#64758b" }}>
            {info || `Max size: ${maxSizeMB}MB • Supports: JPG, PNG, HEIC`}
          </p>

          <input
            type="file"
            accept={acceptedFormats}
            onChange={handleFileSelect}
            style={{ display: "none" }}
            id="image-upload-input"
            disabled={isProcessing}
          />

            <button
              type="button"
              className="upload-button"
              style={{
                background: isHovered? hoverColor || '#0056b3' :buttonColor || "#007bff",
                color: "#fff",
              }}
              disabled={isProcessing}
              onClick={() => document.getElementById("image-upload-input").click()}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span style={{ marginRight: "8px" }}>
                {isProcessing ? (
                  <icons.AiOutlineLoading3Quarters className="spin" />
                ) : (
                  <icons.LuUpload />
                )}
              </span>
              {isProcessing ? "Processing..." : "Choose Photo"}
            </button>
        </>
      )}

      {/* Preview Area */}
      {imagePreview && (
        <div style={{ width: "100%", textAlign: "center" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                borderRadius: "8px",
                objectFit: "cover",
                margin: "10px 0",
              }}
            />
            <button
              onClick={clearSelection}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "rgba(0,0,0,0.7)",
                color: "white",
                border: "none",
                borderRadius: "30%",
                width: "24px",
                height: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>

          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#28a745",
              margin: "10px 0",
            }}
          >
            ✓ Image uploaded successfully
          </p>

          {/* GPS Information */}
          {gpsData && (
            <div
              style={{
                background: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "8px",
                padding: "12px",
                margin: "10px 0",
                textAlign: "left",
                fontSize: "12px",
              }}
            >
              <h5 style={{ margin: "0 0 8px 0", color: "#495057" }}>
                📍 Location Data
              </h5>
              {gpsData.hasGPS ? (
                <div>
                  <p>
                    <strong>Latitude:</strong> {gpsData.latitude?.toFixed(6)}
                  </p>
                  <p>
                    <strong>Longitude:</strong> {gpsData.longitude?.toFixed(6)}
                  </p>
                  {gpsData.altitude && (
                    <p>
                      <strong>Altitude:</strong> {gpsData.altitude}m
                    </p>
                  )}
                  {gpsData.timestamp && (
                    <p>
                      <strong>GPS Time:</strong> {gpsData.timestamp}
                    </p>
                  )}
                  <p style={{ color: "#28a745" }}>
                    ✓ Location verified for official records
                  </p>
                </div>
              ) : (
                <p style={{ color: "#dc3545" }}>
                  ⚠️ No GPS data found in this image
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div
          style={{
            background: "#f8d7da",
            color: "#721c24",
            padding: "8px 12px",
            borderRadius: "4px",
            margin: "10px 0",
            fontSize: "14px",
          }}
        >
          ⚠️ {error}
        </div>
      )}
    </div>
  );
};

export {
  CustomHeading1,
  CustomHeading2,
  CustomHeading3,
  CustomHeading4,
  CustomButton,
  CustomDotText,
  ProgressIndicator,
  TabBar,
  UploadImage,
};
