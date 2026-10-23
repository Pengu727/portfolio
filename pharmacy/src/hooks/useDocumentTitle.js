import { useEffect } from 'react';

const SITE = 'PharmaPortal';

/** Keep the document title in step with the active route. */
export default function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title ? `${title}   ${SITE}` : `${SITE}   Pharmacy Software & Medication Search`;
    }, [title]);
}
