import StatCard from '../components/StatCard';
import TaskRunner from '../components/TaskRunner';
import useClock from '../hooks/useClock';
import { MODELS } from '../data';

const ACTIVE_INSTANCES = MODELS.filter((m) => m.status === 'Active').reduce((sum, m) => sum + m.instances, 0);

export default function Dashboard({ requests, onTaskComplete }) {
  const now = useClock();

  return (
    <div className="stack">
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Key statistics</h2>
        <div className="stats">
          <StatCard icon="spark" label="AI requests" value={requests.toLocaleString('en-US')} hint="+8.2% simulated" tone="up" />
          <StatCard icon="cpu" label="Active models" value={String(ACTIVE_INSTANCES).padStart(2, '0')} hint={`${MODELS.length} model types`} tone="up" />
          <StatCard icon="pulse" label="Uptime" value="99.9%" hint="Demo metric" />
          <StatCard icon="clock" label="Local time" value={<time dateTime={now.toISOString()}>{now.toLocaleTimeString('en-GB')}</time>} hint="Live, updates every second" tone="live" />
        </div>
      </section>
      <TaskRunner onComplete={onTaskComplete} />
    </div>
  );
}
