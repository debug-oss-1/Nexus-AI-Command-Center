// All values below are fictional demo data.
export const BASE_REQUESTS = 12840;

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid', title: 'Dashboard overview' },
  { id: 'models', label: 'AI Models', icon: 'cpu', title: 'AI models', subtitle: 'Models available in this workspace.' },
  { id: 'logs', label: 'Activity Logs', icon: 'list', title: 'Activity logs', subtitle: 'The most recent simulated events.' },
];

export const MODELS = [
  { id: 'core', name: 'Nexus Core 4', type: 'Language', status: 'Active', instances: 3, latency: '420 ms', description: 'Flagship language model for summaries, drafting and reasoning across internal documents.' },
  { id: 'vision', name: 'Vision Lens', type: 'Vision', status: 'Active', instances: 2, latency: '610 ms', description: 'Reads images and scanned documents for inspections, OCR and visual Q&A.' },
  { id: 'echo', name: 'Echo Speech', type: 'Audio', status: 'Active', instances: 3, latency: '180 ms', description: 'Low-latency speech-to-text and voice synthesis for support and meeting tools.' },
  { id: 'sentinel', name: 'Sentinel Guard', type: 'Safety', status: 'Maintenance', instances: 0, latency: 'n/a', description: 'Screens prompts and outputs against company policy before anything is released.' },
];

export const INITIAL_LOGS = [
  { id: 1, time: '09:42:18', task: 'Summarize Q3 report', status: 'Success' },
  { id: 2, time: '09:31:07', task: 'Classify support tickets', status: 'Success' },
  { id: 3, time: '09:12:45', task: 'Transcribe all-hands recording', status: 'Delayed' },
  { id: 4, time: '08:57:30', task: 'Scan model outputs for drift', status: 'Failed' },
  { id: 5, time: '08:40:02', task: 'Generate product copy', status: 'Success' },
  { id: 6, time: '08:15:49', task: 'Embed knowledge base', status: 'Success' },
];
