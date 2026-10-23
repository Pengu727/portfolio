import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { IconMenu, IconX, IconArrowRight } from './icons';

const LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/how-it-works', label: 'How it works' },
    { to: '/for-pharmacies', label: 'For pharmacies' },
    { to: '/for-clients', label: 'For clients' },
    { to: '/features', label: 'Features' },
    { to: '/showcase', label: 'Preview' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/85">
            <div className="container-app">
                <div className="flex h-16 items-center justify-between">
                    <Logo />

                    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
                        {LINKS.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                className={({ isActive }) =>
                                    [
                                        'rounded-lg px-3 py-2 text-sm font-semibold transition',
                                        isActive
                                            ? 'bg-pharmacy-50 text-pharmacy-700'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                    ].join(' ')
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-2 lg:flex">
                        <Link to="/contact" className="btn-primary btn-sm">
                            Get the software
                            <IconArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                    >
                        {open ? <IconMenu className="h-6 w-6 rotate-90" /> : <IconMenu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {open && (
                <div id="mobile-nav" className="border-t border-slate-100 bg-white lg:hidden">
                    <nav className="container-app space-y-1 py-4" aria-label="Mobile">
                        {LINKS.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                className={({ isActive }) =>
                                    [
                                        'block rounded-lg px-3 py-2.5 text-base font-semibold transition',
                                        isActive
                                            ? 'bg-pharmacy-50 text-pharmacy-700'
                                            : 'text-slate-700 hover:bg-slate-50 hover:text-pharmacy-700',
                                    ].join(' ')
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-pharmacy-600 px-5 py-3 text-base font-bold text-white shadow-md shadow-emerald-600/10"
                        >
                            Get the software
                            <IconArrowRight className="h-4 w-4" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export { IconX };
