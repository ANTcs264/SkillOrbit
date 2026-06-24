import ProfileInfoCard from "./ProfileInfoCard";

function OrbitXJobMatches({ jobs }) {
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
        💼 Top Job Matches
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {jobs.slice(0, 3).map((job) => (
          <div
            key={job.job_title}
            style={{
              border:
                "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "20px",
              background: "#F8FAFC",
            }}
          >
            <h3>
              {job.job_title}
            </h3>

            <p>
              🎯 Readiness:
              <strong>
                {" "}
                {job.readiness}%
              </strong>
            </p>

            <p>
              💰 Salary:
              {" "}
              {job.salary_range}
            </p>

            <p>
              📈 Demand:
              {" "}
              {job.demand_level}
            </p>

            {job.missing_skills
              ?.length > 0 && (
              <>
                <h4>
                  Missing Skills
                </h4>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap:
                      "wrap",
                  }}
                >
                  {job.missing_skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        style={{
                          background:
                            "#FEF2F2",
                          color:
                            "#DC2626",
                          padding:
                            "6px 12px",
                          borderRadius:
                            "999px",
                          fontSize:
                            "13px",
                        }}
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrbitXJobMatches;