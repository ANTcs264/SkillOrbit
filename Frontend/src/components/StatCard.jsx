 import { motion } from "framer-motion";

const StatCard = ({
title,
value,
color,
icon,
}) => {
return (
<motion.div
whileHover={{
scale: 1.03,
y: -8,
}}
transition={{
duration: 0.25,
}}
style={{
background:
"linear-gradient(180deg,#FFFFFF,#F8FAFC)",
borderRadius: "20px",
padding: "25px",
minWidth: "0",
width: "100%",
border:
"1px solid rgba(37,99,235,.08)",
boxShadow:
"0 10px 25px rgba(0,0,0,0.08)",
cursor: "pointer",
overflow: "hidden",
position: "relative",
}}
>
{/* Top Accent Line */}
<div
style={{
position: "absolute",
top: 0,
left: 0,
width: "100%",
height: "4px",
background: color,
}}
/>


  <div
    style={{
      display: "flex",
      justifyContent:
        "space-between",
      alignItems: "center",
    }}
  >
    <div>
      <h3
        style={{
          color: "#64748B",
          margin: 0,
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          fontSize: "38px",
          marginTop: "12px",
          marginBottom: "6px",
          color: "#111827",
          fontWeight: "700",
        }}
      >
        {value}
      </h1>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          margin: 0,
        }}
      >
        Updated just now
      </p>
    </div>

    <div
      style={{
        width: "65px",
        height: "65px",
        borderRadius: "18px",
        background:
          "rgba(37,99,235,.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        color,
      }}
    >
      {icon}
    </div>
  </div>
</motion.div>


);
};

export default StatCard;
