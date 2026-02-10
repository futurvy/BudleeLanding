import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin, Building } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    mixpanel.track('Contact Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full min-h-[50vh] flex flex-col relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
          <div className="flex-grow flex items-center justify-center px-4 md:px-12 lg:px-20 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about Budlee AI? We'd love to hear from you. Reach out to our team and we'll get back to you soon.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg">
                Connect with the Budlee AI team
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {/* Founders Contact */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Budlee AI Founders
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Reach out to our founding team for partnerships, collaborations, or general inquiries.
                    </p>
                    <a
                      href="mailto:founders@budlee.ai"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold underline underline-offset-2 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      founders@budlee.ai
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Corporate Office
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Visit us at our office located in the Kannur University LEAP Startup Incubation Centre.
                    </p>
                    <div className="flex items-start text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Budlee AI Corporate Office</p>
                        <p>LEAP Startup Incubation Centre</p>
                        <p>Kannur University, Thavakkara Campus</p>
                        <p>Civil Station P.O., Kannur, Kerala - 670002</p>
                        <p className="font-medium mt-1">India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-12">
              <p className="text-gray-600">
                For support-related inquiries, please visit our{' '}
                <a href="/terms" className="text-green-600 hover:text-green-700 underline underline-offset-2">
                  Terms of Service
                </a>{' '}
                or{' '}
                <a href="/privacy" className="text-green-600 hover:text-green-700 underline underline-offset-2">
                  Privacy Policy
                </a>{' '}
                pages.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;