 import { useState } from "react";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3F4F6",
      }}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
    }}
  >
    <button
      onClick={() =>
        setSidebarOpen(true)
      }
      style={{
        border: "none",
        background: "transparent",
        fontSize: "28px",
        cursor: "pointer",
      }}
    >
      ☰
    </button>

    <h2>SkillOrbit AI</h2>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
    }}
  >
    <div
      style={{
        fontSize: "22px",
        cursor: "pointer",
      }}
    >
      🔔
    </div>

    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background:
          "linear-gradient(135deg,#2563EB,#7C3AED)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "700",
      }}
    >
      N
    </div>
  </div>
</div>

      <div
        style={{
          padding: "30px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;