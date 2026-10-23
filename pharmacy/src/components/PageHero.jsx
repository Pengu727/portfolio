import { Link } from 'react-router-dom';
import { IconArrowRight } from './icons';

/** Banner heading shown at the top of every inner page. */
export default function PageHero({ eyebrow, title, lead, crumbs, aside }) {
    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="container-app py-14 sm:py-16 lg:py-20">
                {crumbs && (
                    <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400" aria-label="Breadcrumb">
                        {crumbs.map((c, i) => (
                            <span key={c.label} className="flex items-center gap-2">
                                {c.to ? (
                                    <Link to={c.to} className="transition hover:text-pharmacy-600">
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span className="text-slate-600">{c.label}</span>
                                )}
                                {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                            </span>
                        ))}
                    </nav>
                )}

                <div className={aside ? 'grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]' : ''}>
                    <div>
                        {eyebrow && <span className="badge bg-pharmacy-100 text-pharmacy-700">{eyebrow}</span>}
                        <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                        {lead && (
                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
                                {lead}
                            </p>
                        )}
                    </div>
                    {aside && <div>{aside}</div>}
                </div>
            </div>
        </section>
    );
}

export function PageHeroAside({ title, children, to, cta }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-bold text-slate-800">{title}</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-500">{children}</ul>
            {to && (
                <Link to={to} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pharmacy-600 hover:underline">
                    {cta}
                    <IconArrowRight className="h-4 w-4" />
                </Link>
            )}
        </div>
    );
}
