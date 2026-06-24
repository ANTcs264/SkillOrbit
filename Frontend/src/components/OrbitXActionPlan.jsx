function OrbitXActionPlan({
  resume,
  skillGap,
  bestJob,
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
        🚀 OrbitX Action Plan
      </h2>

      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {resume?.recommendations?.map(
          (item, index) => (
            <div
              key={index}
              style={{
                background:
                  "#F8FAFC",
                padding: "15px",
                borderRadius:
                  "12px",
              }}
            >
              ✅ {item}
            </div>
          )
        )}

        {skillGap?.missing_skills?.map(
          (skill) => (
            <div
              key={skill}
              style={{
                background:
                  "#FEFCE8",
                padding: "15px",
                borderRadius:
                  "12px",
              }}
            >
              📚 Learn {skill}
            </div>
          )
        )}

        {bestJob?.missing_skills?.map(
          (skill) => (
            <div
              key={skill}
              style={{
                background:
                  "#EFF6FF",
                padding: "15px",
                borderRadius:
                  "12px",
              }}
            >
              🎯 Required for{" "}
              {bestJob.job_title}:
              {" "}
              {skill}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default OrbitXActionPlan;