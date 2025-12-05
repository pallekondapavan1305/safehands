import { FileText, CheckCircle, Banknote, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Your Details',
    description: 'Fill out our simple online form with your basic information and loan requirements.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: CheckCircle,
    title: 'Get Loan Eligibility',
    description: 'Our system instantly checks your eligibility and provides you with the best loan options.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Banknote,
    title: 'Loan Approval & Disbursal',
    description: 'Get quick approval and receive funds directly in your bank account within 24-48 hours.',
    color: 'from-purple-500 to-purple-600',
  }
];

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Get your loan in 3 simple steps</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-modern hover:shadow-modern-lg transition-all duration-300 p-6 sm:p-8 md:p-10 text-center h-full border border-gray-100 transform hover:-translate-y-2 group">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"></div>
                  <ArrowRight className="w-6 h-6 text-blue-400 absolute -right-2 top-1/2 transform -translate-y-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
