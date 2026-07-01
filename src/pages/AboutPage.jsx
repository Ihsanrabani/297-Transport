import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import About from '../components/About';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import siteData from '../data/siteData';

// Breadcrumb sederhana
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

export default function AboutPage() {
    const { contact, cta } = siteData;
    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(cta.whatsappMessage)}`;

    return (
        <>
            {/* Page Header */}
            <div className="bg-gray-900 pt-28 pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Beranda', href: '/' },
                        { label: 'Tentang Kami' },
                    ]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">Tentang Kami</h1>
                    <p className="text-gray-400 max-w-xl">
                        Kenali lebih dekat 297 Transport — agen travel bus terpercaya yang telah melayani ribuan penumpang sejak 2014.
                    </p>
                </div>
            </div>

            <About />
            <Stats />

            {/* Visi Misi */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mb-5">
                                <span className="text-gray-900 font-black text-lg">V</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Menjadi agen travel bus pilihan utama di Indonesia yang dikenal atas keandalan, keamanan, dan pelayanan prima — menjadikan setiap perjalanan sebagai pengalaman yang menyenangkan dan tak terlupakan.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mb-5">
                                <span className="text-gray-900 font-black text-lg">M</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                            <ul className="text-gray-600 leading-relaxed space-y-2">
                                {[
                                    'Menyediakan armada bus modern, bersih, dan terawat',
                                    'Menghadirkan pengemudi profesional bersertifikat',
                                    'Memberikan harga yang adil dan transparan',
                                    'Melayani pelanggan dengan ramah dan responsif',
                                    'Terus berinovasi untuk meningkatkan pengalaman perjalanan',
                                ].map((m, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-amber-500 font-bold mt-0.5">✓</span>
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
