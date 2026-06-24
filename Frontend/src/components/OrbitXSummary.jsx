import ProfileInfoCard from "./ProfileInfoCard";

function OrbitXSummary({
  profile,
  bestJob,
  completionPercentage,
}) {
  return (
    <>
      <h2>
        🚀 OrbitX Executive Summary
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <ProfileInfoCard
          title="Target Career"
          value={
            profile.career_goal ||
            "Not Set"
          }
        />

        <ProfileInfoCard
          title="Best Match"
          value={
            bestJob?.job_title ||
            "N/A"
          }
        />

        <ProfileInfoCard
          title="Readiness"
          value={`${
            bestJob?.readiness || 0
          }%`}
        />

        <ProfileInfoCard
          title="Completion"
          value={`${completionPercentage}%`}
        />
      </div>
    </>
  );
}

export default OrbitXSummary;