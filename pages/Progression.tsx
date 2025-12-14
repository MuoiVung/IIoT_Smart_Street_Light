import React from 'react';

const Progression: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-20 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Project Status: Optimization
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Project Timeline <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">& Milestones</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Development journey from initial concept and sensor testing to final full-stack implementation.
        </p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-surface-dark md:-translate-x-1/2"></div>
        
        {/* Item 1 */}
        <div className="relative mb-16 md:mb-24 group">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full">
            <div className="w-full md:w-1/2 md:pr-12 pl-12 md:pl-0 md:text-right">
              <div className="p-6 md:p-8 rounded-[2rem] bg-surface-dark border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="flex items-center gap-3 md:justify-end mb-4 text-primary">
                  <span className="text-xs font-bold tracking-wider uppercase px-2 py-1 bg-primary/10 rounded-full border border-primary/20">Weeks 1-4</span>
                  <span className="material-symbols-outlined">hardware</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Research & Hardware</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">Foundation phase focused on component selection and initial feasibility studies.</p>
                <ul className="space-y-2 text-sm text-slate-300 inline-block text-left font-mono">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Initial ESP32 sensor testing</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Lighting hardware selection</li>
                </ul>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <div className="size-4 rounded-full bg-primary shadow-glow z-10 ring-4 ring-background-dark"></div>
            </div>
            <div className="hidden md:block w-1/2 pl-12">
               <span className="text-5xl font-black text-white/5 select-none absolute top-1/2 -translate-y-1/2 ml-4">01</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative mb-16 md:mb-24 group">
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center w-full">
            <div className="w-full md:w-1/2 md:pl-12 pl-12 md:pl-0">
              <div className="p-6 md:p-8 rounded-[2rem] bg-surface-dark border border-white/5 hover:border-secondary/30 transition-all duration-300 shadow-lg group-hover:shadow-glow-cyan relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -ml-16 -mt-16"></div>
                <div className="flex items-center gap-3 mb-4 text-secondary">
                  <span className="material-symbols-outlined">hub</span>
                  <span className="text-xs font-bold tracking-wider uppercase px-2 py-1 bg-secondary/10 rounded-full border border-secondary/20">Weeks 5-8</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Connectivity & Gateway</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">Establishing the long-range communication network backbone.</p>
                <ul className="space-y-2 text-sm text-slate-300 font-mono">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> LoRa P2P communication</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Raspberry Pi Gateway setup</li>
                </ul>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <div className="size-4 rounded-full bg-secondary shadow-glow-cyan z-10 ring-4 ring-background-dark"></div>
            </div>
            <div className="hidden md:block w-1/2 pr-12 text-right relative">
               <span className="text-5xl font-black text-white/5 select-none absolute top-1/2 -translate-y-1/2 right-0 mr-4">02</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative mb-16 md:mb-24 group">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full">
            <div className="w-full md:w-1/2 md:pr-12 pl-12 md:pl-0 md:text-right">
              <div className="p-6 md:p-8 rounded-[2rem] bg-surface-dark border border-white/5 hover:border-secondary/30 transition-all duration-300 shadow-lg group-hover:shadow-glow-cyan relative overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mb-16"></div>
                <div className="flex items-center gap-3 md:justify-end mb-4 text-secondary">
                  <span className="text-xs font-bold tracking-wider uppercase px-2 py-1 bg-secondary/10 rounded-full border border-secondary/20">Weeks 9-12</span>
                  <span className="material-symbols-outlined">database</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Data Infrastructure</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">Processing and visualizing the sensor data stream.</p>
                <ul className="space-y-2 text-sm text-slate-300 inline-block text-left font-mono">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Thingsboard deployment</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span> InfluxDB integration</li>
                </ul>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <div className="size-4 rounded-full bg-secondary shadow-glow-cyan z-10 ring-4 ring-background-dark"></div>
            </div>
            <div className="hidden md:block w-1/2 pl-12">
               <span className="text-5xl font-black text-white/5 select-none absolute top-1/2 -translate-y-1/2 ml-4">03</span>
            </div>
          </div>
        </div>
        
         {/* Item 4 */}
         <div className="relative group">
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center w-full">
            <div className="w-full md:w-1/2 md:pl-12 pl-12 md:pl-0">
              <div className="p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-surface-dark to-primary/10 border border-primary/30 shadow-lg shadow-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                    <span className="text-xs font-bold tracking-wider uppercase px-2 py-1 bg-primary text-black rounded-full shadow-lg shadow-primary/40">Weeks 13-16</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Finalization & Launch</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">System integration, rigorous testing, and final deployment.</p>
                </div>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
               <div className="size-6 rounded-full bg-white flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,255,255,0.6)] ring-4 ring-background-dark">
                  <div className="size-2 rounded-full bg-primary animate-ping"></div>
               </div>
            </div>
            <div className="hidden md:block w-1/2 pr-12 text-right relative">
               <span className="text-5xl font-black text-primary/10 select-none absolute top-1/2 -translate-y-1/2 right-0 mr-4">04</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Progression;