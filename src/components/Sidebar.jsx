import { useEffect, useRef } from 'react';
import Icon from './Icon';

export default function Sidebar({ items, active, open, onSelect, onClose }) {
  const closeRef = useRef(null);

  // While the mobile drawer is open: focus it and let Escape close it.
  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <div className={`backdrop${open ? ' is-open' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside id="sidebar" className={`sidebar${open ? ' is-open' : ''}`}>
        <div className="brand">
          <span className="brand-mark"><Icon name="bolt" /></span>
          <div className="brand-text">
            <strong>NEXUS</strong>
            <small>AI Operations</small>
          </div>
          <button type="button" ref={closeRef} className="icon-btn close-btn" aria-label="Close navigation menu" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label="Main">
          <ul className="nav-list">
            {items.map((item) => (
              <li key={item.id}>
                <button type="button" className="nav-btn" aria-current={active === item.id ? 'page' : undefined} onClick={() => onSelect(item.id)}>
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p className="sidebar-note">Demo environment. No real data is used.</p>
      </aside>
    </>
  );
}
