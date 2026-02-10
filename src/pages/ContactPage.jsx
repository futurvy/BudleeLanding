import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin, Building } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    mixpanel.track('Contact Page Viewed');
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Reach out to our founding team for partnerships, collaborations, or general inquiries.",
      color: "from-green-400 to-emerald-500",
      details: [
        "Partnership opportunities",
        "Business collaborations",
        "General inquiries",
        "Technical questions"
      ],
      contact: "founders@budlee.ai",
      link: "mailto:founders@budlee.ai"
    },
    {
      icon: Building,
      title: "Request a Demo",
      description: "Experience Budlee AI firsthand with a personalized demo tailored to your educational needs.",
      color: "from-blue-400 to-indigo-500",
      details: [
        "See Budlee AI in action",
        "Learn about implementation",
        "Discuss customization options",
        "Get pricing information"
      ],
      contact: "Request a Demo",
      link: "#demo-form"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full min-h-[50vh] flex flex-col relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
          <div className="flex-grow flex items-center justify-center px-4 md:px-12 lg:px-20 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-6">
              Get <span className="gradient-text">in Touch</span>
            </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about Budlee AI? We'd love to hear from you. Reach out to our team and we'll get back to you soon.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mb-6">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Contact Link */}
                  <a
                    href={method.link}
                    className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo-form" className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request a Demo
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/School *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your organization or school name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="teacher">Teacher/Educator</option>
                    <option value="administrator">School Administrator</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="demoType" className="block text-sm font-medium text-gray-700 mb-2">
                    Demo Type
                  </label>
                  <select
                    id="demoType"
                    name="demoType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Overview</option>
                    <option value="teacher">Teacher-Focused Demo</option>
                    <option value="administrator">Administrator Demo</option>
                    <option value="technical">Technical Implementation Demo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your specific needs or questions..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="w-full py-8 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
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