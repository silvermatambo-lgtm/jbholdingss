import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
      {children}
    </div>
  );
}

const TESTIMONIALS = [
  { name: 'Thabo M.', role: 'Homeowner, Johannesburg', text: 'JB Holdings did our bathroom renovation from plumbing to tiling and painting. Excellent workmanship and they finished on time. Highly recommended.' },
  { name: 'Sarah K.', role: 'Business Owner', text: 'We use their security team for our commercial premises. Professional, reliable and always on duty. Great peace of mind.' },
  { name: 'Johan V.', role: 'Property Manager', text: 'From electrical work to ceiling repairs and painting – they handle everything. One contractor for multiple needs is a big plus.' },
  { name: 'Lindiwe N.', role: 'Homeowner', text: 'The team installed new ceilings and painted our entire house. Clean, respectful and the quality is outstanding.' },
  { name: 'David R.', role: 'Estate Manager', text: 'Gardening and landscaping services have transformed our common areas. Consistent and professional service every month.' },
  { name: 'Priya S.', role: 'Homeowner', text: 'Quick response for a plumbing emergency and fair pricing. Will definitely use JB Holdings again.' },
];

export default function Testimonials() {
  return (
    <div className="page-enter pt-24">
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>What Our Clients Say</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <Quote size={24} className="text-brand-300 mb-3" />
                <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-500 text-brand-500" />)}
                </div>
                <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                <p className="text-stone-400 text-xs">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
