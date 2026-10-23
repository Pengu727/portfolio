import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Screenshot, Section, SectionHeading } from '../components/Section';
import { shot } from '../content/screenshots';
import {
    IconArrowRight,
    IconStore,
    IconBox,
    IconSearch,
    IconLock,
    IconCheckCircle,
    IconRefresh,
    IconMapPin,
    IconUsers,
    IconShield,
    IconLock as IconLockKey,
    IconDatabase,
} from '../components/icons';

const LIFECYCLE = [
    {
        title: 'The pharmacy publishes a product',
        body: 'An owner adds the product with name, category, price, stock, minimum threshold, expiry date, dosage, laboratory, SKU and description, and marks it public.',
        icon: IconBox,
        shotKey: 'ownerAddProduct',
        shotLabel: 'Adding a new product',
    },
    {
        title: 'It becomes searchable for clients',
        body: 'Public products appear in search and in their category. Each result shows the price in DA and whether the item is available or out of stock.',
        icon: IconSearch,
        shotKey: 'clientCatalog',
        shotLabel: 'Client medication search',
    },
    {
        title: 'A client finds the closest pharmacy',
        body: 'Location-aware search ranks pharmacies by real distance, lists the matching products each one holds, and gives address, hours, phone and a maps link.',
        icon: IconMapPin,
        shotKey: 'clientNearMe',
        shotLabel: 'Pharmacies near you',
    },
    {
        title: 'The product is held for 24 hours',
        body: 'Reserving creates a pending reservation, decrements stock immediately and issues a 6-digit pickup code, so the product cannot sell twice while the client travels.',
        icon: IconLock,
        shotKey: 'clientReservations',
        shotLabel: 'Your reservations',
    },
    {
        title: 'Staff verify and complete the sale',
        body: 'A seller enters the client’s code. It matches against pending reservations for that pharmacy, the reservation is completed and a sale is recorded against that seller.',
        icon: IconCheckCircle,
        shotKey: 'sellerReservations',
        shotLabel: 'Seller reservation desk',
    },
    {
        title: 'Stock returns if nobody collects',
        body: 'Holds that pass their 24-hour window are expired and the reserved quantity is added back to stock, so nothing is lost and nothing is double counted.',
        icon: IconRefresh,
        shotKey: 'sellerPos',
        shotLabel: 'Seller point of sale',
    },
];

const ENFORCEMENT = [
    {
        icon: IconLockKey,
        title: 'Private by default when you want it',
        body: 'Visibility is a field on the product. Anything marked private is filtered out of every client query and product pages return not found.',
    },
    {
        icon: IconShield,
        title: 'Role checks, not just hidden menus',
        body: 'Owner, seller, client and admin routes are guarded server-side. A client account cannot load a seller page even with the URL.',
    },
    {
        icon: IconUsers,
        title: 'Per-pharmacy data boundaries',
        body: 'Stock, sellers, reservations and sales are filtered by the pharmacy on the signed-in account, so tenants stay isolated.',
    },
    {
        icon: IconDatabase,
        title: 'Document data in MongoDB',
        body: 'Products, pharmacies, users, reservations and sales are stored as documents, which suits catalogues that vary in fields between products.',
    },
];

export default function HowItWorks() {
    useDocumentTitle('How it works');

    return (
        <>
            <PageHero
                eyebrow="How it works"
                title="From a product on your shelf to a code handed over at the counter"
                lead="Six steps. The pharmacy publishes, the client finds and holds, staff verify, and anything uncollected goes back on the shelf automatically."
                crumbs={[{ label: 'Home', to: '/' }, { label: 'How it works' }]}
            />

            <Section tone="white">
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="The full loop"
                        title="What actually happens, step by step"
                        lead="Every screen below is the real interface, taken from the running application."
                    />

                    <div className="mt-16 space-y-20 lg:space-y-28">
                        {LIFECYCLE.map((step, i) => (
                            <div
                                key={step.title}
                                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                                }`}
                            >
                                <div>
                                    <span className="font-mono text-xs font-bold text-pharmacy-600">
                                        STEP {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-3 flex items-center gap-3 text-2xl font-black tracking-tight text-slate-800">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pharmacy-50 text-pharmacy-600">
                                            <step.icon className="h-5 w-5" />
                                        </span>
                                        {step.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-slate-600">{step.body}</p>
                                </div>
                                <Screenshot
                                    src={shot(step.shotKey).src}
                                    alt={step.shotLabel}
                                    caption={step.shotLabel}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <span className="badge bg-pharmacy-100 text-pharmacy-700">Under the hood</span>
                            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-800">
                                Stock is never counted twice
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                The reservation is the point where the two sides meet. Stock leaves the shelf the
                                moment it is reserved and comes back only if the hold expires, which keeps the
                                number clients see and the number you hold in agreement.
                            </p>
                            <Link to="/features" className="btn-secondary btn-sm mt-6">
                                Full feature breakdown
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="space-y-5">
                            {ENFORCEMENT.map((g) => (
                                <div key={g.title} className="card flex gap-5 p-6">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                                        <g.icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-800">{g.title}</h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{g.body}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="card overflow-hidden">
                                <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
                                    <h3 className="text-sm font-bold text-slate-800">Reservation states</h3>
                                </div>
                                <ul className="divide-y divide-slate-100">
                                    {[
                                        {
                                            badge: 'bg-amber-50 text-amber-700 border border-amber-200',
                                            label: 'Pending',
                                            d: 'Created, stock held, waiting for the client to arrive.',
                                        },
                                        {
                                            badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
                                            label: 'Completed',
                                            d: 'Code validated at the counter and recorded as a sale.',
                                        },
                                        {
                                            badge: 'bg-slate-100 text-slate-500 border border-slate-200',
                                            label: 'Expired',
                                            d: 'The 24-hour window passed, so the quantity went back to stock.',
                                        },
                                    ].map((s) => (
                                        <li key={s.label} className="flex flex-wrap items-center gap-3 px-6 py-4">
                                            <span className={`badge ${s.badge}`}>{s.label}</span>
                                            <span className="text-sm text-slate-500">{s.d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section tone="white">
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="For pharmacy owners"
                        title="Ready to run your pharmacy on it?"
                        lead="Getting started means creating your pharmacy record, your owner login, your catalogue and your seller accounts. Tell us about your pharmacy and what you stock."
                    />
                    <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link to="/contact" className="btn-primary">
                            Request the software
                            <IconArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/for-pharmacies" className="btn-secondary">
                            <IconStore className="h-4 w-4" />
                            See what you get
                        </Link>
                    </div>
                </div>
            </Section>

            <CTASection />
        </>
    );
}
