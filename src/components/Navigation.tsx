import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PageType } from '../types';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Track whether the logo image loaded successfully; if not, show the text fallback
  const [logoLoaded, setLogoLoaded] = useState(true);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'ecosystem', label: 'The Ecosystem' },
    { id: 'projects', label: 'Flagship Projects' },
    { id: 'support', label: 'Support Us' },
    { id: 'team', label: 'Our Team' },
  ];

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            {/* Logo image: place `logo.png` in `public/` or change the src to a hosted URL. Falls back to text if image is missing. */}
            <div className="w-10 h-10 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform bg-teal-500 flex items-center justify-center relative">
              <img
                src="/logo.png"
                alt="Ruhuna Engineering Hub"
                className={`w-full h-full object-cover ${logoLoaded ? 'block' : 'hidden'}`}
                onLoad={() => setLogoLoaded(true)}
                onError={() => setLogoLoaded(false)}
              />
              {!logoLoaded && (
                <span className="text-white font-bold text-xl">RE</span>
              )}
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight">
                Ruhuna Engineering Hub
              </div>
              <div className="text-gray-400 text-xs">MMESS</div>
            </div>
          </button>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
