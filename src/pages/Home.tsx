import { Link } from 'react-router-dom';
import { Shield, Wrench, Home as HomeIcon, Star, CheckCircle, ArrowRight, Phone, Paintbrush, Zap, Droplets, Fence, Trees } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { useInView } from '../hooks/useInView';

function SectionReveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

const SERVICES_PREVIEW = [
  { icon: <HomeIcon size={28} />, image: '/images/service-building.jpg', title: 'Building & Construction', desc: 'Full building contractor services from foundation to finish.' },
  { icon: <Paintbrush size={28} />, image: '/images/service-painting.jpg', title: 'Painting', desc: 'Interior & exterior painting with quality finishes.' },
  { icon: <Zap size={28} />, image: '/images/service-electrical.jpg', title: 'Electrical', desc: 'Installations, repairs and maintenance by qualified electricians.' },
  { icon: <Droplets size={28} />, image: '/images/service-plumbing.jpg', title: 'Plumbing', desc: 'Reliable plumbing solutions for homes and businesses.' },
  { icon: <Fence size={28} />, image: '/images/service-security.jpg', title: 'Security Services', desc: '24/7 commercial and residential guarding.' },
  { icon: <Trees size={28} />, image: '/images/service-tiling.jpg', title: 'Tiling & Ceilings', desc: 'Professional tiling and modern ceiling installations.' },
];

export default function Home() {
  return (
    <div className="page-enter">
      <HeroSlider />

      {/* Why choose us bar */}
      <div className="bg-stone-900 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Wrench size={20} />, label: 'Expert Craftsmen' },
              { icon: <Shield size={20} />, label: 'Trusted & Reliable' },
              { icon: <Star size={20} />, label: 'Quality Guaranteed' },
              { icon: <CheckCircle size={20} />, label: 'All-in-One Service' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-white">
                <span className="text-brand-400">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="section-tag">What We Do</span>
              <h2 className="section-heading">Complete Building & Maintenance Solutions</h2>
              <div className="gold-bar mx-auto" />
              <p className="text-stone-500 max-w-2xl mx-auto mt-4">
                From tiling and ceilings to electrical, plumbing, painting, security and landscaping – JB Holdings is your trusted one-stop contractor.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_PREVIEW.map((s, i) => (
              <SectionReveal key={s.title} delay={`delay-${(i % 3) + 1}00`}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 h-full group overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      {s.icon}
                    </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-gold">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to start your project?
            </h2>
            <p className="text-brand-100">Call or WhatsApp us today for a free quote. We respond fast.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+27728800379" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold rounded-lg hover:bg-stone-100 transition">
              <Phone size={16} /> 072 880 0379
            </a>
            <a href="https://wa.me/27728800379" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <img
              src="/images/service-ceilings.jpg"
              alt="JB Holdings bathroom transformation"
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
          </SectionReveal>
          <SectionReveal delay="delay-200">
            <span className="section-tag">About JB Holdings</span>
            <h2 className="section-heading">Your Trusted Local Hands</h2>
            <div className="gold-bar" />
            <p className="text-stone-600 leading-relaxed mb-4">
              JB Holdings is a multi-service building and maintenance company serving residential and commercial clients across South Africa. We pride ourselves on quality workmanship, reliability and clear communication.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Whether you need a full renovation, specialist trade work, or ongoing security and landscaping – we deliver excellence in every detail of our craft.
            </p>
            <ul className="space-y-2 mb-8">
              {['Fully insured & professional team', 'Competitive rates', 'Quality materials', 'On-time delivery'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone-700 text-sm">
                  <CheckCircle size={16} className="text-brand-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-gold">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
