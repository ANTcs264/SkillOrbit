 function JobComparisonTable({ jobs }) {

  const getColor = (score) => {

    if (score >= 90)
      return "#16A34A";

    if (score >= 70)
      return "#2563EB";

    if (score >= 50)
      return "#F59E0B";

    return "#DC2626";
  };

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
          marginBottom: "25px",
        }}
      >
        📊 Job Match Comparison
      </h2>

      {jobs.map((job) => (

        <div
          key={job.job_title}
          style={{
            marginBottom: "25px",
            borderBottom:
              "1px solid #E5E7EB",
            paddingBottom: "20px",
          }}
        >
          {/* Header */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              marginBottom: "10px",
            }}
          >
            <h3>
              {job.job_title}
            </h3>

            <strong>
              {job.readiness}%
            </strong>
          </div>

          {/* Progress Bar */}

          <div
            style={{
              width: "100%",
              height: "12px",
              background:
                "#E5E7EB",
              borderRadius:
                "20px",
              overflow:
                "hidden",
              marginBottom:
                "12px",
            }}
          >
            <div
              style={{
                width:
                  `${job.readiness}%`,
                height: "100%",
                background:
                  getColor(
                    job.readiness
                  ),
              }}
            />
          </div>

          {/* Details */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              flexWrap: "wrap",
              gap: "10px",
              color: "#64748B",
            }}
          >
            <span>
              💰 {job.salary_range}
            </span>

            <span>
              🚀 {job.demand_level}
            </span>

            <span>
              👨‍💻 {job.experience_level}
            </span>
          </div>

          {/* Missing Skills */}

          {job.missing_skills
            .length > 0 && (
            <div
              style={{
                marginTop:
                  "12px",
              }}
            >
              {job.missing_skills.map(
                (skill) => (
                  <span
                    key={skill}
                    style={{
                      background:
                        "#FEE2E2",
                      color:
                        "#DC2626",
                      padding:
                        "6px 12px",
                      borderRadius:
                        "999px",
                      fontSize:
                        "13px",
                      marginRight:
                        "8px",
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default JobComparisonTable;