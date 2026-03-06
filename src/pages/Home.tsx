import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Zap, 
  AirVent, 
  Droplets, 
  Hammer, 
  Paintbrush, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  MapPin, 
  Star, 
  ArrowRight,
  CheckCircle2,
  Clock,
  User,
  Camera
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

// Types
interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  priceRange: string;
  color: string;
}

interface Provider {
  id: string;
  name: string;
  service: string;
  rating: number;
  reviews: number;
  image: string;
  verified: boolean;
}

// Data
const SERVICES: Service[] = [
  { id: 'plumber', name: 'Plumber', icon: <Wrench className="w-6 h-6" />, description: 'Leaking pipes, tap repairs, and more', priceRange: '₹199 - ₹999', color: 'bg-blue-50 text-blue-600' },
  { id: 'electrician', name: 'Electrician', icon: <Zap className="w-6 h-6" />, description: 'Wiring, switchboards, and electrical repairs', priceRange: '₹149 - ₹1499', color: 'bg-yellow-50 text-yellow-600' },
  { id: 'ac-repair', name: 'AC / Fridge', icon: <AirVent className="w-6 h-6" />, description: 'Cooling issues, gas refilling, and servicing', priceRange: '₹499 - ₹2499', color: 'bg-cyan-50 text-cyan-600' },
  { id: 'ro-service', name: 'RO Service', icon: <Droplets className="w-6 h-6" />, description: 'Filter change and water purifier repair', priceRange: '₹299 - ₹899', color: 'bg-indigo-50 text-indigo-600' },
  { id: 'carpenter', name: 'Carpenter', icon: <Hammer className="w-6 h-6" />, description: 'Furniture repair and custom woodwork', priceRange: '₹399 - ₹4999', color: 'bg-orange-50 text-orange-600' },
  { id: 'painter', name: 'Painter', icon: <Paintbrush className="w-6 h-6" />, description: 'Interior and exterior wall painting', priceRange: '₹999+', color: 'bg-pink-50 text-pink-600' },
  { id: 'cleaning', name: 'Home Cleaning', icon: <Sparkles className="w-6 h-6" />, description: 'Deep cleaning for homes and offices', priceRange: '₹599 - ₹2999', color: 'bg-emerald-50 text-emerald-600' },
  { id: 'cctv', name: 'CCTV Install', icon: <Camera className="w-6 h-6" />, description: 'Security camera setup and maintenance', priceRange: '₹799 - ₹5999', color: 'bg-slate-50 text-slate-600' },
];

const PROVIDERS: Provider[] = [
  { id: '1', name: 'Rajesh Prajapati', service: 'Electrician', rating: 4.9, reviews: 124, image: 'https://picsum.photos/seed/rajesh/200/200', verified: true },
  { id: '2', name: 'Suresh Vankar', service: 'Plumber', rating: 4.8, reviews: 89, image: 'https://picsum.photos/seed/suresh/200/200', verified: true },
  { id: '3', name: 'Amit Patel', service: 'AC Repair', rating: 4.7, reviews: 56, image: 'https://picsum.photos/seed/amit/200/200', verified: true },
];

export default function Home({ onBookService }: { onBookService: (service: Service) => void }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-100">
                <MapPin className="w-3 h-3" /> Serving Himatnagar & Sabarkantha
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
                Expert Home Services, <br />
                <span className="text-orange-600 italic font-serif">Just a Click Away.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                The most trusted platform in Sabarkantha for reliable plumbers, electricians, and home maintenance professionals. Verified experts at your doorstep.
              </p>

              <div className="relative max-w-xl group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for 'Plumber', 'AC Repair'..."
                  className="w-full pl-12 pr-32 py-5 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-2 bottom-2 bg-orange-600 text-white px-6 rounded-xl font-bold hover:bg-orange-700 transition-all active:scale-95 shadow-lg shadow-orange-200">
                  Find Now
                </button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100+ Verified Pros
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 45 Min Response
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Fixed Pricing
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-slate-500 max-w-md">Choose from our wide range of professional home maintenance and repair services.</p>
            </div>
            <Link to="/booking" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => onBookService(service)}
                className="group cursor-pointer bg-[#FDFCFB] border border-slate-100 p-6 rounded-3xl hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 transition-all"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Starts at</span>
                  <span className="text-sm font-bold text-orange-600">{service.priceRange.split(' - ')[0]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Booking in 3 Simple Steps</h2>
            <p className="text-slate-400">We've simplified the process of finding and hiring local experts in Sabarkantha.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Select Service', desc: 'Choose the service you need from our extensive list of local experts.', icon: <Search className="w-8 h-8" /> },
              { step: '02', title: 'Pick a Time', desc: 'Select a convenient date and time slot that works best for your schedule.', icon: <Clock className="w-8 h-8" /> },
              { step: '03', title: 'Expert Arrives', desc: 'A verified professional will arrive at your doorstep to complete the job.', icon: <User className="w-8 h-8" /> },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-8xl font-black text-white/5 absolute -top-10 -left-4 select-none group-hover:text-orange-600/20 transition-colors">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-orange-600/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Rated Professionals</h2>
              <p className="text-slate-500">Our most trusted experts with consistent 4.5+ ratings from Sabarkantha residents.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROVIDERS.map((provider) => (
              <div key={provider.id} className="bg-[#FDFCFB] rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={provider.image} 
                    alt={provider.name} 
                    className="w-16 h-16 rounded-2xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-slate-900">{provider.name}</h4>
                      {provider.verified && <ShieldCheck className="w-4 h-4 text-orange-600" />}
                    </div>
                    <p className="text-sm text-slate-500">{provider.service}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-slate-900">{provider.rating}</span>
                    <span className="text-xs text-slate-400">({provider.reviews} reviews)</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Available Today</span>
                </div>
                <button className="w-full py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
