import { Link } from 'react-router-dom';
import Logo from './Logo';
import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from './icons';

const COLUMNS = [
    {
        title: 'Product',
        links: [
            { to: '/how-it-works', label: 'How it works' },
            { to: '/features', label: 'All features' },
            { to: '/showcase', label: 'Preview' },
        ],
    },
    {
        title: 'For',
        links: [
            { to: '/for-pharmacies', label: 'Pharmacy owners' },
            { to: '/for-clients', label: 'Clients and patients' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="container-app py-14">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
                    <div>
                        <Logo />
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                            Pharmacy management software that keeps your stock accurate, publishes what is
                            actually available, and puts your pharmacy in front of the people looking for
                            medication nearby.
                        </p>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <h3 className="eyebrow">{col.title}</h3>
                            <ul className="mt-4 space-y-2.5">
                                {col.links.map((l) => (
                                    <li key={l.to}>
                                        <Link
                                            to={l.to}
                                            className="text-sm font-semibold text-slate-600 transition hover:text-pharmacy-600"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="eyebrow">Pharmacy enquiries</h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-500">
                            Getting started, setting up your pharmacy or seeing a demonstration.
                        </p>
                        <Link to="/contact" className="btn-primary btn-sm mt-4">
                            Contact us
                            <IconArrowUpRight className="h-4 w-4" />
                        </Link>
                        <ul className="mt-5 space-y-2 text-sm text-slate-500">
                            <li className="flex items-center gap-2">
                                <IconMail className="h-4 w-4 shrink-0 text-slate-400" />
                                <span className="font-mono">via the contact form</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconPhone className="h-4 w-4 shrink-0 text-slate-400" />
                                <span>Phone number on request</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconMapPin className="h-4 w-4 shrink-0 text-slate-400" />
                                <span>Algeria</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} PharmaPortal. Built for pharmacies and the people
                        who depend on them.
                    </p>
                    <p className="text-xs text-slate-400">
                        Prices are shown in DA. Product data belongs to the pharmacy that lists it.
                    </p>
                </div>
            </div>
        </footer>
    );
}
