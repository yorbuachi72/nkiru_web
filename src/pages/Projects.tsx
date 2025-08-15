import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const projects = [
  {
    id: 1,
    title: 'AI Healthcare Platform',
    category: 'Healthcare',
    description: 'Revolutionary AI-powered diagnostic platform that reduces diagnosis time by 60% while improving accuracy.',
    fullDescription: 'A comprehensive healthcare platform leveraging machine learning algorithms to assist medical professionals in faster and more accurate diagnoses. The system integrates with existing hospital infrastructure and provides real-time insights.',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
    image: 'bg-black',
    textColor: 'text-white',
    year: '2024',
    client: 'MedTech Solutions',
    duration: '8 months',
    team: '12 developers'
  },
  {
    id: 2,
    title: 'Smart Supply Chain',
    category: 'Logistics',
    description: 'End-to-end supply chain optimization using machine learning to predict demand and reduce waste by 40%.',
    fullDescription: 'An intelligent supply chain management system that uses predictive analytics to optimize inventory, reduce costs, and improve delivery times. Features real-time tracking and automated decision-making.',
    technologies: ['Node.js', 'MongoDB', 'AWS', 'React', 'Python'],
    image: 'bg-gray-200',
    textColor: 'text-gray-800',
    year: '2024',
    client: 'Global Logistics Corp',
    duration: '6 months',
    team: '8 developers'
  },
  {
    id: 3,
    title: 'Financial Analytics AI',
    category: 'Finance',
    description: 'Advanced financial modeling platform that provides real-time market insights and risk assessment.',
    fullDescription: 'A sophisticated financial analytics platform that combines AI-driven market analysis with risk management tools. Provides institutional investors with actionable insights and automated trading recommendations.',
    technologies: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Kubernetes'],
    image: 'bg-black',
    textColor: 'text-white',
    year: '2023',
    client: 'Investment Partners LLC',
    duration: '10 months',
    team: '15 developers'
  },
  {
    id: 4,
    title: 'Smart City Infrastructure',
    category: 'Government',
    description: 'IoT-enabled city management system for traffic optimization and energy efficiency.',
    fullDescription: 'A comprehensive smart city platform that integrates IoT sensors, traffic management, and energy systems to create more efficient urban environments. Reduces energy consumption by 30% and improves traffic flow.',
    technologies: ['React', 'Node.js', 'InfluxDB', 'Grafana', 'MQTT'],
    image: 'bg-gray-300',
    textColor: 'text-gray-800',
    year: '2023',
    client: 'City of Innovation',
    duration: '12 months',
    team: '20 developers'
  },
  {
    id: 5,
    title: 'E-Learning AI Tutor',
    category: 'Education',
    description: 'Personalized learning platform with AI-powered tutoring and adaptive curriculum.',
    fullDescription: 'An intelligent e-learning platform that adapts to individual learning styles and provides personalized tutoring. Uses natural language processing to answer student questions and track learning progress.',
    technologies: ['React', 'Python', 'OpenAI API', 'MongoDB', 'WebRTC'],
    image: 'bg-black',
    textColor: 'text-white',
    year: '2024',
    client: 'EduTech Innovations',
    duration: '7 months',
    team: '10 developers'
  },
  {
    id: 6,
    title: 'Retail Analytics Dashboard',
    category: 'Retail',
    description: 'Real-time retail analytics platform for inventory management and customer insights.',
    fullDescription: 'A comprehensive retail analytics solution that provides real-time insights into customer behavior, inventory levels, and sales trends. Helps retailers optimize their operations and improve customer experience.',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Elasticsearch', 'Kibana'],
    image: 'bg-gray-200',
    textColor: 'text-gray-800',
    year: '2023',
    client: 'RetailMax Group',
    duration: '5 months',
    team: '6 developers'
  }
];

const categories = ['All', 'Healthcare', 'Logistics', 'Finance', 'Government', 'Education', 'Retail'];

export default function Projects() {
  const { trackPageView, trackEvent } = useAnalytics();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  React.useEffect(() => {
    trackPageView('/projects');
  }, [trackPageView]);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-bold mb-6" style={{fontSize: '72px', lineHeight: '90px', letterSpacing: '-1.8px'}}>
              OUR LATEST<br />
              <span className="text-gray-600">PROJECTS</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontSize: '18px', lineHeight: '29px', letterSpacing: '0.45px'}}>
              Explore our portfolio of cutting-edge AI solutions and digital transformations that have helped businesses across industries achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-8 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  trackEvent('filter_change', { category, page: 'projects' });
                }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                style={{fontSize: '14px', letterSpacing: '0.35px'}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`relative ${project.image} p-8 h-80 overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 z-10 hover:z-20`}
                tabIndex={0}
                onClick={() => {
                  setSelectedProject(project.id);
                  trackEvent('project_view', { 
                    project_title: project.title, 
                    project_category: project.category,
                    project_year: project.year 
                  });
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0 z-10">
                  <span className={`text-xl font-semibold ${project.textColor}`}>
                    {project.title.toUpperCase()}
                  </span>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 bg-black bg-opacity-90 text-white z-20">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">{project.category}</span>
                      <span className="text-xs text-gray-300">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">{project.client}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{project.category}</span>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{project.fullDescription}</p>
                        
                        <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="bg-black text-white px-3 py-1 rounded-full text-sm">{tech}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Client</h4>
                          <p className="text-gray-600">{project.client}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Year</h4>
                          <p className="text-gray-600">{project.year}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Duration</h4>
                          <p className="text-gray-600">{project.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Team Size</h4>
                          <p className="text-gray-600">{project.team}</p>
                        </div>
                        
                        <div className="flex space-x-4 pt-4">
                          <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            <span>View Live</span>
                          </button>
                          <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()
              }
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}