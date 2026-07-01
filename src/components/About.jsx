import { Link } from 'react-router-dom';
import {
    Wind, ShieldCheck, BadgeDollarSign, Clock,
    Headphones, MessageCircle, Bus, Star, Award,
    Users, CheckCircle, Heart
} from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = {
    Wind, ShieldCheck, BadgeDollarSign, Clock,
    Headphones, MessageCircle, Bus, Star, Award,
    Users, CheckCircle, Heart,
};

export default function About() {
    const { about, advantages } = siteData;

    return (
        <section id="tentang" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        {about.title}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {about.headline}
                    </h2>
                    <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto" />
                </div>

                {/* Konten: teks + gambar */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

                    {/* Paragraf */}
                    <div className="space-y-5">
                        {about.paragraphs.map((para, i) => (
                            <p key={i} className="text-gray-600 text-base leading-relaxed">
                                {para}
                            </p>
                        ))}

                        <Link
                            to="/layanan"
                            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 mt-2 group"
                        >
                            Lihat semua layanan kami
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Gambar placeholder */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={about.image}
                                alt="Tentang 297 Transport"
                                className="w-full h-80 object-cover"
                                loading="lazy"
                            />
                        </div>
                        {/* Badge floating */}
                        <div className="absolute -bottom-5 -left-5 bg-amber-400 rounded-2xl p-4 shadow-lg">
                            <div className="text-gray-900 font-bold text-2xl leading-none">10+</div>
                            <div className="text-gray-800 text-xs font-medium">Tahun Beroperasi</div>
                        </div>
                    </div>
                </div>

                {/* Keunggulan grid */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
                        Mengapa Penumpang Memilih Kami
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map((adv) => {
                            const IconComponent = iconMap[adv.icon] || Bus;
                            return (
                                <div
                                    key={adv.id}
                                    className="p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all group bg-gray-50 hover:bg-white"
                                >
                                    <div className="w-11 h-11 bg-amber-100 group-hover:bg-amber-400 rounded-xl flex items-center justify-center mb-4 transition-colors">
                                        <IconComponent size={22} className="text-amber-600 group-hover:text-gray-900 transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">{adv.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
