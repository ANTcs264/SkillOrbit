function SkillProgressCard({
  skill,
  rank,
}) {

  const progress = skill.progress;

  const getColor = () => {

    if (progress >= 80)
      return "#16A34A";

    if (progress >= 60)
      return "#2563EB";

    return "#F59E0B";
  };

const getLevel = () => {

  if (progress >= 85)
    return "⭐ Expert";

  if (progress >= 75)
    return "🔥 Advanced";

  if (progress >= 60)
    return "⚡ Intermediate";

  return "🌱 Beginner";
};

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
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        
        <h3
          style={{
            color: "#111827",
            margin: 0,
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {skill.skill}
        </h3>

        <strong
          style={{
            color: "#111827",
          }}
        >
          {progress}%
        </strong>
      </div>

      <div
        style={{
          height: "12px",
          background: "#E5E7EB",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background:
              getColor(),
          }}
        />
      </div>
      <div
  style={{
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "600",
    color: getColor(),
  }}
>
  {getLevel()}
</div>
    </div>
  );
}

export default SkillProgressCard;