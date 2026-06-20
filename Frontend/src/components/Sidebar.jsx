 import {
  FaHome,
  FaUser,
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("refresh");

    navigate("/login");
  };

  const menuStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px",
    marginBottom: "10px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "white",
    backgroundColor: isActive
      ? "#2563EB"
      : "transparent",
    transition: "0.3s",
  });

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1
          style={{
            color: "#60A5FA",
            marginBottom: "40px",
          }}
        >
          🚀 SkillOrbit AI
        </h1>

        <NavLink
          to="/dashboard"
          style={menuStyle}
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          style={menuStyle}
        >
          <FaUser />
          Profile
        </NavLink>

        <NavLink
          to="/resume-review"
          style={menuStyle}
        >
          <FaFileAlt />
          Resume Review
        </NavLink>

        <NavLink
          to="/career-copilot"
          style={menuStyle}
        >
          <FaRobot />
          AI Copilot
        </NavLink>

        <NavLink
          to="/reports"
          style={menuStyle}
        >
          <FaChartLine />
          Reports
        </NavLink>
      </div>

      <button
        onClick={logout}
        style={{
          border: "none",
          padding: "14px",
          borderRadius: "12px",
          cursor: "pointer",
          background: "#DC2626",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;