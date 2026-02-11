import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, Search, MessageCircle, FileText, Phone, Mail, MapPin, Clock } from 'lucide-react';

const HelpCenterPage = () => {
  useEffect(() => {
    mixpanel.track('Help Center Page Viewed');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  // Helper function to create URL slugs
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  const helpCategories = [
    {
      icon: MessageCircle,
      title: "Getting Started",
      description: "New to Budlee AI? Start here with basic setup and account creation.",
      color: "from-blue-400 to-indigo-500",
      articles: [
        "How to create your account",
        "Setting up your profile",
        "Navigating the platform",
        "Understanding your dashboard"
      ]
    },
    {
      icon: HelpCircle,
      title: "AI Chat & Features",
      description: "Learn how to use our AI chat, community features, and learning tools.",
      color: "from-green-400 to-emerald-500",
      articles: [
        "Using AI Chat effectively",
        "Community guidelines",
        "Completing quests",
        "Exploring Curiosity Centre"
      ]
    },
    {
      icon: FileText,
      title: "Account & Billing",
      description: "Manage your account settings, subscriptions, and billing information.",
      color: "from-purple-400 to-violet-500",
      articles: [
        "Managing subscriptions",
        "Payment methods",
        "Account settings",
        "Privacy controls"
      ]
    },
    {
      icon: Phone,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them quickly.",
      color: "from-orange-400 to-red-500",
      articles: [
        "App not loading",
        "Login problems",
        "Payment errors",
        "Performance issues"
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "support@budlee.ai",
      availability: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team for immediate assistance",
      contact: "Available 24/7",
      availability: "Round the clock support"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical support team",
      contact: "+91-XXXX-XXXXXX",
      availability: "Mon-Fri, 10 AM - 5 PM IST"
    }
  ];

  const popularArticles = [
    "How to reset your password",
    "Understanding subscription plans",
    "Using AI Chat for homework help",
    "Managing your privacy settings",
    "Troubleshooting login issues",
    "Completing your first quest"
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-0">
              Help <span className="gradient-text">Center</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Find answers, get support, and make the most of your Budlee AI experience.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Browse by Category</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-1">
                    {category.articles.slice(0, 3).map((article, idx) => (
                      <li key={idx} className="text-gray-600 text-xs flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        <Link to={`/help/${createSlug(article)}`} className="hover:text-green-600 transition-colors">
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
                    View all articles →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Popular Articles</h2>

            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 hover:text-green-600 transition-colors cursor-pointer">
                          <Link to={`/help/${createSlug(article)}`} className="hover:text-green-600 transition-colors">
                            {article}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Quick guide to help you get started
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Contact Support</h2>
              <p className="text-gray-600 text-lg">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {option.description}
                  </p>
                  <p className="font-medium text-gray-800 mb-1">
                    {option.contact}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {option.availability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-green-100 text-lg mb-8">
              Located in the heart of innovation at Kannur University
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <div className="flex items-start gap-4 text-left">
                <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div className="text-white">
                  <h3 className="font-bold mb-2">Budlee AI Corporate Office</h3>
                  <p className="mb-1">LEAP Startup Incubation Centre</p>
                  <p className="mb-1">Kannur University, Thavakkara Campus</p>
                  <p className="mb-1">Civil Station P.O., Kannur, Kerala - 670002</p>
                  <p className="font-medium">India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6 text-white">
                <Clock className="w-5 h-5" />
                <span>Monday - Friday: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        headline=""
        subtext=""
        ctaText=""
      />
    </div>
  );
};

export default HelpCenterPage;