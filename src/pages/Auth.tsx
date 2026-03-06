import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ShieldCheck, ArrowRight, Phone, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        {/* Left: Branding */}
        <div className="hidden lg:block relative overflow-hidden bg-slate-900 p-16 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">Sabarkantha<span className="text-orange-600">Services</span></span>
            </div>

            <div className="mt-auto">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Your Trusted <br />
                <span className="text-orange-600 italic font-serif">Local Partner.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                Join thousands of Sabarkantha residents who trust us for their home maintenance needs.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck className="w-5 h-5" />, text: '100% Verified Professionals' },
                  { icon: <MapPin className="w-5 h-5" />, text: 'Serving all major areas of Sabarkantha' },
                  { icon: <Phone className="w-5 h-5" />, text: '24/7 Customer Support' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-sm font-medium text-slate-300">
                    <div className="text-orange-600">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-12 md:p-20">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-slate-500 font-medium">
              {isLogin ? 'Sign in to manage your bookings.' : 'Join the most trusted service network in Sabarkantha.'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="Jayesh Sharma" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="email" placeholder="jayesh@example.com" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                </div>
              </div>

              <button className="w-full py-5 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all active:scale-95 shadow-xl shadow-orange-200 flex items-center justify-center gap-2">
                {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.form>
          </AnimatePresence>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors"
            >
              {isLogin ? "Don't have an account? Create one" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
