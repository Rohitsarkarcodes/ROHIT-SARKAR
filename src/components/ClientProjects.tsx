import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, CheckCircle2, Globe, ArrowUpRight } from "lucide-react";

function TypewriterText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const characters = Array.from(text);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.1,
      }
    }
  };
  
  const charVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.05 }
    }
  };

  return (
    <motion.p
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-xl text-white/40 text-sm md:text-base leading-relaxed min-h-[48px] md:min-h-[4rem]"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        className="inline-block w-[2px] h-[13px] md:h-[15px] bg-neon-cyan ml-1 align-middle"
      />
    </motion.p>
  );
}

const clientProjects = [
  {
    title: "Anamika Roy Portfolio",
    category: "Professional Production",
    image: "/PHOTO.png",
    desc: "A bespoke digital showcase for traditional mehendi artistry and artisanal wool crafts. Built with high-performance optimization and custom aesthetics.",
    tags: ["React", "Vite", "Tailwind"],
    data: "PROD_REL_01",
    link: "https://anamika-roy.vercel.app/",
    features: ["Aesthetic Showcase", "SEO & Speed Tuned", "Adaptive Interactions"]
  },
  {
    title: "Sadek Sir Academy",
    category: "Professional Production",
    image: "/sadek.png",
    desc: "Experienced Bengali teacher with 10+ years of dedication, helping students master grammar, literature, writing, and board exam preparation.",
    tags: ["React", "Education", "Vercel"],
    data: "PROD_REL_02",
    link: "https://sadek-sir-academy.vercel.app/",
    features: ["Student Dashboard", "Interactive Mocks", "Flexible Curriculum"]
  }
];

export default function ClientProjects() {
  return (
    <section id="clients" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-white/[0.01]">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-6 bg-neon-cyan/50" />
            <span className="text-neon-cyan font-mono text-[10px] uppercase tracking-[0.4em]">Real World Infrastructure</span>
            <div className="h-px w-6 bg-neon-cyan/50" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Client <span className="text-white/40 italic font-display">Success Stories</span>
          </h2>
          <TypewriterText text="Creating modern digital experiences through innovative design, smooth interactions, creative development, and professional web solutions." />
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-5xl mx-auto">
          {clientProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center glass p-5 md:p-7 rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-neon-cyan/20 transition-all duration-700"
            >
              {/* Image Side */}
              <div className="lg:col-span-7 relative rounded-xl md:rounded-2xl overflow-hidden aspect-[16/10] w-full bg-white/5 border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Side */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-5">
                <div>
                  <div className="text-neon-cyan font-mono text-[9px] uppercase tracking-[0.25em] mb-2 flex items-center gap-1.5">
                    <Globe size={11} className="animate-pulse" />
                    LIVE_DEPLOYMENT_ACTIVE
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-xs md:text-sm">
                    {project.desc}
                  </p>
                </div>

                {/* Technical Highlights list replacing bulky metrics checklist */}
                <div className="flex flex-wrap gap-1.5 py-3 border-y border-white/5">
                  {project.features?.map(feat => (
                    <span key={feat} className="inline-flex items-center gap-1.5 px-2 py-1 bg-white/[0.02] border border-white/5 rounded-md text-[10px] text-white/50 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50" />
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-neon-cyan hover:bg-white text-black text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 group/btn transition-all duration-300 active:scale-95 shadow-[0_3px_10px_rgba(0,240,255,0.15)]"
                  >
                    View Live Site
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Background HUD decorative lines */}
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b border-l border-white/5 pointer-events-none group-hover:border-neon-cyan/25 transition-all" />
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t border-r border-white/5 pointer-events-none group-hover:border-neon-cyan/25 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
