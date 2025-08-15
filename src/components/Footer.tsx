import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-16">
      <div className="max-w-[1232px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl">NKIRU</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-driven, human-centered solutions for the future of business.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 leading-5">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="uppercase tracking-wider leading-5">AI-Powered Solutions</li>
              <li className="uppercase tracking-wider leading-5">Digital Transformation</li>
              <li className="uppercase tracking-wider leading-5">Software Development</li>
              <li className="uppercase tracking-wider leading-5">Strategic Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 leading-5">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors uppercase tracking-wider leading-5">About Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors uppercase tracking-wider leading-5">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors uppercase tracking-wider leading-5">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 leading-5">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider leading-5">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider leading-5">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex justify-end">
          <p className="text-sm text-gray-400">&copy; 2025 Nkiru Technologies, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}