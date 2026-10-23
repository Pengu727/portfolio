import { Link } from 'react-router-dom';
import PageHero, { PageHeroAside } from '../components/PageHero';
import CTASection from '../components/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Screenshot, Section, SectionHeading, FactRow } from '../components/Section';
import { shot } from '../content/screenshots';
import {
    IconEyeOff,
    IconAlert,
    IconUsers,
    IconClipboard,
    IconBarChart,
    IconClock,
    IconMapPin,
    IconPhone,
    IconSearch,
    IconCheck,
    IconLock,
    IconRefresh,
    IconStore,
    IconTag,
    IconEye as IconEyeIcon,
} from '../components/icons';

const STOCK_STATES = [
    { badge: 'bg-emerald-100 text-emerald-800', label: 'Active', d: 'Above your minimum threshold with no expiry issue.' },
    { badge: 'bg-amber-100 text-amber-800', label: 'Low stock', d: 'At or below the minimum threshold you set.' },
    { badge: 'bg-orange-100 text-orange-800', label: 'Expiring soon', d: 'Within 30 days of the expiry date.' },
    { badge: 'bg-red-100 text-red-800', label: 'Expired', d: 'Past its expiry date. Checked before stock level.' },
];

const OWNER_JOBS = [
    {
        title: 'Build and edit your catalogue',
        body: 'Add a product in a single form: name, category, price, stock, minimum threshold, expiry date, dosage, laboratory, SKU and description. Edit or delete any entry inline.',
        points: ['Validation on price, stock and expiry date', 'Currency stored and shown in DA', 'Search across your own products'],
        shotKey: 'ownerInventory',
        shotLabel: 'Owner inventory management',
    },
    {
        title: 'Let your staff work the counter',
        body: 'Create a seller account per member of staff with a name, email and password. Sellers are bound to your pharmacy and can work the point of sale and validate pickup codes.',
        points: ['Sellers cannot change your prices', 'Sellers cannot add or remove products', 'Remove access when someone leaves'],
        shotKey: 'ownerSellers',
        shotLabel: 'Seller accounts',
    },
    {
        title: 'Watch reservations and sales',
        body: 'Every reservation for your pharmacy in one ledger with the client, the pickup code, quantity, status and which seller completed it. Then the sales history with totals and revenue.',
        points: ['Reservation versus counter sales distinguished', 'Revenue in DA, timestamps to the minute', 'Number of active sellers'],
        shotKey: 'ownerSales',
        shotLabel: 'Pharmacy sales history',
    },
];

const DISCOVERY_POINTS = [
    { icon: IconSearch, t: 'Search by medication name, description, category, laboratory or pharmacy name' },
    { icon: IconTag, t: 'Category browsing, generated from the categories your products actually use' },
    { icon: IconMapPin, t: 'Distance-sorted pharmacy results from the client’s own location' },
    { icon: IconPhone, t: 'Address, commune, wilaya, opening hours, phone and a Google Maps link' },
];

export default function ForPharmacies() {
    useDocumentTitle('For pharmacy owners');

    return (
        <>
            <PageHero
                eyebrow="For pharmacy owners"
                title="Run your pharmacy on records, not on memory"
                lead="PharmaPortal replaces the paper list and the guesswork. You control your catalogue, your stock levels, what clients can see and who on your team can sell it."
                crumbs={[{ label: 'Home', to: '/' }, { label: 'For pharmacies' }]}
                aside={
                    <PageHeroAside title="What you get on day one">
                        <li>A pharmacy record with your legal and contact details</li>
                        <li>An owner login for you</li>
                        <li>Seller logins for your counter staff</li>
                        <li>A public catalogue clients can search</li>
                        <li>Reservations and sales recorded automatically</li>
                    </PageHeroAside>
                }
            />

            {/* Stock control */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
                        <div>
                            <SectionHeading
                                eyebrow="Inventory control"
                                title="Stock status is worked out for you"
                                lead="Set a minimum threshold and an expiry date once per product. PharmaPortal derives the state and gives you a counter and a filter for each one, so low stock and expiring batches are visible instead of discovered."
                            />

                            <ul className="mt-8 space-y-3">
                                {STOCK_STATES.map((s) => (
                                    <li key={s.label} className="card flex items-start gap-4 p-4">
                                        <span className={`badge shrink-0 ${s.badge}`}>{s.label}</span>
                                        <span className="text-sm leading-relaxed text-slate-500">{s.d}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-sm leading-relaxed text-slate-500">
                                Expiry takes priority over stock level, so an expired product is never presented
                                as merely low.
                            </p>
                        </div>

                        <Screenshot
                            src={shot('ownerInventory').src}
                            alt="PharmaPortal owner inventory management screen"
                            caption="Owner inventory management"
                            priority
                        />
                    </div>
                </div>
            </Section>

            {/* Owner jobs */}
            <Section>
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="Your day to day"
                        title="Three jobs the owner account covers"
                        lead="Catalogue, staff and oversight. Sellers handle the counter in between."
                    />

                    <div className="mt-14 space-y-16 lg:space-y-24">
                        {OWNER_JOBS.map((job, i) => (
                            <div
                                key={job.title}
                                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                                }`}
                            >
                                <div>
                                    <span className="font-mono text-xs font-bold text-pharmacy-600">
                                        0{i + 1}
                                    </span>
                                    <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-800">
                                        {job.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-slate-600">{job.body}</p>
                                    <ul className="mt-6 space-y-2.5">
                                        {job.points.map((p) => (
                                            <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-500">
                                                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Screenshot
                                    src={shot(job.shotKey).src}
                                    alt={job.shotLabel}
                                    caption={job.shotLabel}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Visibility + staff */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="card p-7">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <IconEyeIcon className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 text-xl font-bold text-slate-800">
                                Public: clients can find and reserve it
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                Public products appear in client search results, in their category, and in nearby
                                pharmacy listings. Clients see the price, whether it is available, and can reserve
                                it with a quantity.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                Clients never see the internal status badge or the expiry date. They see a clean
                                availability answer, which is what they actually need.
                            </p>
                        </div>

                        <div className="card p-7">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                                <IconEyeOff className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 text-xl font-bold text-slate-800">
                                Private: tracked internally, invisible outside
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                Private products are excluded from every client query and their detail page returns
                                not found. They remain in your inventory, your seller stock view and your sales
                                records.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                Useful for products you hold for a specific purpose, staff medication, or lines you
                                are not ready to advertise.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                        <div className="rounded-2xl border border-pharmacy-200 bg-pharmacy-50 p-7">
                            <h3 className="text-xl font-bold text-slate-800">
                                Staff accounts keep the counter moving without giving away control
                            </h3>
                            <p className="mt-3 text-base leading-relaxed text-slate-600">
                                Each seller gets their own login and their own sales history. They see the product
                                grid, record counter sales, and validate the pickup codes clients present. They
                                cannot change your prices, add products or see anything outside your pharmacy.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                                <FactRow icon={IconUsers} label="Bound to" value="Your pharmacy only" />
                                <FactRow icon={IconLock} label="Cannot" value="Change prices or catalogue" />
                                <FactRow icon={IconBarChart} label="Tracked" value="Sales attributed per seller" />
                            </div>
                        </div>

                        <div className="card p-7">
                            <h3 className="text-lg font-bold text-slate-800">What a seller sees</h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'A card grid of your medications with live stock and expiry',
                                    'One-click counter sale with a quantity',
                                    'A field to validate a client’s 6-digit pickup code',
                                    'Filters for available, low stock, expiring soon and expired',
                                    'Their own sales history with items and revenue',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-500">
                                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/showcase" className="btn-secondary btn-sm mt-6">
                                <IconStore className="h-4 w-4" />
                                See the seller screens
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Reservations the pharmacy sees */}
            <Section>
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
                        <Screenshot
                            src={shot('ownerReservations').src}
                            alt="PharmaPortal owner reservation oversight screen"
                            caption="Reservation oversight"
                        />
                        <div>
                            <SectionHeading
                                eyebrow="Reservations"
                                title="Know what is being held, for whom, and who completed it"
                                lead="A reservation is a promise about your stock. The owner ledger makes that promise visible: which client, which product, the code, the quantity, the state, and the member of staff who closed it out."
                            />
                            <ul className="mt-8 space-y-3">
                                {[
                                    { icon: IconClipboard, t: 'Product, client, code, quantity and status per reservation' },
                                    { icon: IconClock, t: 'Reserved and expiry timestamps on every row' },
                                    { icon: IconRefresh, t: 'Uncollected holds expire and return to your stock' },
                                    { icon: IconAlert, t: 'Expired and low-stock products filtered out in one click' },
                                ].map((r) => (
                                    <li key={r.t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                        <r.icon className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                        {r.t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Being discovered */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <span className="badge bg-pharmacy-100 text-pharmacy-700">Being discovered</span>
                            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-800">
                                Clients find you by what you list
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                There is no separate directory to maintain. Your pharmacy appears in results
                                because of the products it publishes. The more of your catalogue is public and
                                current, the more searches you are found in.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                Your record carries the details clients actually need before they leave the house:
                                full address, commune, wilaya, opening hours, phone number and a Google Maps link
                                generated from your coordinates.
                            </p>
                        </div>

                        <div>
                            <div className="card p-7">
                                <h3 className="text-lg font-bold text-slate-800">
                                    Four ways a client reaches your pharmacy
                                </h3>
                                <ul className="mt-5 space-y-4">
                                    {DISCOVERY_POINTS.map((d) => (
                                        <li key={d.t} className="flex gap-3.5">
                                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pharmacy-50 text-pharmacy-600">
                                                <d.icon className="h-4 w-4" />
                                            </span>
                                            <span className="text-sm leading-relaxed text-slate-600">{d.t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 card p-7">
                                <h3 className="text-lg font-bold text-slate-800">
                                    What clients can and cannot see about your catalogue
                                </h3>
                                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <p className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                                            <IconEyeIcon className="h-4 w-4" />
                                            Visible
                                        </p>
                                        <ul className="mt-2.5 space-y-1.5 text-sm text-slate-500">
                                            <li>Name, category, dosage, laboratory</li>
                                            <li>Description</li>
                                            <li>Price in DA</li>
                                            <li>Available or out of stock</li>
                                            <li>Your address, hours, phone and map link</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                            <IconEyeOff className="h-4 w-4" />
                                            Internal
                                        </p>
                                        <ul className="mt-2.5 space-y-1.5 text-sm text-slate-500">
                                            <li>Exact stock quantity</li>
                                            <li>Minimum threshold</li>
                                            <li>Expiry date</li>
                                            <li>Internal status labels</li>
                                            <li>Private products entirely</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <CTASection />
        </>
    );
}
