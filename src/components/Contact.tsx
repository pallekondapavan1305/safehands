import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from './ui/neon-button';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919966171074', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Visit us or reach out - we're here to help you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-modern p-6 sm:p-8 md:p-10 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 mb-1 text-sm sm:text-base">Office Address</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Opp. TV Studio, 4th Lane Ganesh Nagar,<br />
                      Ramanthapur, Hyderabad – 500013
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-green-50 transition-colors group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 mb-1 text-sm sm:text-base">Phone Number</h4>
                    <a href="tel:9966171074" className="text-blue-600 hover:text-blue-700 text-base sm:text-lg font-semibold hover:underline">
                      +91 9966171074
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-purple-50 transition-colors group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 mb-1 text-sm sm:text-base">Email Address</h4>
                    <a href="mailto:info@safehandsfinserv.com" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-semibold hover:underline break-all">
                      info@safehandsfinserv.com
                    </a>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWhatsApp}
                variant="solid"
                size="lg"
                className="w-full mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg touch-manipulation"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl sm:rounded-3xl shadow-modern-lg p-6 sm:p-8 border border-blue-500/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 sm:space-y-3 text-blue-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl gap-1 sm:gap-0">
                  <span className="font-medium text-sm sm:text-base">Monday - Saturday:</span>
                  <span className="font-bold text-white text-sm sm:text-base">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl gap-1 sm:gap-0">
                  <span className="font-medium text-sm sm:text-base">Sunday:</span>
                  <span className="font-bold text-white text-sm sm:text-base">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-modern-lg overflow-hidden border border-gray-100 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5856441772!2d78.5485!3d17.3967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzQ4LjEiTiA3OMKwMzInNTQuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Safe Hands Finserv Location"
              className="rounded-2xl sm:rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
