'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden group">
          {/* Decorative Blue Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all duration-700" />
          
          <div className="relative z-10">
            <header className="text-center mb-10">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 mb-6 shadow-sm"
              >
                <Shield className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 text-slate-900">
                CUBELOGS<span className="text-blue-600">_</span>MASTER
              </h1>
              <p className="text-slate-500 font-medium">Orchestration Control Unit</p>
            </header>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Master Identity"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all font-bold text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    placeholder="Security Pattern"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all font-bold text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-blue-600/20"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Initiate Sequence
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black text-slate-400">
                  <span className="bg-white px-3">Bypass Protocol</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => router.push('/dashboard'), 800);
                }}
                className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold transition-all border border-slate-200 hover:border-blue-200"
              >
                Quick Master Access
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Powered by Cubelogs Core
          </p>
        </footer>
      </motion.div>
    </main>
  );
}
