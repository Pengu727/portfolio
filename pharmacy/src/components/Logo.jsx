import { Link } from 'react-router-dom';

/**
 * The PharmaPortal mark. Uses the exact logo asset shipped with the
 * application (public/images/pharmaportal.png) so both surfaces match.
 */
export default function Logo({ size = 'md', withWordmark = true, to = '/', invert = false, className = '' }) {
    const box = { sm: 'h-7 w-7', md: 'h-8 w-8', lg: 'h-11 w-11' }[size];
    const word = { sm: 'text-base', md: 'text-lg', lg: 'text-2xl' }[size];

    const inner = (
        <>
            <img src="/logo/pharmaportal.png" alt="PharmaPortal" className={`${box} shrink-0 rounded-lg object-contain`} />
            {withWordmark && (
                <span className={`${word} font-black tracking-tight ${invert ? 'text-white' : 'text-slate-800'}`}>
                    PharmaPortal
                </span>
            )}
        </>
    );

    if (!to) {
        return <span className={`inline-flex items-center gap-2 ${className}`}>{inner}</span>;
    }

    return (
        <Link to={to} className={`inline-flex items-center gap-2 ${className}`}>
            {inner}
        </Link>
    );
}
