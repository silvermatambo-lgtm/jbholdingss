import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="page-enter pt-24">
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Built With Trust. Delivering Excellence.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="/images/hero-building.jpg" alt="JB Holdings team" className="rounded-2xl shadow-xl w-full h-96 object-cover" />
          </Reveal>
          <Reveal delay="delay-200">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-heading">Your Local Multi-Service Contractor</h2>
            <div className="gold-bar" />
            <p className="text-stone-600 leading-relaxed mb-4">
              JB Holdings is a South African building and maintenance company offering a full range of services under one roof. From tiling, ceilings and painting to electrical, plumbing, security guarding and landscaping – we deliver professional results every time.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              We believe in honest communication, fair pricing and workmanship that stands the test of time. Whether you are a homeowner or a commercial property manager, you can count on us.
            </p>
            <ul className="space-y-3">
              {['Multi-trade capability', 'Residential & commercial', 'Quality materials & tools', 'Reliable project timelines'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone-700">
                  <CheckCircle size={18} className="text-brand-500" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Target size={32} />, title: 'Our Mission', text: 'To deliver reliable, high-quality building and maintenance services that our clients can trust completely.' },
              { icon: <Users size={32} />, title: 'Our Team', text: 'Skilled, trained and professional tradespeople and security personnel who take pride in their work.' },
              { icon: <Award size={32} />, title: 'Our Promise', text: 'Clear communication, competitive pricing and excellence in every detail of the craft.' },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="text-brand-500 mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="font-bold text-lg text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
