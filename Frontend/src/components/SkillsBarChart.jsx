import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SkillsBarChart({
  skills,
}) {
  return (
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
        📈 Skill Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={skills}>
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="progress"
            fill="#2563EB"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillsBarChart;