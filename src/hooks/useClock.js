import { useEffect, useState } from 'react';

// Returns the current Date, refreshed every second. The interval is cleared on unmount.
export default function useClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return now;
}
