import { Link } from 'react-router-dom';
import { Users, Zap, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import siteData from '../data/siteData';

const badgeStyles = {
    amber: "bg-amber-400 text-gray-900",
    green: "bg-green-500 text-white",
    blue: "bg-blue-600 text-white",
};

export default function Fleet() {
    const { fleet, contact } = siteData;

    const buildWaLink = (vehicleName) =>
        `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
            `Halo 297 Transport, saya ingin tanya informasi sewa ${vehicleName} untuk wisata. Mohon info harga dan ketersediaannya.`
        )}`;

    const waGeneral = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        'Halo 297 Transport, saya ingin tanya tentang armada pariwisata yang tersedia. Mohon info lengkapnya.'
    )}`;

    return (
        <section id="armada" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Armada Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Pilihan Armada Pariwisata
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Dari Hiace untuk grup kecil hingga Bus Eksekutif untuk rombongan besar — semua armada kami terawat, bersih, dan siap mengantarkan petualangan Anda.
                    </p>
                    <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto mt-4" />
                </div>

                {/* Grid armada */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
                    {fleet.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                        >
                            {/* Gambar */}
                            <div className="relative overflow-hidden h-52 bg-gray-100 shrink-0">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                                {/* Badge */}
                                {vehicle.badge && (
                                    <div className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeStyles[vehicle.badgeColor] || 'bg-amber-400 text-gray-900'}`}>
                                        {vehicle.badge}
                                    </div>
                                )}

                                {/* Type label bawah */}
                                <div className="absolute bottom-3 left-3">
                                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-lg">
                                        {vehicle.type}
                                    </span>
                                </div>
                            </div>

                            {/* Konten */}
                            <div className="p-5 flex flex-col flex-1">
                                {/* Nama & kapasitas */}
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{vehicle.name}</h3>
                                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-xl shrink-0 ml-2">
                                        <Users size={12} />
                                        {vehicle.capacity}
                                    </div>
                                </div>

                                {/* Deskripsi */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                                    {vehicle.description}
                                </p>

                                {/* Fitur */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {vehicle.features.map((f) => (
                                        <span key={f} className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-lg">
                                            <CheckCircle size={10} className="text-green-500 shrink-0" />
                                            {f}
                                        </span>
                                    ))}
                                </div>

                                {/* Harga + Tombol */}
                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                                    <div>
                                        <div className="text-xs text-gray-400 mb-0.5">Estimasi harga</div>
                                        <div className="text-amber-600 font-bold text-sm">{vehicle.priceInfo}</div>
                                    </div>
                                    <a
                                        href={buildWaLink(vehicle.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-sm px-4 py-2 rounded-xl transition-all hover:-translate-y-0.5"
                                    >
                                        <MessageCircle size={14} />
                                        Pesan
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner CTA */}
                <div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">Butuh armada lebih dari satu unit?</h3>
                        <p className="text-gray-400 text-sm max-w-md">
                            Kami siap menyediakan armada multipel untuk rombongan besar. Dapatkan harga spesial untuk pemesanan lebih dari 3 unit.
                        </p>
                    </div>
                    <div className="flex gap-3 shrink-0 flex-col sm:flex-row">
                        <a
                            href={waGeneral}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
                        >
                            <MessageCircle size={18} />
                            Tanya Harga Borongan
                        </a>
                        <Link
                            to="/armada"
                            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                        >
                            Lihat Semua Armada
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
