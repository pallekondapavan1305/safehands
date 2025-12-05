import { Building2, Target, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6">
              About Safe Hands Finserv
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Safe Hands Finserv is a trusted loan service provider located in Ramanthapur, Hyderabad.
              We help customers get quick, easy, and transparent loan approvals for all financial needs.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              With years of experience in the financial services industry, we have built strong relationships
              with leading banks and NBFCs to offer you the best loan products at competitive rates. Our mission
              is to make financial services accessible, transparent, and hassle-free for everyone.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-blue-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1 sm:mb-2">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-green-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-1 sm:mb-2">
                  ₹50Cr+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Loans Disbursed</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-blue-100 hover:shadow-modern-lg transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Established</h3>
              <p className="text-xs sm:text-sm text-gray-600">Trusted Name in Hyderabad</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-green-100 hover:shadow-modern-lg transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600">Easy Access to Finance</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-purple-100 hover:shadow-modern-lg transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Excellence</h3>
              <p className="text-xs sm:text-sm text-gray-600">Quality Service Always</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-orange-100 hover:shadow-modern-lg transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Customer First</h3>
              <p className="text-xs sm:text-sm text-gray-600">Your Trust, Our Priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
