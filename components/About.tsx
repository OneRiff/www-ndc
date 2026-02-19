
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="tentang" className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            {/* <div className="grid grid-cols-2 gap-4">
              <img src="./hero1.jpg" alt="NDC Team" className="rounded-2xl mt-8 shadow-lg" />
              <img src="https://picsum.photos/seed/team2/400/500" alt="Professional Web Developer" className="rounded-2xl shadow-lg" />
            </div> */}
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-ndcBlue font-bold tracking-widest uppercase mb-4">Profil NDC</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Partner Terpercaya dalam Pembuatan Website di Indonesia
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Nusantara Digital Center (NDC) adalah agensi digital yang berfokus pada penyediaan solusi pembuatan website terpercaya. Kami percaya bahwa setiap bisnis berhak memiliki website profesional.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Tim Profesional & Berpengalaman",
                "Pendekatan Humanis & Solutif",
                "Fokus pada ROI (Return on Investment)",
                "Teknologi Terbaru & Up-to-date"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-semibold text-gray-800">
                  <div className="bg-ndcBlue/10 p-1 rounded-full text-ndcBlue">
                    <ChevronRight size={18} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/6281234567890" className="inline-block bg-ndcBlue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors">
              Konsultasi Dengan Tim Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
