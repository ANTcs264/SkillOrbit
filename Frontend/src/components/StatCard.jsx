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
        scale: 1.05,
      }}
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "25px",
        minWidth: "0",
        width: "100%",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.1)",
        background:
  "linear-gradient(180deg,#FFFFFF,#F8FAFC)",
        transition: "all .3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
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
    fontSize: "36px",
    marginTop: "10px",
    marginBottom: 0,
    color: "#111827",
    fontWeight: "700",
  }}
>
  {value}
</h1>
        </div>

        <div
          style={{
            fontSize: "32px",
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