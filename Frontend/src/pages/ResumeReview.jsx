 import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function ResumeReview() {
  const [review, setReview] =
    useState(null);

  useEffect(() => {
    api
      .get("resume-review/")
      .then((res) =>
        setReview(res.data)
      )
      .catch(console.error);
  }, []);

  if (!review) {
    return (
      <MainLayout>
        <h2>
          Loading Resume Review...
        </h2>
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
        📄 AI Resume Review
      </h1>

      {/* Score Card */}

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
        <h2>
          Resume Score
        </h2>

        <h1
          style={{
            color: "#16A34A",
            fontSize: "48px",
          }}
        >
          {review.overall_score}%
        </h1>
      </div>

      {/* Career Path */}

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
          🤖 Recommended Career
          Path
        </h2>

        <h3
          style={{
            color: "#2563EB",
          }}
        >
          {review.career_path}
        </h3>
      </div>

      {/* Strengths & Weaknesses */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,.08)",
          }}
        >
          <h2
            style={{
              color: "#16A34A",
            }}
          >
            ✅ Strengths
          </h2>

          <ul>
            {review.strengths.map(
              (item) => (
                <li key={item}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,.08)",
          }}
        >
          <h2
            style={{
              color: "#DC2626",
            }}
          >
            ⚠️ Weaknesses
          </h2>

          <ul>
            {review.weaknesses.map(
              (item) => (
                <li key={item}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Recommendations */}

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
          🚀 AI Recommendations
        </h2>

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
}

export default ResumeReview;