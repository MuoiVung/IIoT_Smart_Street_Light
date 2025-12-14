import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-12 md:px-10 lg:py-20 flex justify-center">
        <div className="w-full max-w-7xl flex flex-col gap-8">
          <div className="relative overflow-hidden rounded-2xl bg-surface-dark border border-white/10 min-h-[560px] flex items-center justify-center p-6 md:p-12 shadow-2xl group">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80 transition-transform duration-1000 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzMVj1M05C8zUtoZhcibF90ocRbcx-wj8PtQs6J_B9ojTrLutv9QQPdZkw2IKdU6SlNPFNqmQ3MoAwA90TOz0DxN_m73KZGuYsByo6X0JrOefXkMeVj9di7so0ExG_L6LcXsnnSdeI6ZvpRX1_56DhN5-sIomyRDlMMIQuaYjWlV0yHVFt_KEMOgjLqMNe9xaD_AlLsLCFoVvctSlVmyKMAqjAdZWtC3glE3sYnyIQxu4xRJ0x2Ob_DaaCjQTtWrnw7_6eaEuzAxnD")'}}></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/40"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/60 to-transparent"></div>
            
            <div className="relative z-20 flex flex-col gap-6 max-w-3xl mr-auto pt-10">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 backdrop-blur-sm shadow-glow">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">System Online</span>
              </div>
              
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Smarter Lights,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-secondary">Safer Cities.</span>
              </h1>
              
              <p className="text-lg font-light leading-relaxed text-slate-300 md:text-xl max-w-2xl">
                An end-to-end IIoT solution optimizing energy consumption and enabling predictive maintenance using <span className="font-mono text-primary font-bold">ESP32</span>, <span className="font-mono text-secondary font-bold">LoRaWAN</span>, and <span className="font-mono text-secondary font-bold">Cloud Analytics</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link to="/architecture" className="group flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-bold text-background-dark shadow-glow hover:bg-amber-400 transition-all duration-300">
                  <span>View Architecture</span>
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <Link to="/features" className="flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 hover:border-secondary/50 transition-all">
                  <span className="material-symbols-outlined text-secondary">play_circle</span>
                  <span>Watch Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="w-full px-4 pb-20 md:px-10 flex justify-center">
        <div className="w-full max-w-7xl flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Core Capabilities</h2>
            <p className="text-slate-400 max-w-2xl">Our system leverages cutting-edge industrial protocols to deliver verified efficiency.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: 'energy_savings_leaf', color: 'text-primary', title: 'Energy Efficiency', desc: 'Adaptive dimming algorithms and motion sensing triggers, achieving up to 40% savings.' },
              { icon: 'sensors', color: 'text-secondary', title: 'Long-Range Connectivity', desc: 'Reliable data transmission over kilometers using LoRaWAN technology in dense urban canyons.' },
              { icon: 'engineering', color: 'text-primary', title: 'Smart Maintenance', desc: 'Real-time anomaly detection for instant repairs and zero downtime monitoring.' }
            ].map((card, i) => (
              <div key={i} className="group relative flex flex-col gap-6 rounded-2xl border border-white/5 bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300 overflow-hidden">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${i === 1 ? 'bg-secondary/5 group-hover:bg-secondary/20' : 'bg-primary/5 group-hover:bg-primary/20'} blur-3xl transition-all duration-500`}></div>
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${i === 1 ? 'from-secondary/20 border-secondary/20' : 'from-primary/20 border-primary/20'} border ${card.color}`}>
                  <span className="material-symbols-outlined" style={{fontSize: '32px'}}>{card.icon}</span>
                </div>
                <div className="flex flex-col gap-3 z-10">
                  <h3 className={`text-xl font-bold text-white group-hover:${card.color.replace('text-', '')} transition-colors`}>{card.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/5 pt-10">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">Powered By</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['ESP32', 'LoRaWAN', 'MQTT', 'Node-RED', 'InfluxDB', 'Grafana'].map(tech => (
                <span key={tech} className="text-xl font-bold text-white font-mono hover:text-primary transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;