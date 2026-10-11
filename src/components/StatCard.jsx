import Icon from './Icon';

export default function StatCard({ icon, label, value, hint, tone = 'muted' }) {
  return (
    <div className="card stat">
      <div className="stat-top">
        <span className="stat-icon"><Icon name={icon} size={18} /></span>
        <span>{label}</span>
      </div>
      <p className="stat-value">{value}</p>
      <p className={`stat-hint stat-hint--${tone}`}>{hint}</p>
    </div>
  );
}
