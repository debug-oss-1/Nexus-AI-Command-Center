import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const TASKS = [
  { name: 'Summarize Q3 report', result: 'Summary ready: 3 key insights, 412 tokens.' },
  { name: 'Classify support tickets', result: '128 tickets labelled with 97.4% confidence.' },
  { name: 'Generate product copy', result: '5 headline variants drafted in 1.8 s.' },
  { name: 'Scan model outputs for drift', result: 'No drift detected across 4 models.' },
];
const RUN_MS = 2400;

export default function TaskRunner({ onComplete }) {
  const [status, setStatus] = useState('idle'); // idle | running | done
  const [task, setTask] = useState(null);
  const busy = useRef(false); // blocks duplicate runs, even within the same tick
  const runs = useRef(0);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const run = () => {
    if (busy.current) return;
    busy.current = true;
    const current = TASKS[runs.current % TASKS.length];
    runs.current += 1;
    setTask(current);
    setStatus('running');
    timer.current = setTimeout(() => {
      busy.current = false;
      setStatus('done');
      onComplete(current);
    }, RUN_MS);
  };

  const running = status === 'running';
  const label = running ? 'Running…' : status === 'done' ? 'Run another task' : 'Run AI task';

  return (
    <section className="card runner" aria-labelledby="runner-heading">
      <div className="runner-head">
        <div>
          <h2 id="runner-heading">AI task runner</h2>
          <p className="muted">Run a simulated task and view its output.</p>
        </div>
        <span className="runner-icon"><Icon name="terminal" /></span>
      </div>

      <div className="terminal" aria-busy={running}>
        <p><span className="prompt">nexus@console:~$</span> run-task</p>
        {status === 'idle' && <p className="out">Waiting for your command...</p>}
        {running && <p className="out">Running “{task.name}”...</p>}
        {status === 'done' && <p className="out out--ok">Done. {task.result}</p>}
      </div>

      <div role="status">
        {running && <span className="sr-only">Task running</span>}
        {status === 'done' && (
          <p className="notice"><Icon name="check" size={16} />Task completed. You can run it again.</p>
        )}
      </div>

      <button type="button" className="run-btn" aria-disabled={running} onClick={run}>
        {running ? <span className="spinner" aria-hidden="true" /> : null}
        {label}
        {!running && <Icon name="arrow" size={18} />}
      </button>
    </section>
  );
}
