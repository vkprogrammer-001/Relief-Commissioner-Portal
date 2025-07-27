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
            fontSize: "var(--text-4xl)",
            paddingLeft: "10px",
            background: textColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>
      </div>
      <h3
        style={{
          fontSize: "var(--text-lg)",
          fontWeight: "var(--font-medium)",
          color: "#65768c",
          margin: "20px 0",
          textAlign: "center",
        }}
      >
        {subtitle}
      </h3>
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
      {icon && (
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
      )}
      <div className="heading-text">
        <h4
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-bold)",
            color: textColor ? textColor : "#0f172a",
          }}
        >
          {title}
        </h4>
        {subtitle ? (
          <p style={{ color: "#475569", fontSize: "var(--text-sm)" }}>
            {subtitle}
          </p>
        ) : null}
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
        <h4
          style={{ fontWeight: "var(--font-bold)", fontSize: "var(--text-sm)" }}
        >
          {title}
        </h4>
        {subtitle ? (
          <p style={{ fontSize: "var(--text-xs)", color: "#475569" }}>
            {subtitle}
          </p>
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
          fontSize: "var(--text-2xl)",
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
          fontSize: "var(--text-lg)",
          fontWeight: "var(--font-medium)",
          color: "#65768c",
          textAlign: "center",
        }}
      >
        {subtitle}
      </h4>
    </div>
  );
};

const CustomButton = ({
  label,
  onClick,
  icon,
  color,
  backgroundColor,
  hoverColor,
}) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ color: color || "#f8fafc", background: backgroundColor }}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.background = backgroundColor)}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span>{label}</span>
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
          color,
          fontSize: fontSize || "var(--text-sm)",
          fontWeight: fontWeight || "var(--font-bold)",
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

const Tag = ({ tagName }) => {
  return (
    <div
      className="tag"
      style={{
        color:
          tagName === "completed" || tagName === "Excellent"
            ? "#166434"
            : tagName === "Good" || tagName === "In Progress"
            ? "#1d40b0"
            : "#854d0f",
        background:
          tagName === "completed" || tagName === "Excellent"
            ? "#dcfce7"
            : tagName === "Good" || tagName === "In Progress"
            ? "#dbe9fe"
            : "#fef9c3",
        border:
          tagName === "completed" || tagName === "Excellent"
            ? "1px solid #bbf7d0"
            : tagName === "Good" || tagName === "In Progress"
            ? "1px solid #a9cbfdff"
            : "1px solid #fef293",
      }}
    >
      {tagName}
    </div>
  );
};

const InputBox = ({
  label,
  type,
  dateType,
  placeholder,
  required,
  focusColor,
  height,
  borderRadius,
  min,
  max,
  value,
  onChange,
}) => {
  // Generate appropriate input props based on dateType
  const getDateInputProps = () => {
    if (type !== "date") return {};

    switch (dateType) {
      case "day":
        return {
          type: "number",
          min: "1",
          max: "31",
          placeholder: placeholder || "Enter day (1-31)",
        };
      case "month":
        return {
          type: "number",
          min: "1",
          max: "12",
          placeholder: placeholder || "Enter month (1-12)",
        };
      case "year":
        return {
          type: "number",
          min: min || "1900",
          max: max || new Date().getFullYear().toString(),
          placeholder: placeholder || "Enter year",
        };
      case "month-year":
        return {
          type: "month",
          placeholder: placeholder || "Select month and year",
        };
      case "full":
      default:
        return {
          type: "date",
          placeholder: placeholder || "Select date",
        };
    }
  };

  const inputProps = type === "date" ? getDateInputProps() : { type };
  return type !== "checkbox" ? (
    <div className="input-box">
      <label htmlFor={label}>
        {label} {required && "*"}
      </label>
      <div className="input-field" style={{ borderRadius: `${borderRadius+4}px` }}>
        <input
          {...inputProps}
          name={label}
          id={label}
          placeholder={placeholder}
          required={required}
          min={inputProps.min || (type === "number" ? "0" : undefined)}
          max={inputProps.max}
          value={value}
          onChange={onChange}
          style={{
            "--focus-color": focusColor || "#e2e8f0",
            height,
            borderRadius: `${borderRadius}px`,
          }}
        />
      </div>
    </div>
  ) : (
    <div className="check-box">
      <input
        type="checkbox"
        id={label}
        name={label}
        required={required}
        onChange={onChange}
        style={{ marginRight: "8px", cursor: "pointer" }}
      />
      <label
        htmlFor={label}
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-semibold)",
        }}
      >
        {label}
      </label>
    </div>
  );
};

const DropDownMenu = ({
  label,
  options,
  selectedOption,
  onSelect,
  required,
  focusColor,
  height,
  borderRadius,
  placeholder,
}) => {
  return (
    <div className="dropdown-menu">
      <label htmlFor={label}>
        {label} {required && "*"}
      </label>
      <div className="dropdown" style={{ borderRadius: `${borderRadius+4}px` }}>
        <select
          name={label}
          id={label}
          value={selectedOption || ""}
          onChange={(e) => onSelect(e.target.value)}
          style={{
            "--focus-color": focusColor || "#e2e8f0",
            height,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <option value="" disabled>
            {placeholder || `Select ${label}`}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const TextAreaBox = ({ label, placeholder, required, focusColor, height,
  borderRadius, }) => {
  return (
    <div className="textarea-box" style={{marginBottom:"15px"}}>
      <label htmlFor={label}>
        {label} {required && "*"}
      </label>
      <div
        className="input-field"
        style={{ padding: "3px 3px 0", boxSizing: "border-box", borderRadius: `${borderRadius+4}px` }}
      >
        <textarea
          id={label}
          name={label}
          placeholder={placeholder || "Enter detailed description here..."}
          rows="4"
          style={{ "--focus-color": focusColor || "#e2e8f0", height, borderRadius: `${borderRadius}px` }}
        ></textarea>
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
              fontSize: "var(--text-lg)",
              fontWeight: "var(--font-bold)",
              color: titleColor || "#333333",
            }}
          >
            {title || "Upload Photo"}
          </p>
          {subtitle}
          <p style={{ fontSize: "var(--text-xs)", color: "#64758b" }}>
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
              background: isHovered
                ? hoverColor || "#0056b3"
                : buttonColor || "#007bff",
              color: "#fff",
            }}
            disabled={isProcessing}
            onClick={() =>
              document.getElementById("image-upload-input").click()
            }
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
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-bold)",
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
                fontSize: "var(--text-xs)",
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
            fontSize: "var(--text-sm",
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
  Tag,
  InputBox,
  DropDownMenu,
  TextAreaBox,
};
