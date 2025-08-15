import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Twitter, Github } from 'lucide-react';
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
    
    // Handle automatic scrolling to Get In Touch section
    const handleAutoScroll = () => {
      const hash = window.location.hash;
      if (hash === '#get-in-touch') {
        const element = document.getElementById('get-in-touch');
        if (element) {
          // Use setTimeout to ensure the page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }, 100);
        }
      }
    };
    
    // Handle initial load
    handleAutoScroll();
    
    // Handle hash changes (if user navigates with back/forward)
    window.addEventListener('hashchange', handleAutoScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleAutoScroll);
    };
  }, [trackPageView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackEvent('form_submission', {
      form_type: 'contact',
      subject: formData.subject,
      has_company: !!formData.company
    });
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-bold mb-6" style={{fontSize: '72px', lineHeight: '90px', letterSpacing: '-1.8px'}}>
              CONTACT<br />
              <span className="text-gray-600">US</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontSize: '18px', lineHeight: '29px', letterSpacing: '0.45px'}}>
              Ready to transform your business? Let's discuss how our AI-driven solutions can drive your success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="get-in-touch" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="ai-solutions">AI-Powered Solutions</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="software-development">Software Development</option>
                      <option value="strategic-consulting">Strategic Consulting</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
        </div>
      </section>





      <Footer />
    </div>
  );
}