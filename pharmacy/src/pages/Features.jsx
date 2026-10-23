import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Section, SectionHeading, Screenshot } from '../components/Section';
import { shot } from '../content/screenshots';
import {
    IconArrowRight,
    IconBox,
    IconEye,
    IconSearch,
    IconClipboard,
    IconUsers,
    IconBarChart,
    IconShield,
    IconLayers,
    IconDatabase,
    IconSettings,
    IconMail,
} from '../components/icons';

const GROUPS = [
    {
        id: 'catalogue',
        icon: IconBox,
        title: 'Catalogue and stock',
        lede: 'One record per product, holding everything a client and a counter both need.',
        features: [
            {
                name: 'Full product record',
                body: 'Name, category, description, dosage, laboratory, SKU, price, stock quantity, minimum threshold and expiry date.',
            },
            {
                name: 'Derived stock status',
                body: 'Active, Low Stock, Expiring Soon or Expired, computed from the threshold and expiry date with expiry taking priority.',
            },
            {
                name: 'Clickable alert counters',
                body: 'Total, Public, Private, Low Stock, Expiring Soon and Expired counters that double as filters.',
            },
            {
                name: 'Expiry warnings',
                body: 'Products within 30 days of expiry are flagged, and products past their date are separated out.',
            },
            {
                name: 'Edit and delete',
                body: 'Correct a price, adjust a stock level or remove a discontinued product inline from the table.',
            },
            {
                name: 'Search your catalogue',
                body: 'Filter by product name or description without leaving the inventory screen.',
            },
        ],
    },
    {
        id: 'visibility',
        icon: IconEye,
        title: 'Visibility and privacy',
        lede: 'Decide per product what the public sees and what stays an internal record.',
        features: [
            {
                name: 'Public products',
                body: 'Appear in client search results, in their category, and in nearby pharmacy listings. Clients can view the page and reserve.',
            },
            {
                name: 'Private products',
                body: 'Excluded from every client query. The product page returns not found, so nothing is reachable by direct link.',
            },
            {
                name: 'Client-facing detail control',
                body: 'Expiry dates, internal status labels and exact stock quantities are never sent to the client interface.',
            },
            {
                name: 'Pharmacy boundary',
                body: 'You only ever see and edit the products belonging to your pharmacy. Cross-tenant access is refused.',
            },
        ],
    },
    {
        id: 'discovery',
        icon: IconSearch,
        title: 'Search and discovery',
        lede: 'For clients: find the product, then find the closest pharmacy that has it.',
        features: [
            {
                name: 'Multi-field search',
                body: 'Matches product name, description, category and laboratory, plus pharmacy name.',
            },
            {
                name: 'Scored ranking',
                body: 'Results are ordered by relevance: exact name, partial name, matching pharmacy, category, laboratory, then description.',
            },
            {
                name: 'Type-ahead suggestions',
                body: 'Suggestions appear as you type, each labelled by what it matches, so you can jump to a product, pharmacy, category or laboratory.',
            },
            {
                name: 'Category browsing',
                body: 'A category grid generated from the categories your products actually use, with a paginated catalog inside each.',
            },
            {
                name: 'Near-me search',
                body: 'Distance from your position is calculated for each pharmacy and results are sorted nearest first, with an optional medication filter.',
            },
            {
                name: 'Pharmacy details on the result',
                body: 'Address, commune, wilaya, opening hours, phone number and a Google Maps link built from the pharmacy coordinates.',
            },
        ],
    },
    {
        id: 'reservations',
        icon: IconClipboard,
        title: 'Reservations and pickup',
        lede: 'A held product with a verified handover, released automatically if nobody collects.',
        features: [
            {
                name: '24-hour hold',
                body: 'Reserving decrements stock immediately, so the product cannot be sold twice while the client travels.',
            },
            {
                name: '6-digit pickup code',
                body: 'Each reservation issues a code that is matched against pending reservations for that specific pharmacy.',
            },
            {
                name: 'Quantity selection',
                body: 'Clients choose a quantity where stock allows, and the hold applies to that quantity rather than a single unit.',
            },
            {
                name: 'Automatic expiry',
                body: 'Holds that pass their window are marked expired and the reserved quantity is added back to stock automatically.',
            },
            {
                name: 'Client history',
                body: 'Every reservation with its status, the pharmacy, the code, and the reserved and expiry timestamps.',
            },
            {
                name: 'Seller validation',
                body: 'Staff enter the code at the counter, the reservation is completed and a sale is recorded against that seller.',
            },
        ],
    },
    {
        id: 'team',
        icon: IconUsers,
        title: 'Team and counter',
        lede: 'Owners manage the business, sellers run the counter, and neither can cross into the other.',
        features: [
            {
                name: 'Seller accounts',
                body: 'You create a seller with name, email and password. The account is bound to your pharmacy.',
            },
            {
                name: 'Point-of-sale grid',
                body: 'A card per product with live status, remaining stock, expiry date and price, plus filters for available, low stock, expiring soon and expired.',
            },
            {
                name: 'Counter sales',
                body: 'Record a manual sale with a quantity. Stock decrements immediately and a sale is logged.',
            },
            {
                name: 'Restricted seller rights',
                body: 'Sellers cannot modify prices and cannot add or delete products. Those stay with the owner.',
            },
            {
                name: 'Per-seller sales history',
                body: 'Each seller sees the sales they personally completed, with items sold and revenue generated.',
            },
            {
                name: 'Access removal',
                body: 'Remove a seller account when someone leaves, with confirmation before it happens.',
            },
        ],
    },
    {
        id: 'oversight',
        icon: IconBarChart,
        title: 'Oversight and onboarding',
        lede: 'What the owner sees, and how a pharmacy joins the platform in the first place.',
        features: [
            {
                name: 'Reservation ledger',
                body: 'Every reservation for your pharmacy with product, client, code, quantity, status, the staff member who completed it, and both timestamps.',
            },
            {
                name: 'Pharmacy sales history',
                body: 'Total sales, total revenue in DA and number of active sellers, then a full ledger showing product, sale type, client, seller, quantity, price and date.',
            },
            {
                name: 'Sale type attribution',
                body: 'Counter sales and reservation sales are distinguished, so you can see what came from a hold.',
            },
            {
                name: 'Pharmacy registration',
                body: 'A pharmacy is onboarded with its name, commercial register, phone, wilaya, commune, opening and closing hours and full address.',
            },
            {
                name: 'Coordinate capture',
                body: 'Coordinates are extracted from the Google Maps link you provide, validated, and stored as a geographic point for distance search.',
            },
            {
                name: 'Owner account creation',
                body: 'The owner login is created alongside the pharmacy record, so the tenant is complete from the start.',
            },
        ],
    },
];

const PLATFORM = [
    {
        icon: IconShield,
        title: 'Role-based route protection',
        body: 'Client, owner, seller and admin routes are each guarded. A role that does not match is redirected or refused, not just hidden from the menu.',
    },
    {
        icon: IconLayers,
        title: 'Multi-tenant isolation',
        body: 'Products, sellers, reservations and sales are all scoped to the pharmacy on the signed-in account.',
    },
    {
        icon: IconMail,
        title: 'Email-verified client accounts',
        body: 'Client registration issues a 6-digit code by email with a limited validity, and the code is cleared once used.',
    },
    {
        icon: IconDatabase,
        title: 'MongoDB document storage',
        body: 'Users, pharmacies, products, reservations and sales are documents, which suits catalogues whose fields differ between products.',
    },
];

export default function Features() {
    useDocumentTitle('Features');

    return (
        <>
            <PageHero
                eyebrow="Features"
                title="Everything the software does today"
                lead="Grouped by the job it does. Each entry below maps to something implemented in the application, not a planned release."
                crumbs={[{ label: 'Home', to: '/' }, { label: 'Features' }]}
            />

            {/* Quick nav */}
            <div className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="container-app">
                    <nav className="flex gap-2 overflow-x-auto py-3" aria-label="Feature groups">
                        {GROUPS.map((g) => (
                            <a
                                key={g.id}
                                href={`#${g.id}`}
                                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-600 transition hover:border-pharmacy-300 hover:bg-pharmacy-50 hover:text-pharmacy-700"
                            >
                                <g.icon className="h-3.5 w-3.5" />
                                {g.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {GROUPS.map((group, gi) => (
                <Section key={group.id} tone={gi % 2 === 1 ? 'white' : 'default'}>
                    <div className="container-app section-pad" id={group.id}>
                        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
                            <div className="lg:sticky lg:top-32 lg:self-start">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pharmacy-600 text-white shadow-md shadow-emerald-600/20">
                                    <group.icon className="h-5 w-5" />
                                </span>
                                <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-800 sm:text-3xl">
                                    {group.title}
                                </h2>
                                <p className="mt-3 text-base leading-relaxed text-slate-600">{group.lede}</p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {group.features.map((f) => (
                                    <div key={f.name} className="card p-5">
                                        <h3 className="text-sm font-bold text-slate-800">{f.name}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            {/* Visual proof */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="In the interface"
                        title="Feature groups, as they appear on screen"
                        lead="The same states, counters and filters described above, on the real screens."
                    />
                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        <div>
                            <Screenshot
                                src={shot('ownerInventory').src}
                                alt="Owner inventory screen with alert counters and filters"
                                caption="Inventory with alert counters"
                            />
                            <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                Six counters across the top, each one also a filter: total, public, private, low
                                stock, expiring soon and expired.
                            </p>
                        </div>
                        <div>
                            <Screenshot
                                src={shot('sellerPos').src}
                                alt="Seller point of sale product grid"
                                caption="Seller point of sale"
                            />
                            <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                The counter view sellers work from, with stock remaining, expiry and a sell action
                                per product.
                            </p>
                        </div>
                        <div>
                            <Screenshot
                                src={shot('sellerReservations').src}
                                alt="Seller reservation desk with pickup codes"
                                caption="Reservation desk"
                            />
                            <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                Pickup codes for pending reservations, and the field to validate them when a
                                client arrives.
                            </p>
                        </div>
                        <div>
                            <Screenshot
                                src={shot('ownerSales').src}
                                alt="Owner sales history with totals and ledger"
                                caption="Sales history"
                            />
                            <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                Totals across the top, then every sale with its type, client, seller and timestamp.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Platform */}
            <Section>
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="Underneath"
                        title="The platform the features sit on"
                        lead="How the product keeps the four roles apart and the data honest."
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {PLATFORM.map((p) => (
                            <div key={p.title} className="card-hover p-6">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                                    <p.icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-4 text-base font-bold text-slate-800">{p.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-7">
                        <h3 className="text-lg font-bold text-slate-800">Fair to say what is not here</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">
                            So there is no surprise later: there is no online payment, no delivery or courier
                            tracking, no prescription upload, no review or rating system, and no automatic
                            replenishment forecasting. What you see above is the scope of the software.
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                            {[
                                'No payment gateway',
                                'No delivery tracking',
                                'No prescription upload',
                                'No client reviews',
                                'No demand forecasting',
                            ].map((t) => (
                                <li
                                    key={t}
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500"
                                >
                                    <IconSettings className="h-3.5 w-3.5 text-slate-400" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link to="/how-it-works" className="btn-secondary btn-sm">
                                How the workflow runs
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/showcase" className="btn-secondary btn-sm">
                               Preview
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            <CTASection />
        </>
    );
}
