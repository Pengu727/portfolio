import { Link } from 'react-router-dom';
import PageHero, { PageHeroAside } from '../components/PageHero';
import CTASection from '../components/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Screenshot, Section, SectionHeading } from '../components/Section';
import { shot } from '../content/screenshots';
import {
    IconArrowRight,
    IconSearch,
    IconMapPin,
    IconTag,
    IconClock,
    IconClipboard,
    IconCheck,
    IconEye,
    IconEyeOff,
    IconPhone,
    IconMapPin as IconMapPinAlt,
    IconShield,
    IconBox,
    IconStore,
} from '../components/icons';

const SEARCH_FIELDS = [
    'Product name',
    'Description text',
    'Category',
    'Laboratory',
    'Pharmacy name',
];

const RANKING = [
    { score: '100', label: 'Exact name match', tone: 'bg-emerald-100 text-emerald-800' },
    { score: '80', label: 'Name contains the term', tone: 'bg-emerald-50 text-emerald-700' },
    { score: '60', label: 'Product belongs to a matching pharmacy', tone: 'bg-blue-100 text-blue-800' },
    { score: '40', label: 'Category matches', tone: 'bg-amber-100 text-amber-800' },
    { score: '30', label: 'Laboratory matches', tone: 'bg-purple-100 text-purple-800' },
    { score: '10', label: 'Description matches', tone: 'bg-slate-100 text-slate-600' },
];

const NEAR_ME_FIELDS = [
    { icon: IconMapPinAlt, label: 'Distance', value: 'Kilometres from your position, nearest first' },
    { icon: IconPhone, label: 'Contact', value: 'Phone number for the pharmacy' },
    { icon: IconClock, label: 'Hours', value: 'Opening and closing times' },
    { icon: IconStore, label: 'Stock', value: 'The matching products it actually holds' },
];

const STEPS = [
    {
        n: '01',
        title: 'Browse or search without an account',
        body: 'Open the catalogue and search by product name or keywords. You do not need an account to see prices and availability. An account is only needed to reserve.',
        icon: IconSearch,
    },
    {
        n: '02',
        title: 'Narrow by category',
        body: 'If you know the therapeutic area rather than the brand, browse the category grid. The categories come from the products pharmacies have actually listed.',
        icon: IconTag,
    },
    {
        n: '03',
        title: 'Find the nearest pharmacy that has it',
        body: 'Grant location access and PharmaPortal ranks pharmacies by real distance and lists what each one holds. Filter by medication name to see only pharmacies that stock it.',
        icon: IconMapPin,
    },
    {
        n: '04',
        title: 'Reserve and get a pickup code',
        body: 'Choose a quantity and reserve. Your box is set aside for 24 hours and you receive a 6-digit code to present at the counter.',
        icon: IconClipboard,
    },
];

const BENEFITS = [
    {
        icon: IconClock,
        title: 'Save the trip that goes nowhere',
        body: 'Availability is answered before you leave, so you stop walking between pharmacies to ask for something that was never in stock.',
    },
    {
        icon: IconBox,
        title: 'The box is held, not just advertised',
        body: 'Reserving takes the product off the shelf for 24 hours, so it cannot sell while you are on your way.',
    },
    {
        icon: IconSearch,
        title: 'Fewer wasted journeys',
        body: 'Sorting by distance means you go to the closest pharmacy that has the product, not the first one you think of.',
    },
    {
        icon: IconEye,
        title: 'Know before you arrive',
        body: 'Address, commune, opening hours, phone number and a maps link are all on the product page, so the trip is planned.',
    },
];

export default function ForClients() {
    useDocumentTitle('For clients and patients');

    return (
        <>
            <PageHero
                eyebrow="For clients and patients"
                title="Find the medication before you leave the house"
                lead="PharmaPortal turns a phone call and a hopeful walk into a search you can run from where you are sitting. See who has your product, how far they are, what it costs and whether you can hold it."
                crumbs={[{ label: 'Home', to: '/' }, { label: 'For clients' }]}
                aside={
                    <PageHeroAside title="No account needed to look">
                        <li>Browse the full catalogue and search freely</li>
                        <li>See price and availability on every result</li>
                        <li>Create an account only when you reserve</li>
                        <li>Your account is verified by email code</li>
                    </PageHeroAside>
                }
            />

            {/* The old way vs the new way */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                            <h3 className="text-lg font-bold text-slate-800">The old way</h3>
                            <ul className="mt-5 space-y-3">
                                {[
                                    'Guess which pharmacies might stock it, or call each one.',
                                    'Travel to the first pharmacy and discover it is out of stock.',
                                    'Repeat until you find it, with no idea what it costs.',
                                    'Hope the box is still on the shelf when you arrive.',
                                    'Discover on arrival that you do not know the opening hours or address.',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-pharmacy-200 bg-pharmacy-50 p-7">
                            <h3 className="text-lg font-bold text-slate-800">With PharmaPortal</h3>
                            <ul className="mt-5 space-y-3">
                                {[
                                    'Search the whole network for your medication by name.',
                                    'See the price in DA and whether it is available, before you commit to anything.',
                                    'Sort pharmacies by real distance from your position.',
                                    'Reserve it and get a 6-digit code, with the box held for 24 hours.',
                                    'Open the maps link, call ahead or just turn up during opening hours.',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-600" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Search */}
            <Section>
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
                        <div>
                            <SectionHeading
                                eyebrow="Search"
                                title="Search that understands how people look for medicine"
                                lead="People rarely type the exact registered name. They type a brand, a partial word, or a symptom-related category. PharmaPortal searches across every field a pharmacy would use."
                            />

                            <div className="mt-8">
                                <p className="eyebrow">Searched fields</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {SEARCH_FIELDS.map((f) => (
                                        <span
                                            key={f}
                                            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                                        >
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 card p-6">
                                <p className="eyebrow">Results are ranked, not just listed</p>
                                <ul className="mt-4 space-y-2.5">
                                    {RANKING.map((r) => (
                                        <li key={r.label} className="flex items-center gap-3">
                                            <span className={`badge w-12 shrink-0 justify-center font-mono ${r.tone}`}>
                                                {r.score}
                                            </span>
                                            <span className="text-sm text-slate-600">{r.label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                    As you type, suggestions appear labelled by what they match, so you can jump
                                    straight to a product, a pharmacy, a category or a laboratory.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Screenshot
                                src={shot('clientCatalog').src}
                                alt="PharmaPortal client medication search results"
                                caption="Client medication search"
                                priority
                            />
                            <Screenshot
                                src={shot('clientCategories').src}
                                alt="PharmaPortal client category browsing screen"
                                caption="Browse by category"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Near me */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
                        <Screenshot
                            src={shot('clientNearMe').src}
                            alt="PharmaPortal pharmacies near you screen"
                            caption="Pharmacies near you"
                        />
                        <div>
                            <SectionHeading
                                eyebrow="Near me"
                                title="Pharmacies ordered by how far away they actually are"
                                lead="Give location access and PharmaPortal calculates the distance to every pharmacy on the network, then lists the closest ones first. Add a medication name to see only the pharmacies that stock it."
                            />

                            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                {NEAR_ME_FIELDS.map((f) => (
                                    <div key={f.label} className="card p-5">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pharmacy-50 text-pharmacy-600">
                                            <f.icon className="h-4 w-4" />
                                        </span>
                                        <p className="mt-3.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                                            {f.label}
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.value}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-sm leading-relaxed text-slate-500">
                                Each listing carries the full address, commune and wilaya, opening hours, the
                                phone number and a Google Maps link, so you know exactly where you are going
                                before you set off.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Reserve */}
            <Section>
                <div className="container-app section-pad">
                    <SectionHeading
                        align="center"
                        eyebrow="Reserving"
                        title="Hold it, then collect it"
                        lead="Reserving is what turns a search result into medicine in your hands. It is the only step that needs an account."
                    />

                    <ol className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
                        {STEPS.map((s) => (
                            <li key={s.n} className="card flex gap-5 p-6">
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

                    <div className="mx-auto mt-6 grid max-w-5xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                        <Screenshot
                            src={shot('clientReservations').src}
                            alt="PharmaPortal client reservations list with pickup code"
                            caption="Your reservations"
                        />
                        <div className="card flex flex-col justify-center p-7">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pharmacy-600 text-white shadow-md shadow-emerald-600/20">
                                <IconClipboard className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 text-xl font-bold text-slate-800">Your pickup code</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                Every reservation produces a 6-digit code. It is tied to your pharmacy, so it
                                only works at the counter that dispensed it. Staff validate it before handing over
                                the product, which is what makes the hold reliable in both directions.
                            </p>
                            <ul className="mt-5 space-y-3">
                                {[
                                    'Shown with the pharmacy, address and maps link',
                                    'Reserved and expiry times displayed on every entry',
                                    'Status updates to completed once staff validate it',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* What you see / what is hidden */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="card p-7">
                            <p className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                                <IconEye className="h-4 w-4" />
                                What you see about a product
                            </p>
                            <ul className="mt-4 space-y-2.5">
                                {[
                                    'Name, category, dosage and laboratory',
                                    'The description the pharmacy wrote',
                                    'The price in DA',
                                    'Available or out of stock',
                                    'Which pharmacy dispenses it, with contact details and hours',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card p-7">
                            <p className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                <IconEyeOff className="h-4 w-4" />
                                What stays internal
                            </p>
                            <ul className="mt-4 space-y-2.5">
                                {[
                                    'The exact number of units in stock',
                                    'The pharmacy’s internal minimum threshold',
                                    'Expiry dates and internal status labels',
                                    'Products the pharmacy has marked private',
                                    'Seller and owner accounts',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-500">
                                        <IconShield className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-500">
                                Private products are removed from search entirely, and their pages return not
                                found. You are never shown a product the pharmacy has not published.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {BENEFITS.map((b) => (
                            <div key={b.title} className="card-hover p-6">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pharmacy-50 text-pharmacy-600">
                                    <b.icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-4 text-base font-bold text-slate-800">{b.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500">
                            Browsing and searching the catalogue does not need an account, and an account is
                            only needed to reserve. If you want your pharmacy listed, or you run one, start
                            with the pharmacy side.
                        </p>
                        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link to="/for-pharmacies" className="btn-primary">
                                I run a pharmacy
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/showcase" className="btn-secondary">
                                See the interface
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            <CTASection audience="pharmacy" />
        </>
    );
}
