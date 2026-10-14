import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-900 transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="mb-6 animate-float flex flex-col items-center" aria-label="JB Holdings logo">
        <svg width="112" height="92" viewBox="0 0 120 100" role="img" aria-label="JB Holdings">
          <path d="M20 45 L60 10 L100 45" fill="none" stroke="#E85D04" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="60" y="72" textAnchor="middle" fill="#E85D04" fontSize="42" fontWeight="700" fontFamily="Inter, sans-serif">jb</text>
        </svg>
        <span className="text-white font-bold tracking-tight text-lg">jb<span className="text-brand-500">holdings</span></span>
        <span className="text-brand-400 text-[10px] tracking-widest uppercase font-medium">Building &amp; Maintenance</span>
      </div>
      <div className="w-48 h-1 bg-stone-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-500 rounded-full transition-all duration-[1800ms] ease-out"
          style={{ width: '100%' }}
        />
      </div>
      <p className="mt-4 text-stone-400 text-xs tracking-widest uppercase font-medium">
        Loading Premium Experience
      </p>
    </div>
  );
}
