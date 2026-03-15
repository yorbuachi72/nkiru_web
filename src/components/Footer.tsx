import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="font-heading font-bold text-2xl tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
                <span className="text-black text-xs font-black">NK</span>
              </div>
              <span>NKIRU</span>
            </Link>
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs">
              Empowering enterprises through human-centered AI innovation. Transforming complex challenges into intelligent solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-cyan/20 hover:text-accent-cyan transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-cyan/20 hover:text-accent-cyan transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-cyan/20 hover:text-accent-cyan transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-accent-cyan mb-8">Services</h4>
            <ul className="space-y-4">
              {['AI Solutions', 'Digital Transformation', 'Software Development', 'Strategic Consulting'].map(item => (
                <li key={item}>
                  <Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm font-body uppercase tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-accent-violet mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Team', path: '/team' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/60 hover:text-white transition-colors text-sm font-body uppercase tracking-wider">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-accent-neon mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6 font-body">Get the latest AI insights delivered to your inbox.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:border-accent-cyan focus:outline-none transition-colors"
              />
              <button className="bg-white text-black p-2 rounded-lg hover:bg-accent-cyan transition-colors">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-body uppercase tracking-widest">
            &copy; 2025 Nkiru Technologies, LLC. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-white/20 hover:text-white/40 uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-white/20 hover:text-white/40 uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
