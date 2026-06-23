 import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import PlacementGauge from "../components/PlacementGauge";
import SkillGapCard from "../components/SkillGapCard";
import StatCard from "../components/StatCard";

import api from "../services/api";

import {
  FaRobot,
  FaFileAlt,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

const Dashboard = () => {

  const [dashboard, setDashboard] =
    useState(null);

  const [placement, setPlacement] =
    useState(null);

  const [review, setReview] =
    useState(null);

  useEffect(() => {

    Promise.all([
      api.get("dashboard/"),
      api.get("placement-readiness/"),
      api.get("resume-review/"),
    ])
      .then(
        ([
          dashboardRes,
          placementRes,
          reviewRes,
        ]) => {

          setDashboard(
            dashboardRes.data
          );

          setPlacement(
            placementRes.data
          );

          setReview(
            reviewRes.data
          );
        }
      )
      .catch(console.error);

  }, []);

  if (
    !dashboard ||
    !placement ||
    !review
  ) {
    return (
      <MainLayout>
        <h2>Loading Dashboard...</h2>
      </MainLayout>
    );
  }
  const heroBtn = {
  padding: "12px 22px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "#2563EB",
  fontWeight: "600",
  cursor: "pointer",
};
  
return (
  <MainLayout>
   <h1
  style={{
    marginBottom: "25px",
  }}
>
   SkillOrbit AI Dashboard
</h1>

{/* Hero Section */}

<div
  style={{
    background:
      "linear-gradient(135deg,#2563EB,#7C3AED)",
    color: "white",
    padding: "35px",
    borderRadius: "24px",
    marginBottom: "25px",
    boxShadow:
      "0 20px 40px rgba(37,99,235,.25)",
  }}
>
  <h1
    style={{
      margin: 0,
      fontSize: "34px",
      fontWeight: "700",
    }}
  >
    Welcome Back 👋
  </h1>

  <p
    style={{
      marginTop: "15px",
      fontSize: "18px",
      opacity: 0.95,
    }}
  >
    Track your career growth and
    placement readiness.
  </p>

  <div
    style={{
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "25px",
    }}
  >
    <div>
      <p style={{ margin: 0, opacity: 0.8 }}>
        Target Career
      </p>

      <h3 style={{ margin: "5px 0" }}>
        {dashboard.career_path}
      </h3>
    </div>

    <div>
      <p style={{ margin: 0, opacity: 0.8 }}>
        Placement Readiness
      </p>

      <h3 style={{ margin: "5px 0" }}>
        {placement.placement_score}%
      </h3>
    </div>

    <div>
      <p style={{ margin: 0, opacity: 0.8 }}>
        Resume Score
      </p>

      <h3 style={{ margin: "5px 0" }}>
        {dashboard.resume_score}%
      </h3>
    </div>
  </div>
</div>

{/* Activity + Skill Growth */}

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(450px,1fr))",
    gap: "25px",
    marginBottom: "25px",
  }}
>
  {/* Recent Activity */}

  <div
    style={{
      background: "white",
      padding: "25px",
      borderRadius: "20px",
      boxShadow:
        "0 10px 30px rgba(0,0,0,.08)",
    }}
  >
    <h2>📈 Recent Activity</h2>

    <div
      style={{
        marginTop: "20px",
      }}
    >
      {[
        "Completed React Quiz",
        "Updated Resume",
        "Added Python Skill",
        "Generated Career Roadmap",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#2563EB",
            }}
          />

          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Weekly Skill Growth */}

  <div
    style={{
      background: "white",
      padding: "25px",
      borderRadius: "20px",
      boxShadow:
        "0 10px 30px rgba(0,0,0,.08)",
    }}
  >
    <h2>🔥 Weekly Skill Growth</h2>

    <div
      style={{
        marginTop: "20px",
      }}
    >
      {[
        {
          skill: "Python",
          progress: 90,
        },
        {
          skill: "React",
          progress: 75,
        },
        {
          skill: "Django",
          progress: 85,
        },
        {
          skill: "SQL",
          progress: 65,
        },
      ].map((item) => (
        <div
          key={item.skill}
          style={{
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginBottom: "6px",
            }}
          >
            <span>{item.skill}</span>
            <span>
              {item.progress}%
            </span>
          </div>

          <div
            style={{
              height: "10px",
              background: "#E5E7EB",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width:
                  `${item.progress}%`,
                height: "100%",
                background:
                  "linear-gradient(90deg,#2563EB,#7C3AED)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Placement Progress */}

<div
  style={{
    background: "white",
    padding: "25px",
    borderRadius: "24px",
    marginBottom: "25px",
    boxShadow:
      "0 10px 30px rgba(0,0,0,.08)",
  }}
>
  <h2>
     Placement Readiness
  </h2>

  <div
    style={{
      height: "14px",
      background: "#E5E7EB",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "15px",
    }}
  >
    <div
      style={{
        width: `${placement.placement_score}%`,
        height: "100%",
        background:
          "linear-gradient(90deg,#2563EB,#7C3AED)",
      }}
    />
  </div>

  <p
    style={{
      marginTop: "10px",
      color: "#64748B",
      fontWeight: "600",
    }}
  >
    {placement.placement_score}% Placement Ready
  </p>
</div>

<div
  style={{
    marginBottom: "25px",
  }}
>
  
</div>
  

    {/* KPI Cards */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
        "repeat(auto-fit,minmax(280px,1fr))",
         gap: "25px",
        marginBottom: "25px",
      }}
    >
      <StatCard
        title="Career Path"
        value={dashboard.career_path}
        color="#2563EB"
        icon={<FaBrain />}
      />

      <StatCard
        title="Resume Score"
        value={`${dashboard.resume_score}%`}
        color="#16A34A"
        icon={<FaFileAlt />}
      />

      <StatCard
        title="Placement Score"
        value={`${dashboard.placement_score}%`}
        color="#DC2626"
        icon={<FaChartLine />}
      />

      <StatCard
        title="Job Readiness"
        value={`${placement.job_readiness}%`}
        color="#9333EA"
        icon={<FaRobot />}
      />
    </div>

    {/* Secondary Metrics */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
       "repeat(auto-fit,minmax(250px,1fr))",
       gap: "25px",
        marginBottom: "25px",
      }}
    >
      <StatCard
        title="Skills"
        value={dashboard.skills_count}
        color="#0EA5E9"
      />

      <StatCard
        title="Courses"
        value={dashboard.courses_enrolled}
        color="#F59E0B"
      />

      <StatCard
        title="Quizzes"
        value={dashboard.quizzes_attempted}
        color="#8B5CF6"
      />

      <StatCard
        title="Pass Rate"
        value={`${dashboard.pass_rate}%`}
        color="#22C55E"
      />
    </div>

    {/* Gauge + Skill Gap */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(350px,1fr))",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      <PlacementGauge
        score={
          placement.placement_score
        }
      />

      <SkillGapCard
        skills={
          dashboard.missing_skills
        }
      />
    </div>

    {/* Career Recommendation */}

    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "25px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h2>
        🤖 AI Career Recommendation
      </h2>

      <h3
        style={{
          color: "#2563EB",
        }}
      >
        {dashboard.career_path}
      </h3>

      <p>
        Recommended skills to focus
        on:
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {dashboard.missing_skills.map(
          (skill) => (
            <span
              key={skill}
              style={{
                padding:
                  "8px 14px",
                background:
                  "#DBEAFE",
                color:
                  "#1E40AF",
                borderRadius:
                  "999px",
                fontWeight:
                  "600",
              }}
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>




    {/* Resume Review */}

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
        📄 AI Resume Review
      </h2>

      <h3
        style={{
          color: "#16A34A",
        }}
      >
        Strengths
      </h3>

      <ul>
        {review.strengths.map(
          (item) => (
            <li key={item}>
              {item}
            </li>
          )
        )}
      </ul>

      <h3
        style={{
          color: "#DC2626",
          marginTop: "15px",
        }}
      >
        Improvements
      </h3>

      <ul>
        {review.recommendations.map(
          (item) => (
            <li key={item}>
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  </MainLayout>
);
  
  
};

export default Dashboard;