import { Globe, HeartPulse, Activity, Stethoscope, ShieldPlus } from 'lucide-react';

export default function HeroAnimation() {

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center mx-auto lg:ml-auto my-12 lg:my-0 lg:-mr-12 scale-[0.8] sm:scale-100">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-1 { animation: orbit-spin 20s linear infinite; }
        .animate-reverse-spin-1 { animation: orbit-spin-reverse 20s linear infinite; }
        .animate-spin-2 { animation: orbit-spin-reverse 25s linear infinite; }
        .animate-reverse-spin-2 { animation: orbit-spin 25s linear infinite; }
        .animate-spin-3 { animation: orbit-spin 15s linear infinite; }
        .animate-reverse-spin-3 { animation: orbit-spin-reverse 15s linear infinite; }
      `}} />

      {/* Central Globe glowing sphere */}
      <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#3A78C4] flex items-center justify-center shadow-[0_0_80px_rgba(74,144,226,0.6)] border-4 border-white/30">
        <Globe size={130} className="text-white/90" strokeWidth={1} />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full shadow-inner bg-black/5"></div>
        {/* Decorative dots on globe */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] opacity-80"></div>
      </div>

      {/* Orbit Rings (decorative) */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-[0.65] border-dashed pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-[0.90] pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.15] pointer-events-none border-dashed"></div>

      {/* Orbit 1 */}
      <div className="absolute inset-0 animate-spin-1 z-20 scale-[0.65]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 animate-reverse-spin-1 text-red-500">
          <HeartPulse size={30} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 animate-reverse-spin-1 text-blue-500">
          <Stethoscope size={30} strokeWidth={2.5} />
        </div>
      </div>

      {/* Orbit 2 */}
      <div className="absolute inset-0 animate-spin-2 z-20 scale-[0.90]">
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 animate-reverse-spin-2 text-green-500">
          <Activity size={26} strokeWidth={2.5} />
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 animate-reverse-spin-2 text-orange-500">
          <ShieldPlus size={26} strokeWidth={2.5} />
        </div>
      </div>
      
      {/* Orbit 3 (Wheelchair custom SVG) */}
      <div className="absolute inset-0 animate-spin-3 z-20 scale-[1.15]">
         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full shadow-xl shadow-primary/30 flex items-center justify-center border-4 border-white animate-reverse-spin-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="8" cy="16" r="4" />
             <path d="M12 16h3v-5h3" />
             <circle cx="16" cy="5" r="2" />
             <path d="M16 7v4" />
           </svg>
         </div>
         {/* Crutch/Walking Aid SVG */}
         <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 animate-reverse-spin-3 text-secondary">
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M7 2h10" />
             <path d="M12 2v20" />
             <path d="M9 10h6" />
           </svg>
         </div>
      </div>
    </div>
  );
}
