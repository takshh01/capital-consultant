import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck, Building2, ExternalLink } from 'lucide-react';
import { 
  BUSINESS_OFFICE, 
  BUSINESS_PHONE_DISPLAY, 
  BUSINESS_WHATSAPP_DISPLAY, 
  BUSINESS_EMAIL, 
  BUSINESS_WHATSAPP_NUMBER 
} from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#050607] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
            Delhi Headquarters & Advisory Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect with Capital Consultancy
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Visit our office at Pragati Tower, Rajender Place, Delhi, or reach out via phone, email, and instant WhatsApp advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#121214] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xs space-y-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-white">
                Capital Consultancy
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Loan & Financial Consultancy · Delhi NCR
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
              {/* Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Office Location
                  </span>
                  <p className="text-white font-semibold mt-0.5">
                    {BUSINESS_OFFICE}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Opposite Rajendra Place Metro Station, Central Delhi
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Direct Phone Line
                  </span>
                  <a 
                    href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`} 
                    className="text-white hover:text-emerald-400 font-bold block mt-0.5 transition-colors"
                  >
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Available Mon–Sat: 9:30 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Official WhatsApp Desk
                  </span>
                  <a 
                    href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 font-bold block mt-0.5 transition-colors"
                  >
                    {BUSINESS_WHATSAPP_DISPLAY}
                  </a>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Direct enquiry handling & file tracking
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Official Email
                  </span>
                  <a 
                    href={`mailto:${BUSINESS_EMAIL}`} 
                    className="text-white hover:text-emerald-400 font-semibold block mt-0.5 transition-colors break-all"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Working Hours
                  </span>
                  <p className="text-white font-semibold mt-0.5">
                    Monday to Saturday: 9:30 AM – 7:00 PM
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Sunday: By Prior Appointment for Corporate Mandates
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quick Action */}
            <div className="pt-4 border-t border-white/10 flex gap-2">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Consultancy, I would like to schedule a consultation at your Rajender Place office.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Book Office Visit</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="py-3 px-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-white/10"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk</span>
              </a>
            </div>

          </div>

          {/* Interactive Office & Regional Coverage Panel */}
          <div className="lg:col-span-7 bg-[#121214] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xs text-left space-y-6">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400 uppercase tracking-wider border border-emerald-500/20">
                Strategic Connectivity
              </span>
              <h3 className="text-lg font-bold text-white mt-1.5">
                Rajender Place Financial Corridor, Central Delhi
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Located in Pragati Tower adjacent to leading PSU zonal offices, credit guarantee trusts, and registrar authorities.
              </p>
            </div>

            {/* Metro & Landmark Connectivity Card */}
            <div className="bg-[#0a0a0a] p-5 rounded-xl border border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                Location & Accessibility Markers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400">
                <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/10">
                  <span className="font-bold text-white block">Metro Connectivity:</span>
                  Rajendra Place Metro Station (Blue Line) - 2 min walk
                </div>
                <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/10">
                  <span className="font-bold text-white block">Connaught Place:</span>
                  12 minutes via Pusa Road & Shankar Road
                </div>
                <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/10">
                  <span className="font-bold text-white block">West Delhi Hub:</span>
                  Direct corridor to Kirti Nagar, Mayapuri & Naraina
                </div>
                <div className="p-2.5 bg-zinc-900 rounded-lg border border-white/10">
                  <span className="font-bold text-white block">NCR Coordination:</span>
                  Easy transit for Noida, Gurugram, Faridabad promoters
                </div>
              </div>
            </div>

            {/* Regional Coverage Grid */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-300">
                Primary Regional Mandates Handled:
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  'Central & North Delhi',
                  'Mayapuri & Naraina Industrial',
                  'Bawana & Narela Industrial',
                  'Patparganj & Okhla',
                  'Noida & Greater Noida',
                  'Gurugram Corporate Sector',
                  'Faridabad Manufacturing',
                  'Kundli & Panipat Exporters'
                ].map((area) => (
                  <span 
                    key={area}
                    className="px-2.5 py-1 bg-zinc-900 rounded-md text-zinc-300 border border-white/10 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Personnel Notice */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-zinc-300 space-y-1">
              <div className="font-bold text-emerald-400">
                Advisory Appointments:
              </div>
              <p>
                To ensure undivided attention from <strong>Reena Taank (Manager)</strong>, we recommend scheduling an appointment via WhatsApp or requesting a callback prior to visiting the office.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
