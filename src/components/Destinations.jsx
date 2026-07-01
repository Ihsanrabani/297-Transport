import { MapPin, Clock, MessageCircle } from 'lucide-react';
import siteData from '../data/siteData';

export default function Destinations() {
    const { destinations, contact } = siteData;

    const buildWaLink = (dest) =>
        `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
            `Halo 297 Transport, saya tertarik wisata ke ${dest.name}. Mohon info armada dan harga yang tersedia.`
        )}`;

    return (
        <section id="destinasi" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Destinasi Populer
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Kami Antarkan ke Mana Saja
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Destinasi favorit yang sering kami layani. Tidak ada di daftar? Hubungi kami — kami siap ke mana pun tujuan wisata Anda.
                    </p>
                    <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto mt-4" />
                </div>

                {/* Grid destinasi */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest) => (
                        <div
                            key={dest.id}
                            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                        >
                            {/* Gambar */}
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlay selalu ada, menguat saat hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent group-hover:from-gray-900/95 transition-all duration-300" />

                            {/* Konten overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5">
                                {/* Nama kota */}
                                <div className="flex items-center gap-2 mb-1">
                                    <MapPin size={16} className="text-amber-400 shrink-0" />
                                    <h3 className="font-bold text-white text-xl">{dest.name}</h3>
                                </div>

                                {/* Highlight */}
                                <p className="text-gray-300 text-xs mb-2 leading-relaxed">{dest.highlight}</p>

                                {/* Durasi */}
                                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium mb-3">
                                    <Clock size={12} />
                                    {dest.duration}
                                </div>

                                {/* Tombol — muncul saat hover */}
                                <a
                                    href={buildWaLink(dest)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm py-2.5 rounded-xl transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <MessageCircle size={15} />
                                    Pesan Armada ke Sini
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
