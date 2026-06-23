
function ProfileInfoCard({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <p
        style={{
          color: "#64748B",
          marginBottom: "8px",
          fontSize: "14px",
        }}
      >
        {title}
      </p>

      <h3 style={{ margin: 0 }}>
        {value || "Not Provided"}
      </h3>
    </div>
  );
}

export default ProfileInfoCard;

