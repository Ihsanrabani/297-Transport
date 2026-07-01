import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
    Menu, X, Phone, Home, Info, Briefcase,
    MapPin, Star, ChevronDown, MessageCircle
} from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = { Home, Info, Briefcase, MapPin, Star, Phone };

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const { company, navigation, contact, cta } = siteData;
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Tutup mobile menu saat route berubah
    useEffect(() => {
        setIsOpen(false);
        setShowServicesMenu(false);
    }, [location.pathname]);

    const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(cta.whatsappMessage)}`;

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome
                ? 'bg-white shadow-lg'
                : 'bg-transparent'
            }`}>

            {/* Top bar — hanya tampil di desktop saat bukan home atau saat scroll */}
            <div className={`hidden md:block transition-all duration-300 overflow-hidden ${scrolled || !isHome ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
                }`}>
                <div className="bg-amber-400">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
                        <span className="text-gray-900 text-xs font-medium">
                            📞 Buka setiap hari — {contact.operationalHours}
                        </span>
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-900">
                            <a href={`tel:${contact.phone.replace(/[\s-]/g, '')}`} className="flex items-center gap-1 hover:underline">
                                <Phone size={11} /> {contact.phone}
                            </a>
                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                                <MessageCircle size={11} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className={`transition-all duration-300 ${scrolled || !isHome ? 'border-b border-gray-100' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 shrink-0">
                            {company.logo ? (
                                <img
                                    src={company.logo}
                                    alt={company.shortName}
                                    className="h-11 w-auto object-contain drop-shadow-sm"
                                />
                            ) : (
                                <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center font-black text-gray-900 text-lg">
                                    297
                                </div>
                            )}
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-0.5">
                            {navigation.map(item => {
                                const IconComp = iconMap[item.icon];

                                // Dropdown khusus "Layanan"
                                if (item.label === 'Layanan') {
                                    return (
                                        <div
                                            key={item.href}
                                            className="relative"
                                            onMouseEnter={() => setShowServicesMenu(true)}
                                            onMouseLeave={() => setShowServicesMenu(false)}
                                        >
                                            <NavLink
                                                to={item.href}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${isActive
                                                        ? 'text-amber-600 bg-amber-50'
                                                        : scrolled || !isHome
                                                            ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                                                            : 'text-white hover:text-amber-300 hover:bg-white/10'
                                                    }`
                                                }
                                            >
                                                {IconComp && <IconComp size={15} />}
                                                {item.label}
                                                <ChevronDown size={13} className={`transition-transform ${showServicesMenu ? 'rotate-180' : ''}`} />
                                            </NavLink>

                                            {/* Dropdown panel */}
                                            <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${showServicesMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                                                }`}>
                                                {siteData.services.map(s => (
                                                    <Link
                                                        key={s.id}
                                                        to={`/layanan#service-${s.id}`}
                                                        className="flex items-start gap-3 px-4 py-2.5 hover:bg-amber-50 transition-colors group"
                                                    >
                                                        <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors mt-0.5">
                                                            <Briefcase size={13} className="text-amber-700 group-hover:text-gray-900" />
                                                        </div>
                                                        <div>
                                                            <div className="text-gray-900 text-xs font-semibold leading-tight">{s.title}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <NavLink
                                        key={item.href}
                                        to={item.href}
                                        end={item.href === '/'}
                                        className={({ isActive }) =>
                                            `flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${isActive
                                                ? 'text-amber-600 bg-amber-50'
                                                : scrolled || !isHome
                                                    ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                                                    : 'text-white hover:text-amber-300 hover:bg-white/10'
                                            }`
                                        }
                                    >
                                        {IconComp && <IconComp size={15} />}
                                        {item.label}
                                    </NavLink>
                                );
                            })}
                        </div>

                        {/* CTA Desktop */}
                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href={`tel:${contact.phone.replace(/[\s-]/g, '')}`}
                                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${scrolled || !isHome ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                                    }`}
                            >
                                <Phone size={15} />
                                {contact.phone}
                            </a>
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                                <MessageCircle size={16} />
                                Pesan Tiket
                            </a>
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 rounded-xl transition-colors ${scrolled || !isHome
                                    ? 'text-gray-700 hover:bg-amber-50'
                                    : 'text-white hover:bg-white/10'
                                }`}
                            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-white border-t border-gray-100 px-4 pt-3 pb-5 space-y-1 shadow-xl">

                    {/* Nav links */}
                    {navigation.map(item => {
                        const IconComp = iconMap[item.icon];
                        return (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                end={item.href === '/'}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive
                                        ? 'text-amber-600 bg-amber-50'
                                        : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                                    }`
                                }
                            >
                                {IconComp && (
                                    <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <IconComp size={15} />
                                    </div>
                                )}
                                {item.label}
                            </NavLink>
                        );
                    })}

                    {/* Divider */}
                    <div className="border-t border-gray-100 my-2" />

                    {/* Kontak info */}
                    <a href={`tel:${contact.phone.replace(/[\s-]/g, '')}`}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50">
                        <Phone size={15} className="text-amber-500" />
                        {contact.phone}
                    </a>

                    {/* CTA */}
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm px-4 py-3 rounded-xl transition-colors mt-2"
                    >
                        <MessageCircle size={17} />
                        Pesan Tiket via WhatsApp
                    </a>
                </div>
            </div>
        </nav>
    );
}
