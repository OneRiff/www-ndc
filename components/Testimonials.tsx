import React, { useState } from 'react'
import { TESTIMONIALS } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'

export const Testimonials = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleTestimonials = showAll
    ? TESTIMONIALS
    : TESTIMONIALS.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ndcGreen font-bold tracking-widest uppercase mb-4">
            Testimoni
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Apa Kata Mereka Tentang Layanan NDC?
          </h3>
        </div>

        {/* Animated Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {visibleTestimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-ndcGreen transition-colors"
              >
                <div className="flex gap-1 mb-6 text-ndcOrange">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>

                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{testi.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ndcBlue flex items-center justify-center text-white font-bold">
                    {testi.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">
                      {testi.name}
                    </h5>
                    <p className="text-xs text-gray-500 uppercase tracking-tighter">
                      {testi.role}, {testi.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Buttons */}
        <div className="text-center mt-14 flex justify-center gap-4">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full bg-ndcGreen text-white font-bold hover:bg-green-600 transition"
            >
              View All Testimonial
            </button>
          )}

          {showAll && (
            <button
              onClick={() => {
                setShowAll(false)
                window.scrollTo({ top: window.scrollY - 300, behavior: 'smooth' })
              }}
              className="px-8 py-3 rounded-full border-2 border-ndcGreen text-ndcGreen font-bold hover:bg-ndcGreen hover:text-white transition"
            >
              Tutup Testimoni
            </button>
          )}
        </div>

      </div>
    </section>
  )
}
