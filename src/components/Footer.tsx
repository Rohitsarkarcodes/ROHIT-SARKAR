import { motion } from "motion/react";
import { Cpu, Github, Linkedin, ArrowUpRight, Instagram } from "lucide-react";

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    role="img"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-20 px-6 border-t border-white/5 relative overflow-hidden bg-matte-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20">
                <Cpu className="w-5 h-5 text-neon-cyan" />
              </div>
              <span className="font-display font-bold text-lg tracking-tighter uppercase">
                ROHIT<span className="text-neon-cyan">.AI</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Pioneering the web of tomorrow through engineering excellence and artistic audacity. Operating at the frontier of AI and human experience.
            </p>
            <div className="flex gap-4">
              {[
                { 
                  Icon: Github, 
                  href: "https://github.com/Rohitsarkarcodes", 
                  label: "GitHub",
                  hoverStyle: { color: "#000000", backgroundColor: "#ffffff", borderColor: "#ffffff" }
                },
                { 
                  Icon: Linkedin, 
                  href: "https://www.linkedin.com/in/rohit-sarkar-rs03/", 
                  label: "LinkedIn",
                  hoverStyle: { color: "#00F0FF", borderColor: "#00F0FF", boxShadow: "0px 0px 15px rgba(0, 240, 255, 0.4)" }
                },
                { 
                  Icon: XIcon, 
                  href: "https://x.com/rrrohittt_3", 
                  label: "X",
                  hoverStyle: { color: "#000000", backgroundColor: "#ffffff", borderColor: "#ffffff" }
                },
                { 
                  Icon: Instagram, 
                  href: "https://www.instagram.com/rrrohittt_3/", 
                  label: "Instagram",
                  hoverStyle: { color: "#FF3366", borderColor: "#FF3366", boxShadow: "0px 0px 15px rgba(255, 51, 102, 0.4)" }
                }
              ].map(({ Icon, href, label, hoverStyle }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, ...hoverStyle }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 transition-all duration-300"
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:col-span-2">
            <div>
              <h4 className="text-white font-display font-bold mb-4 md:mb-6 text-xs sm:text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3 font-mono text-[10px] md:text-[11px] text-white/40 uppercase tracking-widest">
                <li><a href="#about" className="hover:text-neon-cyan transition-colors">About Core</a></li>
                <li><a href="#services" className="hover:text-neon-cyan transition-colors">Systems</a></li>
                <li><a href="#projects" className="hover:text-neon-cyan transition-colors">Archives</a></li>
                <li><a href="#contact" className="hover:text-neon-cyan transition-colors">Initialize</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-4 md:mb-6 text-xs sm:text-sm uppercase tracking-widest">Legal / Identity</h4>
              <ul className="space-y-3 font-mono text-[10px] md:text-[11px] text-white/40 uppercase tracking-widest">
                <li><span className="opacity-50">EST: 2024</span></li>
                <li><span className="opacity-50">LOC: WB_IN</span></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacy Protocol</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            © 2024 Rohit Sarkar. All Rights Reserved. Systems Synchronized.
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 hover:text-white transition-all group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Decorative Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
    </footer>
  );
}
