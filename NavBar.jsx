import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={{ backgroundColor: "blueviolet", padding: "1rem", display: "flex", justifyContent: "space-between", color: "white" }}>
      <div>
        <h2 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>SkillHub</h2>
      </div>

      {user ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={() => navigate("/categories")}>Categories</button>
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
