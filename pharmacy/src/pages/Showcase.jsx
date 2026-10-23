import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Section, SectionHeading } from '../components/Section';
import { SHOTS } from '../content/screenshots';
import {
    IconArrowRight,
    IconStore,
    IconUser,
    IconUsers,
    IconCheck,
    IconMonitor,
    IconSearch,
    IconMapPin,
    IconBox,
    IconClipboard,
    IconBarChart,
    IconShield,
} from '../components/icons';

const GROUPS = [
    {
        id: 'client',
        icon: IconUser,
        label: 'Client',
        accent: 'text-pharmacy-600 bg-pharmacy-50',
        blurb: 'What a patient or client sees: search, categories, nearby pharmacies and their own reservations.',
        keys: ['clientCatalog', 'clientCategories', 'clientNearMe', 'clientReservations'],
    },
    {
        id: 'owner',
        icon: IconStore,
        label: 'Pharmacy owner',
        accent: 'text-emerald-600 bg-emerald-50',
        blurb: 'The business side: catalogue, staff accounts, reservation oversight and sales.',
        keys: ['ownerInventory', 'ownerAddProduct', 'ownerSellers', 'ownerReservations', 'ownerSales'],
    },
    {
        id: 'seller',
        icon: IconUsers,
        label: 'Seller',
        accent: 'text-blue-600 bg-blue-50',
        blurb: 'The counter: a product grid for selling, code validation and personal sales history.',
        keys: ['sellerPos', 'sellerReservations', 'sellerSales'],
    },
];

export default function Showcase() {
    useDocumentTitle('Product screenshots');

    const [active, setActive] = useState('client');
    const group = GROUPS.find((g) => g.id === active) ?? GROUPS[0];

    return (
        <>
            <PageHero
                eyebrow="Screenshots"
                title="The software, exactly as it looks"
                lead="Every image below is a real screen from the running application, with the actual layout, counters, badges and data it uses."
                crumbs={[{ label: 'Home', to: '/' }, { label: 'App' }]}
            />

            <Section>
                <div className="container-app py-12 sm:py-16">
                    {/* Group switcher */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Screenshot groups">
                            {GROUPS.map((g) => (
                                <button
                                    key={g.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={active === g.id}
                                    onClick={() => setActive(g.id)}
                                    className={[
                                        'inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition',
                                        active === g.id
                                            ? 'border-pharmacy-600 bg-pharmacy-600 text-white shadow-md shadow-emerald-600/15'
                                            : 'border-slate-200 bg-white text-slate-600 hover:border-pharmacy-300 hover:bg-pharmacy-50 hover:text-pharmacy-700',
                                    ].join(' ')}
                                >
                                    <g.icon className="h-4 w-4" />
                                    {g.label}
                                </button>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500">
                            {GROUPS.reduce((n, g) => n + g.keys.length, 0)} screens across{' '}
                            {GROUPS.length} role-specific interfaces
                        </p>
                    </div>

                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{group.blurb}</p>

                    {/* Gallery */}
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        {group.keys.map((key, i) => {
                            const s = SHOTS[key];
                            return (
                                <figure
                                    key={key}
                                    className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card ${
                                        i === 0 ? 'lg:col-span-2' : ''
                                    }`}
                                >
                                    <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-bold ${group.accent}`}
                                        >
                                            <group.icon className="h-3.5 w-3.5" />
                                            {group.label}
                                        </span>
                                        <h3 className="text-sm font-bold text-slate-800">{s.title}</h3>
                                    </div>

                                    <div className="bg-slate-50 p-3 sm:p-4">
                                        <img
                                            src={s.src}
                                            alt={`${s.title} screen in PharmaPortal`}
                                            loading={i < 2 ? 'eager' : 'lazy'}
                                            decoding="async"
                                            className="w-full rounded-lg border border-slate-200 bg-white object-cover object-top"
                                        />
                                    </div>

                                    <figcaption className="space-y-4 px-5 py-5 sm:px-6">
                                        <p className="text-sm leading-relaxed text-slate-500">{s.caption}</p>
                                        <ul className="grid gap-2 sm:grid-cols-2">
                                            {s.points.map((p) => (
                                                <li key={p} className="flex gap-2.5 text-sm text-slate-600">
                                                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                                    <span className="leading-relaxed">{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </figcaption>
                                </figure>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* What each screen proves */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="Reading the screens"
                        title="What each interface is actually for"
                        lead="The three role dashboards are genuinely different tools, not three skins on the same page."
                    />

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        {[
                            {
                                icon: IconUser,
                                role: 'Client',
                                headline: 'Find, then hold',
                                points: [
                                    'Searches the whole network without needing an account',
                                    'Sees price and availability on every result',
                                    'Sorts pharmacies by real distance',
                                    'Holds a product for 24 hours with a pickup code',
                                ],
                                shot: 'Client medication search',
                                key: 'clientCatalog',
                            },
                            {
                                icon: IconStore,
                                role: 'Owner',
                                headline: 'Control the catalogue',
                                points: [
                                    'One record per product with threshold and expiry',
                                    'Decides what is public and what stays internal',
                                    'Creates and removes seller accounts',
                                    'Reads every reservation and sale for the pharmacy',
                                ],
                                shot: 'Owner inventory management',
                                key: 'ownerInventory',
                            },
                            {
                                icon: IconUsers,
                                role: 'Seller',
                                headline: 'Work the counter',
                                points: [
                                    'Card grid with live stock and expiry per product',
                                    'Records a counter sale with a quantity',
                                    'Validates the client’s 6-digit pickup code',
                                    'Reviews only their own sales',
                                ],
                                shot: 'Seller point of sale',
                                key: 'sellerPos',
                            },
                        ].map((r) => (
                            <div key={r.role} className="card flex flex-col p-6">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pharmacy-50 text-pharmacy-600">
                                    <r.icon className="h-5 w-5" />
                                </span>
                                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                                    {r.role}
                                </p>
                                <h3 className="mt-1 text-xl font-bold text-slate-800">{r.headline}</h3>
                                <ul className="mt-4 space-y-2.5">
                                    {r.points.map((p) => (
                                        <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-slate-500">
                                            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src={SHOTS[r.key].src}
                                    alt={r.shot}
                                    loading="lazy"
                                    decoding="async"
                                    className="mt-6 w-full rounded-lg border border-slate-200 object-cover object-top"
                                />
                                <p className="mt-2 text-center text-[11px] font-semibold text-slate-400">{r.shot}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Coverage map */}
            <Section>
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <span className="badge bg-pharmacy-100 text-pharmacy-700">Coverage</span>
                            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-800">
                                Which capability each screen demonstrates
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                Rather than dumping everything into one gallery, each screen is matched to the
                                problem it solves. Use this to find the part of the product you care about.
                            </p>
                            <Link to="/features" className="btn-secondary btn-sm mt-6">
                                Full feature breakdown
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { icon: IconSearch, name: 'Multi-field search', shot: 'Client medication search' },
                                { icon: IconMapPin, name: 'Distance-sorted pharmacies', shot: 'Pharmacies near you' },
                                { icon: IconBox, name: 'Stock and expiry state', shot: 'Owner inventory management' },
                                { icon: IconShield, name: 'Public or private listing', shot: 'Adding a new product' },
                                { icon: IconClipboard, name: 'Reservations and codes', shot: 'Reservation oversight' },
                                { icon: IconUsers, name: 'Seller access control', shot: 'Seller accounts' },
                                { icon: IconBarChart, name: 'Sales and revenue', shot: 'Pharmacy sales history' },
                                { icon: IconMonitor, name: 'Counter point of sale', shot: 'Seller point of sale' },
                                { icon: IconCheck, name: 'Pickup verification', shot: 'Seller reservation desk' },
                                { icon: IconClipboard, name: 'Client reservation history', shot: 'Your reservations' },
                                { icon: IconBarChart, name: 'Per-seller sales', shot: 'Seller sales history' },
                                { icon: IconBox, name: 'Category browsing', shot: 'Browse by category' },
                            ].map((m) => (
                                <div key={m.name} className="card flex items-center gap-3.5 p-4">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pharmacy-50 text-pharmacy-600">
                                        <m.icon className="h-4 w-4" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-slate-800">{m.name}</p>
                                        <p className="truncate text-xs text-slate-400">{m.shot}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <CTASection />
        </>
    );
}
