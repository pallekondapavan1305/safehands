import { Wallet, Briefcase, Home, GraduationCap, DollarSign } from 'lucide-react';
import AnimatedBorderCard from './ui/dynamic-border-animations-card';

const services = [
  {
    icon: Wallet,
    title: 'Personal Loan',
    description: 'Quick approval for personal needs',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100/50',
    iconBg: 'bg-blue-500',
    borderColor: 'blue' as const,
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Loans for startups, expansion, working capital',
    gradient: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100/50',
    iconBg: 'bg-green-500',
    borderColor: 'green' as const,
  },
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Affordable home financing',
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100/50',
    iconBg: 'bg-purple-500',
    borderColor: 'purple' as const,
  },
  {
    icon: GraduationCap,
    title: 'Educational Loan',
    description: 'Loans for studies in India or abroad',
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100/50',
    iconBg: 'bg-orange-500',
    borderColor: 'orange' as const,
  },
  {
    icon: DollarSign,
    title: 'Other Loan Categories',
    description: 'Gold loans, mortgage loans, vehicle loans',
    gradient: 'from-pink-500 to-pink-600',
    bgGradient: 'from-pink-50 to-pink-100/50',
    iconBg: 'bg-pink-500',
    borderColor: 'pink' as const,
  }
];

export default function Services() {
  const handleApplyClick = (serviceTitle: string) => {
    // You can add navigation or form opening logic here
    console.log(`Apply clicked for ${serviceTitle}`);
    // Example: Scroll to contact form or open application modal
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
            Our Loan Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Choose from a wide range of loan options tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <AnimatedBorderCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              borderColor={service.borderColor}
              onApplyClick={() => handleApplyClick(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
