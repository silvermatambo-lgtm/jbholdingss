import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: 'What services does JB Holdings offer?', a: 'We offer building & construction, tiling, ceilings, electrical, plumbing, painting, security guarding, gardening & landscaping, and general maintenance.' },
  { q: 'Do you work on both residential and commercial projects?', a: 'Yes. We serve homeowners, estates, businesses and commercial properties across South Africa.' },
  { q: 'How do I get a quote?', a: 'Call or WhatsApp 072 880 0379, email info@jbholdings.co.za, or use the contact form on our website. We respond quickly with a clear quote.' },
  { q: 'Are your electricians and plumbers qualified?', a: 'Yes. Our tradespeople are experienced and work to high professional standards with safety as a priority.' },
  { q: 'Do you provide 24/7 security?', a: 'Yes. We offer commercial and residential guarding services with trained personnel for day and night coverage.' },
  { q: 'What areas do you cover?', a: 'We primarily serve clients in and around major centres in South Africa. Contact us with your location for confirmation.' },
  { q: 'Do you supply materials?', a: 'We can source quality materials or work with client-supplied materials depending on the project. Discuss this when requesting a quote.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary by scope. We provide clear schedules after site assessment and stick to agreed timelines.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="page-enter pt-24">
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="border border-stone-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-stone-800 hover:bg-stone-50 transition"
              >
                {f.q}
                <ChevronDown size={18} className={`text-brand-500 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-stone-600 text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
