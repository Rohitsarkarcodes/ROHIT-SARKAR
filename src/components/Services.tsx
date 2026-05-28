import { motion } from "motion/react";
import { Bot, Code, Layout, Cpu, Zap, Radio, Terminal, Smartphone } from "lucide-react";

const services = [
  {
    title: "AI Assistant Development",
    desc: "Custom LLM integrations, conversational agents, and intelligent workflow automation.",
    icon: Bot,
    color: "from-blue-500/10 via-cyan-500/5 to-transparent",
    glowColor: "rgba(0, 240, 255, 0.15)",
  },
  {
    title: "Futuristic Web Design",
    desc: "State-of-the-art UI/UX that combines high-end aesthetics with high-performance code.",
    icon: Layout,
    color: "from-purple-500/10 via-blue-500/5 to-transparent",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    title: "Automation Systems",
    desc: "Streamlining business processes with custom-built software and autonomous scripts.",
    icon: Cpu,
    color: "from-cyan-500/10 via-emerald-500/5 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    title: "Interactive Experiences",
    desc: "Three.js and GSAP powered immersive worlds that live inside your browser.",
    icon: Zap,
    color: "from-orange-500/10 via-red-500/5 to-transparent",
    glowColor: "rgba(249, 115, 22, 0.15)",
  },
  {
    title: "Voice Assistant Interfaces",
    desc: "Voice-activated futuristic dashboards and multimodal interface ecosystems.",
    icon: Radio,
    color: "from-indigo-500/10 via-purple-500/5 to-transparent",
    glowColor: "rgba(99, 102, 241, 0.15)",
  },
  {
    title: "Portfolio Websites",
    desc: "Ultra-premium personal branding websites that help you stand out from the noise.",
    icon: Terminal,
    color: "from-pink-500/10 via-rose-500/5 to-transparent",
    glowColor: "rgba(236, 72, 153, 0.15)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 bg-matte-black relative overflow-hidden">
      {/* Dynamic Background Grid and Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-neon-cyan/50" />
              <span className="text-neon-cyan font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              Architecting the <br />
              <span className="text-white/40 italic font-display">Next Digital Era</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.55, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.12 }}
              whileHover={{ 
                y: -6,
                borderColor: "rgba(0, 240, 255, 0.4)",
                boxShadow: `0 10px 30px -10px ${service.glowColor}`
              }}
              className="group relative p-5 md:p-7 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] backdrop-blur-md rounded-xl md:rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Dynamic light scan effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Corner tech notch accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-neon-cyan/40 transition-colors pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-neon-cyan/40 transition-colors pointer-events-none" />

              {/* Background gradient mask */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Item number with animated scan dot */}
                  <div className="text-[9px] text-neon-cyan/60 font-mono mb-4 md:mb-5 uppercase tracking-[0.3em] font-semibold flex items-center gap-1.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-neon-cyan animate-pulse" />
                    0{i + 1} — {service.title.split(' ')[0]}
                  </div>

                  {/* Icon container */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5 group-hover:border-neon-cyan/30 transition-all duration-300 group-hover:bg-neon-cyan/15 group-hover:scale-105">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-neon-cyan transition-colors duration-300" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base md:text-lg font-display font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300 mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-white/40 text-[11px] md:text-xs leading-relaxed mb-5 group-hover:text-white/60 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>

                {/* Cyber Action Indicator link style */}
                <div className="flex items-center gap-2 text-neon-cyan text-[9px] font-mono font-bold tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">
                  <span>INITIATE_SERVICE</span>
                  <div className="h-[1px] w-3 bg-neon-cyan transition-all duration-300 group-hover:w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
