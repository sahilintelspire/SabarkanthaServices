import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  MapPin,
  Phone
} from 'lucide-react';
import { cn } from '../lib/utils';

const BOOKINGS = [
  { id: 'BK-9021', service: 'Electrician', provider: 'Rajesh Prajapati', date: 'Oct 24, 2024', time: '10:00 AM', status: 'Upcoming', price: '₹499' },
  { id: 'BK-8842', service: 'Plumber', provider: 'Suresh Vankar', date: 'Oct 20, 2024', time: '02:30 PM', status: 'Completed', price: '₹299' },
  { id: 'BK-8711', service: 'AC Repair', provider: 'Amit Patel', date: 'Oct 15, 2024', time: '11:00 AM', status: 'Cancelled', price: '₹899' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Bookings');

  const tabs = [
    { name: 'Bookings', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Favorites', icon: <Heart className="w-5 h-5" /> },
    { name: 'Profile', icon: <User className="w-5 h-5" /> },
    { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm mb-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-orange-100 rounded-3xl mx-auto mb-4 flex items-center justify-center text-orange-600 font-bold text-3xl">
                  JS
                </div>
                <h2 className="text-xl font-bold text-slate-900">Jayesh Sharma</h2>
                <p className="text-sm text-slate-500">Himatnagar, Sabarkantha</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-2xl transition-all font-bold text-sm",
                      activeTab === tab.name 
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                        : "text-slate-500 hover:bg-slate-50 hover:text-orange-600"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {tab.icon}
                      {tab.name}
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm mt-8">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-end">
                <h1 className="text-4xl font-bold text-slate-900">{activeTab}</h1>
                <button className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 transition-all">
                  New Booking
                </button>
              </div>

              {activeTab === 'Bookings' && (
                <div className="space-y-4">
                  {BOOKINGS.map(booking => (
                    <div key={booking.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0",
                          booking.status === 'Upcoming' ? 'bg-blue-50 text-blue-600' :
                          booking.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                        )}>
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-900">{booking.service}</h3>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">#{booking.id}</span>
                          </div>
                          <p className="text-sm text-slate-500 font-medium">{booking.date} at {booking.time} • {booking.provider}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-8">
                        <div className="text-right">
                          <div className="font-bold text-slate-900">{booking.price}</div>
                          <div className={cn(
                            "text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 justify-end",
                            booking.status === 'Upcoming' ? 'text-blue-600' :
                            booking.status === 'Completed' ? 'text-emerald-600' : 'text-red-600'
                          )}>
                            {booking.status === 'Upcoming' && <Clock className="w-3 h-3" />}
                            {booking.status === 'Completed' && <CheckCircle2 className="w-3 h-3" />}
                            {booking.status === 'Cancelled' && <AlertCircle className="w-3 h-3" />}
                            {booking.status}
                          </div>
                        </div>
                        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                          <ChevronRight className="w-6 h-6 text-slate-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Profile' && (
                <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-sm space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                      <input type="text" defaultValue="Jayesh Sharma" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                      <input type="email" defaultValue="jayesh.sharma@example.com" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                      <input type="tel" defaultValue="+91 98765 43210" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">City</label>
                      <input type="text" defaultValue="Himatnagar" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Full Address</label>
                    <textarea rows={3} defaultValue="12, Shanti Nagar, Near Civil Hospital, Himatnagar, Sabarkantha - 383001" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-orange-500 transition-all font-medium resize-none" />
                  </div>
                  <div className="flex justify-end gap-4 pt-6 border-t border-slate-50">
                    <button className="px-8 py-4 rounded-2xl text-slate-500 font-bold hover:bg-slate-50 transition-all">Cancel</button>
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">Save Changes</button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
