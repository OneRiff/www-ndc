import React from 'react'
import { PORTFOLIO } from '../constants'
import { ExternalLink } from 'lucide-react'

export const Portfolio = () => {
  return (
    <section id="portofolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ndcBlue font-bold tracking-widest uppercase mb-4">
            Portofolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Hasil Karya Kami Untuk Klien Nusantara
          </h3>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              {/* Image - FULL terlihat */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ndcBlue/90 via-ndcBlue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-ndcOrange font-bold text-xs uppercase mb-2 tracking-widest">
                  {item.category}
                </span>

                <h4 className="text-white text-xl font-bold">
                  {item.title}
                </h4>

                <div className="mt-4 flex items-center justify-between">
                  <div className="h-1 w-8 bg-ndcOrange rounded-full"></div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-ndcOrange px-4 py-2 rounded-full hover:bg-orange-600 transition"
                  >
                    Lihat Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
