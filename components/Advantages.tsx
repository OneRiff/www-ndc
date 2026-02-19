
import React from 'react';
import { ADVANTAGES } from '../constants';

export const Advantages = () => {
  return (
    <section className="py-20 bg-ndcBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ndcOrange font-bold tracking-widest uppercase mb-4">Kenapa Harus NDC?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            Keunggulan Website Yang Kami Bangun
          </h3>
          <p className="text-blue-100/70">Kami memastikan setiap baris kode dan piksel desain memberikan nilai maksimal bagi bisnis Anda.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-ndcOrange group-hover:bg-ndcOrange group-hover:text-white transition-all">
                {adv.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{adv.title}</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
