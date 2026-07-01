import { Link } from 'react-router-dom';
import { ChevronRight, Users, CheckCircle, MessageCircle, Bus } from 'lucide-react';
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

const badgeStyles = {
    amber: "bg-amber-400 text-gray-900",
    green: "bg-green-500 text-white",
    blue: "bg-blue-600 text-white",
};

export default function FleetPage() {
    const { fleet, contact } = siteData;

    const buildWaLink = (vehicleName) =>
        `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
            `Halo 297 Transport, saya ingin tanya sewa ${vehicleName} untuk wisata. Mohon info harga dan ketersediaannya.`
        )}`;

    const waGeneral = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        'Halo 297 Transport, saya ingin konsultasi sewa kendaraan pariwisata. Mohon dibantu.'
    )}`;

    // Pisah Hiace dan Bus
    const hiaceList = fleet.filter(v => v.type.toLowerCase().includes('hiace') || v.type.toLowerCase().includes('minibus'));
    const busList = fleet.filter(v => v.type.toLowerCase().includes('bus'));

    return (
        <>
            {/* Page Header */}
            <div className="bg-gray-900 pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Beranda', href: '/' },
                        { label: 'Armada Pariwisata' },
                    ]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-3">
                        Armada Pariwisata Kami
                    </h1>
                    <p className="text-gray-400 max-w-2xl">
                        Pilih kendaraan yang sesuai dengan jumlah rombongan dan kebutuhan wisata Anda. Semua armada terawat, bersih, dan siap berangkat.
                    </p>

                    {/* Filter pill */}
                    <div className="flex gap-3 mt-6">
                        <a href="#hiace" className="flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold text-sm px-4 py-2 rounded-full hover:bg-amber-500 transition-colors">
                            <Bus size={15} /> Hiace & Minibus
                        </a>
                        <a href="#bus" className="flex items-center gap-2 bg-gray-800 text-white font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                            <Bus size={15} /> Bus Pariwisata
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Hiace Section ── */}
            <section id="hiace" className="py-20 bg-gray-50 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-1 h-10 bg-amber-400 rounded-full" />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Hiace & Minibus Pariwisata</h2>
                            <p className="text-gray-500 text-sm">Ideal untuk grup kecil 8–16 orang</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {hiaceList.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} waLink={buildWaLink(vehicle.name)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bus Section ── */}
            <section id="bus" className="py-20 bg-white scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-1 h-10 bg-amber-400 rounded-full" />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Bus Pariwisata</h2>
                            <p className="text-gray-500 text-sm">Ideal untuk rombongan 27–59 orang</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {busList.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} waLink={buildWaLink(vehicle.name)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Panduan memilih */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Panduan Memilih Armada</h2>
                        <p className="text-gray-500 text-sm mt-1">Bingung pilih kendaraan yang tepat? Ini panduannya</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { range: "1 – 7 Orang", vehicle: "Hiace Premio / Commuter", note: "Wisata semi-privat, city tour" },
                            { range: "8 – 16 Orang", vehicle: "Hiace / Elf Long", note: "Wisata keluarga, arisan" },
                            { range: "17 – 30 Orang", vehicle: "Bus Medium 27 Seat", note: "Study tour, gathering kecil" },
                            { range: "31 – 59 Orang", vehicle: "Bus Besar 40 / 59 Seat", note: "Gathering besar, piknik massal" },
                        ].map((g, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
                                <div className="text-amber-600 font-black text-lg mb-1">{g.range}</div>
                                <div className="text-gray-900 font-bold text-sm mb-1">{g.vehicle}</div>
                                <div className="text-gray-400 text-xs">{g.note}</div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a
                            href={waGeneral}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors"
                        >
                            <MessageCircle size={18} />
                            Konsultasi Gratis Pilih Armada
                        </a>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}

// Card komponen reusable
function VehicleCard({ vehicle, waLink }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
            {/* Gambar */}
            <div className="relative overflow-hidden h-52 bg-gray-100 shrink-0">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                {vehicle.badge && (
                    <div className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${vehicle.badgeColor === 'amber' ? 'bg-amber-400 text-gray-900' :
                            vehicle.badgeColor === 'green' ? 'bg-green-500 text-white' :
                                'bg-blue-600 text-white'
                        }`}>
                        {vehicle.badge}
                    </div>
                )}

                <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-lg">
                        {vehicle.type}
                    </span>
                </div>
            </div>

            {/* Konten */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{vehicle.name}</h3>
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-xl shrink-0 ml-2">
                        <Users size={12} />
                        {vehicle.capacity}
                    </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{vehicle.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {vehicle.features.map((f) => (
                        <span key={f} className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-lg">
                            <CheckCircle size={10} className="text-green-500 shrink-0" />
                            {f}
                        </span>
                    ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <div>
                        <div className="text-xs text-gray-400 mb-0.5">Estimasi harga</div>
                        <div className="text-amber-600 font-bold text-sm">{vehicle.priceInfo}</div>
                    </div>
                    <a
                        href={waLink}
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
    );
}
