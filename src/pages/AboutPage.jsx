import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import About from '../components/About';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import siteData from '../data/siteData';

function Breadcrumb({ items }) {
    return (
        <nav className="flex items-center gap-1.5 text-sm">
            {items.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight size={14} className="text-gray-500" />}
                    {item.href ? (
                        <Link to={item.href} className="text-gray-400 hover:text-amber-400 transition-colors">{item.label}</Link>
                    ) : (
                        <span className="text-white font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}

export default function AboutPage() {
    return (
        <>
            <div className="bg-gray-900 pt-28 pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Tentang Kami' }]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">Tentang Kami</h1>
                    <p className="text-gray-400 max-w-xl">
                        Kenali lebih dekat 297 Transport — spesialis sewa kendaraan pariwisata terpercaya sejak 2014.
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
                                Menjadi penyedia jasa sewa kendaraan pariwisata terdepan di Indonesia — dikenal atas armada berkualitas, pengemudi profesional, dan pengalaman wisata yang tak terlupakan bagi setiap pelanggan.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mb-5">
                                <span className="text-gray-900 font-black text-lg">M</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                            <ul className="text-gray-600 leading-relaxed space-y-2.5">
                                {[
                                    'Menyediakan armada pariwisata modern, bersih, dan terawat',
                                    'Menghadirkan pengemudi profesional yang hafal rute wisata',
                                    'Memberikan harga yang adil, transparan, dan kompetitif',
                                    'Melayani pelanggan dengan ramah, responsif, dan tulus',
                                    'Menjadikan setiap perjalanan sebagai kenangan indah',
                                ].map((m, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
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
