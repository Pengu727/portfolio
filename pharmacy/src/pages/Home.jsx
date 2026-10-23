import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { Screenshot, Section, SectionHeading, FactRow } from '../components/Section';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { shot } from '../content/screenshots';
import {
    IconArrowRight,
    IconSearch,
    IconMapPin,
    IconBox,
    IconStore,
    IconUsers,
    IconShield,
    IconLayers,
    IconClock,
    IconCheckCircle,
    IconAlert,
    IconEye,
    IconEyeOff,
    IconTag,
    IconDatabase,
    IconPhone,
    IconClipboard,
    IconCheck,
    IconLock,
    IconBarChart,
    IconSettings,
    IconRefresh,
} from '../components/icons';

const AUDIENCES = [
    {
        to: '/for-pharmacies',
        eyebrow: 'Pharmacy owners',
        title: 'Publish what you actually have',
        body: 'Keep your catalogue, prices, stock and expiry dates in one place. Mark products public so clients can find them, private so your team can still track them, and see every reservation and sale your pharmacy handles.',
        icon: IconStore,
        link: 'For pharmacy owners',
        shotKey: 'ownerInventory',
        shotLabel: 'Owner inventory management',
    },
    {
        to: '/for-clients',
        eyebrow: 'Clients and patients',
        title: 'Stop walking pharmacy to pharmacy',
        body: 'Search the whole network, sort pharmacies by real distance from you, and see which ones list the product you need right now. Hold it for 24 hours with a pickup code and collect it when you arrive.',
        icon: IconMapPin,
        link: 'For clients and patients',
        shotKey: 'clientNearMe',
        shotLabel: 'Pharmacies near you',
    },
];

const CAPABILITIES = [
    {
        icon: IconBox,
        title: 'Stock and expiry tracking',
        body: 'Quantity, minimum threshold and expiry date per product. The app derives Active, Low Stock, Expiring Soon or Expired automatically, and each state is a clickable filter.',
    },
    {
        icon: IconEye,
        title: 'Public or private listings',
        body: 'Decide per product whether clients can see it. Private products stay fully tracked for your staff and never appear in search.',
    },
    {
        icon: IconSearch,
        title: 'Search with ranking and suggestions',
        body: 'Clients search by product name, description, category, laboratory or pharmacy name. Results are scored so exact and partial name matches rank highest, with type-ahead suggestions as you type.',
    },
    {
        icon: IconMapPin,
        title: 'Distance-aware pharmacy search',
        body: 'With location granted, pharmacies are listed nearest first using real great-circle distance, each with address, commune, wilaya, opening hours, phone and a maps link.',
    },
    {
        icon: IconClipboard,
        title: '24-hour reservations',
        body: 'A client reserves a product and the stock is held for 24 hours. If it is not collected, the hold expires automatically and the stock goes back on the shelf.',
    },
    {
        icon: IconLock,
        title: '6-digit pickup codes',
        body: 'Every reservation gets a code. The client shows it at the counter, your staff validate it, and the reservation is marked complete and recorded as a sale.',
    },
    {
        icon: IconUsers,
        title: 'Staff accounts for your counter',
        body: 'You create seller logins for your team. Each seller sees only your pharmacy, works the point-of-sale grid and processes reservations, with no access to pricing or other pharmacies.',
    },
    {
        icon: IconBarChart,
        title: 'Sales you can actually trace',
        body: 'Counter sales and reservation sales are logged with product, quantity, price, client, seller and timestamp. Owners see the pharmacy-wide view, sellers see their own.',
    },
];

const ROLES = [
    {
        role: 'Client',
        tone: 'bg-pharmacy-50 text-pharmacy-700 border-pharmacy-200',
        does: ['Browse and search without an account', 'Reserve available products', 'Track reservations and pickup codes'],
    },
    {
        role: 'Owner',
        tone: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        does: ['Full product catalogue control', 'Manage seller accounts', 'View all reservations and sales'],
    },
    {
        role: 'Seller',
        tone: 'bg-blue-50 text-blue-700 border-blue-200',
        does: ['Point-of-sale grid and stock decrement', 'Validate pickup codes', 'Own sales history'],
    },
    {
        role: 'Admin',
        tone: 'bg-slate-100 text-slate-700 border-slate-200',
        does: ['Register pharmacies on the platform', 'Maintain pharmacy records', 'Manage owner accounts'],
    },
];

const RESERVATION_STEPS = [
    {
        n: '01',
        title: 'Client finds the product',
        body: 'Search results show the price in DA and whether the product is available. Opening the product page shows the dispensing pharmacy with its address, hours, phone and a maps link.',
        icon: IconSearch,
    },
    {
        n: '02',
        title: 'Client reserves it',
        body: 'One click creates the reservation. Stock is held immediately, so nobody else can see it as available while it is set aside.',
        icon: IconLock,
    },
    {
        n: '03',
        title: 'Client gets a 6-digit code',
        body: 'The code appears in My Reservations alongside the pharmacy, the reserved time and the expiry time. The hold lasts 24 hours.',
        icon: IconClipboard,
    },
    {
        n: '04',
        title: 'Staff validate at the counter',
        body: 'Your seller enters the code. It is matched against pending reservations for your pharmacy, marked complete, and logged as a sale with the staff member attached.',
        icon: IconCheckCircle,
    },
    {
        n: '05',
        title: 'Uncollected holds are released',
        body: 'If the 24 hours pass without collection, the reservation expires and the quantity returns to your stock automatically.',
        icon: IconRefresh,
    },
];

export default function Home() {
    useDocumentTitle(null);

    return (
        <>
            {/* ---------------- Hero ---------------- */}
            <section className="border-b border-slate-200 bg-white">
                <div className="container-app grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
                    <div>
                        <span className="badge bg-pharmacy-100 text-pharmacy-700">Pharmacy software</span>

                        <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-800 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                            Your pharmacy stock,
                            <br />
                            <span className="text-pharmacy-600">findable by the people who need it.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            PharmaPortal is a web platform that connects pharmacies to their local clients.
                            Pharmacies manage their catalogue, stock, availability and staff. Clients search
                            those products, find the closest pharmacy that has one, and hold it for pickup.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/contact" className="btn-primary">
                                Get the software for my pharmacy
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/for-clients" className="btn-secondary">
                                I am looking for a medication
                            </Link>
                        </div>

                        <dl className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
                            {[
                                { k: '4', v: 'Separate roles with isolated data' },
                                { k: '24h', v: 'Reservation hold window' },
                                { k: '6', v: 'Digit in-person pickup code' },
                            ].map((s) => (
                                <div key={s.k}>
                                    <dt className="text-2xl font-black text-pharmacy-600">{s.k}</dt>
                                    <dd className="mt-1 text-xs leading-relaxed text-slate-500">{s.v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative">
                        <div
                            className="absolute -inset-4 hidden rounded-3xl bg-pharmacy-50 sm:block"
                            aria-hidden="true"
                        />
                        <Screenshot
                            src={shot('clientCatalog').src}
                            alt="PharmaPortal client medication search results"
                            caption="Client medication search"
                            priority
                            className="relative"
                        />
                        <div className="relative mx-auto mt-4 grid max-w-md grid-cols-2 gap-3">
                            <div className="card flex items-center gap-3 p-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                    <IconCheck className="h-4 w-4" />
                                </span>
                                <span className="text-xs font-bold text-slate-600">Availability published</span>
                            </div>
                            <div className="card flex items-center gap-3 p-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                                    <IconClock className="h-4 w-4" />
                                </span>
                                <span className="text-xs font-bold text-slate-600">Held for 24 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- The problem ---------------- */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="The problem"
                        title="Two sides of the same broken loop"
                        lead="Pharmacies have stock that clients cannot see, and clients walk between pharmacies to ask for products that are already sitting on a nearby shelf."
                    />

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-500 shadow-card">
                                    <IconAlert className="h-5 w-5" />
                                </span>
                                <h3 className="text-lg font-bold text-slate-800">For the pharmacy</h3>
                            </div>
                            <ul className="mt-5 space-y-3">
                                {[
                                    'Availability lives in the pharmacist’s head or on a paper list, so clients keep asking for things you do have.',
                                    'Prices, stock levels and expiry dates drift apart because they are updated by hand.',
                                    'Internal products and products offered to the public are mixed together in one list.',
                                    'You cannot tell who reserved what, or which member of staff completed a sale.',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-500 shadow-card">
                                    <IconSearch className="h-5 w-5" />
                                </span>
                                <h3 className="text-lg font-bold text-slate-800">For the client</h3>
                            </div>
                            <ul className="mt-5 space-y-3">
                                {[
                                    'There is no way to check whether a pharmacy has your medication before you set off.',
                                    'Calling around wastes time, and a product that exists may sell before you arrive.',
                                    'You have no idea what a pharmacy stocks, what it costs, or when it closes.',
                                    'Nearby pharmacies are invisible unless you happen to know they exist.',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 rounded-2xl border border-pharmacy-200 bg-pharmacy-50 p-7 text-center">
                        <p className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-slate-700">
                            PharmaPortal closes the loop. The pharmacy publishes what it has; the client finds
                            it, holds it, and collects it. Both sides work from the same record.
                        </p>
                    </div>
                </div>
            </Section>

            {/* ---------------- Two audiences ---------------- */}
            <Section>
                <div className="container-app section-pad">
                    <SectionHeading
                        eyebrow="Who it is for"
                        title="One platform, two very different jobs"
                        lead="Pharmacies get control of their catalogue and their counter. Clients get a search engine for medication that is actually in stock nearby."
                    />

                    <div className="mt-14 space-y-16 lg:space-y-24">
                        {AUDIENCES.map((a, i) => (
                            <div
                                key={a.to}
                                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                                }`}
                            >
                                <div>
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pharmacy-600 text-white shadow-md shadow-emerald-600/20">
                                        <a.icon className="h-5 w-5" />
                                    </span>
                                    <span className="badge mt-5 bg-slate-100 text-slate-600">{a.eyebrow}</span>
                                    <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-800 sm:text-3xl">
                                        {a.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-slate-600">{a.body}</p>
                                    <Link
                                        to={a.to}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-pharmacy-600 transition hover:gap-3 hover:text-pharmacy-700"
                                    >
                                        {a.link}
                                        <IconArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                                <Screenshot
                                    src={shot(a.shotKey).src}
                                    alt={a.shotLabel}
                                    caption={a.shotLabel}
                                    className={i % 2 === 1 ? 'lg:order-1' : ''}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ---------------- Capabilities ---------------- */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="Capabilities"
                        title="What the software actually does"
                        lead="Everything below is implemented in the product today. There is no roadmap padding."
                    />

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {CAPABILITIES.map((c) => (
                            <div key={c.title} className="card-hover flex flex-col p-6">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pharmacy-50 text-pharmacy-600">
                                    <c.icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-4 text-base font-bold text-slate-800">{c.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/features" className="btn-secondary">
                            See the full feature list
                            <IconArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* ---------------- Reservation flow ---------------- */}
            <Section>
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <span className="badge bg-pharmacy-100 text-pharmacy-700">The reservation flow</span>
                            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
                                A product is held, not just advertised
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                Advertising availability is not enough if another client can buy the same box while
                                you are on your way. PharmaPortal holds the stock and verifies handover with a
                                code at the counter.
                            </p>
                            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                                <p className="eyebrow">What the client sees</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                    The reservation page lists the product, the dispensing pharmacy, its address,
                                    when the hold was made, when it expires, and the 6-digit code to present.
                                </p>
                            </div>
                            <Link to="/showcase" className="btn-secondary mt-6 btn-sm">
                                See the screens
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <ol className="space-y-4">
                            {RESERVATION_STEPS.map((s) => (
                                <li key={s.n} className="card flex gap-5 p-5 sm:p-6">
                                    <div className="flex flex-col items-center gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pharmacy-50 text-pharmacy-600">
                                            <s.icon className="h-5 w-5" />
                                        </span>
                                        <span className="font-mono text-xs font-bold text-slate-300">{s.n}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-800">{s.title}</h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </Section>

            {/* ---------------- Roles ---------------- */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="Roles and access"
                        title="Four roles, and no crossover"
                        lead="Each account sees only what it should. Owners manage, sellers work the counter, clients search and reserve, and platform admins onboard pharmacies."
                    />

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {ROLES.map((r) => (
                            <div key={r.role} className="card flex flex-col p-6">
                                <span
                                    className={`inline-flex w-fit items-center rounded-lg border px-2.5 py-1 text-xs font-bold ${r.tone}`}
                                >
                                    {r.role}
                                </span>
                                <ul className="mt-4 space-y-2.5">
                                    {r.does.map((d) => (
                                        <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-slate-500">
                                            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-2">
                            <div className="flex flex-wrap items-start gap-6">
                                <FactRow
                                    icon={IconLayers}
                                    label="Isolation"
                                    value="Each pharmacy is a tenant"
                                />
                                <FactRow
                                    icon={IconShield}
                                    label="Enforcement"
                                    value="Role checks on every route"
                                />
                                <FactRow
                                    icon={IconDatabase}
                                    label="Storage"
                                    value="Document data in MongoDB"
                                />
                                <FactRow
                                    icon={IconPhone}
                                    label="Access"
                                    value="Separate login per role"
                                />
                            </div>
                            <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-500">
                                Products, sellers, reservations and sales are all scoped to the pharmacy that owns
                                them. A seller account cannot reach another pharmacy’s stock, and a client account
                                cannot reach the owner or seller interface at all.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <h3 className="text-sm font-bold text-slate-800">Also enforced</h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    { icon: IconEyeOff, t: 'Private products return a 404 to clients' },
                                    { icon: IconTag, t: 'Clients never see expiry dates or stock counts' },
                                    { icon: IconSettings, t: 'Sellers cannot change prices or add products' },
                                ].map((r) => (
                                    <li key={r.t} className="flex gap-3 text-sm leading-relaxed text-slate-500">
                                        <r.icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                        {r.t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <CTASection />
        </>
    );
}
