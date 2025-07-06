import "../styles/component-styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo" style={{ position: 'relative' }}>
            <h2>UP</h2>
            <span className="logo-dot blinking-dot"></span>
          </div>
          <div className="header-title">
            <h1
              style={{
                background: "linear-gradient(to right, #2860ea, #8736eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Relief Commissioner Portal
            </h1>
            <h4 style={{ color: "#475569"}}>
              Advanced Boat Management System • Uttar Pradesh
            </h4>
          </div>
        </div>
        <div className="header-right">
          <div className="district-online">
            <span className="blinking-dot"></span>
            75 Districts Online
          </div>
          <button>Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
