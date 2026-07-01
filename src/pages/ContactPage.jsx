import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Contact from '../components/Contact';
import CTASection from '../components/CTASection';

function Breadcrumb({ items }) {
    return (
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            {items.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight size={14} className="text-gray-300" />}
                    {item.href ? (
                        <Link to={item.href} className="hover:text-amber-600 transition-colors">{item.label}</Link>
                    ) : (
                        <span className="text-gray-900 font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <div className="bg-gray-900 pt-28 pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Beranda', href: '/' },
                        { label: 'Kontak' },
                    ]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">Hubungi Kami</h1>
                    <p className="text-gray-400 max-w-xl">
                        Ada pertanyaan soal tiket, rute, atau pemesanan? Tim kami siap membantu Anda setiap hari.
                    </p>
                </div>
            </div>

            <Contact />
            <CTASection />
        </>
    );
}
