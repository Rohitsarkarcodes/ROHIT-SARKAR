import { useState } from "react";
import { motion } from "motion/react";
import { Send, MessageSquare, Shield, MessageCircle, RefreshCw, Instagram } from "lucide-react";

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

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl glass glow-border group cursor-pointer hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">Direct Protocol</div>
                  <div className="text-lg font-medium group-hover:text-neon-cyan transition-colors tracking-tight">rohitsarkarwork03@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-2xl glass glow-border group cursor-pointer hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase">Encrypted Signal</div>
                  <div className="text-lg font-medium group-hover:text-green-400 transition-colors tracking-tight">+91 8927598500</div>
                </div>
              </div>
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

        {/* Instantly Accessible Centered Instagram Connection Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 flex flex-col items-center justify-center border-t border-white/5 pt-12"
        >
          <motion.a
            href="https://www.instagram.com/rrrohittt_3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border border-pink-500/30 bg-pink-500/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-600 hover:border-transparent flex items-center justify-center text-pink-500 hover:text-white hover:shadow-[0_0_25px_rgba(236,72,153,0.45)] transition-all duration-300 select-none cursor-pointer"
            title="Follow Rohit on Instagram"
          >
            <Instagram size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
