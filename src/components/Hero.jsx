import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Bus, ChevronDown } from 'lucide-react';
import siteData from '../data/siteData';

export default function Hero() {
    const { company, contact, cta, stats } = siteData;
    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(cta.whatsappMessage)}`;

    return (
        <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/40" />

            {/* Bus dekoratif kanan */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block pointer-events-none">
                <Bus size={560} className="text-amber-400" />
            </div>

            {/* Konten */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
                <div className="max-w-3xl">

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                        {company.tagline}
                    </h1>

                    {/* Sub headline */}
                    <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                        {company.subTagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-base px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5"
                        >
                            <MessageCircle size={20} />
                            Pesan Tiket Sekarang
                        </a>
                        <Link
                            to="/armada"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-3.5 rounded-xl border border-white/30 transition-all hover:-translate-y-0.5"
                        >
                            Lihat Armada Kami
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
                        {stats.map(s => (
                            <div key={s.id}>
                                <div className="text-2xl font-bold text-amber-400">{s.value}</div>
                                <div className="text-gray-400 text-sm">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce pointer-events-none">
                <ChevronDown size={28} />
            </div>
        </section>
    );
}
