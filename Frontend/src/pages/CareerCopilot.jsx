import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import OrbitXInsights from "../components/OrbitXInsights";
import OrbitXJobMatches from "../components/OrbitXJobMatches";
import OrbitXActionPlan from "../components/OrbitXActionPlan";




function CareerCopilot() {


  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState(null);

  const [loading, setLoading] =
    useState(false);


  const [skillGap, setSkillGap] =
  useState(null);

  const [placement, setPlacement] =
    useState(null);
  
  const [resume, setResume] =
    useState(null);
  
  const [jobs, setJobs] =
  useState([]);  


useEffect(() => {
  Promise.all([
    api.get("skill-gap/"),
    api.get("placement-readiness/"),
    api.get("resume-review/"),
    api.get("job-recommendations/"),
  ])
    .then(
      ([
        skillGapRes,
        placementRes,
        resumeRes,
        jobsRes,
      ]) => {
        setSkillGap(
          skillGapRes.data
        );

        setPlacement(
          placementRes.data
        );

        setResume(
          resumeRes.data
        );

        setJobs(
          jobsRes.data
        );
      }
    )
    .catch(console.error);
}, []);

  const askCopilot = async () => {

    if (!question.trim()) {
      return;
    }

    try {

      setLoading(true);

  const res = await api.post(
        "ai-copilot/",
        {
          question,
        }
      );

      setAnswer(res.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

const bestJob =jobs.length > 0 ? jobs[0] : null;

console.log(skillGap);
console.log(placement);
console.log(resume);
console.log(jobs);
  return (
    <MainLayout>

      {/* Hero Section */}

      <div
  style={{
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow:"0 10px 30px rgba(0,0,0,.08)",
    marginBottom: "25px",
  }}
>
<h1
  style={{
    marginBottom: "8px",
    background:"linear-gradient(135deg,#2563EB,#7C3AED)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2.8rem",
    fontWeight: "800",
    
  }}
>
  🤖 OrbitX
</h1>

<h3
  style={{
    color: "#2563EB",
    marginBottom: "15px",
  }}
>
  Your Personal AI Career Mentor
</h3>

  <p
    style={{
      color: "#64748B",
      marginBottom: "25px",
    }}
  >
   OrbitX analyzes your profile,
career path, placement readiness,
skills and goals to provide
personalized career guidance.
  </p>

  <textarea
    value={question}
    onChange={(e) =>
      setQuestion(e.target.value)
    }
    placeholder="Ask OrbitX anything about your career..."
    rows={5}
    style={{
      width: "100%",
      padding: "18px",
      borderRadius: "16px",
      border: "2px solid #E2E8F0",
      background: "#F8FAFC",
      color: "#111827",
      fontSize: "16px",
      resize: "none",
      outline: "none",
      boxSizing: "border-box",
      marginBottom: "20px",
    }}
  />

  <div
    style={{
      display: "flex",
      justifyContent:
        "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
    }}
  >
    <div>
      <p
        style={{
          fontWeight: "600",
          marginBottom: "8px",
        }}
      >
        💡 Suggested Questions
      </p>

      <div
        style={{
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        • Can I become an AI Engineer?
        <br />
        • What skills am I missing?
        <br />
        • Best certification for me?
        <br />
        • Review my career path.
      </div>
    </div>

    <button
      onClick={askCopilot}
      disabled={loading}
      style={{
        padding:
          "14px 28px",
        border: "none",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg,#2563EB,#3B82F6)",
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
        cursor: "pointer",
        minWidth: "140px",
      }}
    >
      {loading
        ? "Thinking..."
        : "Ask OrbitX"}
    </button>
  </div>
</div>


{
  placement &&
  skillGap &&
  resume && (
    <OrbitXInsights
      placement={placement}
      skillGap={skillGap}
      resume={resume}
    />
  )
}

{
  jobs.length > 0 && (
    <OrbitXJobMatches
      jobs={jobs}
    />
  )
}

{
  resume &&
  skillGap &&
  bestJob && (
    <OrbitXActionPlan
      resume={resume}
      skillGap={skillGap}
      bestJob={bestJob}
    />
  )
}

      {/* Result Section */}

      {answer && (

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >

          {/* Career Path */}

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,.08)",
            }}
          >
            <h2>
              🎯 Career Path
            </h2>

            <h3>
              {answer.career_path}
            </h3>
          </div>

          {/* Score Cards */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius:
                  "20px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <h3>
                📄 Resume Score
              </h3>

              <h1>
                {answer.resume_score}
              </h1>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius:
                  "20px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <h3>
                📈 Placement Score
              </h3>

              <h1>
                {
                  answer.placement_score
                }
                %
              </h1>
            </div>
          </div>

          {/* Missing Skills */}

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,.08)",
            }}
          >
            <h2>
              🔥 Missing Skills
            </h2>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap:
                  "wrap",
                marginTop: "15px",
              }}
            >
              {answer.missing_skills.map(
                (skill) => (
                  <span
                    key={skill}
                    style={{
                      background:
                        "#FEF2F2",
                      color:
                        "#DC2626",
                      padding:
                        "8px 15px",
                      borderRadius:
                        "999px",
                      fontWeight:
                        "600",
                    }}
                  >
                    🔥 {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* AI Response */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#2563EB,#3B82F6)",
              color: "white",
              padding: "30px",
              borderRadius:
                "20px",
            }}
          >
            <h2>
              🤖 OrbitX Recommendation
            </h2>

            <pre
              style={{
                whiteSpace:
                  "pre-wrap",
                fontFamily:
                  "inherit",
                lineHeight:
                  "1.8",
                marginTop:
                  "15px",
              }}
            >
              {answer.answer}
            </pre>
          </div>

        </div>

      )}

    </MainLayout>
  );
}

export default CareerCopilot;