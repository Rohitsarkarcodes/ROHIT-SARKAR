import { useState } from "react";
import { motion } from "motion/react";
import { Send, MessageCircle, RefreshCw } from "lucide-react";

export default function Contact() {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="h-px w-12 bg-neon-cyan/50" />
                <span className="text-neon-cyan font-mono text-sm uppercase tracking-widest">Initialization</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                Let's build <br />
                <span className="text-white/40">the Future.</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed max-w-md">
                Available for ultra-premium freelance projects, AI integration roles, and futuristic collaborative ventures.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <a 
                href="mailto:rohitsarkarwork03@gmail.com"
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl glass glow-border group cursor-pointer hover:bg-white/5 transition-all duration-300 w-full overflow-hidden"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan transition-transform duration-300 group-hover:scale-105 border border-neon-cyan/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-0.5">Direct Protocol</div>
                  <div className="text-sm sm:text-base md:text-lg font-medium text-white/90 group-hover:text-neon-cyan transition-colors tracking-tight break-all leading-tight">
                    rohitsarkarwork03@gmail.com
                  </div>
                </div>
              </a>

              <a 
                href="https://wa.me/918927598500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl glass glow-border group cursor-pointer hover:bg-white/5 transition-all duration-300 w-full overflow-hidden"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 transition-transform duration-300 group-hover:scale-105 border border-green-500/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-0.5">Encrypted Signal</div>
                  <div className="text-sm sm:text-base md:text-lg font-medium text-white/90 group-hover:text-green-400 transition-colors tracking-tight break-all leading-tight">
                    +91 8927598500
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Side (Direct WhatsApp Dispatch) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/5 shadow-2xl relative flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">WhatsApp Broadcast Active</span>
                </div>
                <span className="text-[9px] font-mono text-white/30">DISPATCH_MODE_DIRECT</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Direct Signal Hub</h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  Connect directly with Rohit on WhatsApp for a lightning-fast discussion on your portfolio or custom software application.
                </p>
              </div>

              {/* Predefined message templates for ease of use */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-neon-cyan uppercase tracking-wider">Fast Signals (Tap to Load)</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      label: "✨ Build Portfolio",
                      text: "Hi Rohit, I saw your work and want to discuss building a custom website/portfolio with you!"
                    },
                    {
                      label: "🤖 AI Automation",
                      text: "Hello Rohit, I am interested in building custom AI features or workflow automation solutions."
                    },
                    {
                      label: "👋 Quick Greet",
                      text: "Hey Rohit! Just dropping by to say hello. Your 3D portfolio looks magnificent!"
                    }
                  ].map((tpl) => (
                    <button
                      key={tpl.label}
                      type="button"
                      onClick={() => setWhatsappMessage(tpl.text)}
                      className="px-3 py-2 text-[11px] bg-white/[0.03] border border-white/10 rounded-xl hover:border-green-500/40 hover:bg-green-500/5 hover:text-white transition-all duration-300 text-left font-sans text-white/60"
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Your Custom Message</label>
                  {whatsappMessage && (
                    <button
                      type="button"
                      onClick={() => setWhatsappMessage("")}
                      className="text-[10px] font-mono text-red-400/85 hover:text-red-400 flex items-center gap-1 transition-colors"
                    >
                      <RefreshCw size={10} /> Clear
                    </button>
                  )}
                </div>
                <textarea
                  rows={4}
                  value={whatsappMessage}
                  onChange={(e) => setWhatsappMessage(e.target.value)}
                  placeholder="Type your message here or select a template above..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-green-500/50 text-sm transition-all resize-none text-white focus:ring-1 focus:ring-green-500/30"
                />
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/918927598500?text=${encodeURIComponent(
                  whatsappMessage || "Hi Rohit, I'd like to get in touch about a custom development project!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] duration-300 text-center"
              >
                <MessageCircle size={18} />
                Establish Client Signal
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-1" />
              </a>
              <div className="text-center mt-3">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.1em]">Direct Connection Endpoint: +91 8927598500</span>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-2 border-white/5 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
