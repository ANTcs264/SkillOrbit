 function CoachCard({ title, value, icon }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h3>{icon} {title}</h3>

      <p
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default CoachCard;