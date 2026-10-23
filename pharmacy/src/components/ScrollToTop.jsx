import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Reset scroll between routes, honouring in-page #hash targets. */
export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }, [pathname, hash]);

    return null;
}
