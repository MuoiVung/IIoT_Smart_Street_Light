import React from 'react';

const Architecture: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          System Architecture
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Technical Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Data Flow</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          An interactive visualization of the end-to-end IIoT pipeline, from edge sensor nodes to cloud-based analytics and control.
        </p>
      </div>

      {/* Main Diagram Area */}
      <div className="w-full bg-surface-dark/50 border border-card-border rounded-2xl p-6 md:p-10 relative overflow-hidden group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-4">
          
          {/* End Nodes */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative bg-surface-dark border border-card-border rounded-2xl p-6 shadow-glow hover:border-primary/50 transition-colors h-full flex flex-col">
              <div className="flex items-center justify-between mb-6 border-b border-card-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">memory</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">End Nodes</h3>
                    <p className="text-xs text-slate-400 font-mono">ESP32 Controller</p>
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">ID: N01-N05</div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="material-symbols-outlined text-primary text-sm">wb_sunny</span>
                  <span className="text-xs text-slate-300">Light Sensor</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="material-symbols-outlined text-secondary text-sm">water_drop</span>
                  <span className="text-xs text-slate-300">Rain Sensor</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="material-symbols-outlined text-red-400 text-sm">directions_walk</span>
                  <span className="text-xs text-slate-300">PIR Motion</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="material-symbols-outlined text-orange-400 text-sm">electric_bolt</span>
                  <span className="text-xs text-slate-300">INA219</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-card-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Actuators</span>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(251,191,36,0.8)]" title="LED 1"></span>
                    <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(251,191,36,0.8)]" title="LED 2"></span>
                    <span className="w-3 h-3 rounded-full bg-slate-700 border border-slate-600" title="LED 3 (Off)"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Line 1 */}
          <div className="flex lg:flex-col items-center justify-center gap-2 relative min-h-[80px] lg:min-w-[120px]">
             <div className="hidden lg:block w-full h-[2px] bg-card-border relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/80 w-1/2 animate-[moveRight_1.5s_linear_infinite]" style={{boxShadow: '0 0 10px #06b6d4'}}></div>
             </div>
             <div className="lg:hidden h-16 w-[2px] bg-card-border relative overflow-hidden mx-auto">
                <div className="absolute inset-0 bg-secondary/80 h-1/2 animate-[moveDown_1.5s_linear_infinite]" style={{boxShadow: '0 0 10px #06b6d4'}}></div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-dark border border-secondary px-3 py-1 rounded-full z-10 shadow-glow-cyan">
                <span className="text-[10px] font-bold text-secondary whitespace-nowrap flex items-center gap-1">
                   <span className="material-symbols-outlined text-[12px] animate-pulse">rss_feed</span>
                   LoRa 433MHz
                </span>
             </div>
          </div>

          {/* Gateway */}
          <div className="flex-none w-full lg:w-[240px] flex flex-col">
            <div className="relative bg-surface-dark border border-card-border rounded-2xl p-6 hover:border-secondary/30 transition-colors h-full flex flex-col items-center justify-center text-center">
              <div className="p-3 rounded-xl bg-slate-800 mb-4 border border-slate-700">
                <img alt="Raspberry Pi" className="w-10 h-10 object-contain grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsemRUzY7h0eZus4bWItEKzJRIVP5RNBF9wFwgcCNjhvGQWK83pLPOKORPZp6CNjbTl5S6UDVmi1pGKua3vMYNKn3cvtEKwPJYVCtm7SgI6dD3vpEs8fVwWEXdGwtrGbHCAQ03HHjrVLl__7RDHpNCwBZRsuDIO8odE26WVmzMM7EVvD-sUWTv7_bSvK5nXsTOqhu_HQjlXnkLxAgynhog48lzVMbdyINmtA-51Hwkd5oN0Kq16SA_XNmJMZ3NeyQDhaT72Eg29VUK"/>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Gateway Layer</h3>
              <p className="text-xs text-slate-400 font-mono mb-3">Raspberry Pi 3</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-300">Python</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-300">MQTT Broker</span>
              </div>
            </div>
          </div>

           {/* Connection Line 2 */}
           <div className="flex lg:flex-col items-center justify-center gap-2 relative min-h-[80px] lg:min-w-[120px]">
             <div className="hidden lg:block w-full h-[2px] bg-card-border relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/80 w-1/2 animate-[moveRight_1s_linear_infinite]" style={{boxShadow: '0 0 10px #06b6d4'}}></div>
             </div>
             <div className="lg:hidden h-16 w-[2px] bg-card-border relative overflow-hidden mx-auto">
                <div className="absolute inset-0 bg-secondary/80 h-1/2 animate-[moveDown_1s_linear_infinite]" style={{boxShadow: '0 0 10px #06b6d4'}}></div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-dark border border-secondary px-3 py-1 rounded-full z-10 shadow-glow-cyan">
                <span className="text-[10px] font-bold text-secondary whitespace-nowrap flex items-center gap-1">
                   <span className="material-symbols-outlined text-[12px]">cloud_upload</span>
                   Internet/MQTT
                </span>
             </div>
          </div>

          {/* Cloud */}
          <div className="flex-1 flex flex-col">
            <div className="relative bg-surface-dark border border-card-border rounded-2xl p-6 hover:border-secondary/50 transition-colors h-full flex flex-col">
              <div className="flex items-center justify-between mb-6 border-b border-card-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <span className="material-symbols-outlined">dns</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Cloud & Analytics</h3>
                    <p className="text-xs text-slate-400 font-mono">Server / Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                  <span className="text-[10px] text-secondary font-bold uppercase">Online</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="p-1.5 bg-blue-500/20 rounded text-blue-400">
                    <span className="material-symbols-outlined text-[20px]">monitoring</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Thingsboard</h4>
                    <p className="text-xs text-slate-400">Real-time Visualization & Control Panel</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="p-1.5 bg-purple-500/20 rounded text-purple-400">
                    <span className="material-symbols-outlined text-[20px]">database</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">InfluxDB</h4>
                    <p className="text-xs text-slate-400">Time-series data storage & prediction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Stack Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-surface-dark border border-card-border rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-card-border bg-slate-800/30 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">hardware</span>
              Hardware Stack
            </h2>
            <span className="text-xs font-mono text-slate-500">v2.0</span>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[
                { title: 'ESP32-WROOM-32', desc: 'Dual-core microcontroller for edge processing.' },
                { title: 'Sensor Array', desc: 'LDR (Light), HC-SR501 (PIR), Rain module, INA219 (Voltage/Current).' },
                { title: 'Communication Modules', desc: 'SX1278 Mini LoRa (433MHz) for long range.' },
                { title: 'Gateway Unit', desc: 'Raspberry Pi 3 Model B+ as the central coordinator.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  <div>
                    <strong className="text-white block text-sm">{item.title}</strong>
                    <span className="text-sm text-slate-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-surface-dark border border-card-border rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-card-border bg-slate-800/30 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">terminal</span>
              Software Stack
            </h2>
            <span className="text-xs font-mono text-slate-500">v1.4</span>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[
                { title: 'IoT Platform', desc: 'Thingsboard PE (Professional Edition) for device management and dashboards.' },
                { title: 'Database', desc: 'InfluxDB for high-performance time-series data storage.' },
                { title: 'Gateway Scripts', desc: 'Custom Python 3 scripts utilizing Paho-MQTT libraries.' },
                { title: 'Protocols', desc: 'MQTT over TCP/IP, LoRaWAN proprietary p2p.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  <div>
                    <strong className="text-white block text-sm">{item.title}</strong>
                    <span className="text-sm text-slate-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes moveRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
        }
        @keyframes moveDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
};

export default Architecture;