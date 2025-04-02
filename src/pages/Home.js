import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Alex", content: "Mastering React Hooks!", type: "text", likes: 0, comments: [] },
    { id: 2, user: "Sophia", content: "cooking.mp4", type: "video", likes: 0, comments: [] },
    { id: 3, user: "Mark", content: "landscape.jpg", type: "image", likes: 0, comments: [] },
    { id: 4, user: "Emily", content: "sunset.jpg", type: "image", likes: 0, comments: [] },
    { id: 5, user: "David", content: "My first ReactJS project!", type: "text", likes: 0, comments: [] },
    { id: 6, user: "Sophia", content: "guitar-tutorial.mp4", type: "video", likes: 0, comments: [] },
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleComment = (postId, comment) => {
    if (comment.trim() === "") return;
    setPosts(posts.map(post => post.id === postId ? { ...post, comments: [...post.comments, comment] } : post));
  };

  return (
    <div className="home">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>@{post.user}</h3>

          {/* Render text posts */}
          {post.type === "text" && <p>📝 {post.content}</p>}

          {/* Render video posts */}
          {post.type === "video" && (
            <video controls width="100%">
              <source src={`/images/${post.content}`} type="video/mp4" />
            </video>
          )}

          {/* Render image posts */}
          {post.type === "image" && (
            <img src={`/images/${post.content}`} alt="Post Media" />
          )}

          {/* Like button */}
          <button className="like-button" onClick={() => handleLike(post.id)}>
            👍 Like ({post.likes})
          </button>

          {/* Comments section */}
          <div className="comments-section">
            <input
              className="comment-input"
              type="text"
              placeholder="Add a comment..."
              onKeyDown={(e) => {
                if (e.key === "Enter") handleComment(post.id, e.target.value);
              }}
            />
            <ul className="comments-list">
              {post.comments.map((comment, index) => (
                <li key={index} className="comment">{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
