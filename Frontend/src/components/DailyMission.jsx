const tasks = [
  {
    title: "Complete Profile",
    done: true,
  },
  {
    title: "Add 2 Skills",
    done: false,
  },
  {
    title: "Attempt Quiz",
    done: false,
  },
  {
    title: "Review Resume",
    done: false,
  },
];

function DailyMission() {
  const completed =
    tasks.filter(
      (task) => task.done
    ).length;

  const progress =
    (completed /
      tasks.length) *
    100;

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
        🎯 Today's Mission
      </h2>

      {tasks.map((task) => (
        <div
          key={task.title}
          style={{
            marginTop: "15px",
          }}
        >
          {task.done
            ? "✅"
            : "⬜"}{" "}
          {task.title}
        </div>
      ))}

      <div
        style={{
          height: "12px",
          background: "#E5E7EB",
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#2563EB,#7C3AED)",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "10px",
        }}
      >
        {progress}% Completed
      </p>
    </div>
  );
}

export default DailyMission;