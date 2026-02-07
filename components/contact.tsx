"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconMail, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconSend, IconCheck, IconTerminal2 } from "@tabler/icons-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: IconBrandGithub,
    href: "https://github.com/rahulhingve",
    command: "github"
  },
  {
    name: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/rahul-hingve-b5a582263/",
    command: "linkedin"
  },
  {
    name: "Twitter",
    icon: IconBrandTwitter,
    href: "https://x.com/rahulhingv97727",
    command: "twitter"
  },
];

export function Contact({ id }: { id: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending (opens email)
    const mailtoLink = `mailto:rahulpawar2001.rp@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  return (
    <section id={id} className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-sm text-purple-400">~/contact</span>
            <span className="text-gray-500">$</span>
            <span className="font-mono text-sm text-gray-300">ssh connect@rahul.dev</span>
          </div>

          <h2 className="heading-lg text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl">
            Have a project in mind or want to collaborate? Let&apos;s establish a connection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Status card */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <IconTerminal2 className="w-5 h-5 text-green-400" />
                <span className="font-mono text-sm text-green-400">Connection established</span>
              </div>

              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-gray-500">$</span>
                  <span>ping rahul</span>
                </div>
                <div className="flex items-center gap-3 pl-4">
                  <span className="status-dot status-online" />
                  <span className="text-green-400">Online - Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="mailto:rahulpawar2001.rp@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono">$ cat email.txt</div>
                  <div className="text-gray-300">rahulpawar2001.rp@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono">$ pwd</div>
                  <div className="text-gray-300">Bhopal, India</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <div className="font-mono text-xs text-gray-500">$ open --all-links</div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-gray-400 ml-2">send-message.sh</span>
              </div>

              {/* Form content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="font-mono text-sm text-gray-500 mb-4">
                  # Fill out the form below
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-gray-400">
                    <span className="token-keyword">const</span> name <span className="text-gray-500">=</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='"Your Name"'
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 text-white font-mono text-sm placeholder:text-gray-600 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-gray-400">
                    <span className="token-keyword">const</span> email <span className="text-gray-500">=</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder='"your@email.com"'
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 text-white font-mono text-sm placeholder:text-gray-600 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-gray-400">
                    <span className="token-keyword">const</span> message <span className="text-gray-500">=</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder='"Tell me about your project..."'
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 text-white font-mono text-sm placeholder:text-gray-600 resize-none transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary font-mono"
                >
                  {isSubmitted ? (
                    <>
                      <IconCheck className="w-5 h-5" />
                      Message sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>$ npm run send-message</span>
                      <IconSend className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
