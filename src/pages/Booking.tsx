import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Zap, 
  AirVent, 
  Droplets, 
  Hammer, 
  Paintbrush, 
  Sparkles, 
  Camera,
  Calendar,
  Clock,
  MapPin,
  Phone,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';

const SERVICES = [
  { id: 'plumber', name: 'Plumber', icon: <Wrench className="w-6 h-6" />, price: '₹199' },
  { id: 'electrician', name: 'Electrician', icon: <Zap className="w-6 h-6" />, price: '₹149' },
  { id: 'ac-repair', name: 'AC / Fridge', icon: <AirVent className="w-6 h-6" />, price: '₹499' },
  { id: 'ro-service', name: 'RO Service', icon: <Droplets className="w-6 h-6" />, price: '₹299' },
  { id: 'carpenter', name: 'Carpenter', icon: <Hammer className="w-6 h-6" />, price: '₹399' },
  { id: 'painter', name: 'Painter', icon: <Paintbrush className="w-6 h-6" />, price: '₹999' },
  { id: 'cleaning', name: 'Home Cleaning', icon: <Sparkles className="w-6 h-6" />, price: '₹599' },
  { id: 'cctv', name: 'CCTV Install', icon: <Camera className="w-6 h-6" />, price: '₹799' },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-4">
              {['Service', 'Details', 'Confirm'].map((s, i) => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                    step > i + 1 ? "bg-emerald-500 text-white" : 
                    step === i + 1 ? "bg-orange-600 text-white shadow-lg shadow-orange-200" : "bg-slate-100 text-slate-400"
                  )}>
                    {step > i + 1 ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-widest", step === i + 1 ? "text-slate-900" : "text-slate-400")}>{s}</span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-orange-600"
                initial={{ width: '0%' }}
                animate={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
            {step === 1 && (
              <div className="p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">What do you need help with?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {SERVICES.map(service => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={cn(
                        "p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 text-center group",
                        selectedService === service.id 
                          ? "border-orange-600 bg-orange-50/50" 
                          : "border-slate-50 bg-[#FDFCFB] hover:border-orange-200"
                      )}
                    >
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110",
                        selectedService === service.id ? "bg-orange-600 text-white" : "bg-white text-slate-400 shadow-sm"
                      )}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{service.name}</div>
                        <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mt-1">From {service.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-12 flex justify-end">
                  <button 
                    disabled={!selectedService}
                    onClick={() => setStep(2)}
                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Service Details</h2>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Select Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="date" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Select Time</label>
                      <div className="relative">
                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium appearance-none">
                          <option>Morning (9 AM - 12 PM)</option>
                          <option>Afternoon (12 PM - 4 PM)</option>
                          <option>Evening (4 PM - 8 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Service Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-5 top-6 text-slate-400" size={18} />
                      <textarea rows={3} placeholder="Enter your full address in Sabarkantha..." className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium resize-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="tel" placeholder="+91 98765 43210" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                    <button onClick={() => setStep(1)} className="text-slate-500 font-bold hover:text-slate-900 transition-colors">Back</button>
                    <button onClick={() => setStep(3)} className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                      Review Booking <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="p-12">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Review & Confirm</h2>
                  <p className="text-slate-500">Please verify your booking details before confirming.</p>
                </div>

                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 space-y-6 mb-12">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Service</span>
                    <span className="font-bold text-slate-900">{SERVICES.find(s => s.id === selectedService)?.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Base Price</span>
                    <span className="font-bold text-orange-600">{SERVICES.find(s => s.id === selectedService)?.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Date & Time</span>
                    <span className="font-bold text-slate-900">Oct 24, 2024 • Morning</span>
                  </div>
                  <div className="pt-6 border-t border-slate-200">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2">Address</span>
                    <p className="text-sm text-slate-600 font-medium">12, Shanti Nagar, Near Civil Hospital, Himatnagar, Sabarkantha</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button onClick={() => setStep(2)} className="text-slate-500 font-bold hover:text-slate-900 transition-colors">Back</button>
                  <button className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all active:scale-95 shadow-xl shadow-orange-200">
                    Confirm & Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
