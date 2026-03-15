import React from 'react';
import { ArrowRight, Brain, Zap, Code, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const services = [
  {
    id: 1,
    title: 'AI-Powered Solutions',
    icon: Brain,
    color: 'text-accent-cyan',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
    ]
  },
  {
    id: 2,
    title: 'Digital Transformation',
    icon: Zap,
    color: 'text-accent-violet',
    description: 'Modernize your operations with comprehensive digital transformation strategies and implementation.',
    features: [
      'Legacy System Modernization',
      'Cloud Migration Services',
      'Process Automation',
      'Digital Strategy Planning',
    ]
  },
  {
    id: 3,
    title: 'Software Development',
    icon: Code,
    color: 'text-accent-neon',
    description: 'Custom software solutions built with modern technologies and best practices for scalability.',
    features: [
      'Full-Stack Web Development',
      'Mobile App Development',
      'API Development & Integration',
      'DevOps & CI/CD Implementation'
    ]
  },
  {
    id: 4,
    title: 'Strategic Consulting',
    icon: Target,
    color: 'text-white',
    description: 'Expert guidance to align technology initiatives with your business objectives and growth strategy.',
    features: [
      'Technology Assessment',
      'Digital Roadmap Planning',
      'Architecture Design',
      'Risk Assessment & Mitigation'
    ]
  }
];

export default function Services() {
  const { trackPageView, trackEvent } = useAnalytics();

  React.useEffect(() => {
    trackPageView('/services');
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-neon opacity-20" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-hero mb-8">
            OUR<br />
            <span className="bg-clip-text text-transparent bg-gradient-neon uppercase">SERVICES</span>
          </h1>
          <p className="text-body-large text-white/60 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive sustainable growth through innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-card p-12 group cursor-pointer relative overflow-hidden"
                onClick={() => {
                  trackEvent('service_interest', {
                    service_name: service.title,
                    service_id: service.id
                  });
                }}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon size={120} />
                </div>

                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-gradient-neon transition-all duration-500">
                    <service.icon className={`w-6 h-6 ${service.color} group-hover:text-black transition-colors`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{service.title.toUpperCase()}</h3>
                </div>

                <p className="text-white/60 mb-10 leading-relaxed font-body">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-white/70 font-body">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center group/btn">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover/btn:text-accent-cyan transition-colors">Learn more</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform text-accent-cyan" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-32 bg-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-section-title">
            READY TO TRANSFORM YOUR BUSINESS?
          </h2>
          <p className="text-body-large text-white/40 leading-relaxed">
            Let's discuss how our services can help you achieve your technology goals and drive sustainable growth.
          </p>
          <div className="pt-6">
            <Link
              to="/contact"
              className="btn-neon !text-xs tracking-[0.3em] !px-10 !py-4"
              onClick={() => {
                trackEvent('cta_click', {
                  button_text: 'Get Started Today',
                  page: 'services'
                });
              }}
            >
              GET STARTED TODAY
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
