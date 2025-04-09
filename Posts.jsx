import { useParams } from "react-router-dom";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";

export default function Posts() {
  const { skill } = useParams();

  const allPosts = [
    {
      id: 1,
      title: "React Hooks Tutorial",
      skill: "Web Development",
      type: "video",
      media: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "CNN with TensorFlow",
      skill: "Machine Learning",
      type: "image",
      media: "https://via.placeholder.com/400x200.png?text=TensorFlow+Model",
    },
    {
      id: 3,
      title: "Figma Design Basics",
      skill: "Design",
      type: "image",
      media: "https://via.placeholder.com/400x200.png?text=Figma+UI",
    },
    {
      id: 4,
      title: "Basics of Acrylic Painting",
      skill: "Painting",
      type: "image",
      media: "https://via.placeholder.com/400x200.png?text=Painting",
    },
    {
      id: 5,
      title: "How to Bake a Cake",
      skill: "Cooking",
      type: "video",
      media: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  const filteredPosts = allPosts.filter((post) => post.skill === skill);

  return (
    <div style={{ padding: "2rem", marginLeft: "220px" }}>
      <h2>Posts related to: {skill}</h2>
      {filteredPosts.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1rem" }}>
          {filteredPosts.map((post) => (
            <div key={post.id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3>{post.title}</h3>

              {post.type === "image" ? (
                <img src={post.media} alt={post.title} style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px" }} />
              ) : (
                <video controls style={{ width: "100%", borderRadius: "8px" }}>
                  <source src={post.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Like, Comment, Share Icons */}
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", fontSize: "1.2rem", color: "#555" }}>
                <FaHeart style={{ cursor: "pointer" }} title="Like" />
                <FaComment style={{ cursor: "pointer" }} title="Comment" />
                <FaShareAlt style={{ cursor: "pointer" }} title="Share" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ opacity: 0.6 }}>No posts found for this skill.</p>
      )}
    </div>
  );
}
