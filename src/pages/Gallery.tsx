import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const IMAGES = [
  { src: '/images/hero-building.jpg', cat: 'Building', title: 'Construction Work' },
  { src: '/images/service-ceilings.jpg', cat: 'Ceilings', title: 'Ceiling Installation' },
  { src: '/images/service-electrical.jpg', cat: 'Electrical', title: 'Electrical Work' },
  { src: '/images/service-security.jpg', cat: 'Security', title: 'Professional Guarding' },
  { src: '/images/service-painting.jpg', cat: 'Painting', title: 'Professional Painting' },
  { src: '/images/service-tiling.jpg', cat: 'Tiling', title: 'Tiling Project' },
  { src: '/images/service-plumbing.jpg', cat: 'Plumbing', title: 'Plumbing Services' },
  { src: '/images/service-landscaping.jpg', cat: 'Gardening', title: 'Landscaping & Gardens' },
  { src: '/images/hero-ceiling.jpg', cat: 'Ceilings', title: 'Modern Ceiling Finish' },
];

const CATS = ['All', ...Array.from(new Set(IMAGES.map((i) => i.cat)))];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? 'animate-scale-in' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof IMAGES[0] | null>(null);

  const filtered = filter === 'All' ? IMAGES : IMAGES.filter((i) => i.cat === filter);

  return (
    <div className="page-enter pt-24">
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/hero-building.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-brand-400">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Project Gallery</h1>
          <p className="text-stone-300 max-w-xl mx-auto">Realistic work in progress by our skilled South African team across all services.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === c ? 'bg-brand-500 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img) => (
              <Reveal key={img.src + img.title}>
                <button
                  onClick={() => setLightbox(img)}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-200 w-full"
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm font-medium">{img.title}</p>
                    <p className="text-brand-300 text-xs">{img.cat}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-brand-400" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={lightbox.src} alt={lightbox.title} className="max-h-[90vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
