import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Routes from '../components/Routes';
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

export default function RoutesPage() {
    return (
        <>
            {/* Page Header */}
            <div className="bg-gray-900 pt-28 pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Beranda', href: '/' },
                        { label: 'Rute Perjalanan' },
                    ]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">Rute Perjalanan</h1>
                    <p className="text-gray-400 max-w-xl">
                        Temukan rute perjalanan yang tersedia beserta jadwal, harga, dan kelas bus. Hubungi kami untuk pemesanan langsung.
                    </p>
                </div>
            </div>

            <Routes />

            {/* Info tambahan jadwal */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto">
                        <h3 className="font-bold text-gray-900 text-xl mb-4">Cara Pesan Tiket</h3>
                        <ol className="space-y-4">
                            {[
                                { step: '1', text: 'Pilih rute dan tanggal keberangkatan yang diinginkan.' },
                                { step: '2', text: 'Klik tombol "Pesan" atau hubungi kami via WhatsApp/telepon.' },
                                { step: '3', text: 'Konfirmasi nama penumpang, jumlah kursi, dan kelas bus.' },
                                { step: '4', text: 'Lakukan pembayaran sesuai instruksi tim kami.' },
                                { step: '5', text: 'Terima konfirmasi tiket dan informasi titik penjemputan.' },
                            ].map(({ step, text }) => (
                                <li key={step} className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center font-bold text-gray-900 text-sm shrink-0">
                                        {step}
                                    </div>
                                    <p className="text-gray-600 pt-1">{text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
