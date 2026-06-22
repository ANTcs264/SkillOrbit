import {
  FaBriefcase,
  FaMoneyBillWave,
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBook,
} from "react-icons/fa";

function JobCard({ job }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "25px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          color: "#2563EB",
        }}
      >
        <FaBriefcase />
        {" "}
        {job.job_title}
      </h2>

      <p>
        <strong>Career Path:</strong>
        {" "}
        {job.career_path}
      </p>

      <p>
        <strong>Experience:</strong>
        {" "}
        {job.experience_level}
      </p>

      <p>
        <FaMoneyBillWave />
        {" "}
        <strong>Salary:</strong>
        {" "}
        {job.salary_range}
      </p>

      <p>
        <FaChartLine />
        {" "}
        <strong>Demand:</strong>
        {" "}
        {job.demand_level}
      </p>

      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <h3>
          🎯 Readiness
        </h3>

        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#E5E7EB",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${job.readiness}%`,
              height: "100%",
              background:
                job.readiness >= 80
                  ? "#16A34A"
                  : job.readiness >= 50
                  ? "#F59E0B"
                  : "#DC2626",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "8px",
            fontWeight: "bold",
          }}
        >
          {job.readiness}%
        </p>
      </div>

      <div
        style={{
          marginTop: "15px",
        }}
      >
        <h3>
          <FaCheckCircle />
          {" "}
          Matched Skills
        </h3>

        <ul>
          {job.matched_skills.map(
            (skill) => (
              <li key={skill}>
                ✅ {skill}
              </li>
            )
          )}
        </ul>
      </div>

      <div
        style={{
          marginTop: "15px",
        }}
      >
        <h3>
          <FaExclamationTriangle />
          {" "}
          Missing Skills
        </h3>

        {job.missing_skills.length ===
        0 ? (
          <p
            style={{
              color: "#16A34A",
              fontWeight: "600",
            }}
          >
            No Missing Skills 🎉
          </p>
        ) : (
          <ul>
            {job.missing_skills.map(
              (skill) => (
                <li key={skill}>
                  ❌ {skill}
                </li>
              )
            )}
          </ul>
        )}
      </div>

      <div
        style={{
          marginTop: "15px",
        }}
      >
        <h3>
          <FaBook />
          {" "}
          Recommended Courses
        </h3>

        {job.recommended_courses
          .length === 0 ? (
          <p>
            No courses required
          </p>
        ) : (
          <ul>
            {job.recommended_courses.map(
              (course) => (
                <li key={course}>
                  📘 {course}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default JobCard;