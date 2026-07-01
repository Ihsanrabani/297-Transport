import {
    TicketCheck, Users, MapPinned, PlaneTakeoff,
    Car, Heart, ArrowRight, Bus
} from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = {
    TicketCheck, Users, MapPinned, PlaneTakeoff,
    Car, Heart, Bus,
};

export default function Services() {
    const { services, contact } = siteData;

    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Halo 297 Transport, saya ingin tanya mengenai layanan yang tersedia.')}`;

    return (
        <section id="layanan" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Layanan Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Solusi Perjalanan Lengkap
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Dari tiket bus reguler hingga carter rombongan dan paket wisata — semua kebutuhan perjalanan Anda kami tangani dengan profesional.
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
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-amber-200 transition-all group hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-colors shadow-sm">
                                    <IconComponent size={24} className="text-gray-900" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm hover:text-amber-700 group/link"
                                >
                                    Tanya Harga
                                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* CTA bawah */}
                <div className="text-center">
                    <p className="text-gray-500 mb-4">Ada kebutuhan perjalanan khusus yang belum tercantum?</p>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                    >
                        Diskusikan dengan Kami
                        <ArrowRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
}
