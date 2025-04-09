import "./Home.css";
import background from "../assets/background.jpg";
import SideBar from "../components/SideBar";
import Posts from "./Posts";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="home-container" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        flex: 1,
        padding: "2rem"
      }}>
        <div className="overlay">
          <div className="home-content">
            <h1>Welcome to SkillHub</h1>
            <p>Discover, share, and grow your skills with the community!</p>
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
}
