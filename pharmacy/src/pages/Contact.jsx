import { cloneElement, isValidElement, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Section } from '../components/Section';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
    IconStore,
    IconMonitor,
    IconPlus,
    IconCheckCircle,
    IconAlert,
    IconArrowRight,
    IconClipboard,
    IconClock,
    IconShield,
    IconSettings,
} from '../components/icons';

const REASONS = [
    'Get the software for my pharmacy',
    'Set up an existing pharmacy on the platform',
    'Request a demonstration',
    'Technical or general enquiry',
];

const REASON_DETAIL = {
    'Get the software for my pharmacy': 'Tell us your pharmacy name and location. We will walk you through what the software does for your catalogue, your stock and your counter.',
    'Set up an existing pharmacy on the platform': 'Tell us about your current stock and your team, and we will talk you through the pharmacy record, your owner login, your catalogue and your seller logins.',
    'Request a demonstration': 'We can walk you through the owner inventory screen, the seller point of sale, and the client search and reservation flow end to end.',
    'Technical or general enquiry': 'Ask anything, from how a reservation expires to how private products stay hidden. We will answer plainly.',
};

const EXPECT = [
    {
        icon: IconClipboard,
        title: 'You send us the details',
        body: 'Pharmacy name, wilaya and commune, a contact number and what you need from us. That is enough to start a conversation.',
    },
    {
        icon: IconClock,
        title: 'We confirm scope and timing',
        body: 'We tell you exactly what setting up involves, whether it is a new pharmacy or an existing one, and what we need from you.',
    },
    {
        icon: IconMonitor,
        title: 'You see the software',
        body: 'A demonstration of the owner, seller and client interfaces, using the parts that matter to your pharmacy.',
    },
    {
        icon: IconSettings,
        title: 'We set you up',
        body: 'Your pharmacy record, your owner login, your catalogue and your seller accounts, with your team trained on the counter workflow.',
    },
];

const SETUP_LIST = [
    'Pharmacy record with commercial register, address, wilaya and commune',
    'Opening and closing hours plus your public phone number',
    'Coordinates for your location, taken from your Google Maps link',
    'Your owner login',
    'Seller logins for each member of counter staff',
    'Your product catalogue, loaded with stock, prices and expiry dates',
];

/**
 * Label + control wrapper. The ARIA wiring (required, invalid, and the
 * hint/error descriptions) is injected onto the control itself so each field
 * cannot drift out of sync with its own label.
 */
function Field({ label, htmlFor, required, hint, error, children }) {
    const hintId = `${htmlFor}-hint`;
    const errId = `${htmlFor}-error`;
    const describedBy = [hint ? hintId : null, error ? errId : null].filter(Boolean).join(' ') || undefined;

    const control = isValidElement(children)
        ? cloneElement(children, {
              'aria-required': required ? 'true' : undefined,
              'aria-invalid': error ? 'true' : undefined,
              'aria-describedby': describedBy,
          })
        : children;

    return (
        <div>
            <label
                htmlFor={htmlFor}
                className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-500"
            >
                {label}
                {required && (
                    <span className="ml-1 text-red-500" aria-hidden="true">
                        *
                    </span>
                )}
            </label>
            {control}
            {hint && (
                <p id={hintId} className="mt-1.5 text-xs text-slate-400">
                    {hint}
                </p>
            )}
            {error && (
                <p
                    id={errId}
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-600"
                >
                    <IconAlert className="h-3.5 w-3.5" />
                    {error}
                </p>
            )}
        </div>
    );
}

const EMPTY = {
    name: '',
    pharmacy: '',
    email: '',
    phone: '',
    wilaya: '',
    commune: '',
    reason: REASONS[0],
    message: '',
};

export default function Contact() {
    useDocumentTitle('Contact pharmacy sales');

    const [form, setForm] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const set = (key) => (e) => {
        const value = e.target.value;
        setForm((f) => ({ ...f, [key]: value }));
        setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

    /**
     * Front-end validation only. There is no backend on this marketing site,
     * so the submit handler is deliberately kept as the single integration
     * point: replace this block with a POST to your endpoint or form service.
     */
    function handleSubmit(e) {
        e.preventDefault();
        const next = {};

        if (!form.name.trim()) next.name = 'Please enter your name.';
        if (!form.pharmacy.trim()) next.pharmacy = 'Please enter your pharmacy name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = 'Please enter a valid email address.';
        if (form.phone.trim() && form.phone.trim().replace(/[^\d]/g, '').length < 8)
            next.phone = 'Please enter a reachable phone number, or leave it blank.';
        if (form.message.trim().length < 15)
            next.message = 'Please add a little more detail, at least a sentence or two.';

        setErrors(next);
        if (Object.keys(next).length > 0) return;

        // ---- Integration point: send `form` to your backend or form service here.
        setSubmitted(true);
        setForm(EMPTY);
    }

    return (
        <>
            <PageHero
                eyebrow="Contact"
                title="Get PharmaPortal for your pharmacy"
                lead="Tell us about your pharmacy and what you need. We will show you the software and talk you through your account, your catalogue and your counter staff."
                crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
            />

            <Section>
                <div className="container-app py-14 sm:py-16 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                        {/* ------------------------- Form ------------------------- */}
                        <div className="card overflow-hidden">
                            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">
                                <h2 className="text-xl font-black tracking-tight text-slate-800">
                                    Pharmacy enquiry
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Fields marked with an asterisk are required.
                                </p>
                            </div>

                            {submitted && (
                                <div className="border-b border-emerald-200 bg-emerald-50 px-6 py-5 sm:px-8">
                                    <div className="flex gap-3">
                                        <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                                        <div>
                                            <p className="text-sm font-bold text-emerald-800">
                                                Your enquiry is ready to send
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-emerald-700">
                                                This site has no mail backend connected yet, so nothing has been
                                                transmitted. The form below is complete and validated, ready to
                                                post to an endpoint or form service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Your name" htmlFor="name" required error={errors.name}>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            className="field"
                                            placeholder="Full name"
                                            value={form.name}
                                            onChange={set('name')}
                                        />
                                        
                                    </Field>

                                    <Field label="Pharmacy name" htmlFor="pharmacy" required error={errors.pharmacy}>
                                        <input
                                            id="pharmacy"
                                            name="pharmacy"
                                            type="text"
                                            autoComplete="organization"
                                            className="field"
                                            placeholder="e.g. Pharmacie El Biar"
                                            value={form.pharmacy}
                                            onChange={set('pharmacy')}
                                        />
                                        
                                    </Field>

                                    <Field label="Email" htmlFor="email" required error={errors.email}>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="field"
                                            placeholder="you@pharmacy.dz"
                                            value={form.email}
                                            onChange={set('email')}
                                        />
                                        
                                    </Field>

                                    <Field label="Phone" htmlFor="phone" hint="Optional, but it speeds things up." error={errors.phone}>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            className="field"
                                            placeholder="e.g. 0550 00 00 00"
                                            value={form.phone}
                                            onChange={set('phone')}
                                        />
                                        
                                    </Field>

                                    <Field label="Wilaya" htmlFor="wilaya" hint="Helps us plan the setup.">
                                        <input
                                            id="wilaya"
                                            name="wilaya"
                                            type="text"
                                            className="field"
                                            placeholder="e.g. Alger"
                                            value={form.wilaya}
                                            onChange={set('wilaya')}
                                        />
                                    </Field>

                                    <Field label="Commune" htmlFor="commune" hint="So clients can find you by distance.">
                                        <input
                                            id="commune"
                                            name="commune"
                                            type="text"
                                            className="field"
                                            placeholder="e.g. El Biar"
                                            value={form.commune}
                                            onChange={set('commune')}
                                        />
                                    </Field>
                                </div>

                                <Field label="What is this about" htmlFor="reason">
                                    <select id="reason" name="reason" className="field" value={form.reason} onChange={set('reason')}>
                                        {REASONS.map((r) => (
                                            <option key={r} value={r}>
                                                {r}
                                            </option>
                                        ))}
                                    </select>
                                </Field>

                                <div className="rounded-xl border border-pharmacy-200 bg-pharmacy-50 px-4 py-3">
                                    <p className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                                        <IconStore className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-600" />
                                        {REASON_DETAIL[form.reason]}
                                    </p>
                                </div>

                                <Field
                                    label="Message"
                                    htmlFor="message"
                                    required
                                    error={errors.message}
                                    hint="What do you stock, how many people work the counter, and what would you like to solve?"
                                >
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="field resize-y"
                                        placeholder="Tell us about your pharmacy and what you are trying to improve."
                                        value={form.message}
                                        onChange={set('message')}
                                    />
                                    
                                </Field>

                                <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
                                    <button type="submit" className="btn-primary">
                                        Send enquiry
                                        <IconArrowRight className="h-4 w-4" />
                                    </button>
                                    <p className="text-xs leading-relaxed text-slate-400">
                                        We use your details only to answer this enquiry.
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* ------------------------- Sidebar ------------------------- */}
                        <div className="space-y-6">
                            <div className="card p-6">
                                <h2 className="text-lg font-bold text-slate-800">You can ask us about</h2>
                                <ul className="mt-4 space-y-3">
                                    {[
                                        'Getting the software for your pharmacy',
                                        'Setting up an existing pharmacy on the platform',
                                        'Loading your catalogue with stock, prices and expiry dates',
                                        'Creating logins for you and your counter staff',
                                        'A demonstration of the owner, seller and client screens',
                                        'How reservations, pickup codes and expiry work',
                                        'How private products stay hidden from clients',
                                    ].map((t) => (
                                        <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                            <IconCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-pharmacy-500" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h2 className="text-lg font-bold text-slate-800">What we need to set you up</h2>
                                <ul className="mt-4 space-y-3">
                                    {SETUP_LIST.map((t) => (
                                        <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pharmacy-400" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-500">
                                    You do not need to prepare any of this before getting in touch. We will walk
                                    you through it.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-300">
                                <div className="flex items-center gap-2.5">
                                    <IconMonitor className="h-5 w-5 text-pharmacy-400" />
                                    <h2 className="text-lg font-bold text-white">Want to see it first?</h2>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed">
                                    The form on this page is the way to reach us, so you can attach the
                                    specifics of your pharmacy in one message. If you would rather see the
                                    software first, browse the screens and then get in touch with your
                                    questions attached.
                                </p>
                                <Link to="/showcase" className="btn btn-sm mt-5 border border-white/20 text-white hover:bg-white/10">
                                    <IconMonitor className="h-4 w-4" />
                                    Look through the screens
                                </Link>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <div className="flex items-center gap-2.5">
                                    <IconShield className="h-5 w-5 text-pharmacy-600" />
                                    <h2 className="text-lg font-bold text-slate-800">Not a pharmacy owner?</h2>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                    Clients do not need to get in touch. You can browse the catalogue and search
                                    freely without an account.
                                </p>
                                <Link
                                    to="/for-clients"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-pharmacy-600 hover:underline"
                                >
                                    See how clients use it
                                    <IconArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ------------------------- What happens next ------------------------- */}
            <Section tone="white">
                <div className="container-app section-pad">
                    <div className="max-w-2xl">
                        <span className="badge bg-pharmacy-100 text-pharmacy-700">What happens next</span>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-800">
                            From your first message to a working catalogue
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">
                            Every enquiry starts with the same facts: which pharmacy, which location and
                            what you stock.
                        </p>
                    </div>

                    <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {EXPECT.map((step, i) => (
                            <li key={step.title} className="card relative p-6">
                                <span className="font-mono text-xs font-bold text-pharmacy-600">
                                    STEP {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-pharmacy-50 text-pharmacy-600">
                                    <step.icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-4 text-base font-bold text-slate-800">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.body}</p>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-12 rounded-2xl border border-pharmacy-200 bg-pharmacy-50 p-7">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-pharmacy-600 shadow-card">
                                    <IconPlus className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">
                                        Not sure yet what you need?
                                    </h3>
                                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">
                                        Send the enquiry anyway. Reading through the feature list and the
                                        screenshots first is perfectly reasonable, and it makes the conversation
                                        much faster.
                                    </p>
                                </div>
                            </div>
                            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                                <Link to="/features" className="btn-secondary btn-sm">
                                    Feature list
                                </Link>
                                <Link to="/how-it-works" className="btn-primary btn-sm">
                                    How it works
                                    <IconArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
