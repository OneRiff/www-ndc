import React from 'react'
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center ">
              <img
                src="/logo.png"
                alt="Nusantara Digital Center"
                className="h-10 w-auto"
              />
              <span className="text-white text-lg font-bold">
                Nusantara Digital Center
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-8">
              Nusantara Digital Center (NDC) adalah penyedia jasa pembuatan website
              profesional dan terpercaya di Indonesia.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ndcBlue transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ndcBlue transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ndcBlue transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                { label: 'Tentang Kami', href: '#tentang' },
                { label: 'Layanan', href: '#layanan' },
                { label: 'Portofolio', href: '#portofolio' },
                { label: 'Blog', href: '#blog' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-ndcOrange transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                'Website UMKM',
                'Company Profile',
                'Landing Page',
                'SEO & Maintenance',
              ].map((item) => (
                <li key={item}>
                  <span className="hover:text-ndcOrange transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">
              Kontak Kami
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-ndcOrange mt-0.5" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-ndcOrange mt-0.5" />
                <span>info@ndc.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Nusantara Digital Center. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
