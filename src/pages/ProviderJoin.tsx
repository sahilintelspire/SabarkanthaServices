import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, MapPin, Briefcase, User, Phone, Mail, 
  CheckCircle2, Sparkles, ShieldCheck, Zap, TrendingUp, Users, Smartphone, Star
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProviderJoin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 4000); 
  };

  return (
    <div className="pt-20 bg-white min-h-screen font-sans overflow-x-hidden">
      
      {/* --- 1. HERO SECTION WITH BACKGROUND DECOR --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
              <Sparkles size={14} className="text-orange-500" /> Join Sabarkantha's #1 Network
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              Earn More. <br /> <span className="text-orange-600 italic font-serif">Work Better.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Stop searching for customers. We bring high-quality service leads directly to your phone. Simple, fast, and local.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-orange-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-900 transition-all shadow-2xl shadow-orange-200 active:scale-95 flex items-center justify-center gap-3"
              >
                Join as Partner <Zap size={22} fill="currentColor" />
              </button>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-sm bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                 <Users size={18} className="text-orange-500" /> 500+ Experts Joined
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. STATS STRIP --- */}
      <section className="bg-slate-950 py-16">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Leads', val: '10k+', color: 'text-orange-500' },
              { label: 'Active Cities', val: '12+', color: 'text-blue-400' },
              { label: 'Partner Earnings', val: '₹25L+', color: 'text-emerald-400' },
              { label: 'Trust Rating', val: '4.9/5', color: 'text-yellow-400' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                 <div className={cn("text-3xl md:text-5xl font-black mb-2", s.color)}>{s.val}</div>
                 <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* --- 3. HOW IT WORKS SECTION --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">How to Get Started</h2>
            <p className="text-slate-500 font-medium">Simple 3-step process to start earning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/5 rounded-bl-[4rem] flex items-center justify-center text-orange-600 font-black text-3xl italic">01</div>
               <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                 <Smartphone size={28} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Register Online</h3>
               <p className="text-slate-500 leading-relaxed">Fill the simple partner application form with your skills and city details.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-bl-[4rem] flex items-center justify-center text-blue-600 font-black text-3xl italic">02</div>
               <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                 <ShieldCheck size={28} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Get Verified</h3>
               <p className="text-slate-500 leading-relaxed">Our Himatnagar team will call you to verify your identity and professional skills.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/5 rounded-bl-[4rem] flex items-center justify-center text-emerald-600 font-black text-3xl italic">03</div>
               <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                 <TrendingUp size={28} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Start Earning</h3>
               <p className="text-slate-500 leading-relaxed">Receive job notifications directly and get paid instantly for your expert work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ULTRA MODERN POPUP (WITH FIXED SUCCESS ANIMATION) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 z-50 p-2 bg-white/10 hover:bg-white/20 md:bg-slate-100 md:hover:bg-orange-500 md:hover:text-white backdrop-blur-md rounded-full transition-all"
              >
                <X size={20} />
              </button>

              {/* LEFT SIDE PANEL */}
              <div className="w-full md:w-[35%] bg-slate-950 p-10 flex flex-col justify-between relative overflow-hidden shrink-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/20 to-transparent pointer-events-none" />
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-600/40">
                      <Briefcase size={24} />
                   </div>
                   <h3 className="text-3xl font-bold text-white leading-tight mb-4 tracking-tight">Join the <br /> Professional <br /> Network.</h3>
                   <p className="text-slate-400 text-sm font-medium">Be part of Sabarkantha's fastest growing community.</p>
                </div>
                <div className="relative z-10 space-y-5 mt-12 hidden md:block">
                   {[
                     { icon: <Sparkles size={16} />, text: 'Daily High-Value Jobs' },
                     { icon: <ShieldCheck size={16} />, text: 'Verified Status Badge' },
                     { icon: <CheckCircle2 size={16} />, text: 'Instant UPI Payouts' },
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-300">
                        <span className="text-orange-500">{item.icon}</span>
                        {item.text}
                     </div>
                   ))}
                </div>
              </div>

              {/* RIGHT SIDE FORM/SUCCESS */}
              <div className="flex-1 p-8 md:p-14 bg-white overflow-y-auto no-scrollbar">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      key="success" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="h-full flex flex-col items-center justify-center text-center"
                    >
                       {/* --- FIXED SUCCESS ICON ANIMATION --- */}
                       <motion.div 
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                          className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 relative"
                       >
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-emerald-500/20 rounded-full -z-10"
                          />
                          <CheckCircle2 size={48} strokeWidth={3} />
                       </motion.div>

                       <motion.h3 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="text-4xl font-black text-slate-900 mb-4 tracking-tight"
                       >
                         Application Sent!
                       </motion.h3>
                       <motion.p 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                        className="text-slate-500 font-medium max-w-xs leading-relaxed"
                       >
                         Our team in Himatnagar will review your profile and call you within 24 hours.
                       </motion.p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="mb-10">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Partner Registration</h2>
                        <p className="text-slate-500 text-sm mt-1 font-medium italic">Apply to receive direct customer bookings</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="group relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500" size={18} />
                              <input required type="text" placeholder="Jayesh Parmar" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-500 transition-all font-bold outline-none text-slate-700 shadow-sm" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="group relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500" size={18} />
                              <input required type="email" placeholder="jayesh@example.com" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-500 transition-all font-bold outline-none text-slate-700 shadow-sm" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                            <div className="group relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500" size={18} />
                              <input required type="tel" maxLength={10} placeholder="9876543210" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-500 transition-all font-bold outline-none text-slate-700 shadow-sm" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Work City</label>
                            <div className="group relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500" size={18} />
                              <input required type="text" placeholder="e.g. Himatnagar" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-500 transition-all font-bold outline-none text-slate-700 shadow-sm" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Skill</label>
                          <div className="group relative">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500" size={18} />
                            <select required className="w-full pl-12 pr-10 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-orange-500 transition-all font-bold outline-none appearance-none text-slate-700 cursor-pointer shadow-sm">
                              <option value="">Choose your primary skill...</option>
                              <option>Electrician</option>
                              <option>Plumber</option>
                              <option>AC Mechanic</option>
                              <option>CCTV Installer</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"><ArrowRight size={16} className="rotate-90" /></div>
                          </div>
                        </div>

                        <button type="submit" className="w-full group py-5 bg-orange-600 text-white rounded-[1.5rem] font-bold text-xl hover:bg-slate-900 transition-all shadow-xl shadow-orange-100 active:scale-95 flex items-center justify-center gap-3 mt-4">
                           Submit Application <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}