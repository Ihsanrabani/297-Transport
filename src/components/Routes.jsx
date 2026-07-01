import { Clock, MapPin, ArrowRight, Bus, MessageCircle } from 'lucide-react';
import siteData from '../data/siteData';

export default function Routes() {
    const { routes, contact } = siteData;

    const buildWaLink = (from, to) =>
        `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
            `Halo 297 Transport, saya ingin pesan tiket rute ${from} → ${to}. Mohon informasi jadwal dan harga.`
        )}`;

    const waGeneral = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        'Halo 297 Transport, saya ingin cek rute dan jadwal bus yang tersedia.'
    )}`;

    return (
        <section id="rute" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Rute Populer
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Rute Perjalanan Tersedia
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Berikut rute-rute unggulan kami dengan jadwal keberangkatan rutin setiap hari.
                        Hubungi kami untuk rute lain yang belum tercantum.
                    </p>
                    <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto mt-4" />
                </div>

                {/* Grid rute */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {routes.map((route) => (
                        <div
                            key={route.id}
                            className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 bg-white"
                        >
                            {/* Gambar */}
                            <div className="relative overflow-hidden h-44 bg-gray-100">
                                <img
                                    src={route.image}
                                    alt={`${route.from} ke ${route.to}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                {/* Label kelas bus */}
                                <div className="absolute top-3 left-3 bg-gray-900/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg">
                                    {route.busClass}
                                </div>
                            </div>

                            {/* Info rute */}
                            <div className="p-5">
                                {/* Asal → Tujuan */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-bold text-gray-900 text-lg">{route.from}</span>
                                    <ArrowRight size={16} className="text-amber-500 shrink-0" />
                                    <span className="font-bold text-gray-900 text-lg">{route.to}</span>
                                </div>

                                {/* Detail */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Clock size={14} className="text-amber-500 shrink-0" />
                                        Durasi: <span className="font-medium text-gray-700">{route.duration}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-500 text-sm">
                                        <Bus size={14} className="text-amber-500 shrink-0 mt-0.5" />
                                        Berangkat: <span className="font-medium text-gray-700">{route.departureTime}</span>
                                    </div>
                                </div>

                                {/* Harga + tombol */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div>
                                        <div className="text-xs text-gray-400">Harga tiket</div>
                                        <div className="font-bold text-amber-600 text-base">{route.price}</div>
                                    </div>
                                    <a
                                        href={buildWaLink(route.from, route.to)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-sm px-4 py-2 rounded-xl transition-colors"
                                    >
                                        <MessageCircle size={14} />
                                        Pesan
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner rute lain */}
                <div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">Rute lain belum terlihat?</h3>
                        <p className="text-gray-400 text-sm">Kami melayani 30+ rute di seluruh Jawa, Bali, dan Sumatera. Tanyakan langsung kepada tim kami.</p>
                    </div>
                    <a
                        href={waGeneral}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors shadow-md flex items-center gap-2"
                    >
                        <MapPin size={18} />
                        Cek Semua Rute
                    </a>
                </div>

            </div>
        </section>
    );
}
