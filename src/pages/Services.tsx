import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

const SERVICES = [
  {
    title: 'Building & Construction',
    img: '/images/service-building.jpg',
    desc: 'Complete building contractor services – from new builds and extensions to renovations. We manage projects with precision, quality materials and skilled artisans.',
    features: ['New builds & extensions', 'Structural work', 'Project management', 'Quality finishes'],
  },
  {
    title: 'Tiling',
    img: '/images/service-tiling.jpg',
    desc: 'Professional tiling for floors, walls, bathrooms and kitchens. Precise cuts, perfect levels and lasting results with premium tiles and adhesives.',
    features: ['Floor & wall tiling', 'Bathroom & wet areas', 'Outdoor tiling', 'Grouting & sealing'],
  },
  {
    title: 'Ceilings',
    img: '/images/service-ceilings.jpg',
    desc: 'Modern ceiling installations including gypsum, suspended and decorative ceilings. Clean finishes that elevate any room.',
    features: ['Gypsum ceilings', 'Suspended ceilings', 'Cornices & bulkheads', 'Insulation options'],
  },
  {
    title: 'Electrical',
    img: '/images/service-electrical.jpg',
    desc: 'Qualified electricians for installations, repairs, DB board upgrades, lighting and full electrical compliance. Safety first, always.',
    features: ['New installations', 'DB board upgrades', 'Lighting design', 'Fault finding & repairs'],
  },
  {
    title: 'Plumbing',
    img: '/images/service-plumbing.jpg',
    desc: 'Reliable plumbing for residential and commercial properties – leaks, installations, geyser work, drainage and full bathroom plumbing.',
    features: ['Leak detection & repair', 'Geyser installation', 'Bathroom plumbing', 'Drainage solutions'],
  },
  {
    title: 'Painting',
    img: '/images/service-painting.jpg',
    desc: 'Interior and exterior painting with premium paints. Surface preparation, neat edges and durable finishes that protect and beautify.',
    features: ['Interior painting', 'Exterior painting', 'Surface preparation', 'Waterproofing'],
  },
  {
    title: 'Security Services',
    img: '/images/service-security.jpg',
    desc: 'Professional commercial and residential guarding. Trained security personnel providing 24/7 protection for properties, sites and businesses.',
    features: ['Commercial guarding', 'Residential security', '24/7 coverage', 'Site protection'],
  },
  {
    title: 'Gardening & Landscaping',
    img: '/images/service-landscaping.jpg',
    desc: 'Create and maintain beautiful outdoor spaces. Lawn care, planting, garden design and ongoing maintenance for homes and estates.',
    features: ['Garden design', 'Lawn maintenance', 'Planting & hardscaping', 'Irrigation basics'],
  },
];

export default function Services() {
  return (
    <div className="page-enter pt-24">
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Complete Solutions Under One Roof
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto mt-4">
            Tiling • Ceilings • Electrical • Plumbing • Painting • Security • Building • Gardening
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid md:grid-cols-2 gap-10 items-center`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <img src={s.img} alt={s.title} className="rounded-2xl shadow-lg w-full h-72 object-cover" />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{s.title}</h2>
                  <div className="gold-bar" />
                  <p className="text-stone-600 leading-relaxed mb-5">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-stone-700">
                        <CheckCircle size={15} className="text-brand-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-gold">
                    Request Quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
