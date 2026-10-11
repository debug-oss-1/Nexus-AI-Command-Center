import StatusBadge from '../components/StatusBadge';
import { MODELS } from '../data';

export default function Models() {
  return (
    <section aria-labelledby="models-heading">
      <h2 id="models-heading" className="sr-only">Available models</h2>
      <ul className="grid">
        {MODELS.map((m) => (
          <li key={m.id}>
            <article className="card model">
              <div className="model-head">
                <div>
                  <h3>{m.name}</h3>
                  <p className="muted">{m.type} model</p>
                </div>
                <StatusBadge status={m.status} />
              </div>
              <p className="model-desc">{m.description}</p>
              <dl className="model-meta">
                <div><dt>Instances</dt><dd>{m.instances}</dd></div>
                <div><dt>Latency</dt><dd>{m.latency}</dd></div>
              </dl>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
