 import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function CareerRoadmap() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get("career-roadmap/")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <MainLayout>
        <h2>Loading Roadmap...</h2>
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
       <h1
  style={{
    color: "#111827",
  }}
>
  🛣 Career Roadmap
</h1>

<h2
  style={{
    color: "#2563EB",
  }}
>
  {data.career_path}
</h2>

<p
  style={{
    color: "#475569",
  }}
>
  Current Level: {data.current_level}
</p>

<p
  style={{
    color: "#475569",
  }}
>
  Readiness: {data.readiness}%
</p>
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        {data.roadmap.map(
          (item, index) => (
            <div
              key={item.step}
              style={{
                textAlign: "center",
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
    color: "#111827",
    marginBottom: "10px",
  }}
>
  Step {item.step}
</h2>

<h3
  style={{
    color: "#2563EB",
    margin: 0,
  }}
>
  {item.title}
</h3>
              </div>

              {index !==
                data.roadmap.length -
                  1 && (
                <div
                  style={{
                    fontSize: "40px",
                    margin: "10px 0",
                    color: "#2563EB",
                  }}
                >
                  ↓
                </div>
              )}
            </div>
          )
        )}
      </div>
    </MainLayout>
  );
}

export default CareerRoadmap;