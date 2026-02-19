
import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-ndcBlue to-blue-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-ndcOrange/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 max-w-3xl mx-auto leading-tight">
              Siap Membangun Website Impian Anda Sekarang?
            </h2>
            <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Dapatkan konsultasi gratis dan penawaran harga spesial untuk proyek pertama Anda. Tim Nusantara Digital Center siap memberikan solusi terbaik!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://wa.me/6281234567890" className="bg-ndcGreen hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl">
                <MessageCircle size={24} /> Chat via WhatsApp
              </a>
              <a href="mailto:halo@ndc.com" className="bg-white text-ndcBlue hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl">
                <Mail size={24} /> Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
