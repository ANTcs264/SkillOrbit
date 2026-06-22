 import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.access
      );

      localStorage.setItem(
        "refresh",
        res.data.refresh
      );

      navigate("/dashboard");
    } catch (err) {
      setError(
        "Invalid username or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0F172A,#1E293B,#2563EB)",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "40px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow:"0 20px 60px rgba(0,0,0,.35)",
          background:
            "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
          color: "white",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          🚀 SkillOrbit AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#CBD5E1",
            marginBottom: "30px",
          }}
        >
          Welcome Back
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={inputStyle}
          />

          {error && (
            <p
              style={{
                color: "#EF4444",
              }}
            >
              {error}
            </p>
          )}

          <button
             type="submit"
             style={buttonStyle}
             onMouseEnter={(e) => {
               e.target.style.transform =
                 "translateY(-2px)";
           
               e.target.style.boxShadow =
                 "0 10px 25px rgba(37,99,235,.4)";
             }}
             onMouseLeave={(e) => {
               e.target.style.transform =
                 "translateY(0)";
           
               e.target.style.boxShadow =
                 "none";
             }}
>
           Login
         </button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#60A5FA",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "12px",
  background:
    "linear-gradient(135deg,#2563EB,#3B82F6)",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all .3s ease",
};

export default Login;