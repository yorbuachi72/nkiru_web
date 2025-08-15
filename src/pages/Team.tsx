import React, { useState } from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    department: 'Leadership',
    bio: 'Visionary leader with 15+ years in AI and technology. Former VP at Google AI, Sarah founded Nkiru to democratize AI solutions for businesses worldwide.',
    expertise: ['AI Strategy', 'Business Development', 'Product Vision', 'Team Leadership'],
    education: 'PhD Computer Science, Stanford University',
    experience: '15+ years',
    image: 'bg-black',
    textColor: 'text-white',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@nkiru.tech'
    }
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'CTO',
    department: 'Engineering',
    bio: 'Technical architect and AI researcher with expertise in machine learning systems. Previously led engineering teams at Microsoft and Tesla.',
    expertise: ['Machine Learning', 'System Architecture', 'Cloud Computing', 'DevOps'],
    education: 'MS Computer Science, MIT',
    experience: '12+ years',
    image: 'bg-gray-200',
    textColor: 'text-gray-800',
    social: {
      linkedin: '#',
      github: '#',
      email: 'marcus@nkiru.tech'
    }
  },
  {
    id: 3,
    name: 'Dr. Amara Okafor',
    role: 'Head of AI Research',
    department: 'Research',
    bio: 'Leading AI researcher specializing in natural language processing and computer vision. Published 50+ papers in top-tier conferences.',
    expertise: ['Natural Language Processing', 'Computer Vision', 'Deep Learning', 'Research'],
    education: 'PhD Artificial Intelligence, Carnegie Mellon',
    experience: '10+ years',
    image: 'bg-black',
    textColor: 'text-white',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'amara@nkiru.tech'
    }
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'VP of Product',
    department: 'Product',
    bio: 'Product strategist with a passion for user-centered design. Former product lead at Airbnb, specializing in AI-powered user experiences.',
    expertise: ['Product Strategy', 'UX Design', 'Data Analytics', 'User Research'],
    education: 'MBA Harvard Business School',
    experience: '8+ years',
    image: 'bg-gray-300',
    textColor: 'text-gray-800',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'elena@nkiru.tech'
    }
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Senior ML Engineer',
    department: 'Engineering',
    bio: 'Full-stack ML engineer with expertise in deploying large-scale AI systems. Previously at Netflix, building recommendation algorithms.',
    expertise: ['Machine Learning', 'Python', 'TensorFlow', 'MLOps'],
    education: 'BS Computer Science, UC Berkeley',
    experience: '7+ years',
    image: 'bg-black',
    textColor: 'text-white',
    social: {
      linkedin: '#',
      github: '#',
      email: 'david@nkiru.tech'
    }
  },
  {
    id: 6,
    name: 'Priya Sharma',
    role: 'Data Science Lead',
    department: 'Data Science',
    bio: 'Data scientist and statistician with expertise in predictive modeling and business intelligence. Former consultant at McKinsey & Company.',
    expertise: ['Data Science', 'Statistical Modeling', 'Business Intelligence', 'Analytics'],
    education: 'PhD Statistics, University of Oxford',
    experience: '9+ years',
    image: 'bg-gray-200',
    textColor: 'text-gray-800',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'priya@nkiru.tech'
    }
  },
  {
    id: 7,
    name: 'James Wilson',
    role: 'Head of Sales',
    department: 'Sales',
    bio: 'Sales leader with a track record of building enterprise relationships. Previously at Salesforce, specializing in AI and automation solutions.',
    expertise: ['Enterprise Sales', 'Business Development', 'Client Relations', 'Strategy'],
    education: 'MBA Wharton School',
    experience: '11+ years',
    image: 'bg-black',
    textColor: 'text-white',
    social: {
      linkedin: '#',
      email: 'james@nkiru.tech'
    }
  },
  {
    id: 8,
    name: 'Lisa Thompson',
    role: 'UX Design Lead',
    department: 'Design',
    bio: 'Creative designer focused on making AI accessible through intuitive interfaces. Former design lead at Adobe, specializing in enterprise software.',
    expertise: ['UX/UI Design', 'Design Systems', 'Prototyping', 'User Research'],
    education: 'MFA Design, RISD',
    experience: '6+ years',
    image: 'bg-gray-300',
    textColor: 'text-gray-800',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'lisa@nkiru.tech'
    }
  }
];

const departments = ['All', 'Leadership', 'Engineering', 'Research', 'Product', 'Data Science', 'Sales', 'Design'];

export default function Team() {
  const { trackPageView, trackEvent } = useAnalytics();
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  React.useEffect(() => {
    trackPageView('/team');
  }, [trackPageView]);

  const filteredMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-bold mb-6" style={{fontSize: '72px', lineHeight: '90px', letterSpacing: '-1.8px'}}>
              MEET OUR<br />
              <span className="text-gray-600">TEAM</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontSize: '18px', lineHeight: '29px', letterSpacing: '0.45px'}}>
              Our diverse team of AI experts, engineers, and visionaries are dedicated to pushing the boundaries of what's possible with artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-8 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => {
                  setSelectedDepartment(department);
                  trackEvent('filter_change', { 
                    department, 
                    page: 'team' 
                  });
                }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedDepartment === department
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                style={{fontSize: '14px', letterSpacing: '0.35px'}}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className={`relative ${member.image} p-6 h-80 overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 z-10 hover:z-20`}
                tabIndex={0}
                onClick={() => {
                  setSelectedMember(member.id);
                  trackEvent('team_member_view', {
                    member_name: member.name,
                    member_role: member.role,
                    department: member.department,
                    page: 'team'
                  });
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0 z-10">
                  <div className={`text-center ${member.textColor}`}>
                    <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm opacity-80">{member.role}</p>
                  </div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 bg-black bg-opacity-90 text-white z-20">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">{member.department}</span>
                      <span className="text-xs text-gray-300">{member.experience}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{member.role}</p>
                    <p className="text-xs text-gray-400 mb-4 leading-relaxed">{member.bio.substring(0, 100)}...</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.expertise.slice(0, 2).map((skill) => (
                        <span key={skill} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">{skill}</span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">+{member.expertise.length - 2}</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">View Profile</span>
                      <div className="flex space-x-2">
                        {member.social.linkedin && <Linkedin className="w-3 h-3" />}
                        {member.social.twitter && <Twitter className="w-3 h-3" />}
                        {member.social.github && <Github className="w-3 h-3" />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {(() => {
                const member = teamMembers.find(m => m.id === selectedMember)!;
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                        <p className="text-xl text-gray-600 mb-2">{member.role}</p>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{member.department}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedMember(null);
                          trackEvent('modal_close', {
                            modal_type: 'team_member',
                            member_name: member.name,
                            page: 'team'
                          });
                        }}
                        className="text-gray-500 hover:text-gray-700 text-2xl rounded-full p-2 hover:bg-gray-100"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">About</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                        
                        <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {member.expertise.map((skill) => (
                            <span key={skill} className="bg-black text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Education</h4>
                          <p className="text-gray-600">{member.education}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Experience</h4>
                          <p className="text-gray-600">{member.experience}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Department</h4>
                          <p className="text-gray-600">{member.department}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-4">Connect</h4>
                          <div className="flex space-x-4">
                            {member.social.linkedin && (
                              <a href={member.social.linkedin} className="text-gray-600 hover:text-black transition-colors">
                                <Linkedin className="w-5 h-5" />
                              </a>
                            )}
                            {member.social.twitter && (
                              <a href={member.social.twitter} className="text-gray-600 hover:text-black transition-colors">
                                <Twitter className="w-5 h-5" />
                              </a>
                            )}
                            {member.social.github && (
                              <a href={member.social.github} className="text-gray-600 hover:text-black transition-colors">
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                            {member.social.email && (
                              <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-black transition-colors">
                                <Mail className="w-5 h-5" />
                              </a>
                            )}
                          </div>
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