import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Zap, Code, Target, ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnalytics } from '../hooks/useAnalytics';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { trackPageView, trackEvent } = useAnalytics();

  useEffect(() => {
    trackPageView('Home');
  }, [trackPageView]);
  
  const heroAnimation = useScrollAnimation(0.2);
  const servicesAnimation = useScrollAnimation(0.2);
  const projectsAnimation = useScrollAnimation(0.2);
  
  const testimonials = [
    {
      quote: "Nkiru Technologies transformed our operations with their AI solutions. The ROI was immediate and substantial.",
      author: "Sarah Johnson",
      company: "CEO, TechCorp Industries"
    },
    {
      quote: "The team's expertise in digital transformation helped us modernize our entire infrastructure seamlessly.",
      author: "Michael Chen",
      company: "CTO, Global Solutions Inc."
    },
    {
      quote: "Outstanding strategic consulting that aligned perfectly with our business goals and growth objectives.",
      author: "Emily Rodriguez",
      company: "VP Strategy, Innovation Labs"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-background min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-cyan/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-violet/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fadeInUp">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] font-heading font-bold uppercase text-white/70">Human-Centered AI Startup</span>
            </div>
            
            <h1 className="text-hero text-center max-w-4xl animate-fadeInUp stagger-1">
              BEHOLD WHAT'S<br />
              <span className="bg-clip-text text-transparent bg-gradient-neon">NEXT —</span><br />
              AI-DRIVEN.
            </h1>
            
            <p className="text-body-large text-white/60 max-w-2xl animate-fadeInUp stagger-2">
              WE ENGINEER ADVANCED AI SOLUTIONS, BOLD STRATEGIES, AND PERFECT EXECUTION THAT TURN AMBITION INTO ACHIEVEMENT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp stagger-3">
              <Link to="/contact" className="btn-neon !text-xs tracking-[0.2em]">
                START A PROJECT
              </Link>
              <Link to="/services" className="px-8 py-3 rounded-lg font-heading font-semibold border border-white/10 hover:bg-white/5 transition-all text-xs tracking-[0.2em]">
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h4 className="text-accent-cyan font-heading font-bold text-xs uppercase tracking-[0.3em]">Specializations</h4>
              <h2 className="text-section-title">FUTURE-PROOF<br />SOLUTIONS</h2>
            </div>
            <p className="text-white/40 max-w-md font-body text-sm leading-relaxed">
              We provide enterprise-grade technology services focused on intelligent automation and digital modernization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI Solutions', icon: Brain, color: 'text-accent-cyan', desc: 'Custom machine learning models for enterprise scale.' },
              { title: 'Digital Transformation', icon: Zap, color: 'text-accent-violet', desc: 'Modernizing core infrastructure for the digital age.' },
              { title: 'Software Development', icon: Code, color: 'text-accent-neon', desc: 'Scalable, high-performance application engineering.' },
              { title: 'Strategic Consulting', icon: Target, color: 'text-white', desc: 'Expert guidance on navigating the AI landscape.' }
            ].map((service, i) => (
              <div key={service.title} className="glass-card p-8 group hover:-translate-y-2 transition-all">
                <service.icon className={`w-10 h-10 mb-6 ${service.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-white/40 text-sm font-body leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Project */}
      <section className="py-32 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 rounded-sm bg-accent-violet/20 border border-accent-violet/30 text-accent-violet text-[10px] font-bold tracking-[0.2em] uppercase">
                Featured Case Study
              </div>
              <h2 className="text-5xl font-heading tracking-tighter">ENTERPRISE<br />AI PLATFORM</h2>
              <p className="text-white/60 font-body leading-relaxed">
                A comprehensive AI platform that revolutionized data processing for a Fortune 500 company, resulting in 40% efficiency gains and real-time decision intelligence.
              </p>
              <div className="flex gap-12 border-y border-white/10 py-8">
                <div>
                  <div className="text-accent-cyan text-3xl font-heading font-bold">40%</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mt-2">Efficiency Gain</div>
                </div>
                <div>
                  <div className="text-accent-violet text-3xl font-heading font-bold">2.4M</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mt-2">Data Points/Sec</div>
                </div>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-white hover:text-accent-cyan transition-colors font-heading text-xs tracking-widest group">
                VIEW PROJECT DETAILS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden border border-white/10 glass-card p-4">
               <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-xl flex items-center justify-center">
                  <div className="w-2/3 h-2/3 border border-white/5 rounded-lg bg-black/40 backdrop-blur-md p-6 relative">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                      <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                      <div className="h-2 w-5/6 bg-accent-cyan/20 rounded-full" />
                      <div className="grid grid-cols-3 gap-2 mt-6">
                        <div className="h-12 bg-white/5 rounded-md" />
                        <div className="h-12 bg-white/5 rounded-md" />
                        <div className="h-12 bg-accent-violet/20 rounded-md border border-accent-violet/30" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-accent-cyan/20 blur-xl animate-pulse" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Star className="w-10 h-10 text-accent-cyan mx-auto animate-pulse" />
          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div key={i} className={`absolute transition-all duration-700 ${i === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                <blockquote className="text-3xl font-heading leading-tight tracking-tight italic">
                  "{t.quote}"
                </blockquote>
                <div className="mt-8">
                  <div className="text-white font-bold tracking-widest text-sm">{t.author.toUpperCase()}</div>
                  <div className="text-white/40 text-xs mt-1">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-8">
            <button onClick={prevTestimonial} className="p-4 rounded-full border border-white/10 hover:border-accent-cyan transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-accent-cyan w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="p-4 rounded-full border border-white/10 hover:border-accent-cyan transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-neon rounded-3xl p-1 lg:p-[1px]">
          <div className="bg-background rounded-[23px] p-12 lg:p-24 text-center space-y-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-neon opacity-[0.03]" />
            <h2 className="text-6xl font-heading tracking-tighter relative z-10">READY TO BUILD<br />THE FUTURE?</h2>
            <p className="text-white/60 max-w-xl mx-auto font-body relative z-10 leading-relaxed">
              Join the vanguard of AI-driven enterprises. Let's discuss how our human-centered technology can elevate your business.
            </p>
            <div className="pt-4 relative z-10">
              <Link to="/contact" className="btn-neon !text-sm tracking-[0.3em] !px-12 !py-4">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
