import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Services from '../components/Services';
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

export default function ServicesPage() {
    const { contact } = siteData;
    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Halo 297 Transport, saya ingin tanya tentang layanan wisata yang tersedia.')}`;

    return (
        <>
            <div className="bg-gray-900 pt-28 pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Layanan' }]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">Layanan Wisata Kami</h1>
                    <p className="text-gray-400 max-w-xl">
                        Semua kebutuhan transportasi wisata — dari sewa Hiace hingga Bus Pariwisata untuk rombongan besar.
                    </p>
                </div>
            </div>

            <Services />

            {/* Cara Kerja */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                            Proses Pemesanan
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900">Cara Sewa Kendaraan</h2>
                        <p className="text-gray-500 text-sm mt-2">Mudah, cepat, dan langsung konfirmasi</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Hubungi Kami', desc: 'Chat via WhatsApp dan ceritakan kebutuhan wisata Anda.', icon: '💬' },
                            { step: '2', title: 'Pilih Armada', desc: 'Kami bantu pilihkan kendaraan yang tepat sesuai grup dan budget.', icon: '🚌' },
                            { step: '3', title: 'Konfirmasi & DP', desc: 'Setujui penawaran, lakukan DP untuk konfirmasi booking.', icon: '✅' },
                            { step: '4', title: 'Nikmati Perjalanan', desc: 'Kendaraan siap di lokasi sesuai jadwal. Selamat berwisata!', icon: '🎉' },
                        ].map(({ step, title, desc, icon }) => (
                            <div key={step} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                                <div className="text-3xl mb-3">{icon}</div>
                                <div className="absolute -top-3 -right-3 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center font-black text-gray-900 text-xs">
                                    {step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-7 py-3.5 rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
                        >
                            Mulai Pesan Sekarang
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
