import React, { useState } from 'react';
import { Linkedin, Twitter, Github, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    department: 'Leadership',
    bio: 'Visionary leader with 15+ years in AI and technology. Former VP at Google AI.',
    image: 'bg-accent-cyan',
    accent: 'accent-cyan'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'CTO',
    department: 'Engineering',
    bio: 'Technical architect and AI researcher with expertise in machine learning systems.',
    image: 'bg-accent-violet',
    accent: 'accent-violet'
  },
  {
    id: 3,
    name: 'Dr. Amara Okafor',
    role: 'Head of AI Research',
    department: 'Research',
    bio: 'Leading AI researcher specializing in natural language processing and computer vision.',
    image: 'bg-accent-neon',
    accent: 'accent-neon'
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'VP of Product',
    department: 'Product',
    bio: 'Product strategist with a passion for user-centered design.',
    image: 'bg-white',
    accent: 'white'
  }
];

export default function Team() {
  const { trackPageView, trackEvent } = useAnalytics();

  React.useEffect(() => {
    trackPageView('/team');
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-32 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-violet/10 blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-hero mb-8">
            MEET THE<br />
            <span className="bg-clip-text text-transparent bg-gradient-neon uppercase">VISIONARIES</span>
          </h1>
          <p className="text-body-large text-white/60 max-w-3xl mx-auto">
            Our diverse team of AI experts, engineers, and visionaries are dedicated to pushing the boundaries of what's possible.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="glass-card group relative overflow-hidden flex flex-col items-center text-center p-8"
              >
                <div className={`w-24 h-24 rounded-2xl ${member.image} opacity-20 mb-8 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center`}>
                  <span className="text-black font-black text-2xl">{member.name[0]}</span>
                </div>

                <h3 className="text-xl font-heading font-bold mb-2 tracking-tighter group-hover:text-accent-cyan transition-colors">
                  {member.name.toUpperCase()}
                </h3>
                <p className="text-accent-violet text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </p>

                <p className="text-white/40 text-xs font-body leading-relaxed mb-8">
                  {member.bio}
                </p>

                <div className="flex gap-4 mt-auto">
                   <Linkedin size={16} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
                   <Twitter size={16} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 bg-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-section-title">JOIN THE REVOLUTION</h2>
          <p className="text-white/40 font-body">We are always looking for bold thinkers and brilliant engineers.</p>
          <div className="pt-6">
            <Link to="/contact" className="btn-neon !text-xs tracking-[0.3em] !px-12 !py-4">
              VIEW OPEN ROLES
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
