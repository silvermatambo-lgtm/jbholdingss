import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: '/images/hero-building.jpg',
    tag: 'Building & Construction',
    heading: 'Building & Construction',
    highlight: 'Built With Care',
    sub: 'Professional building, renovation and construction services for homes and businesses across South Africa.',
  },
  {
    image: '/images/hero-electrical.jpg',
    tag: 'Electrical Services',
    heading: 'Electrical Installation',
    highlight: 'Safe & Reliable',
    sub: 'Qualified electricians for installations, repairs, DB boards and full electrical compliance.',
  },
  {
    image: '/images/hero-painting.jpg',
    tag: 'Painting & Finishing',
    heading: 'Painting Services',
    highlight: 'Quality Finishes',
    sub: 'Interior and exterior painting with premium paints and professional surface preparation.',
  },
]

const TYPING_INTERVAL = 70;
const SLIDE_DURATION = 6500;

function useTypingEffect(text: string, active: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) { setDisplayed(''); setDone(false); return; }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, TYPING_INTERVAL);
    return () => clearInterval(id);
  }, [text, active]);

  return { displayed, done };
}

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  const goTo = useCallback((idx: number) => {
    setAnimating(false);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(true);
    }, 50);
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];
  const { displayed, done } = useTypingEffect(slide.highlight, animating);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.image} alt={s.heading} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-3 py-1 bg-brand-500/90 text-white text-xs font-bold uppercase tracking-widest rounded mb-4">
            {slide.tag}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            {slide.heading}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-400 mb-6 min-h-[1.2em]">
            {displayed}
            <span className={`typing-cursor ${done ? 'opacity-0' : ''}`} />
          </h2>
          <p className="text-stone-200 text-lg mb-8 max-w-lg leading-relaxed">{slide.sub}</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+27728800379" className="btn-gold">
              <Phone size={16} /> Call 072 880 0379
            </a>
            <a
              href="https://wa.me/27728800379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <WaIcon /> WhatsApp
            </a>
            <Link to="/contact" className="btn-outline-gold">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-500 text-white flex items-center justify-center transition-colors backdrop-blur-sm">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-500 text-white flex items-center justify-center transition-colors backdrop-blur-sm">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-500' : 'w-2 bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </section>
  );
}
