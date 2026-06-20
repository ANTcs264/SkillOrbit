 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaBrain,
} from "react-icons/fa";

function Landing() {
  const stats = [
    {
      title: "Resume Score",
      value: "91.43",
    },
    {
      title: "Placement Score",
      value: "82.86",
    },
    {
      title: "Skills",
      value: "10",
    },
    {
      title: "Career Path",
      value: "AI/ML",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0F172A,#1E293B,#2563EB)",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* Navbar */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
            }}
          >
            🚀 SkillOrbit AI
          </h2>

          <p
            style={{
              margin: 0,
              color: "#CBD5E1",
              fontSize: "12px",
            }}
          >
            Career Intelligence Platform
          </p>
        </div>

        <div>
          <Link to="/login">
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>

          <Link to="/register">
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                background: "#2563EB",
                color: "white",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}

      <motion.section
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background:
              "rgba(37,99,235,0.2)",
            color: "#60A5FA",
            padding: "8px 18px",
            borderRadius: "999px",
            marginBottom: "25px",
            border:
              "1px solid #2563EB",
          }}
        >
          AI Career Development Platform
        </div>

        <h1
          style={{
            fontSize: "4rem",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          AI-Powered Career
          Intelligence Platform
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin:
              "30px auto 0 auto",
            color: "#CBD5E1",
            fontSize: "1.3rem",
            lineHeight: "1.8",
          }}
        >
          Transform your resume,
          identify skill gaps,
          track placement readiness,
          and receive personalized
          AI career guidance.
        </p>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <Link to="/register">
            <button
              style={{
                padding:
                  "16px 40px",
                borderRadius:
                  "12px",
                border: "none",
                background:
                  "#2563EB",
                color: "white",
                fontSize:
                  "18px",
                cursor:
                  "pointer",
              }}
            >
              Start Free
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Dashboard Preview */}

      <section
        style={{
          padding: "30px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            background:
              "rgba(255,255,255,0.08)",
            backdropFilter:
              "blur(15px)",
            borderRadius:
              "25px",
            padding: "25px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#CBD5E1",
            }}
          >
            Dashboard Preview
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#94A3B8",
            }}
          >
            Dashboard screenshot
            will be added after
            Dashboard V3 completion
          </p>
        </div>
      </section>

      {/* Stats */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          padding: "50px",
        }}
      >
        {stats.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            style={{
              background:
                "rgba(255,255,255,0.08)",
              backdropFilter:
                "blur(15px)",
              borderRadius:
                "20px",
              padding: "30px",
              textAlign:
                "center",
            }}
          >
            <h2
              style={{
                fontSize:
                  "2rem",
                marginBottom:
                  "10px",
              }}
            >
              {item.value}
            </h2>

            <p
              style={{
                color:
                  "#CBD5E1",
                fontWeight:
                  "500",
              }}
            >
              {item.title}
            </p>
          </motion.div>
        ))}
      </section>

      {/* How It Works */}

      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom:
              "50px",
          }}
        >
          How SkillOrbit Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {[
            "Create Profile",
            "Upload Resume",
            "Analyze Skill Gap",
            "Get Placement Ready",
          ].map(
            (
              step,
              index
            ) => (
              <motion.div
                whileHover={{
                  scale:
                    1.05,
                }}
                key={step}
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                  borderRadius:
                    "20px",
                  padding:
                    "30px",
                  textAlign:
                    "center",
                }}
              >
                <h1>
                  {index + 1}
                </h1>

                <h3>
                  {step}
                </h3>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Features */}

      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom:
              "50px",
          }}
        >
          Powerful AI Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          <FeatureCard
            icon={<FaRobot />}
            title="AI Career Copilot"
            desc="Personalized guidance based on skills and career goals."
          />

          <FeatureCard
            icon={<FaFileAlt />}
            title="Resume Analyzer"
            desc="Improve recruiter visibility and optimize your resume."
          />

          <FeatureCard
            icon={<FaChartLine />}
            title="Placement Dashboard"
            desc="Track placement readiness and career growth."
          />

          <FeatureCard
            icon={<FaBrain />}
            title="Skill Gap Detection"
            desc="Discover missing skills for your dream role."
          />
        </div>
      </section>

      {/* Footer */}

      <footer
        style={{
          textAlign: "center",
          padding: "50px",
          color: "#94A3B8",
        }}
      >
        <h2>
          🚀 SkillOrbit AI
        </h2>

        <p>
          AI-Powered Career
          Intelligence Platform
        </p>

        <p>
          Built with React,
          Django, PostgreSQL
          and AI
        </p>

        <p>
          © 2026 SkillOrbit.
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      style={{
        background:
          "rgba(255,255,255,0.08)",
        backdropFilter:
          "blur(15px)",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <p
        style={{
          color: "#CBD5E1",
          lineHeight: "1.7",
        }}
      >
        {desc}
      </p>
    </motion.div>
  );
}

export default Landing;