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
        minWidth: "240px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.1)",
        borderLeft: `6px solid ${color}`,
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
          <h3>{title}</h3>

          <h1>{value}</h1>
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