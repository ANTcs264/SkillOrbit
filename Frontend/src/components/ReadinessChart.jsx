import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";


function ReadinessChart({ value }) {
  const data = [
    {
      name: "Ready",
      value,
    },
    {
      name: "Remaining",
      value: 100 - value,
    },
  ];

  const COLORS = [
    "#2563EB",
    "#E5E7EB",
  ];

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
        🎯 Placement Readiness
      </h2>

      <div
  style={{
    position: "relative",
    height: "250px",
  }}
>
  <ResponsiveContainer
    width="100%"
    height="100%"
  >
    <PieChart>
      <Pie
        data={data}
        innerRadius={70}
        outerRadius={100}
        dataKey="value"
      >
        {data.map(
          (entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          )
        )}
      </Pie>
    </PieChart>
  </ResponsiveContainer>

  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform:
        "translate(-50%,-50%)",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        color: "#2563EB",
        margin: 0,
      }}
    >
      {value}%
    </h1>

    <p
      style={{
        color: "#64748B",
        margin: 0,
      }}
    >
      Ready
    </p>
  </div>
</div>
     
    </div>
  );
}

export default ReadinessChart;