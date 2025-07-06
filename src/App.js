import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Boats from "./pages/Boats";
import Dashboard from "./pages/Dashboard";
import Districts from "./pages/Districts";
import Ghaats from "./pages/Ghaats";
import Inspection from "./pages/Inspection";
import LifeJackets from "./pages/LifeJackets";
import "./styles/global.css";

function App() {
  return (
    // BrowserRouter: The foundation of client-side routing.
    // It keeps the UI in sync with the URL.
    <Router>
      <div>
        {/* Header component: Likely contains branding, user info, etc. */}
        <Header />
        <div className="app">
          {/* Navbar component: Handles navigation links and active state. */}
          <Navbar />
          <div className="content">
            {/* Routes: Defines the mapping between URL paths and components. */}
            <Routes>
              {/* Default route for the dashboard. */}
              <Route path="/" element={<Dashboard />} />
              {/* Routes for specific application sections. */}
              <Route path="/boats" element={<Boats />} />
              <Route path="/ghaats" element={<Ghaats />} />
              <Route path="/districts" element={<Districts />} />
              <Route path="/life-jackets" element={<LifeJackets />} />
              <Route path="/inspection" element={<Inspection />} />
              {/* Catch-all route: Redirects any unmatched paths to the dashboard.
                  'replace' ensures the user can't hit the back button to reach an invalid URL. */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;