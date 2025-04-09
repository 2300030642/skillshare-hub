// Profile.jsx
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Profile</h2>
      {user && (
        <>
          <p><strong>Name:</strong> {user.name || "John Doe"}</p>
          <p><strong>Bio:</strong> Passionate skill sharer and learner.</p>

          <h3>My Posts</h3>
          <ul>
            <li>Post 1</li>
            <li>Post 2</li>
          </ul>

          <h3>Communities Joined</h3>
          <ul>
            <li>React Developers</li>
            <li>ML Enthusiasts</li>
          </ul>

          <h3>Skill Interests</h3>
          <ul>
            <li>Web Development</li>
            <li>Machine Learning</li>
          </ul>

          <button style={{ marginTop: "1rem" }}>Upload a Skill</button>
        </>
      )}
    </div>
  );
}
