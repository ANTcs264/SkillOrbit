
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import StatCard from "../components/StatCard";
import CoachCard from "../components/CoachCard";

import {
  FaBrain,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

function CareerCoach() {

  const [data, setData] =
    useState(null);

  useEffect(() => {

    api
      .get("career-coach/")
      .then((res) =>
        setData(res.data)
      )
      .catch(console.error);

  }, []);

  if (!data) {
    return (
      <MainLayout>
        <h2>Loading...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

  <div
    style={{
      background: "white",
      padding: "30px",
      borderRadius: "20px",
      marginBottom: "25px",
      boxShadow:
        "0 10px 30px rgba(0,0,0,.08)",
    }}
  >
    <h1>
      🤖 AI Career Coach
    </h1>

    <h2>
      {data.career_path}
    </h2>

    <p>
      Current Level:
      {" "}
      {data.current_level}
    </p>

  </div>

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
    title="Resume Score"
    value={data.resume_score}
    color="#16A34A"
    icon={<FaFileAlt />}
  />

  <StatCard
    title="Placement Score"
    value={data.placement_score}
    color="#2563EB"
    icon={<FaChartLine />}
  />

  <StatCard
    title="Career Path"
    value={data.career_path}
    color="#9333EA"
    icon={<FaBrain />}
  />
</div>

<h2>
  🔥 Priority Skills
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginBottom: "25px",
  }}
>
  {data.priority_focus.map(
    (skill) => (
      <CoachCard
        key={skill}
        title="Priority Skill"
        value={skill}
        icon="🔥"
      />
    )
  )}
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "1fr 1fr",
    gap: "20px",
    marginBottom: "25px",
  }}
>
  <CoachCard
    title="Recommended Certification"
    value={
      data.next_certification
    }
    icon="🏆"
  />

  <CoachCard
    title="Recommended Project"
    value={
      data.next_project
    }
    icon="🚀"
  />
</div>

<div
  style={{
    background:
      "linear-gradient(135deg,#2563EB,#3B82F6)",
    color: "white",
    padding: "30px",
    borderRadius: "20px",
  }}
>
  <h2>
    💡 AI Recommendation
  </h2>

  <p
    style={{
      fontSize: "18px",
      lineHeight: "1.8",
    }}
  >
    {data.placement_advice}
  </p>
</div>
  
  </MainLayout>
  )


}


export default CareerCoach;