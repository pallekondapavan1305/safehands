import { MessageCircle, Shield, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/neon-button';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
    loanAmount: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919966171074', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full">
          {/* Left Column - Content */}
          <div className="w-full flex flex-col items-center lg:items-start">
            {/* Trust Badge - Centered on mobile */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 w-full">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Trusted by 1000+ Customers</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-center lg:text-left w-full">
              Fast & Easy Loans for Your{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
                Every Need
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-5 sm:mb-6 md:mb-8 leading-relaxed text-center lg:text-left w-full">
              Instant approvals, low interest rates, flexible EMIs with Safe Hands Finserv.
            </p>

            {/* Feature Badges - 2 on top, 1 centered below on mobile */}
            <div className="mb-5 sm:mb-6 md:mb-8 w-full">
              <div className="flex flex-col items-center lg:items-start gap-2.5 sm:gap-3 w-full">
                {/* Top Row - 2 badges */}
                <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 w-full">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">1000+ Happy Customers</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Quick Approval</span>
                  </div>
                </div>
                {/* Bottom Row - 1 centered badge */}
                <div className="flex justify-center lg:justify-start w-full">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Secure Processing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button - Centered on mobile */}
            <div className="flex justify-center lg:justify-start w-full">
              <Button
                onClick={handleWhatsApp}
                variant="solid"
                size="lg"
                className="flex items-center justify-center gap-2 sm:gap-3 text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Contact on WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full mt-6 sm:mt-8 lg:mt-0">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-modern-lg p-5 sm:p-6 md:p-8 lg:p-10 text-gray-800 border border-white/50 w-full">
              {/* Form Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg sm:text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gray-900">Get Your Loan Now</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Fill in your details below</p>
                </div>
              </div>
              
              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 md:space-y-5 w-full">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Loan Type
                  </label>
                  <select
                    required
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white text-sm sm:text-base"
                  >
                    <option value="">Select loan type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="education">Education Loan</option>
                    <option value="other">Other Loans</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white text-sm sm:text-base"
                    placeholder="Enter amount"
                  />
                </div>

                <Button
                  type="submit"
                  variant="solid"
                  size="lg"
                  className="w-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base md:text-lg py-2.5 sm:py-3 mt-1 sm:mt-2"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
