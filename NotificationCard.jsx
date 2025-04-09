import "./NotificationCard.css";

export default function NotificationCard({ message, time }) {
  return (
    <div className="notification-card">
      <p>{message}</p>
      <span>{time}</span>
    </div>
  );
}
