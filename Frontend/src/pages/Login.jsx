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
            disabled={loading}
            style={buttonStyle}
          >
            {loading
              ? "Signing In..."
              : "Login"}
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
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "12px",
  background: "#2563EB",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default Login;