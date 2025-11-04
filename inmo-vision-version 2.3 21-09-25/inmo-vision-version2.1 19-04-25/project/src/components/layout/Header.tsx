import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Info, Phone, User } from 'lucide-react';
import classNames from 'classnames';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Inicio', icon: <Home className="w-5 h-5" /> },
    { path: '/properties', label: 'Propiedades', icon: <Building className="w-5 h-5" /> },
    { path: '/about', label: 'Nosotros', icon: <Info className="w-5 h-5" /> },
    { path: '/contact', label: 'Contacto', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <header
      className={classNames(
        'sticky top-0 z-50 transition-all duration-300 w-full',
        {
          'bg-white shadow-md': isScrolled,
          'bg-transparent': !isScrolled && location.pathname === '/',
          'bg-white': !isScrolled && location.pathname !== '/',
        }
      )}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="mr-2 text-primary-700">
              <Building className="w-8 h-8" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-primary-800">
              Inmo-Visión
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={classNames(
                  'font-medium text-lg transition-colors',
                  {
                    'text-primary-700 underline underline-offset-8 decoration-accent-500 decoration-2':
                      location.pathname === item.path,
                    'text-neutral-800 hover:text-primary-600':
                      location.pathname !== item.path,
                  }
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="btn btn-secondary">
              <User className="w-5 h-5 mr-2" />
              <span>Iniciar Sesión</span>
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contáctanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-neutral-800 hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={classNames(
            'lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out origin-top',
            {
              'opacity-100 scale-y-100': isOpen,
              'opacity-0 scale-y-0 pointer-events-none': !isOpen,
            }
          )}
        >
          <div className="container-custom py-4 divide-y divide-neutral-200">
            <nav className="py-4">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={classNames(
                        'flex items-center py-2 px-4 rounded-md transition-colors',
                        {
                          'bg-primary-50 text-primary-700':
                            location.pathname === item.path,
                          'text-neutral-800 hover:bg-neutral-100 hover:text-primary-600':
                            location.pathname !== item.path,
                        }
                      )}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="py-4 space-y-3">
              <Link
                to="/login"
                className="block py-2 px-4 rounded-md text-neutral-800 hover:bg-neutral-100 transition-colors flex items-center"
              >
                <User className="w-5 h-5 mr-3" />
                Iniciar Sesión
              </Link>
              <Link to="/contact" className="btn btn-primary w-full">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;