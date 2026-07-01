import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Services from '../components/Services';
import CTASection from '../components/CTASection';
import siteData from '../data/siteData';

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

export default function ServicesPage() {
    const { contact } = siteData;

    return (
        <>
            {/* Page Header */}
            <div className="bg-gray-900 pt-28 pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Beranda', href: '/' },
                        { label: 'Layanan' },
                    ]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">Layanan Kami</h1>
                    <p className="text-gray-400 max-w-xl">
                        Berbagai solusi perjalanan tersedia — dari tiket bus reguler, carter rombongan, hingga paket wisata all-inclusive.
                    </p>
                </div>
            </div>

            <Services />

            {/* Tabel perbandingan kelas bus */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                            Pilihan Kelas
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900">Perbandingan Kelas Bus</h2>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="text-left px-5 py-4 font-semibold">Fasilitas</th>
                                    <th className="text-center px-5 py-4 font-semibold">Ekonomi AC</th>
                                    <th className="text-center px-5 py-4 font-semibold">Bisnis</th>
                                    <th className="text-center px-5 py-4 font-semibold bg-amber-400 text-gray-900">Eksekutif</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    ['AC', '✓', '✓', '✓'],
                                    ['Kursi Reclining', '—', '✓', '✓'],
                                    ['Bantal & Selimut', '—', '✓', '✓'],
                                    ['Charger USB', '—', '✓', '✓'],
                                    ['TV/Hiburan', '—', '✓', '✓'],
                                    ['Toilet Onboard', '—', '—', '✓'],
                                    ['Snack/Makan', '—', '—', '✓'],
                                    ['Asuransi Perjalanan', '✓', '✓', '✓'],
                                ].map(([feat, eco, bis, eks], i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-5 py-3.5 font-medium text-gray-800">{feat}</td>
                                        <td className="px-5 py-3.5 text-center text-gray-500">{eco}</td>
                                        <td className="px-5 py-3.5 text-center text-gray-500">{bis}</td>
                                        <td className="px-5 py-3.5 text-center text-amber-600 font-bold bg-amber-50">{eks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
