import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, User, ShieldCheck, ArrowRight, MapPin, 
  CheckCircle2, MessageSquare, Info, Mail, Lock
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

type AuthView = 'login' | 'register' | 'otp';

export default function Auth() {
  const [view, setView] = useState<AuthView>('login');
  const [role, setRole] = useState<'user' | 'provider'>('user'); 
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  // Registration states
  const [regData, setRegData] = useState({ name: '', email: '', phone: '' });

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-[#FAFAFA]">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 min-h-[650px]">
        
        {/* Left Side: Branding */}
        <div className="hidden lg:block relative bg-slate-900 p-16 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-2xl font-bold tracking-tight italic">Sabarkantha<span className="text-orange-600">Services</span></span>
            </div>

            <div className="mt-auto">
              <h2 className="text-5xl font-bold mb-8 leading-[1.1]">
                {role === 'user' ? (
                  <>The Safest Way to <br /><span className="text-orange-500 italic font-serif">Fix Your Home.</span></>
                ) : (
                  <>Manage Your <br /><span className="text-orange-500 italic font-serif">Daily Jobs.</span></>
                )}
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Verified Local Professionals', color: 'text-emerald-500' },
                  { icon: <MapPin className="w-5 h-5" />, text: 'Serving all major areas of SK', color: 'text-blue-500' },
                  { icon: <MessageSquare className="w-5 h-5" />, text: 'Direct WhatsApp Support', color: 'text-orange-500' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-base font-medium text-slate-300">
                    <div className={item.color}>{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Logic */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          
          {/* Role Toggle */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-10 w-full max-w-sm mx-auto lg:mx-0">
            <button 
              onClick={() => { setRole('user'); setView('login'); }}
              className={cn("flex-1 py-3 rounded-xl text-sm font-bold transition-all", role === 'user' ? "bg-white text-slate-900 shadow-md" : "text-slate-500")}
            >
              Customer
            </button>
            <button 
              onClick={() => { setRole('provider'); setView('login'); }}
              className={cn("flex-1 py-3 rounded-xl text-sm font-bold transition-all", role === 'provider' ? "bg-white text-slate-900 shadow-md" : "text-slate-500")}
            >
              Technician
            </button>
          </div>

          <AnimatePresence mode="wait">
            {/* --- LOGIN VIEW --- */}
            {view === 'login' && (
              <motion.div key="login" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                  <p className="text-slate-500 font-medium">Sign in with your phone or email.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email or Phone</label>
                    <div className="relative group">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500" size={18} />
                      <input 
                        type="text" 
                        placeholder="jayesh@example.com / 987..." 
                        value={phoneOrEmail}
                        onChange={(e) => setPhoneOrEmail(e.target.value)}
                        className="w-full pl-14 pr-6 py-4.5 rounded-[1.25rem] bg-slate-50 border-2 border-slate-50 focus:border-orange-500 focus:bg-white transition-all font-bold text-lg outline-none" 
                      />
                    </div>
                  </div>
                  
                  <button 
                    disabled={!phoneOrEmail}
                    onClick={() => setView('otp')}
                    className="w-full py-5 bg-slate-900 text-white rounded-[1.25rem] font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-30 flex items-center justify-center gap-2 group"
                  >
                    Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {role === 'user' && (
                    <div className="text-center pt-4">
                       <button onClick={() => setView('register')} className="text-sm font-bold text-orange-600 hover:underline">
                         New here? Create an Account
                       </button>
                    </div>
                  )}

                  {role === 'provider' && (
                    <div className="mt-6 p-4 bg-orange-50 rounded-2xl border border-orange-100 flex gap-3 text-xs text-orange-800 font-medium">
                      <Info className="w-5 h-5 text-orange-600 shrink-0" />
                      <p>New technician? <Link to="/partner" className="font-black underline">Join as Partner</Link></p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* --- REGISTER VIEW --- */}
            {view === 'register' && (
              <motion.div key="register" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Create Account</h1>
                  <p className="text-slate-500 font-medium">Join Sabarkantha's most trusted network.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="text" placeholder="Jayesh Parmar" className="w-full pl-14 pr-6 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-orange-500 focus:bg-white outline-none font-bold" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="email" placeholder="jayesh@example.com" className="w-full pl-14 pr-6 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-orange-500 focus:bg-white outline-none font-bold" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="tel" maxLength={10} placeholder="98765 43210" className="w-full pl-14 pr-6 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-orange-500 focus:bg-white outline-none font-bold" />
                    </div>
                  </div>

                  <button 
                    onClick={() => setView('otp')}
                    className="w-full py-5 bg-orange-600 text-white rounded-[1.25rem] font-bold text-lg hover:bg-slate-900 transition-all shadow-xl shadow-orange-100"
                  >
                    Register & Verify
                  </button>

                  <div className="text-center pt-2">
                    <button onClick={() => setView('login')} className="text-sm font-bold text-slate-400 hover:text-slate-900">
                      Already have an account? Login
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- OTP VIEW --- */}
            {view === 'otp' && (
              <motion.div key="otp" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <button onClick={() => setView('login')} className="text-slate-400 font-bold mb-6 hover:text-slate-900 flex items-center gap-1 text-sm">
                  ← Edit details
                </button>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Check your phone</h1>
                <p className="text-slate-500 mb-10">Enter the 6-digit code we just sent you.</p>
                
                <div className="space-y-8">
                  <div className="flex justify-between gap-2">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`otp-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-full h-16 text-center text-2xl font-black rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm"
                      />
                    ))}
                  </div>
                  <button className="w-full py-5 bg-slate-900 text-white rounded-[1.25rem] font-bold text-lg hover:bg-orange-600 transition-all">
                    Verify Code
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}