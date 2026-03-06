import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Award, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Empowering Sabarkantha with <span className="text-orange-600">Trusted Services</span>
          </motion.h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sabarkantha Services was born out of a simple need: to connect reliable local professionals with residents who value quality and punctuality.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { label: 'Verified Pros', value: '150+' },
            { label: 'Happy Customers', value: '2,000+' },
            { label: 'Services Completed', value: '5,000+' },
            { label: 'Local Areas', value: '12+' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <Target className="w-12 h-12 text-orange-600 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To provide a seamless, transparent, and reliable platform for home services in Sabarkantha, ensuring every household has access to skilled professionals at fair prices.
            </p>
          </div>
          <div className="bg-orange-50 p-12 rounded-[2.5rem] border border-orange-100">
            <Award className="w-12 h-12 text-orange-600 mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To become the most trusted household name in Sabarkantha for any service need, while empowering local skilled workers with better livelihood opportunities.
            </p>
          </div>
        </div>

        {/* Team/Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Strict Verification', desc: 'Every professional on our platform undergoes a rigorous background check and skill assessment.' },
              { icon: <Users className="w-8 h-8" />, title: 'Local Expertise', desc: 'We prioritize local workers who understand the specific needs of Sabarkantha residents.' },
              { icon: <Phone className="w-8 h-8" />, title: 'Dedicated Support', desc: 'Our customer success team is always available to ensure your service experience is perfect.' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-[#FDFCFB] rounded-3xl border border-slate-100">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Our Office</h4>
                <p className="text-slate-500 text-sm">Main Market, Himatnagar, Sabarkantha</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Call Us</h4>
                <p className="text-slate-500 text-sm">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Us</h4>
                <p className="text-slate-500 text-sm">support@sabarkanthaservices.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
