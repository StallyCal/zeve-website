// Main luxury website layout for Zeve
// Styling: Black/White/Gold color palette, high-end fonts, animations, premium layout

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white py-4 px-8 flex items-center justify-center border-b border-white/10">
    <motion.h1
      className="text-2xl md:text-3xl font-serif uppercase tracking-[0.35em] text-gold hover:underline transition duration-300 ease-in-out"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Zeve Veylsn
    </motion.h1>
  </header>
);

const HeroSection = () => (
  <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 pt-32">
    <motion.h1 
      className="text-6xl md:text-8xl font-serif text-gold tracking-wide"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Zeve Veylsn
    </motion.h1>
    <motion.p
      className="mt-6 text-xl md:text-2xl text-white/70 max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      Elegance redefined. Power reborn.
    </motion.p>
  </section>
);

const ImageSection = ({ image, headline, text, reverse }) => (
  <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-12 py-32 px-6 bg-black text-white`}>
    <motion.img 
      src={image} 
      alt="luxury" 
      className="w-full md:w-1/2 rounded-3xl shadow-2xl object-cover"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.div 
      className="md:w-1/2"
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-serif text-gold mb-6">{headline}</h2>
      <p className="text-white/80 text-lg leading-relaxed max-w-xl">{text}</p>
    </motion.div>
  </section>
);

const ManifestoSection = () => (
  <section className="bg-black text-white py-32 px-6 text-center">
    <motion.h2 
      className="text-4xl md:text-5xl font-serif text-gold mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      The Zeve Manifesto
    </motion.h2>
    <motion.p
      className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      We don’t follow trends. We spark revolutions. <br />
      Zeve Veylsn exists for those who refuse to be average — the leaders, the visionaries, the beautifully untamed. <br />
      This is not fashion. This is armor. <br />
      For those who carry gold in their soul and fire in their step. <br /><br />
      This is your new beginning. <br />
      This is Zeve.
    </motion.p>
  </section>
);

const AboutSection = () => (
  <section className="bg-black text-white py-32 px-6 flex flex-col items-center">
    <h2 className="text-4xl font-serif text-gold mb-6">About Zeve</h2>
    <p className="max-w-2xl text-center text-white/70 text-lg leading-loose">
      Founded at the intersection of raw ambition and refined taste, Zeve Veylsn is more than a label — it’s a legacy in motion. <br />
      Born to redefine how elegance feels, our collections are designed to provoke presence, power, and prestige in every step. <br />
      Every piece is a statement. Every release, a revelation.
    </p>
  </section>
);

const TestimonialsSection = () => (
  <section className="bg-black text-white py-32 px-6 text-center">
    <h2 className="text-4xl font-serif text-gold mb-10">Whispers of Power</h2>
    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
      {["Wearing Zeve is like stepping into a new skin — bold, refined, unstoppable.",
        "People don’t just notice you. They remember you.",
        "Zeve is the only brand that matches the fire in me."]
        .map((quote, i) => (
          <motion.blockquote 
            key={i} 
            className="bg-white/5 p-6 rounded-2xl shadow-lg text-white/80 italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            “{quote}”
          </motion.blockquote>
        ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-center text-white py-16 text-sm border-t border-white/10">
    <p className="text-white/50">&copy; 2025 Zeve Veylsn. Elegance is power.</p>
    <div className="mt-4 flex justify-center gap-6">
      <a href="#" className="text-gold hover:underline">Instagram</a>
      <a href="#" className="text-gold hover:underline">Contact</a>
      <a href="#" className="text-gold hover:underline">Careers</a>
    </div>
  </footer>
);

export default function Home() {
  useEffect(() => {
    document.title = "Zeve Veylsn | Elegance Reimagined";
  }, []);

  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <ImageSection 
        image="/luxury1.jpg"
        headline="The Zeve Standard"
        text="Not just fashion. This is transformation — a revolt against the ordinary. Gold-stamped elegance with razor-edge rebellion."
      />
      <ImageSection 
        image="/luxury2.jpg"
        headline="Unleash the Rebellion"
        text="Zeve Veylsn dares to dominate runways and minds. Crafted silhouettes for the chosen few who lead, not follow."
        reverse
      />
      <ManifestoSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

// Tailwind config should include:
// theme.extend.colors.gold = '#D4AF37'
// fontFamily.serif = ['Playfair Display', 'Cinzel', ...]
// Add high-res luxury images to /public
