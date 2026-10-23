import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ForPharmacies from './pages/ForPharmacies';
import ForClients from './pages/ForClients';
import Features from './pages/Features';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-pharmacy-600 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
            >
                Skip to content
            </a>
            <Navbar />
            <main id="main" className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/for-pharmacies" element={<ForPharmacies />} />
                    <Route path="/for-clients" element={<ForClients />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/showcase" element={<Showcase />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
