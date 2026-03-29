import { ShieldCheck, Train, Award, Users } from 'lucide-react';

export default function AboutAnimation() {
  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center lg:ml-auto">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-20px) rotate(-4deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .anim-float-1 { animation: float-1 6s ease-in-out infinite; }
        .anim-float-2 { animation: float-2 7s ease-in-out infinite; }
        .anim-float-3 { animation: float-3 5s ease-in-out infinite; }
        .anim-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      `}} />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/30 rounded-full blur-3xl anim-pulse-glow"></div>

      {/* Center Card */}
      <div className="absolute z-30 anim-float-3 bg-white/95 backdrop-blur-md border border-gray-100 p-6 rounded-[2rem] shadow-2xl w-64 text-center">
        <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl mx-auto flex items-center justify-center mb-5 shadow-inner">
          <Train size={32} strokeWidth={2.5} />
        </div>
        <h3 className="font-extrabold text-foreground text-xl mb-1">Railway Suppliers</h3>
        <p className="text-primary font-bold text-sm bg-primary/10 inline-block px-3 py-1 rounded-full mt-2">20+ Years Trust</p>
      </div>

      {/* Left Card */}
      <div className="absolute z-20 left-0 sm:left-4 top-12 anim-float-1 bg-gradient-to-br from-primary to-blue-600 p-6 rounded-[2rem] shadow-xl w-48 text-white origin-bottom-right">
        <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
          <ShieldCheck size={24} className="text-white" />
        </div>
        <h3 className="font-bold text-lg mb-1 leading-tight">Premium<br/>Quality</h3>
        <p className="text-blue-100 text-xs mt-2 opacity-90 leading-relaxed">Only trusted manufacturers</p>
      </div>

      {/* Right Card */}
      <div className="absolute z-20 right-0 sm:right-4 bottom-12 anim-float-2 bg-gradient-to-br from-secondary to-green-600 p-6 rounded-[2rem] shadow-xl w-48 text-white origin-top-left">
        <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
          <Award size={24} className="text-white" />
        </div>
        <h3 className="font-bold text-lg mb-1 leading-tight">Authorized<br/>Dealers</h3>
        <p className="text-green-100 text-xs mt-2 opacity-90 leading-relaxed">Wheelchair India &amp; Godrej</p>
      </div>
      
      {/* Floating decorative nodes */}
      <div className="absolute top-8 right-16 w-12 h-12 rounded-2xl bg-orange-100/80 backdrop-blur border border-orange-200 flex items-center justify-center text-orange-500 anim-float-3 shadow-lg" style={{ animationDelay: '1s' }}>
        <Users size={20} />
      </div>
      <div className="absolute bottom-16 left-12 w-8 h-8 rounded-full bg-blue-100 border border-blue-200 anim-float-2 shadow-md" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-4 w-4 h-4 rounded-full bg-green-100 border border-green-200 anim-float-1" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
}
