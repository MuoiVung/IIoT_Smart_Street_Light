import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative w-full bg-background-dark">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)'}}></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-background-dark"></div>
      
      <Header />
      <main className="flex-grow w-full relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;