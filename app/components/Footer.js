import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 dark:border-white/10 bg-black/5 dark:bg-black/20 backdrop-blur-sm py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-gradient">Farjana Yeasmin Rimi</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
            <FaFacebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
