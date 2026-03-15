import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Github } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Contact() {
  const { trackPageView, trackEvent } = useAnalytics();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  React.useEffect(() => {
    trackPageView('/contact');
    
    const handleAutoScroll = () => {
      const hash = window.location.hash;
      if (hash === '#get-in-touch') {
        const element = document.getElementById('get-in-touch');
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };
    
    handleAutoScroll();
    window.addEventListener('hashchange', handleAutoScroll);
    return () => window.removeEventListener('hashchange', handleAutoScroll);
  }, [trackPageView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submission', {
      form_type: 'contact',
      subject: formData.subject
    });
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent-cyan/10 blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-hero mb-8">
            LET'S<br />
            <span className="bg-clip-text text-transparent bg-gradient-neon uppercase">CONNECT</span>
          </h1>
          <p className="text-body-large text-white/60 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI-driven solutions can drive your success.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section id="get-in-touch" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="space-y-8">
                <h2 className="text-4xl font-heading font-bold tracking-tighter">GET IN TOUCH</h2>
                <p className="text-white/50 leading-relaxed font-body">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
                </p>

                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-cyan">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Email</div>
                      <div className="text-white font-body">contact@nkiru.tech</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-violet">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Location</div>
                      <div className="text-white font-body">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-cyan focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-cyan focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-cyan focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-background">Select Topic</option>
                    <option value="ai-solutions" className="bg-background">AI Solutions</option>
                    <option value="digital-transformation" className="bg-background">Digital Transformation</option>
                    <option value="software-development" className="bg-background">Software Development</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-neon w-full !text-xs tracking-[0.3em] !py-4"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
