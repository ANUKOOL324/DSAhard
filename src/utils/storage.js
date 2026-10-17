export const STORAGE_KEY = 'dsahard-v2';
const LEGACY_KEY = 'dsahard-done';

export function readStore() {
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || '{}');
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      solved: { ...(saved.solved || {}), ...Object.fromEntries(Object.entries(legacy).map(([id, value]) => [`rq-${id}`, value])) },
      topics: saved.topics || {},
      notes: saved.notes || {},
      revision: saved.revision || {},
      activity: saved.activity || {},
      goals: saved.goals || { daily: 2, weekly: 10 },
      custom: saved.custom || []
    };
  } catch {
    return { solved: {}, topics: {}, notes: {}, revision: {}, activity: {}, goals: { daily: 2, weekly: 10 }, custom: [] };
  }
}

export function writeStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}
