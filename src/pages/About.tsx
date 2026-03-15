import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Target, Eye, Heart, Users, Award, Globe, Zap } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function About() {
  const { trackPageView } = useAnalytics();

  React.useEffect(() => {
    trackPageView('/about');
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent-cyan/10 blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-hero mb-8">
            ABOUT<br />
            <span className="bg-clip-text text-transparent bg-gradient-neon uppercase">Nkiru Technologies</span>
          </h1>
          <p className="text-body-large text-white/60 max-w-3xl mx-auto">
            Pioneering the future of technology with AI-driven solutions that transform businesses and empower innovation across industries.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h4 className="text-accent-cyan font-heading font-bold text-xs uppercase tracking-[0.3em]">Our Journey</h4>
              <h2 className="text-section-title">A VISION FOR<br />INTELLIGENT SCALING</h2>
              <div className="space-y-6 text-white/60 font-body leading-relaxed">
                <p>
                  Founded with a vision to democratize artificial intelligence, Nkiru Technologies emerged from the belief that every organization deserves access to cutting-edge technology solutions.
                </p>
                <p>
                  Since our inception, we've been at the forefront of digital transformation, helping startups scale rapidly and enterprises innovate boldly. Our team of experts combines deep technical expertise with strategic business acumen.
                </p>
              </div>
            </div>
            <div className="glass-card p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-neon" />
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-heading font-bold text-white mb-2">50+</div>
                  <div className="text-xs text-accent-cyan uppercase tracking-widest font-bold">Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-white mb-2">120+</div>
                  <div className="text-xs text-accent-violet uppercase tracking-widest font-bold">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-white mb-2">15+</div>
                  <div className="text-xs text-accent-neon uppercase tracking-widest font-bold">AI Models</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-white mb-2">24/7</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-section-title mb-6">OUR FOUNDATION</h2>
            <p className="text-white/40 max-w-2xl mx-auto font-body">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Our Mission', icon: Target, color: 'text-accent-cyan', text: 'To empower organizations with intelligent technology solutions that drive innovation, efficiency, and sustainable growth.' },
              { title: 'Our Vision', icon: Eye, color: 'text-accent-violet', text: 'To be the global leader in AI-driven business transformation, creating a future where technology enhances human potential.' },
              { title: 'Our Values', icon: Heart, color: 'text-accent-neon', text: 'Innovation, integrity, and impact guide our every decision. We believe in transparent partnerships and continuous learning.' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-gradient-neon transition-all duration-500">
                  <item.icon className={`w-8 h-8 ${item.color} group-hover:text-black transition-colors`} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-body">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
