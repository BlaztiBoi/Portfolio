import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#2E5077]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/80">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2" htmlFor="name">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-[#79D7BE] text-white"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-[#79D7BE] text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#79D7BE] text-white"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#79D7BE] text-white rounded-lg 
              hover:bg-[#6BC4AB] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}