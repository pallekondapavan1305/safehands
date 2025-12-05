import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SH</span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-display font-bold">Safe Hands Finserv</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-gray-400">
              Your trusted partner for all loan and financial services in Hyderabad.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 touch-manipulation" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-400 rounded-xl flex items-center justify-center transition-all hover:scale-110 touch-manipulation" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 touch-manipulation" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 touch-manipulation" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>EMI Calculator</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-4 sm:mb-6 text-base sm:text-lg">Loan Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Personal Loan</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Business Loan</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Home Loan</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Education Loan</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1 text-blue-400" />
                <span className="text-xs sm:text-sm text-gray-400">Ramanthapur, Hyderabad – 500013</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:9966171074" className="text-xs sm:text-sm hover:text-blue-400 transition-colors touch-manipulation">
                  +91 9966171074
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@safehandsfinserv.com" className="text-xs sm:text-sm hover:text-blue-400 transition-colors break-all touch-manipulation">
                  info@safehandsfinserv.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-center sm:text-left text-gray-400">
              © 2024 Safe Hands Finserv. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors touch-manipulation">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors touch-manipulation">Terms & Conditions</a>
              <a href="#" className="hover:text-blue-400 transition-colors touch-manipulation">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
