import { useNavigate } from "react-router-dom";

const skills = [
  "Education",
  "Painting",
  "Cooking",
  "Sports",
  "Web Development",
  "Machine Learning",
  "Design",
  "Cybersecurity",
  "Data Science",
  "Photography",
];

export default function Categories() {
  const navigate = useNavigate();

  const handleSkillClick = (skill) => {
    navigate(`/posts/${encodeURIComponent(skill)}`);
  };

  return (
    <div style={{ padding: "2rem", marginLeft: "220px" }}>
      <h2>Choose a Skill</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => handleSkillClick(skill)}
            style={{
              padding: "1rem",
              borderRadius: "8px",
              backgroundColor: "#673ab7",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
