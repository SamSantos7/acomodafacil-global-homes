
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-secondary font-bold text-xl">
                Acomoda<span className="text-primary">Fácil</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-primary font-medium">
              Destinos
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              Sobre Nós
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contato
            </Link>
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
              <User size={16} />
              <span>Entrar</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/destinations" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinos
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2 w-full justify-center border-primary text-primary hover:bg-primary hover:text-white">
                  <User size={16} />
                  <span>Entrar</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
