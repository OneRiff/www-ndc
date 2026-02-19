
import React from 'react';
import { PROCESS } from '../constants';

export const Process = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ndcBlue font-bold tracking-widest uppercase mb-4">Proses Kerja</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Alur Pembuatan Website Yang Transparan
          </h3>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-white border-2 border-ndcBlue rounded-full flex items-center justify-center text-ndcBlue relative transition-all group-hover:bg-ndcBlue group-hover:text-white">
                  <span className="absolute -top-2 -right-2 bg-ndcOrange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  {/* Fix: use React.ReactElement<any> to allow passing 'size' prop to the cloned icon element */}
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
