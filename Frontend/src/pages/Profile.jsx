 import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function Profile() {
  const [profile, setProfile] =
    useState(null);

  useEffect(() => {
    api
      .get("profile/")
      .then((res) =>
        setProfile(res.data)
      )
      .catch(console.error);
  }, []);

  if (!profile) {
    return (
      <MainLayout>
        <h2>Loading Profile...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Profile Header */}

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
          👤 {profile.username}
        </h1>

        <p
          style={{
            color: "#64748B",
          }}
        >
          {profile.bio}
        </p>
      </div>

      {/* Information Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <InfoCard
          title="Email"
          value={profile.email}
        />

        <InfoCard
          title="Role"
          value={profile.role}
        />

        <InfoCard
          title="College"
          value={profile.college}
        />

        <InfoCard
          title="Graduation Year"
          value={
            profile.graduation_year
          }
        />
      </div>

      {/* Social Profiles */}

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
          🔗 Social Profiles
        </h2>

        <p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>

        <p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </MainLayout>
  );
}

function InfoCard({
  title,
  value,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <h3>{title}</h3>

      <p>{value}</p>
    </div>
  );
}

export default Profile;