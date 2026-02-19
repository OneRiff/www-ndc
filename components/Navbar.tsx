import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Nama */}
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="Nusantara Digital Center"
              className="h-12 w-auto"
            />
            <span className="text-lg font-bold text-gray-800 whitespace-nowrap">
              Nusantara Digital Center
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-ndcBlue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              className="bg-ndcOrange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition transform hover:scale-105"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            className="block mt-3 text-center bg-ndcOrange text-white py-3 rounded-lg font-bold"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  )
}
