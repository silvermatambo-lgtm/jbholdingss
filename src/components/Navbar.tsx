import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome
            ? 'bg-stone-900/98 shadow-xl backdrop-blur-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg width="48" height="48" viewBox="0 0 120 100" className="transition-transform duration-300 group-hover:scale-105">
                <path d="M20 45 L60 10 L100 45" fill="none" stroke="#E85D04" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="60" y="72" textAnchor="middle" fill="#E85D04" fontSize="42" fontWeight="700" fontFamily="Inter, sans-serif">jb</text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight tracking-tight">
                jb<span className="text-brand-500">holdings</span>
              </p>
              <p className="text-brand-400 text-[10px] tracking-widest uppercase font-medium">
                Building & Maintenance
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === link.to
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-stone-200 hover:text-brand-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+27728800379"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-brand-400 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-stone-900 shadow-2xl flex flex-col transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-700">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 120 100">
                <path d="M20 45 L60 10 L100 45" fill="none" stroke="#E85D04" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="60" y="72" textAnchor="middle" fill="#E85D04" fontSize="42" fontWeight="700" fontFamily="Inter, sans-serif">jb</text>
              </svg>
              <div>
                <p className="text-white font-bold text-sm">jbholdings</p>
                <p className="text-brand-400 text-[10px] tracking-widest uppercase">Building & Maintenance</p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-4">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                style={{ animationDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                className={`flex items-center px-4 py-3 rounded-xl mb-1 text-base font-medium transition-all duration-200 ${
                  pathname === link.to
                    ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20'
                    : 'text-stone-200 hover:bg-stone-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-stone-700">
            <a
              href="https://wa.me/27728800379"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
