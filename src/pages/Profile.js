import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const user = "JohnDoe";
  const [posts, setPosts] = useState([
    { id: 1, user: "JohnDoe", content: "My first React project!", type: "text", likes: 10, comments: ["Great job!", "Awesome!"] },
    { id: 2, user: "JohnDoe", content: "sunset.jpg", type: "image", likes: 5, comments: ["Beautiful view!"] },
    { id: 3, user: "JohnDoe", content: "coding-tips.mp4", type: "video", likes: 7, comments: ["Very helpful!"] },
  ]);

  return (
    <div className="profile">
      <img src="/profile-pic.jpg" alt="Profile" className="profile-pic" />
      <h2>@{user}</h2>
      <p>📚 Skills: Photography, ReactJS, Cooking</p>
      <button className="edit-button">Edit Profile</button>

      <h3>Previous Posts</h3>
      <div className="previous-posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            {post.type === "text" && <p className="post-text">📝 {post.content}</p>}
            {post.type === "video" && (
              <video controls width="100%" className="post-video">
                <source src={`/images/${post.content}`} type="video/mp4" />
              </video>
            )}
            {post.type === "image" && (
              <img src={`/images/${post.content}`} alt="User Post" className="post-image" />
            )}
            <p className="likes">👍 Likes: {post.likes}</p>
            <ul className="comments">
              {post.comments.map((comment, index) => (
                <li key={index} className="comment">{comment}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
