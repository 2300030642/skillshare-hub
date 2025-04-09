import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/community")}>Community</li>
        <li onClick={() => navigate("/myposts")}>My Posts</li>
        <li onClick={() => navigate("/settings")}>Settings</li>
        <li onClick={() => navigate("/categories")}>Categories</li>
      </ul>
    </aside>
  );
}
