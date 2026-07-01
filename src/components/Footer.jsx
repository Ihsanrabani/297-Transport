import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, MessageCircle } from 'lucide-react';
import siteData from '../data/siteData';

// SVG inline untuk icon sosial media
const IconInstagram = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
);
const IconFacebook = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const IconLinkedin = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);
const IconYoutube = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
);

export default function Footer() {
    const { company, contact, navigation, socialMedia, cta } = siteData;
    const year = new Date().getFullYear();
    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(cta.whatsappMessage)}`;

    const socialLinks = [
        { Icon: IconInstagram, href: socialMedia.instagram, label: 'Instagram' },
        { Icon: IconFacebook, href: socialMedia.facebook, label: 'Facebook' },
        { Icon: IconLinkedin, href: socialMedia.linkedin, label: 'LinkedIn' },
        { Icon: IconYoutube, href: socialMedia.youtube, label: 'YouTube' },
    ].filter(s => s.href && s.href !== '#');

    return (
        <footer className="bg-gray-900 text-gray-400">

            {/* CTA strip */}
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-300 text-sm font-medium">
                        🚌 Pesan tiket atau carter bus sekarang — konfirmasi cepat via WhatsApp
                    </p>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm px-4 py-2 rounded-xl transition-colors"
                    >
                        <MessageCircle size={15} />
                        Hubungi via WhatsApp
                    </a>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Kolom 1: Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            {company.logo ? (
                                <img src={company.logo} alt={company.shortName} className="h-14 w-auto object-contain" />
                            ) : (
                                <div className="font-black text-white text-2xl">297 Transport</div>
                            )}
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Agen travel bus terpercaya untuk perjalanan antar kota, antar provinsi, dan wisata group. Melayani sejak {company.yearFounded} dengan armada modern dan pengemudi profesional.
                        </p>

                        {/* Sosial media */}
                        {socialLinks.length > 0 && (
                            <div>
                                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Ikuti Kami</p>
                                <div className="flex gap-2.5">
                                    {socialLinks.map(({ Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="w-9 h-9 bg-gray-800 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-all group border border-gray-700 hover:border-amber-400"
                                        >
                                            <span className="text-gray-400 group-hover:text-gray-900 transition-colors">
                                                <Icon />
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Kolom 2: Menu */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Menu</h4>
                        <ul className="space-y-2.5">
                            {navigation.map(item => (
                                <li key={item.href}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-gray-600 group-hover:bg-amber-400 rounded-full transition-colors" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom 3: Kontak */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={15} className="text-amber-400 mt-0.5 shrink-0" />
                                <span className="text-sm leading-relaxed">{contact.address}</span>
                            </li>
                            <li>
                                <a href={`tel:${contact.phone.replace(/[\s-]/g, '')}`}
                                    className="flex items-center gap-3 hover:text-amber-400 transition-colors text-sm">
                                    <Phone size={15} className="text-amber-400 shrink-0" />
                                    {contact.phone}
                                </a>
                            </li>
                            <li>
                                <a href={waLink} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-amber-400 transition-colors text-sm">
                                    <MessageCircle size={15} className="text-amber-400 shrink-0" />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${contact.email}`}
                                    className="flex items-center gap-3 hover:text-amber-400 transition-colors text-sm">
                                    <Mail size={15} className="text-amber-400 shrink-0" />
                                    {contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-xs text-center sm:text-left">
                        &copy; {year} {company.name}. Semua hak cipta dilindungi.
                    </p>
                    <p className="text-gray-600 text-xs flex items-center gap-1">
                        Dibuat dengan <Heart size={12} className="text-amber-400 fill-amber-400 mx-0.5" /> untuk penumpang setia kami
                    </p>
                </div>
            </div>

        </footer>
    );
}
