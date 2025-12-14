import React, { useState, useEffect, useRef } from 'react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'System Architecture', path: '/architecture' },
  { label: 'Features & Demo', path: '/features' },
  { label: 'Progression', path: '/progression' },
  { label: 'Team & Docs', path: '/team' },
];

const Header: React.FC = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors shadow-glow">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <span className="text-white text-lg font-bold tracking-tight">IIoT Smart Lighting</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive ? 'text-primary' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-[30px] left-0 w-full h-0.5 bg-primary shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            
            {/* Language Select Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-border/50 hover:bg-card-border text-xs font-bold text-white transition-all border border-white/10"
              >
                <span className="material-symbols-outlined text-[18px]">language</span>
                <span>{selectedLang}</span>
                <span className={`material-symbols-outlined text-[16px] transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-surface-dark border border-card-border shadow-xl overflow-hidden py-1 z-50">
                  {['EN', 'VN', 'TW'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors flex items-center justify-between ${selectedLang === lang ? 'text-primary' : 'text-slate-300'}`}
                    >
                      {lang}
                      {selectedLang === lang && <span className="material-symbols-outlined text-[16px]">check</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 rounded-full hover:bg-white/10 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background-dark border-t border-card-border p-4 absolute w-full left-0">
          <nav className="flex flex-col gap-4">
             {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium ${location.pathname === item.path ? 'text-primary' : 'text-slate-400'}`}
                >
                  {item.label}
                </Link>
             ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;