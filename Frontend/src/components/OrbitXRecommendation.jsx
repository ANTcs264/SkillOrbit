function OrbitXRecommendation({
  bestJob,
  nextStep,
  showInsight,
}) {
  return (
    <div
      style={{
        background: "#F8FAFC",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <h3>
        🤖 OrbitX Recommendation
      </h3>

      <p>
        Your profile currently aligns
        strongly with{" "}
        <strong>
          {bestJob?.job_title ||
            "your selected career path"}
        </strong>.
      </p>

      <p>
        Recommended Action:
        {" "}
        <strong>
          {nextStep}
        </strong>
      </p>

      {showInsight && (
        <div
          style={{
            marginTop: "15px",
            padding: "15px",
            background: "#FEF3C7",
            borderRadius: "12px",
          }}
        >
          ⚠ OrbitX Insight:
          Your profile appears to
          align more strongly with{" "}
          <strong>
            {bestJob?.job_title}
          </strong>{" "}
          than your stated career
          goal.
        </div>
      )}
    </div>
  );
}

export default OrbitXRecommendation;