const SkillGapCard = ({
  skills,
}) => {

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h3>
        Missing Skills
      </h3>

      <div
        style={{
          marginTop: "15px",
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding:
                "8px 14px",
              background:
                "#FEE2E2",
              color:
                "#DC2626",
              borderRadius:
                "999px",
              marginRight:
                "10px",
              display:
                "inline-block",
              marginTop:
                "10px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillGapCard;