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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-bold mb-6" style={{fontSize: '72px', lineHeight: '90px', letterSpacing: '-1.8px'}}>
              ABOUT<br />
              <span className="text-gray-600">NKIRU TECHNOLOGIES</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontSize: '18px', lineHeight: '29px', letterSpacing: '0.45px'}}>
              Pioneering the future of technology with AI-driven solutions that transform businesses and empower innovation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded with a vision to democratize artificial intelligence, Nkiru Technologies emerged from the belief that every organization deserves access to cutting-edge technology solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Since our inception, we've been at the forefront of digital transformation, helping startups scale rapidly and enterprises innovate boldly. Our team of experts combines deep technical expertise with strategic business acumen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we're proud to serve over 50 enterprise clients worldwide, delivering solutions that drive measurable results and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower organizations with intelligent technology solutions that drive innovation, efficiency, and sustainable growth in an increasingly digital world.
              </p>
            </div>
            
            {/* Vision */}
            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in AI-driven business transformation, creating a future where technology seamlessly enhances human potential and organizational success.
              </p>
            </div>
            
            {/* Values */}
            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Innovation, integrity, and impact guide our every decision. We believe in transparent partnerships, continuous learning, and delivering exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>





      <Footer />
    </div>
  );
}