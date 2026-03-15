import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const projects = [
  {
    id: 1,
    title: 'AI Healthcare Platform',
    category: 'Healthcare',
    description: 'Revolutionary AI-powered diagnostic platform that reduces diagnosis time by 60% while improving accuracy.',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    accent: 'accent-cyan'
  },
  {
    id: 2,
    title: 'Smart Supply Chain',
    category: 'Logistics',
    description: 'End-to-end supply chain optimization using machine learning to predict demand and reduce waste by 40%.',
    technologies: ['Node.js', 'MongoDB', 'AWS', 'React'],
    accent: 'accent-violet'
  },
  {
    id: 3,
    title: 'Financial Analytics AI',
    category: 'Finance',
    description: 'Advanced financial modeling platform that provides real-time market insights and risk assessment.',
    technologies: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    accent: 'accent-neon'
  },
  {
    id: 4,
    title: 'Smart City Infrastructure',
    category: 'Government',
    description: 'IoT-enabled city management system for traffic optimization and energy efficiency.',
    technologies: ['React', 'Node.js', 'InfluxDB', 'Grafana'],
    accent: 'white'
  }
];

export default function Projects() {
  const { trackPageView, trackEvent } = useAnalytics();
  const [selectedCategory, setSelectedCategory] = useState('All');

  React.useEffect(() => {
    trackPageView('/projects');
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-32 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
             style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-hero mb-8">
            LATEST<br />
            <span className="bg-clip-text text-transparent bg-gradient-neon uppercase">PROJECTS</span>
          </h1>
          <p className="text-body-large text-white/60 max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge AI solutions and digital transformations that have helped businesses achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-card group relative overflow-hidden flex flex-col min-h-[400px]"
              >
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-white/40 group-hover:text-${project.accent} group-hover:border-${project.accent}/30 transition-colors`}>
                      {project.category}
                    </span>
                    <ArrowRight className={`w-5 h-5 group-hover:text-${project.accent} transition-colors`} />
                  </div>

                  <h3 className="text-4xl font-heading font-bold mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {project.title.toUpperCase()}
                  </h3>

                  <p className="text-white/50 font-body leading-relaxed mb-10 max-w-sm">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[10px] font-body uppercase tracking-widest text-white/30 bg-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-${project.accent} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-heading tracking-tighter">HAVE A COMPLEX CHALLENGE?</h2>
          <p className="text-white/40 font-body">We specialize in solving high-stakes problems with intelligent technology.</p>
          <div className="pt-4">
            <Link to="/contact" className="btn-neon !text-xs tracking-[0.3em] !px-12 !py-4">
              DISCUSS YOUR PROJECT
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
