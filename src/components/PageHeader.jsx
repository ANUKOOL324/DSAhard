import { NavLink } from 'react-router-dom';

export function PageHeader({ eyebrow, title, copy, action }) {
  return <div className="page-header"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{copy && <p>{copy}</p>}</div>{action}</div>;
}

export function Breadcrumbs({ title }) {
  return <div className="breadcrumbs"><NavLink to="/roadmap">Roadmap</NavLink><span>›</span><span>{title}</span></div>;
}
