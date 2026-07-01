import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import siteData from '../data/siteData';

export default function Testimonials() {
    const { testimonials } = siteData;
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    // Tampilkan 1 di mobile, 2 di tablet+, 3 di desktop
    // Carousel dengan highlight center item
    const getVisible = () => {
        const total = testimonials.length;
        if (total <= 1) return [0];
        if (total === 2) return [current, (current + 1) % total];
        return [
            (current - 1 + total) % total,
            current,
            (current + 1) % total,
        ];
    };

    const visible = getVisible();

    return (
        <section id="testimoni" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Testimoni Klien
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Apa Kata Klien Kami
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Kepercayaan ribuan klien adalah bukti nyata komitmen kami dalam memberikan layanan terbaik.
                    </p>
                    <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto mt-4" />
                </div>

                {/* Carousel */}
                <div className="relative">

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {visible.map((idx, position) => {
                            const t = testimonials[idx];
                            const isCenter = position === 1 || (testimonials.length <= 1);
                            return (
                                <div
                                    key={t.id}
                                    className={`relative bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 ${isCenter
                                            ? 'border-amber-300 shadow-md scale-100 md:scale-105 z-10'
                                            : 'border-gray-100 opacity-70 hidden md:block'
                                        }`}
                                >
                                    {/* Quote icon */}
                                    <Quote size={32} className="text-amber-400 mb-4 opacity-60" />

                                    {/* Bintang */}
                                    <div className="flex gap-0.5 mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
                                            />
                                        ))}
                                    </div>

                                    {/* Pesan */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                                        &ldquo;{t.message}&rdquo;
                                    </p>

                                    {/* Profil */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                        <img
                                            src={t.photo}
                                            alt={t.name}
                                            className="w-11 h-11 rounded-full object-cover"
                                            loading="lazy"
                                        />
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                                            <div className="text-gray-500 text-xs">{t.position}</div>
                                            <div className="text-amber-600 text-xs font-medium">{t.company}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Tombol navigasi */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-amber-50 hover:border-amber-300 flex items-center justify-center transition-colors shadow-sm"
                            aria-label="Testimoni sebelumnya"
                        >
                            <ChevronLeft size={18} className="text-gray-600" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`rounded-full transition-all ${i === current ? 'w-6 h-2.5 bg-amber-400' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-amber-200'
                                        }`}
                                    aria-label={`Testimoni ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-amber-50 hover:border-amber-300 flex items-center justify-center transition-colors shadow-sm"
                            aria-label="Testimoni berikutnya"
                        >
                            <ChevronRight size={18} className="text-gray-600" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
