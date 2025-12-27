import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { Mail, MapPin, Phone, Send, Loader2, Copy, Check } from "lucide-react"; // Added Copy/Check icons
import { useTheme } from "../Contexts/usetheme";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { theme } = useTheme();
  const isBlue = theme === "blue";
  const form = useRef();
  const [loading, setLoading] = useState(false);
  
  // State for Copy Tooltips
  const [copiedText, setCopiedText] = useState("");

useEffect(() => {
    // Make sure the name inside .env starts with VITE_
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // New syntax for SDK v4
      }
    )
    .then(() => {
      alert("Message sent!");
      setLoading(false);
      form.current.reset();
    })
    .catch((err) => {
      console.error("EmailJS Error:", err); // Look at your console for the real error code
      alert(`Failed to send: ${err.text || "Check console"}`);
      setLoading(false);
    });
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000); // Reset tooltip after 2s
  };

  

  const accentText = isBlue ? "text-blue-500" : "text-red-500";
  const accentBg = isBlue ? "bg-blue-500" : "bg-red-500";
  const inputFocus = isBlue ? "focus:border-blue-500" : "focus:border-red-500";
  const buttonHover = isBlue ? "hover:bg-blue-600 dark:hover:bg-blue-500" : "hover:bg-red-600 dark:hover:bg-red-500";

  return (
    <section id="contact" className="relative py-4 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Let’s turn your <span className={accentText}>idea</span> into reality.
            </h2>
            
            <div className="space-y-6">
              {/* Email Card */}
              <div 
                onClick={() => handleCopy("ppratyush102@gmail.com", "Email")}
                className="flex items-center gap-4 group cursor-pointer relative"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center ${accentText} group-hover:scale-110 transition-transform`}>
                  {copiedText === "Email" ? <Check size={20} /> : <Mail size={20} />}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                    Email <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-gray-700 dark:text-white font-medium">ppratyush1203@gmail.com</p>
                </div>
                {/* Tooltip */}
                <AnimatePresence>
                  {copiedText === "Email" && (
                    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`absolute -top-8 left-0 text-xs font-bold ${accentText}`}>Copied!</motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Card */}
              <div 
                onClick={() => handleCopy("+91 8210958679", "Phone")}
                className="flex items-center gap-4 group cursor-pointer relative"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center ${accentText} group-hover:scale-110 transition-transform`}>
                   {copiedText === "Phone" ? <Check size={20} /> : <Phone size={20} />}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                    Phone <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-gray-700 dark:text-white font-medium">+91 8210958679</p>
                </div>
                <AnimatePresence>
                  {copiedText === "Phone" && (
                    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`absolute -top-8 left-0 text-xs font-bold ${accentText}`}>Copied!</motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center ${accentText}`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Location</p>
                  <p className="text-gray-700 dark:text-white font-medium">West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form remains the same */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
            <div className="relative z-10 p-8 md:p-10 rounded-3xl bg-white/10 dark:bg-white/[0.02] backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input name="from_name" type="text" required placeholder="Name" className={`w-full px-5 py-4 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 ${inputFocus} outline-none dark:text-white placeholder:text-gray-600`} />
                  <input name="from_email" type="email" required placeholder="Email" className={`w-full px-5 py-4 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 ${inputFocus} outline-none dark:text-white placeholder:text-gray-600`} />
                </div>
                <input name="subject" type="text" required placeholder="Subject" className={`w-full px-5 py-4 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 ${inputFocus} outline-none dark:text-white placeholder:text-gray-600`} />
                <textarea name="message" rows="4" required placeholder="Your message..." className={`w-full px-5 py-4 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 ${inputFocus} outline-none dark:text-white placeholder:text-gray-600 resize-none`} />
                <button type="submit" disabled={loading} className={`w-full py-4 rounded-xl bg-gray-900 dark:bg-white/70 text-white dark:text-black font-bold flex items-center justify-center gap-3 ${buttonHover} dark:hover:text-white transition-all shadow-lg`}>
                  {loading ? "Sending..." : "Send Message"}
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
