import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">AI.Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building intelligent solutions with AI and data science. Transforming ideas into reality
              through code and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-primary mx-1 fill-current" /> by Anshid © 2026
          </p>
          <p className="text-gray-400 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;