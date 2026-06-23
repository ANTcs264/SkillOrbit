 import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import ProfileEditForm from "../components/ProfileEditForm";
import ProfileInfoCard from "../components/ProfileInfoCard";

function Profile() {
const [profile, setProfile] = useState({
bio: "",
github: "",
linkedin: "",
college: "",
graduation_year: "",
current_year: "",
branch: "",
career_goal: "",
});

const [loading, setLoading] = useState(true);
const [saving, setSaving] = useState(false);
const [message, setMessage] = useState("");
const [editMode, setEditMode] = useState(false);

Promise.all([
  api.get("profile/"),
  api.get("job-recommendations/"),
])
  .then(([profileRes, jobsRes]) => {
    setProfile(profileRes.data);
    setJobs(jobsRes.data);
    setLoading(false);
  })
  .catch((err) => {
    console.error(err);
    setLoading(false);
  });

const handleChange = (e) => {
setProfile({
...profile,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


try {
  setSaving(true);

  await api.put("profile/", profile);

  setMessage("✅ Profile Updated Successfully");
  setEditMode(false);

  setTimeout(() => {
    setMessage("");
  }, 3000);
} catch (error) {
  console.error(error);
  setMessage("❌ Failed to Update Profile");
} finally {
  setSaving(false);
}

};

const profileFields = [
  profile.bio,
  profile.github,
  profile.linkedin,
  profile.college,
  profile.branch,
  profile.current_year,
  profile.graduation_year,
  profile.career_goal,
];

const completedFields =
  profileFields.filter(Boolean).length;

const completionPercentage =
  Math.round(
    (completedFields /
      profileFields.length) *
      100
  );
  const [jobs, setJobs] =
  useState([]);



     let nextStep =
  "Keep improving your profile.";

if (!profile.career_goal)
  nextStep =
    "Set your career goal.";

else if (!profile.branch)
  nextStep =
    "Add your branch.";

else if (!profile.github)
  nextStep =
    "Add your GitHub profile.";

else if (!profile.linkedin)
  nextStep =
    "Add your LinkedIn profile.";

if (loading) {
return ( <MainLayout> <h2>Loading Profile...</h2> </MainLayout>
);
}
const bestJob =
  jobs.length > 0
    ? jobs[0]
    : null;


return ( <MainLayout>
{message && (
<p style={{ marginBottom: "20px", fontWeight: "600" }}>
{message} </p>
)}


  {editMode ? (
    <ProfileEditForm
      profile={profile}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      saving={saving}
      setEditMode={setEditMode}
    />
  ) : (
    <>
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563EB,#7C3AED)",
          color: "white",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "700",
              }}
            >
              {profile.username
                ?.charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <h1>{profile.username}</h1>
              <p>{profile.bio}</p>
            </div>
          </div>

          <button
            onClick={() =>
              setEditMode(true)
            }
            style={{
              background: "white",
              color: "#2563EB",
              border: "none",
              padding: "12px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <ProfileInfoCard
          title="College"
          value={profile.college}
        />

        <ProfileInfoCard
          title="Branch"
          value={profile.branch}
        />

        <ProfileInfoCard
          title="Current Year"
          value={profile.current_year}
        />

        <ProfileInfoCard
          title="Graduation Year"
          value={
            profile.graduation_year
          }
        />
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <h2>🎯 Career Goal</h2>

        <p>{profile.career_goal}</p>

        <hr />

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#111827",
              color: "white",
              textDecoration:
                "none",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#2563EB",
              color: "white",
              textDecoration:
                "none",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "25px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
       <h2>🚀 OrbitX Executive Summary</h2>

<p>
  <strong>
    🎯 Target Career:
  </strong>{" "}
  {profile.career_goal || "Not Set"}
</p>

<p>
  <strong>
    💼 Best Career Match:
  </strong>{" "}
  {bestJob?.job_title ||
    "Not Available"}
</p>

<p>
  <strong>
    📈 Readiness:
  </strong>{" "}
  {bestJob?.readiness || 0}%
</p>

<p>
  <strong>
    💰 Salary Range:
  </strong>{" "}
  {bestJob?.salary_range ||
    "N/A"}
</p>

<p>
  <strong>
    📊 Profile Completion:
  </strong>{" "}
  {completionPercentage}%
</p>

<p>
  <strong>
    🚀 Recommended Next Step:
  </strong>{" "}
  {nextStep}
</p>
      </div>
    </>
  )}
</MainLayout>


);
}

export default Profile;
