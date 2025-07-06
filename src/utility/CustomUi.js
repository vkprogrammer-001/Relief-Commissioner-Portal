import "./Custom.css";

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

export {
  CustomHeading1,
  CustomHeading2,
  CustomHeading3,
  CustomButton,
  CustomDotText,
  ProgressIndicator,
};
