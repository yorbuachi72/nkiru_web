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
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Strategy Consulting'
    ],
    benefits: [
      'Automate complex processes',
      'Improve decision-making accuracy',
      'Reduce operational costs by 40%',
      'Scale intelligent solutions'
    ]
  },
  {
    id: 2,
    title: 'Digital Transformation',
    icon: Zap,
    description: 'Modernize your operations with comprehensive digital transformation strategies and implementation.',
    features: [
      'Legacy System Modernization',
      'Cloud Migration Services',
      'Process Automation',
      'Digital Strategy Planning',
      'Change Management'
    ],
    benefits: [
      'Increase operational efficiency',
      'Enhance customer experience',
      'Improve data accessibility',
      'Future-proof your business'
    ]
  },
  {
    id: 3,
    title: 'Software Development',
    icon: Code,
    description: 'Custom software solutions built with modern technologies and best practices for scalability.',
    features: [
      'Full-Stack Web Development',
      'Mobile App Development',
      'API Development & Integration',
      'Database Design & Optimization',
      'DevOps & CI/CD Implementation'
    ],
    benefits: [
      'Tailored to your specific needs',
      'Scalable and maintainable code',
      'Faster time-to-market',
      'Ongoing support and maintenance'
    ]
  },
  {
    id: 4,
    title: 'Strategic Consulting',
    icon: Target,
    description: 'Expert guidance to align technology initiatives with your business objectives and growth strategy.',
    features: [
      'Technology Assessment',
      'Digital Roadmap Planning',
      'Architecture Design',
      'Risk Assessment & Mitigation',
      'Performance Optimization'
    ],
    benefits: [
      'Make informed technology decisions',
      'Optimize resource allocation',
      'Minimize implementation risks',
      'Accelerate digital initiatives'
    ]
  }
];

export default function Services() {
  const { trackPageView, trackEvent } = useAnalytics();

  React.useEffect(() => {
    trackPageView('/services');
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-bold mb-6" style={{fontSize: '72px', lineHeight: '90px', letterSpacing: '-1.8px'}}>
              OUR<br />
              <span className="text-gray-600">SERVICES</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontSize: '18px', lineHeight: '29px', letterSpacing: '0.45px'}}>
              Comprehensive technology solutions designed to transform your business and drive sustainable growth through innovation and strategic implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => {
                    trackEvent('service_interest', {
                      service_name: service.title,
                      service_id: service.id,
                      page: 'services'
                    });
                  }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-black p-3 rounded-lg mr-4 group-hover:bg-gray-800 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your technology goals and drive sustainable growth.
          </p>
          <Link 
            to="/contact#get-in-touch" 
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
            onClick={() => {
              trackEvent('cta_click', {
                button_text: 'Get Started Today',
                page: 'services',
                section: 'call_to_action'
              });
            }}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}