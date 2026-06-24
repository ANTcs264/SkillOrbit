import ProfileInfoCard from "./ProfileInfoCard";

function OrbitXInsights({
  placement,
  skillGap,
  resume,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.08)",
        marginBottom: "25px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        📊 OrbitX Insights
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <ProfileInfoCard
          title="Placement Score"
          value={`${placement?.placement_score}%`}
        />

        <ProfileInfoCard
          title="Resume Score"
          value={resume?.overall_score}
        />

        <ProfileInfoCard
          title="Skill Gap"
          value={`${skillGap?.gap_percentage}%`}
        />

        <ProfileInfoCard
          title="Status"
          value={placement?.status}
        />
      </div>

      <div
        style={{
          background: "#F8FAFC",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h3
          style={{
            marginBottom: "15px",
          }}
        >
          🔥 Missing Skills
        </h3>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {skillGap?.missing_skills?.map(
            (skill) => (
              <span
                key={skill}
                style={{
                  background:
                    "#FEF2F2",
                  color: "#DC2626",
                  padding:
                    "8px 15px",
                  borderRadius:
                    "999px",
                  fontWeight: "600",
                }}
              >
                🔥 {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default OrbitXInsights;