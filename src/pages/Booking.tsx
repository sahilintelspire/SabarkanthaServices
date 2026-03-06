import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Check if you use 'motion/react' or 'framer-motion'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Wrench, Zap, AirVent, Droplets, Hammer, Paintbrush, Sparkles, Camera,
  Calendar, Clock, MapPin, Phone, ChevronRight, ShieldCheck, CheckCircle2,
  ArrowLeft, Info
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Types & Data ---
const SERVICES = [
  { id: 'plumber', name: 'Plumber', icon: <Wrench className="w-6 h-6" />, price: 199 },
  { id: 'electrician', name: 'Electrician', icon: <Zap className="w-6 h-6" />, price: 149 },
  { id: 'ac-repair', name: 'AC / Fridge', icon: <AirVent className="w-6 h-6" />, price: 499 },
  { id: 'ro-service', name: 'RO Service', icon: <Droplets className="w-6 h-6" />, price: 299 },
  { id: 'carpenter', name: 'Carpenter', icon: <Hammer className="w-6 h-6" />, price: 399 },
  { id: 'painter', name: 'Painter', icon: <Paintbrush className="w-6 h-6" />, price: 999 },
  { id: 'cleaning', name: 'Home Cleaning', icon: <Sparkles className="w-6 h-6" />, price: 599 },
  { id: 'cctv', name: 'CCTV Install', icon: <Camera className="w-6 h-6" />, price: 799 },
];

const TOWNS = ["Himatnagar", "Idar", "Prantij", "Talod", "Modasa", "Khedbrahma", "Vadali", "Vijaynagar"];
const TIME_SLOTS = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Single State for all form data
  const [formData, setFormData] = useState({
    serviceId: searchParams.get('service') || '',
    date: '',
    time: '',
    town: 'Himatnagar',
    address: '',
    phone: '',
    notes: ''
  });

  // Home page se service select ho kar aaye uske liye
  useEffect(() => {
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      setFormData(prev => ({ ...prev, serviceId: serviceFromUrl }));
    }
  }, [searchParams]);

  const selectedServiceData = SERVICES.find(s => s.id === formData.serviceId);

  const handleConfirm = () => {
    // Yaha backend call hogi badme
    console.log("Final Booking Data:", formData);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="pt-40 pb-20 px-4 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">Our expert will call you shortly to confirm the exact arrival time. Service ID: #SK-{Math.floor(Math.random()*9000)+1000}</p>
          <button onClick={() => navigate('/')} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all">Back to Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Stepper */}
        <div className="flex justify-between items-center mb-12 max-w-lg mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center relative z-10">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all duration-500",
                step >= i ? "bg-orange-600 text-white shadow-lg shadow-orange-200" : "bg-white text-slate-300 border border-slate-100"
              )}>
                {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
              </div>
              <span className={cn("text-[10px] font-bold uppercase tracking-widest mt-3", step >= i ? "text-orange-600" : "text-slate-400")}>
                {i === 1 ? "Service" : i === 2 ? "Details" : "Review"}
              </span>
            </div>
          ))}
          <div className="absolute left-1/2 -translate-x-1/2 w-48 h-[2px] bg-slate-200 -z-0 hidden md:block" />
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden">
          
          {/* STEP 1: SERVICE SELECTION */}
          {step === 1 && (
            <div className="p-8 md:p-12">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Select a Service</h2>
                <p className="text-slate-500">Pick what you need help with today</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICES.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setFormData({...formData, serviceId: service.id})}
                    className={cn(
                      "p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-4 text-center group",
                      formData.serviceId === service.id 
                        ? "border-orange-600 bg-orange-50/30 ring-4 ring-orange-50" 
                        : "border-slate-50 bg-[#FDFCFB] hover:border-orange-200"
                    )}
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300",
                      formData.serviceId === service.id ? "bg-orange-600 text-white shadow-lg shadow-orange-200" : "bg-white text-slate-400 shadow-sm"
                    )}>
                      {service.icon}
                    </div>
                    <div className="font-bold text-slate-900">{service.name}</div>
                  </button>
                ))}
              </div>
              
              <div className="mt-12 flex justify-end">
                <button 
                  disabled={!formData.serviceId}
                  onClick={() => setStep(2)}
                  className="bg-slate-900 text-white px-12 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all disabled:opacity-30 flex items-center gap-2"
                >
                  Next Step <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DETAILS */}
          {step === 2 && (
            <div className="p-8 md:p-12">
              <button onClick={() => setStep(1)} className="flex items-center gap-2 text-slate-400 font-bold mb-8 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </button>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Service Details</h2>
              
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left Side: Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Select Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-medium" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Available Slots</label>
                    <div className="flex flex-wrap gap-2">
                      {TIME_SLOTS.map(t => (
                        <button 
                          key={t}
                          onClick={() => setFormData({...formData, time: t})}
                          className={cn(
                            "px-4 py-2 rounded-xl text-sm font-bold border transition-all",
                            formData.time === t ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-100" : "bg-white border-slate-200 text-slate-600 hover:border-orange-300"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Town / City</label>
                    <select 
                      value={formData.town}
                      onChange={(e) => setFormData({...formData, town: e.target.value})}
                      className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none font-medium focus:border-orange-500"
                    >
                      {TOWNS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Right Side: Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Service Address</label>
                    <textarea 
                      rows={4}
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="House No, Society, Area Name..."
                      className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none font-medium resize-none focus:border-orange-500" 
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter 10 digit number" 
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none font-medium focus:border-orange-500" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                <button 
                  disabled={!formData.date || !formData.time || !formData.phone}
                  onClick={() => setStep(3)}
                  className="bg-slate-900 text-white px-12 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all disabled:opacity-30"
                >
                  Review Booking
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: REVIEW */}
          {step === 3 && (
            <div className="p-8 md:p-12">
               <button onClick={() => setStep(2)} className="flex items-center gap-2 text-slate-400 font-bold mb-8 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4" /> Edit Details
              </button>

              <h2 className="text-3xl font-bold text-slate-900 mb-8">Confirm Booking</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl text-orange-600 shadow-sm">
                      {selectedServiceData?.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{selectedServiceData?.name} Service</h4>
                      <p className="text-sm text-slate-500">Professional {selectedServiceData?.name} at your doorstep</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Date & Time</p>
                      <p className="font-bold text-slate-900">{formData.date} at {formData.time}</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Location</p>
                      <p className="font-bold text-slate-900">{formData.town}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Detailed Address</p>
                    <p className="font-bold text-slate-900 leading-relaxed">{formData.address}</p>
                  </div>
                </div>

                {/* Price Sidebar */}
                <div className="bg-slate-900 text-white rounded-[2rem] p-8 flex flex-col">
                   <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                     <ShieldCheck className="w-5 h-5 text-orange-500" /> Bill Summary
                   </h4>
                   <div className="space-y-4 mb-auto">
                     <div className="flex justify-between text-slate-400">
                       <span>Visiting Charges</span>
                       <span>₹{selectedServiceData?.price}</span>
                     </div>
                     <div className="flex justify-between text-slate-400">
                       <span>Service Tax</span>
                       <span>₹0</span>
                     </div>
                     <div className="pt-4 border-t border-white/10 flex justify-between font-bold text-xl">
                       <span>Total</span>
                       <span className="text-orange-500 font-serif italic">₹{selectedServiceData?.price}</span>
                     </div>
                   </div>
                   <div className="mt-8 bg-white/5 p-4 rounded-xl border border-white/10 flex gap-3 italic text-xs text-slate-400">
                     <Info className="w-4 h-4 shrink-0" />
                     Pay via cash or UPI after the job is completed.
                   </div>
                </div>
              </div>

              <button 
                onClick={handleConfirm}
                className="w-full py-5 bg-orange-600 text-white rounded-2xl font-bold text-xl hover:bg-orange-700 shadow-xl shadow-orange-200 transition-all active:scale-95"
              >
                Confirm & Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}