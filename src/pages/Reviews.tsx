import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ThumbsUp, MessageSquare, Filter, ChevronDown, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const REVIEWS = [
  { id: 1, user: 'Mehul Shah', rating: 5, date: '2 days ago', comment: 'Excellent electrical work. Rajesh was very professional and fixed the issue in 30 minutes. Highly recommended for Himatnagar residents!', service: 'Electrician', verified: true },
  { id: 2, user: 'Priya Patel', rating: 4, date: '1 week ago', comment: 'AC servicing was good. The technician arrived on time and was very polite. A bit expensive but quality is great.', service: 'AC Repair', verified: true },
  { id: 3, user: 'Sanjay Vankar', rating: 5, date: '2 weeks ago', comment: 'Plumbing emergency handled very well. Suresh is a real expert. Thank you Sabarkantha Services!', service: 'Plumber', verified: true },
  { id: 4, user: 'Anjali Desai', rating: 5, date: '3 weeks ago', comment: 'Deep cleaning service was amazing. My house looks brand new. The team was very thorough.', service: 'Home Cleaning', verified: true },
  { id: 5, user: 'Rakesh Prajapati', rating: 4, date: '1 month ago', comment: 'RO service was quick. Filter change done properly. Good service overall.', service: 'RO Service', verified: true },
];

export default function Reviews() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Customer <span className="text-orange-600">Reviews</span></h1>
            <p className="text-lg text-slate-600">
              See what your neighbors in Sabarkantha are saying about our verified service professionals.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">4.8</div>
              <div className="flex text-yellow-500 my-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-100 mx-4" />
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">1.2k</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Total Reviews</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500 mr-4">
            <Filter className="w-4 h-4" /> Filter by:
          </div>
          {['All', 'Plumber', 'Electrician', 'AC Repair', 'Cleaning'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all border",
                filter === cat 
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-orange-200 hover:text-orange-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 font-bold text-xl">
                    {review.user[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900">{review.user}</h3>
                      {review.verified && <ShieldCheck className="w-4 h-4 text-orange-600" />}
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{review.date} • {review.service}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-4 h-4", i < review.rating ? "fill-current" : "text-slate-200")} />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 italic">"{review.comment}"</p>
              <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-orange-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" /> Helpful
                </button>
                <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-orange-600 transition-colors">
                  <MessageSquare className="w-4 h-4" /> Reply
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
