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
    <section id="contact" className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-600 border border-emerald-500/20">
            Delhi Headquarters & Advisory Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            Connect with Capital Consultancy
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Visit our office at Pragati Tower, Rajender Place, Delhi, or reach out via phone, email, and instant WhatsApp advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs space-y-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-[#0d0d0d]">
                Capital Consultancy
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                Loan & Financial Consultancy · Delhi NCR
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-zinc-100 text-sm">
              {/* Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Office Location
                  </span>
                  <p className="text-[#0d0d0d] font-semibold mt-0.5">
                    {BUSINESS_OFFICE}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Opposite Rajendra Place Metro Station, Central Delhi
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Direct Phone Line
                  </span>
                  <a 
                    href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`} 
                    className="text-[#0d0d0d] hover:text-emerald-600 font-bold block mt-0.5 transition-colors"
                  >
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Available Mon–Sat: 9:30 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 shadow-sm">
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
                    className="text-[#0d0d0d] hover:text-emerald-600 font-bold block mt-0.5 transition-colors"
                  >
                    {BUSINESS_WHATSAPP_DISPLAY}
                  </a>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Direct enquiry handling & file tracking
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Official Email
                  </span>
                  <a 
                    href={`mailto:${BUSINESS_EMAIL}`} 
                    className="text-[#0d0d0d] hover:text-emerald-600 font-semibold block mt-0.5 transition-colors break-all"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">
                    Working Hours
                  </span>
                  <p className="text-[#0d0d0d] font-semibold mt-0.5">
                    Monday to Saturday: 9:30 AM – 7:00 PM
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Sunday: By Prior Appointment for Corporate Mandates
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quick Action */}
            <div className="pt-4 border-t border-zinc-100 flex gap-2">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Consultancy, I would like to schedule a consultation at your Rajender Place office.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3 bg-[#0d0d0d] hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Book Office Visit</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="py-3 px-3 bg-zinc-100 hover:bg-zinc-200 text-[#0d0d0d] font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-zinc-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk</span>
              </a>
            </div>

          </div>

          {/* Interactive Office & Regional Coverage Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs text-left space-y-6">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-600 uppercase tracking-wider border border-emerald-500/20">
                Strategic Connectivity
              </span>
              <h3 className="text-lg font-bold text-[#0d0d0d] mt-1.5">
                Rajender Place Financial Corridor, Central Delhi
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Located in Pragati Tower adjacent to leading PSU zonal offices, credit guarantee trusts, and registrar authorities.
              </p>
            </div>

            {/* Metro & Landmark Connectivity Card */}
            <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-500" />
                Location & Accessibility Markers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-600">
                <div className="p-2.5 bg-white rounded-lg border border-zinc-200">
                  <span className="font-bold text-[#0d0d0d] block">Metro Connectivity:</span>
                  Rajendra Place Metro Station (Blue Line) - 2 min walk
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-zinc-200">
                  <span className="font-bold text-[#0d0d0d] block">Connaught Place:</span>
                  12 minutes via Pusa Road & Shankar Road
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-zinc-200">
                  <span className="font-bold text-[#0d0d0d] block">West Delhi Hub:</span>
                  Direct corridor to Kirti Nagar, Mayapuri & Naraina
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-zinc-200">
                  <span className="font-bold text-[#0d0d0d] block">NCR Coordination:</span>
                  Easy transit for Noida, Gurugram, Faridabad promoters
                </div>
              </div>
            </div>

            {/* Regional Coverage Grid */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-800">
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
                    className="px-2.5 py-1 bg-zinc-100 rounded-md text-zinc-700 border border-zinc-200 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Personnel Notice */}
            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-zinc-700 space-y-1">
              <div className="font-bold text-emerald-950">
                Advisory Appointments:
              </div>
              <p>
                To ensure undivided attention from <strong>Manish Chawla (CEO)</strong> or <strong>Reena Taank (Manager)</strong>, we recommend scheduling an appointment via WhatsApp or requesting a callback prior to visiting the office.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
