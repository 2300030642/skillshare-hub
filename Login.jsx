import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/users/login", { email, password });
      // Handle successful response
      const data = response?.data;
      if (!data) {
        alert("Login failed: Empty response from server.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));
      alert("Login successful!");

      // Optional: Check if role is present
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }

    } catch (error) {
      let errorMsg = "Login failed.";
      if (error.response && error.response.data) {
        // If backend sends { message: "Something went wrong" }
        errorMsg = "Login failed: " + (error.response.data.message || "Invalid credentials.");
      } else {
        errorMsg = "Login failed: " + error.message;
      }
      alert(errorMsg);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <div style={{
        border: "2px solid #6200ea",
        borderRadius: "8px",
        padding: "2rem",
        width: "300px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login Page</h2>
        <form onSubmit={handleLogin} style={{ textAlign: "center" }}>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }} /><br />
          <label>Password:</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }} /><br />
          <button type="submit" style={{ padding: "8px 16px", marginTop: "1rem" }}>Submit</button>
        </form>
      </div>
    </div>
  );
}
