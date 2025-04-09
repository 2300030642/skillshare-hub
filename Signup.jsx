import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match!");
    }

    try {
      const response = await api.post("/api/users/register", {

        name: form.name,
        email: form.email,
        password: form.password
      });

      alert("Registration successful!");
      navigate("/login");

    } catch (error) {
      // Improved error handling
      console.error("Signup error:", error); // Helpful for debugging
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "Signup failed. Please try again.";
      alert("Signup failed: " + errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup Page</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required /><br />
          <label>Email:</label><br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required /><br />
          <label>Create Password:</label><br />
          <input type="password" name="password" value={form.password} onChange={handleChange} required /><br />
          <label>Re-type Password:</label><br />
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required /><br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
