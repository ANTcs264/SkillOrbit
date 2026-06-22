import {
  useEffect,
  useState,
} from "react";

import MainLayout
from "../layouts/MainLayout";

import api
from "../services/api";

import SkillProgressCard
from "../components/SkillProgressCard";

import StatCard from "../components/StatCard";
import SkillsBarChart from "../components/SkillsBarChart";

function Skills() {

const [skills, setSkills] =
    useState([]);
const totalSkills =
  skills.length;

const avgProgress =
  skills.length > 0
    ? (
        skills.reduce(
          (sum, skill) =>
            sum + skill.progress,
          0
        ) / skills.length
      ).toFixed(0)
    : 0;

const strongestSkill =
  skills.length > 0
    ? skills.reduce((a, b) =>
        a.progress > b.progress
          ? a
          : b
      ).skill
    : "-";

const advancedSkills =
  skills.filter(
    (skill) =>
      skill.progress >= 80
  ).length;  

  useEffect(() => {

    api
      .get("skills/")
      .then((res) =>
        setSkills(res.data)
      )
      .catch(console.error);

  }, []);

  

 return (
  <MainLayout>

    {/* HERO SECTION */}

    <div
      style={{
        background:
          "linear-gradient(135deg,#1E3A8A,#2563EB)",
        color: "white",
        padding: "35px",
        borderRadius: "25px",
        marginBottom: "30px",
        boxShadow:
          "0 10px 30px rgba(37,99,235,.25)",
      }}
    >
      <h1
        style={{
          margin: 0,
          marginBottom: "10px",
        }}
      >
        🧠 Skills Intelligence Center
      </h1>

      <p
        style={{
          fontSize: "18px",
          opacity: 0.9,
          margin: 0,
        }}
      >
        Track your growth, identify skill gaps,
        and become placement ready with OrbitX.
      </p>
    </div>

    {/* KPI CARDS */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <StatCard
        title="Total Skills"
        value={totalSkills}
        color="#2563EB"
      />

      <StatCard
        title="Strongest Skill"
        value={strongestSkill}
        color="#16A34A"
      />

      <StatCard
        title="Average Progress"
        value={`${avgProgress}%`}
        color="#9333EA"
      />

      <StatCard
        title="Skills Above 80%"
        value={advancedSkills}
        color="#F97316"
      />
    </div>

    {/* ORBITX ANALYSIS */}

    <div
      style={{
        background:
          "linear-gradient(135deg,#7C3AED,#9333EA)",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        marginBottom: "30px",
        boxShadow:
          "0 10px 30px rgba(124,58,237,.25)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "25px",
        }}
      >
        🤖 OrbitX Skill Intelligence
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        <div>
          <div
            style={{
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            🏆 Strongest Skill
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginTop: "8px",
            }}
          >
            {strongestSkill}
          </div>
        </div>

        <div>
          <div
            style={{
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            📈 Average Readiness
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginTop: "8px",
            }}
          >
            {avgProgress}%
          </div>
        </div>

        <div>
          <div
            style={{
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            🎯 Skills Above 80%
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginTop: "8px",
            }}
          >
            {advancedSkills}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "25px",
          paddingTop: "20px",
          borderTop:
            "1px solid rgba(255,255,255,.2)",
        }}
      >
        <h3>
          🚀 Career Impact
        </h3>

        <p
          style={{
            lineHeight: "1.8",
            opacity: 0.9,
            margin: 0,
          }}
        >
          Your strongest area is{" "}
          <b>{strongestSkill}</b>.
          With an average proficiency of{" "}
          <b>{avgProgress}%</b>,
          you are building a solid
          foundation for AI/ML careers.
          Continue improving advanced
          skills to increase placement
          readiness and unlock higher
          salary opportunities.
        </p>
      </div>
    </div>

   <div
  style={{
    marginBottom: "30px",
  }}
>
  <SkillsBarChart
    skills={skills}
  />
</div>


    {/* EXISTING SKILLS GRID */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
        gap: "20px",
      }}
    >
     {[...skills]
  .sort((a, b) => b.progress - a.progress)
  .map((skill, index) => (
   <SkillProgressCard
  key={skill.id}
  skill={skill}
/>
))}
    </div>



  </MainLayout>
);
}

export default Skills;