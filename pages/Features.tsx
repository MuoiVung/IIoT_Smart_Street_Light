import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      
      {/* Title Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-primary"></span>
          <span className="text-primary text-xs font-mono tracking-widest uppercase">Project Showcase Page 3</span>
        </div>
        <h1 className="text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          System Features & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Live Demo</span>
        </h1>
        <p className="text-slate-400 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
          Experience the real-time responsiveness and industrial-grade control of our smart lighting solution.
        </p>
      </div>

      {/* Feature 1: Adaptive Response */}
      <div className="flex flex-col gap-8 rounded-3xl bg-surface-dark border border-white/5 p-8 lg:p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 z-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-background-dark font-bold text-sm">1</span>
              <h3 className="text-primary font-mono text-sm uppercase tracking-wider">Smart Control Logic</h3>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Adaptive Lighting Response</h2>
            <p className="text-slate-400 leading-relaxed">
              Our system utilizes PIR sensors to dynamically adjust street light intensity. When no motion is detected, lights dim to 30%. Upon object detection, brightness restores to 100%.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                <span className="text-xs font-mono text-white">Save 70% Energy</span>
             </div>
             <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-secondary text-sm">timer</span>
                <span className="text-xs font-mono text-white">Latency &lt;200ms</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 z-10">
          {/* Idle State */}
          <div className="group relative flex flex-col gap-4 p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-all">
             <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATPjUDxUxdaQFRdUT2-Sq7xNNEcGO3DKKdywgiAxEw-6IoOl1NZch4Kj9Dmxq93VFlc6tgjHQzSE4d16CpeBnKJ4NllKxhVyiBwKiepyFqgshmK9SzHrhULJCwu41jyrNWkKVnhGyhEsEDuyq7Qc1I1vbS1DhcxD3eezeD1x0XeGuLqb78IoKetNStuIFQaexL5Y8fbeASchWZWIp2rksKnlJiLpNiJFJ5S-QG60OGC4kSoiKkI9My5h7pcDm2kUWZiDutSOQn_d_c")'}}></div>
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                   <span className="text-xs font-mono text-slate-300">NO MOTION</span>
                </div>
             </div>
             <div>
                <h4 className="text-white text-lg font-bold">Idle State</h4>
                <p className="text-slate-500 text-sm">Lights dimmed to 30% brightness.</p>
             </div>
          </div>

          {/* Active State */}
          <div className="group relative flex flex-col gap-4 p-4 rounded-2xl bg-[#334155] border border-primary/30 shadow-glow transition-all">
             <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5qKlMKc-gW5SLTNco8KnciANP_pZDxGSY7Rq5f_HXo7OsFNKI2PwXX8FpC4ZzA3O-rb1EQvnMNhhDzNWVJ_nb9SLca74MxXqUbepsGMQ2r_LAGAGZWOZSHF337oJ9IxAF0KMYApC66Demb8BKmA5qpY-hbSM56kGakmkRRQ2SLM-hjO68goU6dfN_bHPS_yp-EQ1teJdSexLDx5hhIFs3_4zUtepwVGU35aakvds6wvlysRopbwQyDYoqk07lRItaxH1lcpPVcYQg")'}}></div>
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-background-dark font-bold">
                   <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                   <span className="text-xs font-mono">OBJECT DETECTED</span>
                </div>
                <div className="absolute inset-0 border-[3px] border-primary/20 m-4 rounded-lg pointer-events-none">
                   <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                   <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                   <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                   <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                </div>
             </div>
             <div>
                <h4 className="text-white text-lg font-bold flex items-center gap-2">
                   Active State 
                   <span className="material-symbols-outlined text-primary">check_circle</span>
                </h4>
                <p className="text-slate-400 text-sm">Lights restored to full 100% brightness instantly.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Dashboard */}
      <div>
        <div className="mb-10 pl-4 border-l-4 border-primary/50">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white font-bold text-xs">2</span>
            <h3 className="text-slate-400 font-mono text-sm uppercase tracking-wider">Visualization</h3>
          </div>
          <h2 className="text-3xl font-bold text-white">Real-time Dashboard</h2>
        </div>
        
        <div className="w-full rounded-xl bg-slate-950 border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]">
           {/* Sidebar Mockup */}
           <div className="w-full md:w-20 bg-slate-900 border-b md:border-b-0 md:border-r border-white/5 flex flex-row md:flex-col items-center justify-between md:justify-start py-4 px-4 md:gap-8">
              <div className="text-secondary"><span className="material-symbols-outlined">grid_view</span></div>
              <div className="flex flex-row md:flex-col gap-6 text-slate-500">
                 <div className="hover:text-white cursor-pointer"><span className="material-symbols-outlined">monitoring</span></div>
                 <div className="hover:text-white cursor-pointer"><span className="material-symbols-outlined">map</span></div>
                 <div className="hover:text-white cursor-pointer"><span className="material-symbols-outlined">devices</span></div>
                 <div className="hover:text-white cursor-pointer"><span className="material-symbols-outlined">settings</span></div>
              </div>
              <div className="hidden md:block mt-auto text-slate-600"><span className="material-symbols-outlined">logout</span></div>
           </div>
           
           {/* Main Dashboard Area */}
           <div className="flex-1 flex flex-col">
              <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-slate-800">
                 <h4 className="text-white font-medium text-sm">Thingsboard / Devices / Node-MCU-01</h4>
                 <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="text-secondary text-xs font-mono">LIVE CONNECTION</span>
                 </div>
              </div>
              <div className="flex-1 p-6 bg-slate-950 overflow-y-auto">
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
                    {/* Chart Mock */}
                    <div className="col-span-12 md:col-span-8 bg-slate-800/50 rounded-lg border border-white/5 p-5 flex flex-col">
                       <div className="flex justify-between items-start mb-6">
                          <div>
                             <p className="text-slate-400 text-xs font-mono uppercase">Power Consumption (W)</p>
                             <h3 className="text-white text-xl font-bold">245.8 W</h3>
                          </div>
                          <div className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded">Today</div>
                       </div>
                       <div className="flex-1 flex items-end gap-2 h-40 md:h-full w-full px-2 pb-2 relative">
                          {/* Bars */}
                          <div className="w-1/12 bg-secondary/20 h-[40%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/30 h-[30%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/20 h-[50%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/40 h-[70%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/60 h-[60%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/40 h-[80%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/80 h-[40%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/40 h-[30%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/30 h-[20%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/50 h-[45%] rounded-t-sm"></div>
                          <div className="w-1/12 bg-secondary/70 h-[90%] rounded-t-sm relative group">
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">Peak</div>
                          </div>
                          <div className="w-1/12 bg-secondary h-[65%] rounded-t-sm shadow-glow-cyan"></div>
                       </div>
                    </div>

                    {/* Stats & Map */}
                    <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">
                       <div className="bg-slate-800/50 rounded-lg border border-white/5 p-5 flex items-center gap-4">
                          <div className="relative size-20">
                             <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3"></path>
                                <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="85, 100" strokeWidth="3"></path>
                             </svg>
                             <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <span className="text-center text-sm font-bold text-white">85%</span>
                             </div>
                          </div>
                          <div>
                             <p className="text-slate-400 text-xs font-mono uppercase mb-1">Light Intensity</p>
                             <p className="text-white font-medium">High Output</p>
                             <p className="text-primary text-xs mt-1">Voltage: 12.4V</p>
                          </div>
                       </div>
                       
                       {/* Map Placeholder */}
                       <div className="col-span-12 h-full bg-slate-800/50 rounded-lg border border-white/5 overflow-hidden relative group">
                          <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur px-3 py-1 rounded text-xs text-white border border-white/10">
                              Zone A - Main Campus
                          </div>
                          <div className="w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvQq_gmHwVNo5SA_Au4rwFkvl8EiCs1nckanv_3m2PDL2ScJQoHmWnWUNqb0o0cnu4sYn_93zUFJbXhhZ44AcxOx9O2gePR1m1xpFRc8rRburCr8B6AD08CNzTlxoq272sxTBBR7FEvHhTFiB3Y9kuUKN0QSn-XnGs9dt7_sEJdzzigDbfvjokyvJ3qTBap87AjYSOh0y9jXVvPd9I_1qRT9a0koWL4nBcMGmHO_9tEihltUAinTsc0MqY36coKHzfZX9y2JOBeyGh")', filter: 'grayscale(100%) invert(100%) brightness(0.6)'}}></div>
                          <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-primary rounded-full shadow-glow animate-ping"></div>
                          <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Features;