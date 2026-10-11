import StatusBadge from '../components/StatusBadge';

export default function ActivityLogs({ logs }) {
  return (
    <section className="card" aria-labelledby="logs-heading">
      <h2 id="logs-heading">Recent activity</h2>
      <ul className="log-list">
        {logs.map((log) => (
          <li key={log.id} className="log-item">
            <time className="log-time">{log.time}</time>
            <span className="log-task">{log.task}</span>
            <StatusBadge status={log.status} />
          </li>
        ))}
      </ul>
    </section>
  );
}
