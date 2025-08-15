import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield, Zap, RotateCcw, Code, BarChart3, ChevronLeft, ChevronRight, User, Calendar, Mail, Phone, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation, useSmoothScroll } from '../hooks/useScrollAnimation';
import { usePreload, usePerformanceMonitor } from '../hooks/usePerformance';
import { useAnalytics } from '../hooks/useAnalytics';
import LazyImage from '../components/LazyImage';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Initialize smooth scroll behavior
  useSmoothScroll();
  const { preloadImage } = usePreload();
  const performanceMetrics = usePerformanceMonitor();
  const { trackPageView, trackEvent } = useAnalytics();

  // Preload critical images and track page view
  useEffect(() => {
    // Track page view
    trackPageView('Home');
    
    // Preload hero background or key images
    preloadImage('/hero-bg.jpg');
    preloadImage('/team-photo.jpg');
  }, [preloadImage, trackPageView]);
  
  // Animation refs for each section
  const heroAnimation = useScrollAnimation(0.2);
  const servicesAnimation = useScrollAnimation(0.2);
  const projectsAnimation = useScrollAnimation(0.2);
  const teamAnimation = useScrollAnimation(0.2);
  const testimonialsAnimation = useScrollAnimation(0.2);
  const contactAnimation = useScrollAnimation(0.2);
  
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

  const currentTestimonial = activeTestimonial;

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    trackEvent('testimonial_navigation', { direction: 'next', testimonial_index: (activeTestimonial + 1) % testimonials.length });
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    trackEvent('testimonial_navigation', { direction: 'previous', testimonial_index: (activeTestimonial - 1 + testimonials.length) % testimonials.length });
  };

  const handleCTAClick = (location: string) => {
    trackEvent('cta_click', { location });
  };

  return (
    <div className="bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      {/* Hero Section - Responsive Design */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col">
            {/* Main Headline with Body Text and CTA - Responsive Layout */}
            <div className="relative">
              <h1 
                className="text-black leading-none"
                style={{
                  fontSize: 'clamp(36px, 8vw, 72px)',
                  lineHeight: 'clamp(45px, 10vw, 90px)',
                  letterSpacing: 'clamp(-0.9px, -0.025vw, -1.8px)',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  maxWidth: '100%'
                }}
              >
                <div>BEHOLD WHAT'S</div>
                <div>NEXT —</div>
                <div>AI-DRIVEN,</div>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <span className="mb-6 lg:mb-0">HUMAN-CENTERED.</span>
                  <div className="flex flex-col items-center lg:items-end lg:ml-8 w-full lg:w-auto" style={{ maxWidth: '400px' }}>
                    {/* Body Text positioned above CTA */}
                    <p 
                      className="text-black text-center lg:text-right mb-6"
                      style={{
                        fontFamily: 'Arial, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                        lineHeight: 'clamp(24px, 3.5vw, 29px)',
                        letterSpacing: '0.45px'
                      }}
                    >
                      WE ENGINEER ADVANCED AI SOLUTIONS, BOLD STRATEGIES, AND PERFECT EXECUTION THAT TURN AMBITION INTO ACHIEVEMENT.
                    </p>
                    {/* CTA Button */}
                    <Link
                      to="/contact#get-in-touch"
                      onClick={() => handleCTAClick('hero')}
                      className="bg-black text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200 touch-manipulation rounded-lg"
                      style={{
                        minWidth: '140px',
                        minHeight: '44px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '16px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        flexShrink: 0,
                        padding: '10px 20px'
                      }}
                    >
                        LET'S TALK
                      </Link>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section - Responsive Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-white mb-8"
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
              }}
            >
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '24px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold'
                }}
              >
                AI-Powered Solutions
              </h3>
              <p 
                className="text-white"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.5'
                }}
              >
                Custom AI implementation tailored to your business needs
              </p>
            </div>
            
            <div className="text-center text-white">
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '24px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold'
                }}
              >
                Digital Transformation
              </h3>
              <p 
                className="text-white"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.5'
                }}
              >
                Modernize your operations with cutting-edge technology
              </p>
            </div>
            
            <div className="text-center text-white">
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '24px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold'
                }}
              >
                Software Development
              </h3>
              <p 
                className="text-white"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.5'
                }}
              >
                Enterprise-grade software solutions built to scale
              </p>
            </div>
            
            <div className="text-center text-white">
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '24px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold'
                }}
              >
                Strategic Consulting
              </h3>
              <p 
                className="text-white"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.5'
                }}
              >
                Expert guidance for your technology roadmap
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Project Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-black mb-8"
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
              }}
            >
              Latest Project
            </h2>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <h3 
              className="text-black mb-4"
              style={{
                fontSize: '24px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
              }}
            >
              Enterprise AI Platform
            </h3>
            <p 
              className="text-black mb-6"
              style={{
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.5'
              }}
            >
              A comprehensive AI platform that revolutionized data processing for a Fortune 500 company, resulting in 40% efficiency gains.
            </p>
            <Link
              to="/projects"
              className="bg-black text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors duration-200 touch-manipulation rounded-lg"
              style={{
                minWidth: '167px',
                minHeight: '52px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '12px 24px'
              }}
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-white mb-8"
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
              }}
            >
              Our Team
            </h2>
          </div>
          
          <div className="text-center">
            <p 
              className="text-white mb-8"
              style={{
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Our diverse team of AI experts, engineers, and strategists brings decades of combined experience in delivering transformative technology solutions.
            </p>
            
            {/* Vertical spacer for better visual separation */}
            <div className="mb-8"></div>
            
            <Link
              to="/team"
              className="bg-white text-black hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 touch-manipulation rounded-lg"
              style={{
                minWidth: '167px',
                minHeight: '52px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '12px 24px'
              }}
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* What Our Client Says Section */}
      <section 
        ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 bg-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          testimonialsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-black mb-8"
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
              }}
            >
              What Our Client Says
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 text-center relative">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote 
                className="text-black mb-6"
                style={{
                  fontSize: '18px',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}
              >
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="text-center">
                <div 
                  className="text-black font-bold"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  {testimonials[currentTestimonial].author}
                </div>
                <div 
                  className="text-gray-600"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
              
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-black text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors touch-manipulation"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-colors touch-manipulation ${
                        index === currentTestimonial ? 'bg-black' : 'bg-gray-300'
                      }`}
                      style={{ minWidth: '44px', minHeight: '44px' }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-black text-white hover:bg-gray-800 focus:bg-gray-800 transition-colors touch-manipulation"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk With Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 
              className="text-white mb-8"
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
              }}
            >
              Talk With Us
            </h2>
            
            <p 
              className="text-white mb-8"
              style={{
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}
            >
              Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
            </p>
            
            <Link
              to="/contact#get-in-touch"
              onClick={() => handleCTAClick('talk_with_us')}
              className="bg-white text-black hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 touch-manipulation rounded-lg"
              style={{
                minWidth: '167px',
                minHeight: '52px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '12px 24px'
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}