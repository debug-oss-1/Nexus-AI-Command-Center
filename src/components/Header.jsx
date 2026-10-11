import Icon from './Icon';

export default function Header({ title, subtitle, menuOpen, onMenu }) {
  return (
    <header className="header">
      <button type="button" className="icon-btn menu-btn" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="sidebar" onClick={onMenu}>
        <Icon name="menu" />
      </button>
      <div className="header-text">
        <h1 id="page-title" tabIndex={-1}>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <span className="pill"><span className="dot" aria-hidden="true" />All systems operational</span>
    </header>
  );
}
