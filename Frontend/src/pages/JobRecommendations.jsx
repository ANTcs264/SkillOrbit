import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import JobCard from "../components/JobCard";

function JobRecommendations() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get("job-recommendations/")
      .then((res) => setJobs(res.data))
      .catch(console.error);
  }, []);

  if (!jobs.length) {
    return (
      <MainLayout>
        <h2>Loading Job Recommendations...</h2>
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
        💼 Job Recommendations
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(400px,1fr))",
          gap: "20px",
        }}
      >
        {jobs.map((job) => (
          <JobCard
            key={job.job_title}
            job={job}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default JobRecommendations;