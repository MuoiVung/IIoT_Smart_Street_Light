import React from 'react';

const Team: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      <div className="flex flex-col gap-4 p-6 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-xl shadow-lg">
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-lg">The Team & Resources</h1>
        <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">
          Meet the developers behind the Smart Street Lighting project and access our comprehensive technical documentation.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-3 px-4 pb-6 pt-2">
          <span className="material-symbols-outlined text-secondary text-2xl drop-shadow-lg">groups</span>
          <h2 className="text-white text-2xl font-bold leading-tight">Project Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {[
            { name: 'Alex Nguyen', role: 'Hardware Lead', sub: 'PCB Design & Sensors', icon: 'memory', color: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV6JdsdcdNvmaJH6uMynbZriBG-nknYd5Y6rV7Tt97gnRZaF2Z5XKO6uKkES6sWzRvHI2bD7Hm1Eo4fkx-UTA4_85c-fetVXoooA6t8aILOlhPQ1f1KOucLqbxZ7vYDdHpow7Vb9CmDQ1VrkNA4izqGjOTqfT3M5nNSQ6SWt2vGPDirK_CBy2QJvTfnz71AQFWzVMEvIIae8CvwQtiCr7yY3YLKJb4CDYB3aWAd-zK4QLmqIAhBUnrOJsVzM3ZLwkG077vm655pAQQ' },
            { name: 'Sarah Chen', role: 'Cloud & Backend', sub: 'Server & Database', icon: 'dns', color: 'text-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnulZSlP4LXyT0jjToMEhYa1EwfajQtdoc4Y8e22cbvJ1OVlvQiSq6ODLzgIhb0AFbx4eSsYTdD7sAmqL4283zxPjU1Qz5c-0sbsE2INMMpuWhKOyc3_226CqZbCBKCAGzmSg5EIUk4_P_b79rH_wYAMhBOaA_E-cWObsXBEkaWb_w8GUQ7ML3EelYFAt0ALNa45efbiyCbLSRJFUbTxEMWN1I-JIxVGjuunv8xycJiDp9h_HHsxsAuzR7excS-bC7elAVkaiHF3c0' },
            { name: 'David Tran', role: 'Gateway Specialist', sub: 'LoRaWAN & Net', icon: 'router', color: 'text-indigo-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQBhqtyZG5eNpBj3iIQ10Gl973jgeN1-moiRBJxLp8zPmi-3wIJoxSPP1L7gdiCKGnyGLOXWjHt_DjPpFIorEBhq-05Cpkv5NuIUE5_diPuLi52XBtJcRv6pd3lIlpGO02N4ihoS9yiT80TPRvBOxgBeNA6NN2yqQPFmWBTcNU-QBELbMNbCNzcrPm_AOxnYvRKZ7TASp6Izmu8rsgX9N2g_vBl8C0yCO3mr9Pv_7vuPzp7hJbLAyhSpDt8fKGt0xMM0oIFgWt7ys5' },
            { name: 'Emily Vo', role: 'Frontend & UI', sub: 'Dashboard & UX', icon: 'dashboard', color: 'text-teal-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMSPEngZ6jE4Mfou9CRG4pfxXZU0VN-f2cdNTg1LpG6j5g5NVGulcAy_WQ5-zZZ79wqxYewS41GWAhFa2t7RS_Uaf-Osak0ItCvbFYY25OPQm7SggaDdVfb8-bgY6HRvdi0AojS5e42OQyGTAyl5ZiYIZPWN9jRk_wNjEnn9g4ac2I63-zx9VAro2A88KFl8ldNDFBtk3nZ35oBB9B8SVXyKo3zwfQUm_mVMISHiA5oIwaP4qTczXqnXrJ4SiR1GKmt8WpYlzf0K4g' }
          ].map((member, i) => (
             <div key={i} className={`group relative flex flex-col gap-4 p-6 bg-surface-dark/50 backdrop-blur-sm rounded-2xl border border-card-border hover:border-${member.color.replace('text-', '')} hover:shadow-lg transition-all duration-300`}>
               <div className={`absolute top-4 right-4 text-slate-500 group-hover:${member.color} transition-colors`}>
                  <span className="material-symbols-outlined">{member.icon}</span>
               </div>
               <div className={`w-24 h-24 rounded-full border-2 border-slate-600 group-hover:border-${member.color.replace('text-', '')} overflow-hidden transition-colors mx-auto bg-cover bg-center shadow-lg`} style={{backgroundImage: `url('${member.img}')`}}></div>
               <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                  <p className={`${member.color} text-sm font-semibold uppercase tracking-wider mb-2`}>{member.role}</p>
                  <p className="text-slate-400 text-xs font-mono bg-slate-900/50 rounded py-1 px-2 inline-block border border-card-border">{member.sub}</p>
               </div>
               <div className="flex justify-center gap-3 mt-auto pt-4 border-t border-card-border/50">
                  <button className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-[20px]">link</span></button>
                  <button className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-[20px]">alternate_email</span></button>
               </div>
             </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 px-4 pb-6 pt-2 border-t border-card-border/50">
          <span className="material-symbols-outlined text-primary text-2xl drop-shadow-lg">folder_open</span>
          <h2 className="text-white text-2xl font-bold leading-tight">Resources & Downloads</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
           {[
             { title: 'Source Code', desc: 'Access the full project repository including firmware.', icon: 'code', meta: 'v2.1.0', color: 'text-secondary', hover: 'hover:border-secondary' },
             { title: 'Final Report', desc: 'Comprehensive thesis documentation.', icon: 'picture_as_pdf', meta: 'PDF - 45MB', color: 'text-primary', hover: 'hover:border-primary' },
             { title: 'Presentation Slides', desc: 'The final defense presentation deck.', icon: 'co_present', meta: 'PPTX - 12MB', color: 'text-indigo-400', hover: 'hover:border-indigo-400' }
           ].map((item, i) => (
             <a key={i} href="#" className={`group relative flex flex-col justify-between p-6 bg-surface-dark/50 rounded-xl border border-card-border ${item.hover} transition-all overflow-hidden`}>
                <div className="flex items-start justify-between mb-4 z-10">
                   <div className={`p-3 rounded-lg bg-slate-900 ${item.color} shadow-inner`}>
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                   </div>
                   <span className="text-xs font-mono text-slate-400 border border-slate-600 rounded px-2 py-1 bg-slate-900/50">{item.meta}</span>
                </div>
                <div className="z-10">
                   <h3 className={`text-white text-lg font-bold mb-1 group-hover:${item.color.replace('text-', '')} transition-colors`}>{item.title}</h3>
                   <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                   <div className={`flex items-center text-slate-300 font-medium group-hover:${item.color.replace('text-', '')} transition-colors`}>
                      <span>Download</span>
                      <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                   </div>
                </div>
             </a>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Team;