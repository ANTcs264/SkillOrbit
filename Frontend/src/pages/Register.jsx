import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");
  const [email, setEmail] = useState("");  

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
  useState(false);

  const [
  showConfirmPassword,
  setShowConfirmPassword,
] = useState(false);  

  const handleRegister = async (e) => {
    e.preventDefault();
  

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match"
      );
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          username,
          email,
          password,
        }
      );

      setSuccess(
        "Account created successfully!"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {

      if (
        err.response?.data?.username
      ) {
        setError(
          err.response.data.username[0]
        );
      } else {
        setError(
          "Registration failed"
        );
      }

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
          width: "450px",
          padding: "45px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter:"blur(15px)",
          border:"1px solid rgba(255,255,255,0.08)",
          boxShadow:"0 20px 60px rgba(0,0,0,.35)",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          🚀 SkillOrbit AI

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            Career Intelligence Platform
          </p>
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#CBD5E1",
          }}
        >
          Create Your Account
        </p>

        <form
          onSubmit={handleRegister}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <div
  style={{
    position: "relative",
    width: "100%",
    marginBottom: "15px",
  }}
>

  <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={inputStyle}
/>

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    placeholder="Password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
    style={inputStyle}
  />

  <span
    onClick={() =>
      setShowPassword(
        !showPassword
      )
    }
    style={{
  position: "absolute",
  right: "18px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  color: "#94A3B8",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}}
  >
    {showPassword ? (
      <FaEyeSlash />
    ) : (
      <FaEye />
    )}
  </span>
</div>
          
          <div
  style={{
    position: "relative",
    marginBottom: "15px",
  }}
>
  <input
    type={
      showConfirmPassword
        ? "text"
        : "password"
    }
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) =>
      setConfirmPassword(
        e.target.value
      )
    }
    style={inputStyle}
  />

  <span
  onClick={() =>
    setShowPassword(!showPassword)
  }
  style={{
    position: "absolute",
    right: "18px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#94A3B8",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
></span>

</div>

          {error && (
            <p
              style={{
                color: "#EF4444",
              }}
            >
              {error}
            </p>
          )}

          {success && (
            <p
              style={{
                color: "#22C55E",
              }}
            >
              {success}
            </p>
          )}

       <button
  type="submit"
  style={buttonStyle}
  disabled={loading}
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
  {loading
    ? "Creating Account..."
    : "Create Account"}
</button>

        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#60A5FA",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 50px 14px 16px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,.15)",
  background: "rgba(255,255,255,.08)",
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
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all .3s ease",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Register;