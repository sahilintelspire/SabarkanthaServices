import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  MapPin, 
  Phone,
  ChevronRight,
  Wrench,
  Zap,
  AirVent,
  Droplets,
  Hammer,
  Paintbrush,
  Sparkles,
  Camera
} from 'lucide-react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Booking from './pages/Booking';

// Types
interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  priceRange: string;
  color: string;
}

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

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/booking' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/80 backdrop-blur-md py-3 border-slate-200 shadow-sm" : "bg-transparent py-5 border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Sabarkantha<span className="text-orange-600">Services</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  "text-sm font-bold transition-colors",
                  location.pathname === link.path ? "text-orange-600" : "text-slate-600 hover:text-orange-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/dashboard" className="text-slate-600 hover:text-orange-600 transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </Link>
            <Link to="/auth" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
              Sign In
            </Link>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-16">
              <span className="text-2xl font-bold">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-slate-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-3xl font-bold">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
              ))}
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </div>
            <div className="mt-auto">
              <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="block w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-xl text-center">
                Book a Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">Sabarkantha<span className="text-orange-600">Services</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Connecting the people of Sabarkantha with trusted, verified, and professional home service experts. Quality work guaranteed.
            </p>
            <div className="flex gap-4">
              {['fb', 'tw', 'ig', 'li'].map(s => (
                <div key={s} className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-200 cursor-pointer transition-all">
                  <span className="text-xs font-bold uppercase">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              {SERVICES.slice(0, 5).map(s => (
                <li key={s.id} className="hover:text-orange-600 transition-colors cursor-pointer">{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><Link to="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-600" /> Himatnagar, Sabarkantha
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-600" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-500" /> 24/7 Support Available
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
          <p>© 2024 Sabarkantha Services. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with ❤️ for Sabarkantha</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home onBookService={setSelectedService} />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        {/* Booking Modal (Shared) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden"
              >
                <div className={cn("p-8 text-white", selectedService.color.replace('bg-', 'bg-').replace('text-', 'text-white').split(' ')[0].replace('50', '600'))}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      {selectedService.icon}
                    </div>
                    <button onClick={() => setSelectedService(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Book {selectedService.name}</h3>
                  <p className="text-white/80">Professional service at your doorstep in Sabarkantha.</p>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Service Details</label>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-slate-900">Base Price</span>
                          <span className="font-bold text-orange-600">{selectedService.priceRange.split(' - ')[0]}</span>
                        </div>
                        <p className="text-xs text-slate-500">Final price depends on the scope of work.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Date</label>
                        <input type="date" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Time</label>
                        <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                          <option>Morning (9-12)</option>
                          <option>Afternoon (12-4)</option>
                          <option>Evening (4-8)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Address</label>
                      <textarea 
                        placeholder="Enter your full address in Sabarkantha..."
                        rows={3}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none"
                      />
                    </div>

                    <button className="w-full py-4 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all active:scale-95 shadow-xl shadow-orange-200">
                      Confirm Booking
                    </button>
                    <p className="text-center text-xs text-slate-400">
                      By clicking, you agree to our Terms & Conditions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
