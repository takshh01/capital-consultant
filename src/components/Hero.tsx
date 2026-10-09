import React from 'react';
import { ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER, BUSINESS_PHONE_DISPLAY } from '../utils/whatsapp';
import heroFluidWavesImg from '../assets/images/hero_fluid_waves_1791353920161.jpg';

interface HeroProps {
  onApplyClick: () => void;
  onEmiClick: () => void;
  onOpenCallbackModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onApplyClick,
  onEmiClick,
  onOpenCallbackModal
}) => {
  return (
    <section className="relative overflow-hidden bg-[#050607] text-white min-h-[92vh] flex flex-col justify-between pt-16 sm:pt-24 pb-12 sm:pb-16">
      {/* Background Graphic: Luxury Silk Undulating Emerald Fluid Smoke Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={heroFluidWavesImg}
          alt="Dark fluid silk background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right-top opacity-75 sm:opacity-85 mix-blend-screen scale-105"
        />
        {/* Cinematic gradient overlays for text contrast and seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/85 to-transparent w-full lg:w-4/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(5,6,7,0.9)_0%,transparent_70%)]" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <div className="max-w-3xl text-left pt-6 sm:pt-10">
          
          {/* Top Kicker Pill Badge */}
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-xs font-medium text-zinc-300 transition-all backdrop-blur-md mb-6 sm:mb-8 group cursor-pointer"
          >
            <span>Zero Advance Fee · Fast-Track Loan Approvals</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
          </button>

          {/* Primary Display Headline matching reference screenshot */}
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-white leading-[1.06] text-balance mb-6">
            Empower Your Business Finances.<br />
            <span className="text-white">simplify your futur.</span>
          </h1>

          {/* Clean Subtitle Paragraph */}
          <p className="text-base sm:text-lg lg:text-[19px] text-zinc-400 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
            Take control of your funding with smart credit evaluation, direct banking consortium access, and fast-track loan sanctions — all in one powerful financial consultancy platform.
          </p>

          {/* Action Pill Buttons matching reference screenshot */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {/* White Solid Pill Button */}
            <button
              onClick={onApplyClick}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-[#080808] font-bold text-sm transition-all shadow-xl shadow-white/5 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get Started
            </button>

            {/* Dark Frosted Glass Pill Button */}
            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onEmiClick();
              }}
              className="px-8 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/20 font-medium text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              See How It Works
            </button>

            {/* WhatsApp Direct Action */}
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Consultancy, I would like to consult with your senior advisory team regarding my loan requirement.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-300 hover:text-emerald-200 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Talk on WhatsApp</span>
            </a>

            {/* Quick Callback Trigger */}
            <button
              onClick={onOpenCallbackModal}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Request Callback</span>
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Institutional Logo Cloud matching the reference layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8 border-t border-white/[0.08]">
        <div className="text-left space-y-4">
          <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 tracking-wider uppercase">
            Trusted by Leading Banking & NBFC Partners
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center pt-1 text-zinc-300">
            <div className="flex items-center">
              <span className="text-sm font-bold tracking-tight text-white">PSU BANKS</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold tracking-tight text-white">GOVERMENT BANK</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold tracking-tight text-white">PRIVATE BANK</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold tracking-tight text-white">NBFC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

