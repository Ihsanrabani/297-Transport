import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import siteData from '../data/siteData';

function Breadcrumb({ items }) {
    return (
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            {items.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight size={14} className="text-gray-300" />}
                    {item.href ? (
                        <Link to={item.href} className="hover:text-amber-600 transition-colors">{item.label}</Link>
                    ) : (
                        <span className="text-gray-900 font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}

export default function TestimonialsPage() {
    const { testimonials } = siteData;

    return (
        <>
            {/* Page Header */}
            <div className="bg-gray-900 pt-28 pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Beranda', href: '/' },
                        { label: 'Testimoni' },
                    ]} />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">Testimoni Penumpang</h1>
                    <p className="text-gray-400 max-w-xl">
                        Ribuan penumpang telah mempercayakan perjalanan mereka kepada kami. Inilah kisah mereka.
                    </p>
                </div>
            </div>

            {/* Carousel section */}
            <Testimonials />

            {/* Grid semua testimoni */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900">Semua Ulasan</h2>
                        <p className="text-gray-500 mt-2">Setiap cerita adalah bukti nyata kepercayaan pelanggan kami</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {testimonials.map(t => (
                            <div key={t.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all">
                                <Quote size={28} className="text-amber-400 mb-3 opacity-60" />

                                <div className="flex gap-0.5 mb-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={15}
                                            className={i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.message}&rdquo;</p>

                                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                    <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                                        <div className="text-gray-500 text-xs">{t.position}</div>
                                        <div className="text-amber-600 text-xs font-medium">{t.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rating summary */}
                    <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center border border-amber-100">
                        <div className="flex justify-center gap-1 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={28} className="text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <div className="text-5xl font-black text-gray-900 mb-1">5.0</div>
                        <div className="text-gray-600 font-medium">Rating rata-rata dari {testimonials.length * 100}+ ulasan penumpang</div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
