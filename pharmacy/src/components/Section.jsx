export function Section({ children, className = '', id, tone = 'default' }) {
    const tones = {
        default: 'bg-slate-50',
        white: 'bg-white',
        soft: 'bg-pharmacy-50',
        dark: 'bg-slate-900',
    };
    return (
        <section id={id} className={`${tones[tone]} ${className}`}>
            {children}
        </section>
    );
}

export function SectionHeading({ eyebrow, title, lead, align = 'left', invert = false, className = '' }) {
    const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
    return (
        <div className={`flex flex-col ${alignment} ${className}`}>
            {eyebrow && (
                <span
                    className={`badge ${
                        invert ? 'bg-white/10 text-pharmacy-200 ring-1 ring-white/15' : 'bg-pharmacy-100 text-pharmacy-700'
                    }`}
                >
                    {eyebrow}
                </span>
            )}
            <h2
                className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${
                    invert ? 'text-white' : 'text-slate-800'
                }`}
            >
                {title}
            </h2>
            {lead && (
                <p className={`mt-4 max-w-2xl text-base leading-relaxed ${invert ? 'text-slate-300' : 'text-slate-500'}`}>
                    {lead}
                </p>
            )}
        </div>
    );
}

/**
 * Browser-chrome frame for real product screenshots, so the imagery reads as
 * application UI rather than a floating picture.
 */
export function Screenshot({ src, alt, caption, className = '', priority = false, ratio = 'aspect-[16/10]' }) {
    return (
        <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card ${className}`}>
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="ml-2 truncate text-[11px] font-semibold text-slate-400">{caption}</span>
            </div>
            <div className={`${ratio} w-full bg-slate-50`}>
                <img
                    src={src}
                    alt={alt}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                />
            </div>
        </figure>
    );
}

/** Small labelled chip used to mark up a list of concrete product facts. */
export function FactRow({ icon: Icon, label, value }) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pharmacy-50 text-pharmacy-600">
                <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700">{value}</p>
            </div>
        </div>
    );
}
