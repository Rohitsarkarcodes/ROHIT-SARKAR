import { motion } from "motion/react";
import { CheckCircle2, FastForward, Globe, Smartphone, ShieldCheck, Cpu, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Velocity Optimized",
    desc: "Next-gen caching and asset optimization for instantaneous load times.",
    icon: FastForward,
  },
  {
    title: "AI-First Architecture",
    desc: "Deep integration with LLMs and neural systems for intelligent user experiences.",
    icon: Cpu,
  },
  {
    title: "Cross-Reality Design",
    desc: "Responsive layouts that adapt perfectly from smartphones to futuristic VR displays.",
    icon: Smartphone,
  },
  {
    title: "Global Scalability",
    desc: "Built on battle-tested cloud infrastructure capable of serving millions.",
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-white/[0.01]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-px w-8 md:w-12 bg-neon-cyan/50" />
              <span className="text-neon-cyan font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">Protocol Analysis</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 tracking-tighter leading-none"
            >
              Engineering <br />
              <span className="text-white/40 italic font-display">Precision</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 text-xs sm:text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed font-light"
            >
              Fusing theoretical science with practical engineering to create digital artifacts that redefine user interaction.
            </motion.p>

            <div className="space-y-4 md:space-y-5">
              {["Deterministic logic architecture", "Neuro-adaptive interfaces", "Quantum-ready encryption flows", "Zero-latency synaptic response"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-neon-cyan/20 flex flex-shrink-0 items-center justify-center group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/50 transition-all duration-300">
                    <CheckCircle2 className="text-neon-cyan w-3 h-3 md:w-3.5 md:h-3.5" />
                  </div>
                  <span className="text-white/70 font-mono text-[10px] md:text-[11px] uppercase tracking-wider md:tracking-widest group-hover:text-white transition-colors duration-300 leading-normal">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0 pt-4 pb-10 sm:pb-12 lg:pb-0">
            {/* Scientific Visualization Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden glass glow-border"
            >
              <img 
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1000&q=80" 
                alt="Scientific Visualization"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent mix-blend-overlay" />
              
              {/* HUD elements */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 p-2 sm:p-4 border-l border-t border-neon-cyan/50 font-mono text-[8px] sm:text-[10px] text-neon-cyan/80 leading-normal pointer-events-none">
                DATA_STREAM: [STABLE]<br />
                BUFFER_LINK: 0x8F2
              </div>
              
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 p-2 sm:p-4 border-r border-b border-neon-cyan/50 text-right font-mono text-[8px] sm:text-[10px] text-white/40 leading-normal pointer-events-none">
                SYSTEM_RENDER: V4.0.2<br />
                CORE_TEMP: 32.4°C
              </div>

              {/* Animated scanning line */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-neon-cyan/40 shadow-[0_0_10px_#00F0FF] z-20 pointer-events-none"
              />
            </motion.div>

            {/* Grid of details - fully responsive overlay boxes */}
            <div className="absolute -bottom-2 sm:-bottom-4 left-3 right-3 sm:left-6 sm:right-auto sm:w-[280px] md:w-[320px] grid grid-cols-2 gap-3 z-30">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="p-3 sm:p-4 bg-black/85 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-center"
              >
                 <Cpu className="text-neon-cyan mb-1 w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                 <div className="text-[8px] sm:text-[10px] font-mono opacity-40 uppercase tracking-wider">CHIPSET_ID</div>
                 <div className="text-[11px] sm:text-xs md:text-sm font-bold text-white truncate">X-9 NEURAL</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-3 sm:p-4 bg-black/85 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-center"
              >
                 <Lightbulb className="text-neon-cyan mb-1 w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                 <div className="text-[8px] sm:text-[10px] font-mono opacity-40 uppercase tracking-wider">INNOVATION</div>
                 <div className="text-[11px] sm:text-xs md:text-sm font-bold text-white truncate">99.98%</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
