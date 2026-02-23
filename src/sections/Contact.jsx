import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCopy } from 'react-icons/fa';
import { profile } from '../config/profile';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [formError, setFormError] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get('user_name') || ''),
      email: String(formData.get('user_email') || ''),
      subject: String(formData.get('subject') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send your message. Please try again.');
      }

      setIsSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setFormError(error.message || 'Failed to send your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Clipboard copy failed:', error);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let&apos;s <span className="text-blue-400">Connect</span>
        </h2>
        <p className="text-slate-400">Have a project in mind or just want to say hi?</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>

            <button
              type="button"
              className="flex items-center gap-4 text-slate-300 group cursor-pointer text-left bg-transparent border-0 p-0"
              onClick={copyToClipboard}
              aria-label="Copy email address"
            >
              <div className="p-4 bg-blue-600/20 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Me</p>
                <p className="text-lg font-medium">{profile.email} <FaCopy className="inline ml-2 text-xs opacity-50" /></p>
                {isCopied && <span className="text-xs text-green-400">Copied</span>}
              </div>
            </button>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-4 bg-purple-600/20 rounded-2xl text-purple-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-lg font-medium">{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, link: profile.socials.github, color: 'hover:bg-slate-800' },
              { icon: FaLinkedin, link: profile.socials.linkedin, color: 'hover:bg-blue-700' },
              { icon: FaWhatsapp, link: profile.socials.whatsapp, color: 'hover:bg-green-600' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass p-5 rounded-2xl text-white transition-all duration-300 ${social.color} hover:-translate-y-2`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10 relative overflow-hidden">
          {isSuccess && (
            <div className="absolute inset-0 z-20 bg-slate-900/90 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-slate-400 mt-2">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Your Name</label>
                <input type="text" name="user_name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                <input type="email" name="user_email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Subject</label>
              <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none">
                <option className="bg-slate-900">General Inquiry</option>
                <option className="bg-slate-900">Project Proposal</option>
                <option className="bg-slate-900">Hire Me</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
              <textarea name="message" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" disabled={isSending} className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all disabled:opacity-50">
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {formError && (
              <p className="text-sm text-red-400" role="alert">
                {formError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
