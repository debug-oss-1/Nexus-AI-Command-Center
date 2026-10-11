import { useCallback, useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Models from './pages/Models';
import ActivityLogs from './pages/ActivityLogs';
import { BASE_REQUESTS, INITIAL_LOGS, NAV_ITEMS } from './data';

const todayLabel = () => new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

export default function App() {
  const [page, setPage] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [requests, setRequests] = useState(BASE_REQUESTS);
  const lastPage = useRef(page);

  // After switching pages, move focus to the new page title for keyboard and screen reader users.
  useEffect(() => {
    if (lastPage.current !== page) {
      document.getElementById('page-title')?.focus();
      lastPage.current = page;
    }
  }, [page]);

  const handleSelect = useCallback((id) => {
    setPage(id);
    setMenuOpen(false);
  }, []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleTaskComplete = useCallback((task) => {
    setLogs((prev) => [{ id: Date.now(), time: new Date().toLocaleTimeString('en-GB'), task: task.name, status: 'Success' }, ...prev]);
    setRequests((n) => n + 1);
  }, []);

  const current = NAV_ITEMS.find((item) => item.id === page);
  const subtitle = page === 'dashboard' ? `${todayLabel()}. All figures are simulated.` : current.subtitle;

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <Sidebar items={NAV_ITEMS} active={page} open={menuOpen} onSelect={handleSelect} onClose={closeMenu} />
      <div className="shell">
        <Header title={current.title} subtitle={subtitle} menuOpen={menuOpen} onMenu={() => setMenuOpen(true)} />
        <main id="main" className="content">
          {page === 'dashboard' && <Dashboard requests={requests} onTaskComplete={handleTaskComplete} />}
          {page === 'models' && <Models />}
          {page === 'logs' && <ActivityLogs logs={logs} />}
        </main>
      </div>
    </div>
  );
}
