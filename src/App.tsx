import { useState } from 'react';
import { Github, Twitter, Linkedin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const portfolioItems = [
    { 
      title: "Generative AI Art 01", 
      desc: "Digital exploration",
      fullDesc: "An immersive exploration of surrealistic landscapes generated through latent space amplification and custom fine-tuned diffusion models.",
      tech: ["Stable Diffusion", "Python", "ComfyUI"],
      link: "#"
    },
    { 
      title: "Creative Direction 01", 
      desc: "Brand identity",
      fullDesc: "Rebuilding a legacy brand's visual language from the ground up, focusing on minimalism and high-contrast typography.",
      tech: ["Figma", "Adobe Creative Suite"],
      link: "#"
    },
    { 
      title: "Synthetic Media", 
      desc: "Video production",
      fullDesc: "Automated video asset generation pipeline for high-frequency social media content.",
      tech: ["RunwayML", "After Effects", "TypeScript"],
      link: "#"
    },
    { 
      title: "Data Visualization", 
      desc: "Interactive dashboards",
      fullDesc: "Real-time analytics engine visualizing complex market trends using interactive web technologies.",
      tech: ["D3.js", "React", "Firebase"],
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0F0F0] p-10 font-sans">
      <main className="text-center w-full max-w-4xl mx-auto py-20">
        <h1 className="text-[10vw] font-black leading-[0.8] uppercase tracking-tighter mb-8 text-[#F0F0F0]">
          Nisarai Studio
        </h1>
        <p className="text-xl text-[#999] mb-12 tracking-wide max-w-xl mx-auto">
          Digital Creative Hub by Muhammed Nisar. Crafting the future of digital assets through generative intelligence.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="bg-[#FF3E00] text-white px-8 py-3 rounded-none font-bold uppercase tracking-widest hover:bg-[#FF5A26] transition">
            Explore Portfolio
          </button>
          <button 
            className="border border-[#F0F0F0] text-[#F0F0F0] px-8 py-3 rounded-none font-bold uppercase tracking-widest hover:bg-[#F0F0F0] hover:text-[#0A0A0A] transition"
            onClick={() => setIsContactOpen(true)}
          >
            Contact Me
          </button>
        </div>
      </main>

      <section className="mt-20">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 border-l-4 border-[#FF3E00] pl-6">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] border border-[#333] p-6 hover:border-[#FF3E00] transition group cursor-pointer"
              onClick={() => setExpandedIndex(index)}
            >
              <div className="h-48 bg-[#2A2A2A] mb-6 flex items-center justify-center text-[#666] text-sm">
                Image Placeholder
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2 group-hover:text-[#FF3E00]">
                {item.title}
              </h3>
              <p className="text-[#999] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-[#333] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#666] text-sm uppercase tracking-widest">© 2026 Nisarai Studio</p>
        <div className="flex gap-6">
          <a href="#" className="text-[#F0F0F0] hover:text-[#FF3E00] transition"><Github /></a>
          <a href="#" className="text-[#F0F0F0] hover:text-[#FF3E00] transition"><Twitter /></a>
          <a href="#" className="text-[#F0F0F0] hover:text-[#FF3E00] transition"><Linkedin /></a>
        </div>
      </footer>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1A1A1A] border border-[#333] p-10 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 right-4 text-[#666] hover:text-[#F0F0F0]"
              >
                <X />
              </button>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-[#FF3E00]">
                {portfolioItems[expandedIndex].title}
              </h2>
              <p className="text-[#F0F0F0] mb-6 text-lg">
                {portfolioItems[expandedIndex].fullDesc}
              </p>
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#666] block mb-2">Technologies</span>
                <div className="flex gap-2">
                  {portfolioItems[expandedIndex].tech.map(t => (
                    <span key={t} className="bg-[#333] text-[#F0F0F0] px-3 py-1 text-xs uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={portfolioItems[expandedIndex].link}
                className="bg-[#FF3E00] text-white px-8 py-3 rounded-none font-bold uppercase tracking-widest hover:bg-[#FF5A26] transition block text-center"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1A1A1A] border border-[#333] p-10 max-w-xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 text-[#666] hover:text-[#F0F0F0]"
              >
                <X />
              </button>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 text-[#FF3E00]">
                Get in Touch
              </h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); setIsContactOpen(false); }}>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-[#666] mb-2">Name</label>
                  <input type="text" className="w-full bg-[#2A2A2A] border border-[#333] p-3 text-[#F0F0F0] focus:border-[#FF3E00] outline-none" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-[#666] mb-2">Email</label>
                  <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="w-full bg-[#2A2A2A] border border-[#333] p-3 text-[#F0F0F0] focus:border-[#FF3E00] outline-none" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-[#666] mb-2">Message</label>
                  <textarea className="w-full bg-[#2A2A2A] border border-[#333] p-3 text-[#F0F0F0] focus:border-[#FF3E00] outline-none h-32" required></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-[#FF3E00] text-white px-8 py-3 rounded-none font-bold uppercase tracking-widest hover:bg-[#FF5A26] transition block w-full"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
    </div>
  );
}

