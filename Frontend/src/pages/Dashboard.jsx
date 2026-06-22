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
  
return (
  <MainLayout>
    <h1
      style={{
        marginBottom: "25px",
      }}
    >
      🚀 SkillOrbit AI Dashboard
    </h1>

    {/* KPI Cards */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
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
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
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