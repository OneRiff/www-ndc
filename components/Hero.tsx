
import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-[600px] h-[600px] bg-ndcBlue rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-ndcBlue uppercase bg-blue-50 rounded-full">
              Jasa Web Developer Indonesia Terpercaya
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Jasa Pembuatan Website <span className="text-ndcBlue">Profesional</span> Untuk Bisnis Modern
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Solusi pembuatan website Nusantara yang siap SEO, mobile-friendly, dan berorientasi konversi. Kami bantu UMKM hingga instansi memiliki identitas digital kelas dunia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#layanan" className="bg-ndcBlue text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-blue-900 transition-all shadow-lg hover:shadow-blue-200">
                Lihat Layanan
              </a>
              <a href="https://wa.me/6281234567890" className="bg-white text-ndcBlue border-2 border-ndcBlue px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                Konsultasi Sekarang <ChevronRight size={20} />
              </a>
            </div>
          </div>
          <div className=" mt-0 lg:mt-0 lg:w-1/2 relative">
            <div className="relative z-10  overflow-hidden  border-white">
              <img src="./logo1.png" alt="Website Mockup Modern" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-ndcGreen p-3 rounded-full text-white">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Uptime & Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
