import "./PostCard.css";

export default function PostCard({ title, content }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
