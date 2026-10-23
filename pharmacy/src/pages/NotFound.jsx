import { Link } from 'react-router-dom';
import { IconArrowRight, IconSearch } from '../components/icons';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
    useDocumentTitle('Page not found');

    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="container-app flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pharmacy-50 text-pharmacy-600">
                    <IconSearch className="h-6 w-6" />
                </span>

                <p className="mt-6 font-mono text-sm font-bold text-pharmacy-600">404</p>
                <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
                    That page is out of stock
                </h1>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
                    The page you asked for does not exist. Try the homepage, the feature list, or get in touch
                    about the software.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link to="/" className="btn-primary">
                        Back to home
                        <IconArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                        Contact us
                    </Link>
                </div>
            </div>
        </section>
    );
}
