const PlacementGauge = ({
  score,
}) => {

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h3>
        Placement Readiness
      </h3>

      <div
        style={{
          marginTop: "20px",
          height: "18px",
          background: "#E5E7EB",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: "#22C55E",
            borderRadius: "10px",
          }}
        />
      </div>

      <h2
        style={{
          marginTop: "15px",
        }}
      >
        {score}%
      </h2>
    </div>
  );
};

export default PlacementGauge;