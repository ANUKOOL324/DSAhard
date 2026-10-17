export function Stat({ label, value, detail, accent }) {
  return <div className="stat"><span>{label}</span><strong className={accent ? 'accent' : ''}>{value}</strong><small>{detail}</small></div>;
}
