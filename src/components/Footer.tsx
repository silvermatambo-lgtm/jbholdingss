import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, Clock, Facebook, Instagram } from 'lucide-react';

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg width="52" height="52" viewBox="0 0 120 100">
                <path d="M20 45 L60 10 L100 45" fill="none" stroke="#E85D04" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="60" y="72" textAnchor="middle" fill="#E85D04" fontSize="42" fontWeight="700" fontFamily="Inter, sans-serif">jb</text>
              </svg>
              <div>
                <p className="text-white font-bold text-base leading-tight">jbholdings</p>
                <p className="text-brand-400 text-[10px] tracking-widest uppercase">Building & Maintenance</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Built with trust. Delivering excellence. Professional building, maintenance, electrical, plumbing, painting, security and landscaping services across South Africa.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" aria-label="Facebook" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-brand-500 flex items-center justify-center transition-colors">
                <Facebook size={15} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-brand-500 flex items-center justify-center transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://wa.me/27728800379" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <WA_ICON />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-stone-700">Quick Links</h4>
            <ul className="space-y-2">
              {[['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Gallery', '/gallery'], ['FAQ', '/faq'], ['Testimonials', '/testimonials'], ['Contact', '/contact']].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-stone-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:w-2 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-stone-700">Our Services</h4>
            <ul className="space-y-2">
              {['Building & Construction', 'Tiling', 'Ceilings', 'Electrical', 'Plumbing', 'Painting', 'Security Services', 'Gardening & Landscaping'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-stone-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:w-2 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-stone-700">Contact Us</h4>
            <ul className="space-y-3 mb-5">
              <li>
                <a href="tel:+27728800379" className="flex items-start gap-3 text-stone-400 hover:text-brand-400 text-sm transition-colors group">
                  <Phone size={15} className="mt-0.5 shrink-0 text-brand-500" />
                  072 880 0379
                </a>
              </li>
              <li>
                <a href="mailto:info@jbholdings.co.za" className="flex items-start gap-3 text-stone-400 hover:text-brand-400 text-sm transition-colors break-all">
                  <Mail size={15} className="mt-0.5 shrink-0 text-brand-500" />
                  info@jbholdings.co.za
                </a>
              </li>
              <li>
                <a href="https://www.jbholdings.co.za" className="flex items-start gap-3 text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  <Globe size={15} className="mt-0.5 shrink-0 text-brand-500" />
                  www.jbholdings.co.za
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <Clock size={15} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <p>Mon–Fri: 7:00am – 5:00pm</p>
                    <p>Sat: 8:00am – 1:00pm</p>
                  </div>
                </div>
              </li>
            </ul>
            <a
              href="https://wa.me/27728800379?text=Hi%20JB%20Holdings%2C%20I%20would%20like%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <WA_ICON />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} JB Holdings. All rights reserved.</p>
          <p>
            Website by{' '}
            <a href="https://www.webdevpro.co.za" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
              WebDevPro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
