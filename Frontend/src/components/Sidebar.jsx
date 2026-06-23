 import {
  FaHome,
  FaUser,
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaSignOutAlt,
  FaRoad,
  FaBriefcase,
  FaCode,
  FaTimes,
} from "react-icons/fa";
import "./Sidebar.css";

import { FaSearch } from "react-icons/fa";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");

    navigate("/login");
  };


  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,.4)",
            zIndex: 998,
          }}
        />
      )}

      <div
        style={{
          width: "280px",
          height: "100vh",
          background: "#0F172A",
          color: "white",
          padding: "25px",
          overflowY: "auto",
          position: "fixed",
          left: sidebarOpen
            ? "0"
            : "-320px",
          top: 0,
          zIndex: 999,
          transition:
            "all .3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent:
            "space-between",
        }}
      >
        <div>
         <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "left",
    marginBottom: "30px",
  }}
>
  <div>
    <h1 className="sidebar-logo">
       SkillOrbit
    </h1>

    <p className="sidebar-subtitle">
      AI Career Platform
    </p>
  </div>

  <button
    onClick={() =>
      setSidebarOpen(false)
    }
    style={{
      background: "transparent",
      border: "none",
      color: "white",
      fontSize: "22px",
      cursor: "pointer",
    }}
  >
    <FaTimes />
  </button>
</div>

<div
  style={{
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "18px",
    padding: "18px",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background:
          "linear-gradient(135deg,#2563EB,#7C3AED)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        fontWeight: "700",
      }}
    >
      N
    </div>

    <div>
      <h4
        style={{
          margin: 0,
        }}
      >
        Nishant
      </h4>

      <p
        style={{
          margin: 0,
          color: "#94A3B8",
          fontSize: "13px",
        }}
      >
        AI/ML Engineer
      </p>
    </div>
  </div>
</div>




<NavLink
  to="/dashboard"
  className={({ isActive }) =>
    isActive
      ? "sidebar-link active"
      : "sidebar-link"
  }
>
  <FaHome />
  Dashboard
</NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaUser />
            Profile
          </NavLink>

          <NavLink
            to="/resume-review"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaFileAlt />
            Resume Review
          </NavLink>

          <NavLink
            to="/career-coach"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaRobot />
            Career Coach
          </NavLink>

          <NavLink
            to="/career-roadmap"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaRoad />
            Career Roadmap
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaChartLine />
            Reports
          </NavLink>

          <NavLink
            to="/job-recommendations"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaBriefcase />
            Jobs
          </NavLink>

          <NavLink
            to="/career-copilot"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaRobot />
            AI Copilot
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaCode />
            Skills
          </NavLink>
        </div>

       <button
  onClick={logout}
  className="logout-btn"
>
  <FaSignOutAlt />
  Logout
</button>
      </div>
    </>
  );
};

export default Sidebar;