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
          value={
            dashboard.career_path
          }
          color="#2563EB"
          icon={<FaBrain />}
        />

        <StatCard
          title="Resume Score"
          value={
            dashboard.resume_score
          }
          color="#16A34A"
          icon={<FaFileAlt />}
        />

        <StatCard
          title="Placement Score"
          value={
            dashboard.placement_score
          }
          color="#DC2626"
          icon={<FaChartLine />}
        />

        <StatCard
          title="Job Readiness"
          value={
            placement.job_readiness
          }
          color="#9333EA"
          icon={<FaRobot />}
        />
      </div>

      {/* Second Row */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
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

      {/* Resume Review */}

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h2>
          AI Resume Review
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