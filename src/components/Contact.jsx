import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import siteData from '../data/siteData';

export default function Contact() {
    const { contact, contactForm } = siteData;

    const [form, setForm] = useState({ name: '', phone: '', route: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const routeInfo = form.route ? `\nRute/Tujuan: ${form.route}` : '';
        const text = `Halo 297 Transport,\n\nNama: ${form.name}\nNo. HP: ${form.phone}${routeInfo}\n\nPesan:\n${form.message}`;

        if (contactForm.action === 'whatsapp') {
            window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
        } else {
            const subject = encodeURIComponent(contactForm.emailSubject);
            const body = encodeURIComponent(text);
            window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`);
        }
    };

    const contactItems = [
        { icon: MapPin, label: 'Alamat Kantor', value: contact.address, link: null },
        { icon: Phone, label: 'Telepon', value: contact.phone, link: `tel:${contact.phone.replace(/[\s-]/g, '')}` },
        { icon: MessageCircle, label: 'WhatsApp', value: contact.phone, link: `https://wa.me/${contact.whatsapp}` },
        { icon: Mail, label: 'Email', value: contact.email, link: `mailto:${contact.email}` },
        { icon: Clock, label: 'Jam Operasional', value: contact.operationalHours, link: null },
    ];

    return (
        <section id="kontak" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Hubungi Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Kami Siap Membantu Anda
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Tanyakan harga tiket, cek ketersediaan kursi, atau diskusikan kebutuhan carter bus Anda.
                    </p>
                    <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto mt-4" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Info kontak */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-6">Informasi Kontak</h3>

                        <div className="space-y-3 mb-8">
                            {contactItems.map((item) => {
                                const IconComponent = item.icon;
                                const inner = (
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors">
                                        <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center shrink-0">
                                            <IconComponent size={18} className="text-gray-900" />
                                        </div>
                                        <div>
                                            <div className="text-gray-500 text-xs font-medium mb-0.5">{item.label}</div>
                                            <div className="text-gray-900 font-semibold text-sm">{item.value}</div>
                                        </div>
                                    </div>
                                );

                                return item.link ? (
                                    <a
                                        key={item.label}
                                        href={item.link}
                                        target={item.link.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                    >
                                        {inner}
                                    </a>
                                ) : (
                                    <div key={item.label}>{inner}</div>
                                );
                            })}
                        </div>

                        {/* Peta */}
                        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-56">
                            {contact.mapEmbedUrl ? (
                                <iframe
                                    src={contact.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokasi 297 Transport"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 gap-2">
                                    <MapPin size={20} />
                                    <span className="text-sm">Peta belum dikonfigurasi</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Form kontak */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-6">Kirim Pesan</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Masukkan nama lengkap Anda"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Nomor WhatsApp <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Contoh: 08123456789"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="route" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Rute / Tujuan Perjalanan
                                </label>
                                <input
                                    type="text"
                                    id="route"
                                    name="route"
                                    value={form.route}
                                    onChange={handleChange}
                                    placeholder="Contoh: Jakarta → Yogyakarta"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Pesan / Pertanyaan <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Contoh: Saya ingin pesan 2 tiket untuk tanggal 25 Juli, kelas eksekutif. Apakah masih ada kursi?"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                                <Send size={18} />
                                Kirim via WhatsApp
                            </button>

                            <p className="text-gray-400 text-xs text-center">
                                Pesan dikirim ke WhatsApp kami. Tim kami membalas dalam waktu singkat.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
