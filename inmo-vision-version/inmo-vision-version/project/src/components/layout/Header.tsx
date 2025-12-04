import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Building, Info, Phone, User, LogOut } from "lucide-react";
import classNames from "classnames";
import { useAuth } from './AuthContext'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navItems = [
    { path: "/", label: "Inicio", icon: <Home className="w-5 h-5" /> },
    { path: "/properties", label: "Propiedades", icon: <Building className="w-5 h-5" /> },
    { path: "/about", label: "Nosotros", icon: <Info className="w-5 h-5" /> },
    { path: "/contact", label: "Contacto", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <header
      className={classNames(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        {
          "bg-white shadow-md": isScrolled,
          "bg-transparent": !isScrolled && location.pathname === "/",
          "bg-white": !isScrolled && location.pathname !== "/",
        }
      )}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="mr-2 text-primary-700">
              <Building className="w-8 h-8" />
            </div>
            <span className="text-2xl font-serif font-bold text-primary-800">
              Inmo-Visión
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={classNames(
                  "font-medium text-lg transition-colors",
                  {
                    "text-primary-700 underline underline-offset-8 decoration-accent-500 decoration-2":
                      location.pathname === item.path,
                    "text-neutral-800 hover:text-primary-600":
                      location.pathname !== item.path,
                  }
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ---------- DESKTOP USER AREA ---------- */}
          <div className="hidden lg:flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/login" className="btn btn-secondary">
                  <User className="w-5 h-5 mr-2" />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Contáctanos
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="font-medium text-neutral-700 hover:text-primary-600"
                >
                  Mis Propiedades
                </Link>

                <Link
                  to="/profile"
                  className="font-medium text-neutral-700 hover:text-primary-600"
                >
                  Perfil
                </Link>

                <button onClick={logout} className="text-red-600 hover:text-red-800 flex items-center">
                  <LogOut className="w-5 h-5 mr-1" />
                  Salir
                </button>
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-neutral-800 hover:bg-neutral-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        <div
          className={classNames(
            "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 origin-top",
            {
              "opacity-100 scale-y-100": isOpen,
              "opacity-0 scale-y-0 pointer-events-none": !isOpen,
            }
          )}
        >
          <div className="container-custom py-4 divide-y divide-neutral-200">
            {/* Navegación */}
            <nav className="py-4">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={classNames(
                        "flex items-center py-2 px-4 rounded-md transition-colors",
                        {
                          "bg-primary-50 text-primary-700":
                            location.pathname === item.path,
                          "text-neutral-800 hover:bg-neutral-100 hover:text-primary-600":
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

            {/* Área Usuario Mobile */}
            <div className="py-4 space-y-3">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="flex items-center py-2 px-4 rounded-md hover:bg-neutral-100"
                  >
                    <User className="w-5 h-5 mr-3" />
                    Iniciar Sesión
                  </Link>
                  <Link to="/contact" className="btn btn-primary w-full">
                    Contáctanos
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-4 rounded-md hover:bg-neutral-100"
                  >
                    Mis Propiedades
                  </Link>
                  <Link
                    to="/profile"
                    className="block py-2 px-4 rounded-md hover:bg-neutral-100"
                  >
                    Perfil
                  </Link>

                  <button
                    onClick={logout}
                    className="w-full text-left py-2 px-4 text-red-600 hover:bg-neutral-100"
                  >
                    <LogOut className="w-5 h-5 inline-block mr-2" />
                    Cerrar Sesión
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
