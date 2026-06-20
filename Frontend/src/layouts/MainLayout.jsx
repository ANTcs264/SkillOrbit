 import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          width: "100%",
          padding: "30px",
          background: "#F3F4F6",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;