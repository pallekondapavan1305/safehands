import { TrendingDown, Zap, FileCheck, Eye, Users, Headphones, DollarSign, BarChart3, ArrowLeftRight, Lock, Settings, Phone } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Lowest Interest Rates',
    description: 'Competitive rates starting from 8.5% p.a. Get immediate savings on every loan, powered by our network to optimize your financial transactions.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Fast Processing',
    description: 'Get loan approval within 24-48 hours. Make smarter decisions with real-time eligibility checks and actionable insights delivered instantly.',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: ArrowLeftRight,
    title: 'Flexible EMIs',
    description: 'Choose repayment plans that adapt to your financial needs, offering unparalleled flexibility and cost-effectiveness for your budget.',
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: Lock,
    title: 'Secure Processing',
    description: 'Prioritize safety with cutting-edge encryption and robust security features for every transaction and document submission.',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: Settings,
    title: '100% Paperless',
    description: 'Leverage digital features that evolve with technology, ensuring efficiency and innovation at every step of your loan journey.',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Access expert assistance 24/7 to ensure you\'re never alone on your financial journey. Our team is always ready to help.',
    gradient: 'from-indigo-500 to-indigo-600',
  }
];

const featureTags = [
  'Lowest Interest Rates',
  'Flexible Payments',
  'Quick Approval',
  'Customizable Plans',
  'Real-Time Insights',
  'Instant Savings',
  'Automatic Adjustments',
  'Real-Time Reports',
  'Secure Transactions',
  'Dedicated Support',
  'Growth With AI',
  'Smart Spending'
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden w-full">
      {/* Background Light Streaks */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent blur-sm"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-transparent blur-sm"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent blur-sm"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="border border-white/20 rounded-lg px-3 sm:px-4 py-1 sm:py-1.5">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Benefits</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Why Choose Safe Hands Finserv
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Innovative tools and powerful insights designed to elevate your financial journey
          </p>
        </div>

        {/* Benefits Grid - 2x3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-gray-600/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex flex-col">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/50 group-hover:border-gray-600 transition-colors">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Tags Section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {featureTags.slice(0, 6).map((tag, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 hover:border-gray-600/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{tag}</span>
              </div>
            ))}
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {featureTags.slice(6, 12).map((tag, index) => (
              <div
                key={index + 6}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 hover:border-gray-600/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
