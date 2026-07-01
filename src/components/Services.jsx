import { Link } from 'react-router-dom';
import {
    Car, Bus, MapPinned, Briefcase,
    Heart, PlaneTakeoff, ArrowRight
} from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = { Car, Bus, MapPinned, Briefcase, Heart, PlaneTakeoff };

export default function Services() {
    const { services, contact } = siteData;

    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        'Halo 297 Transport, saya ingin tanya mengenai layanan sewa kendaraan pariwisata.'
    )}`;

    return (
        <section id="layanan" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Layanan Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Semua Kebutuhan Wisata Anda
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Dari sewa Hiace untuk liburan keluarga hingga fleet Bus untuk gathering perusahaan — kami punya solusinya.
                    </p>
                    <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto mt-4" />
                </div>

                {/* Grid layanan */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service) => {
                        const IconComponent = iconMap[service.icon] || Bus;
                        return (
                            <div
                                key={service.id}
                                className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="w-13 h-13 w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-colors shadow-sm">
                                    <IconComponent size={24} className="text-gray-900" />
                                </div>

                                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm hover:text-amber-700 group/link"
                                >
                                    Tanya & Pesan
                                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* CTA bawah */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Tidak menemukan yang Anda cari?</h3>
                        <p className="text-gray-500 text-sm">Ceritakan kebutuhan wisata Anda dan kami akan carikan solusi terbaik.</p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-5 py-2.5 rounded-xl transition-colors"
                        >
                            Konsultasi Gratis
                        </a>
                        <Link
                            to="/armada"
                            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
                        >
                            Lihat Armada
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
