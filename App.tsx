
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Section Tentang Kami */}
        <About />
        
        {/* 3. Section Layanan */}
        <Services />
        
        {/* 4. Section Keunggulan & 5. Kenapa Memilih Kami */}
        <Advantages />
        
        {/* 6. Section Proses Kerja */}
        <Process />
        
        {/* 7. Section Portofolio */}
        <Portfolio />
        
        {/* 8. Section Testimoni */}
        <Testimonials />
        
        {/* 9. Section FAQ */}
        <FAQ />
        
        {/* 10. Section CTA Penutup */}
        <ContactCTA />
      </main>
      
      {/* 11. Footer */}
      <Footer />
      
      {/* Floating WA Button */}
      <a 
        href="https://wa.me/6281234567890" 
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        title="Chat WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
