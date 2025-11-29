import React, { useState } from 'react';
import { Mail, MessageSquare, Send, PhoneCall } from 'lucide-react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const webhookUrl = 'https://discord.com/api/webhooks/1325794211676557383/7XRE7G6kb1WW75BfJ348Ef8EWWkgC7fzoKQQk_uhGvGtzOFXlxslxhUW-kj4rlJrpMSx';
    const data = {
      username: 'Website Contact Form',
      embeds: [
        {
          title: 'Contact Form Submission',
          fields: [
            {
              name: 'Name',
              value: name,
            },
            {
              name: 'Email',
              value: email,
            },
            {
              name: 'Message',
              value: message,
            },
          ],
        },
      ],
    };
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setSent(true);
    } else {
      console.error('Error sending message:', response.status, response.statusText);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-[#2E5077] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(121,215,190,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.18),transparent_30%)]" />
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <p className="text-white/70 uppercase text-xs tracking-[0.3em]">Say hello</p>
          <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s build together</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’m always happy to talk about product ideas, frontend craft, and building reliable experiences.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/15">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    focus:outline-none focus:ring-2 focus:ring-[#79D7BE] text-white placeholder:text-white/60"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
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
                    focus:outline-none focus:ring-2 focus:ring-[#79D7BE] text-white placeholder:text-white/60"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
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
                focus:outline-none focus:ring-2 focus:ring-[#79D7BE] text-white placeholder:text-white/60"
                  placeholder="Your message here..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-accent-teal text-primary-navy font-semibold rounded-lg 
              hover:bg-[#6BC4AB] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent-teal/30"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
              {sent && (
                <p className="text-center text-white/80 mt-2">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>

          <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 text-white space-y-6 backdrop-blur">
            <div className="flex items-start gap-4">
              <Mail />
              <div>
                <p className="text-sm text-white/70">Email</p>
                <a href="mailto:aunghtetoo12nd@gmail.com" className="font-semibold hover:text-accent-teal transition">
                  aunghtetoo12nd@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneCall />
              <div>
                <p className="text-sm text-white/70">Phone</p>
                <p className="font-semibold">+95 9422686251</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare />
              <div>
                <p className="text-sm text-white/70">Availability</p>
                <p className="font-semibold">Freelance & internship friendly</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/80">
                I reply within a day. Tell me about the problem, goals, and any constraints and we can start planning together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
