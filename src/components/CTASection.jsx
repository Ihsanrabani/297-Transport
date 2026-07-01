import { MessageCircle, Phone } from 'lucide-react';
import siteData from '../data/siteData';

export default function CTASection() {
    const { cta, contact } = siteData;

    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(cta.whatsappMessage)}`;
    const phoneLink = `tel:${contact.phone.replace(/[\s-]/g, '')}`;

    return (
        <section className="py-20 bg-amber-400 relative overflow-hidden">
            {/* Dekorasi background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 w-96 h-96 bg-gray-900 rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-gray-900 rounded-full -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-900/10 rounded-full px-4 py-1.5 mb-6">
                    <span className="w-2 h-2 bg-gray-900 rounded-full animate-pulse" />
                    <span className="text-gray-900 text-sm font-medium">Konfirmasi Tiket Cepat</span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                    {cta.headline}
                </h2>

                {/* Sub headline */}
                <p className="text-gray-800 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    {cta.subheadline}
                </p>

                {/* Tombol CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        <MessageCircle size={20} />
                        {cta.buttonText}
                    </a>

                    <a
                        href={phoneLink}
                        className="inline-flex items-center justify-center gap-2.5 bg-white/30 hover:bg-white/50 text-gray-900 font-bold text-base px-8 py-4 rounded-xl border-2 border-gray-900/20 transition-all hover:-translate-y-0.5"
                    >
                        <Phone size={20} />
                        Hubungi via Telepon
                    </a>
                </div>

                {/* Jam operasional */}
                <p className="text-gray-800 text-sm mt-8">
                    Jam Operasional: <span className="font-semibold">{contact.operationalHours}</span>
                </p>

            </div>
        </section>
    );
}
