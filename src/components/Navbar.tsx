import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Esencia', href: '#esencia' },
    { label: 'Puerto Vallarta 🌊', href: '#vallarta' },
    { label: 'Rutas Cercanas', href: '#destinos' },
    { label: 'Foodie', href: '#foodie' },
    { label: 'Imperdibles', href: '#imperdibles' },
  ];

  return (
    <nav className="nav" aria-label="Navegación principal">
      <a className="brand" href="#inicio">
        GDL · JAL
      </a>

      {/* Desktop Links */}
      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
