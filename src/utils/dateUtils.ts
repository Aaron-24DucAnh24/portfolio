export function formatDateRange(from: Date, to: Date | null): string {
  const fromStr = from.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const toStr = to ? to.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Present';
  return `${fromStr} - ${toStr}`;
}

export function calculateDuration(from: Date, to: Date | null): string {
  const end = to || new Date();
  const months = (end.getFullYear() - from.getFullYear()) * 12 + end.getMonth() - from.getMonth() + 1;
  return `${months} ${months === 1 ? 'month' : 'months'}`;
}