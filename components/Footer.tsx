import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-card-border bg-background-dark py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">school</span>
              <span className="font-bold text-lg">Ho Chi Minh City University of Technology</span>
            </div>
            <p className="text-slate-500 text-sm">Final Year Project - Computer Engineering 2024</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors group">
               <div className="size-10 rounded-full bg-surface-dark flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all border border-card-border">
                  <span className="material-symbols-outlined text-[20px]">code</span>
               </div>
               <span className="text-xs">GitHub</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors group">
               <div className="size-10 rounded-full bg-surface-dark flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all border border-card-border">
                  <span className="material-symbols-outlined text-[20px]">description</span>
               </div>
               <span className="text-xs">Docs</span>
            </a>
             <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors group">
               <div className="size-10 rounded-full bg-surface-dark flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all border border-card-border">
                  <span className="material-symbols-outlined text-[20px]">groups</span>
               </div>
               <span className="text-xs">Team</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
           <span>© 2024 IIoT Lighting Group. All rights reserved.</span>
           <div className="flex gap-4">
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;