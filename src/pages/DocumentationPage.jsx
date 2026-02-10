import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, CreditCard, Shield, Headphones, Settings, Code, Database, Smartphone } from 'lucide-react';

const DocumentationPage = () => {
  useEffect(() => {
    mixpanel.track('Documentation Page Viewed');
  }, []);

  const docSections = [
    {
      title: "Subscription Management",
      icon: CreditCard,
      color: "from-blue-400 to-indigo-500",
      content: [
        {
          title: "How to Subscribe",
          details: [
            "Go to Settings > Subscription from your dashboard",
            "Choose between monthly or yearly plans",
            "Enter payment details securely via Stripe or RazorPay",
            "Confirm subscription and receive confirmation email"
          ]
        },
        {
          title: "Plan Features",
          details: [
            "Free tier: Limited AI chat and basic features",
            "Premium: Unlimited AI chat, all quests, full community access",
            "School plans: Managed by educational institutions",
            "Enterprise: Custom solutions for organizations"
          ]
        },
        {
          title: "Cancellation & Refunds",
          details: [
            "Cancel anytime from Settings > Subscription",
            "Access continues until the end of billing period",
            "No refunds for partial months",
            "Contact support for special circumstances"
          ]
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      color: "from-green-400 to-emerald-500",
      content: [
        {
          title: "Data Protection",
          details: [
            "End-to-end encryption for all communications",
            "Data stored securely in compliance with Indian laws",
            "Regular security audits and updates",
            "User data never sold to third parties"
          ]
        },
        {
          title: "Privacy Controls",
          details: [
            "Control what data is shared in community features",
            "Manage cookie preferences in browser settings",
            "Delete account and data upon request",
            "Transparent privacy policy available"
          ]
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Headphones,
      color: "from-purple-400 to-violet-500",
      content: [
        {
          title: "Getting Help",
          details: [
            "Email: support@budlee.ai (24-48 hour response)",
            "In-app help center with searchable articles",
            "Community forums for peer support",
            "Priority support for premium subscribers"
          ]
        },
        {
          title: "Common Issues",
          details: [
            "App crashes: Clear cache and update to latest version",
            "Login problems: Reset password or check email verification",
            "Payment errors: Verify card details and billing address",
            "AI responses: Rephrase questions for better accuracy"
          ]
        }
      ]
    },
    {
      title: "Advanced Features",
      icon: Settings,
      color: "from-orange-400 to-red-500",
      content: [
        {
          title: "API Integration",
          details: [
            "RESTful API for custom integrations (coming soon)",
            "Webhook support for real-time notifications",
            "SDK available for major programming languages",
            "Documentation and code samples provided"
          ]
        },
        {
          title: "Customization Options",
          details: [
            "Personalize learning dashboard and themes",
            "Create custom quest sequences",
            "Set up automated learning reminders",
            "Configure notification preferences"
          ]
        }
      ]
    },
    {
      title: "Mobile & Web Access",
      icon: Smartphone,
      color: "from-teal-400 to-cyan-500",
      content: [
        {
          title: "Mobile App",
          details: [
            "Available on iOS App Store and Google Play",
            "Offline mode for saved content and quests",
            "Push notifications for learning reminders",
            "Touch-optimized interface for mobile learning"
          ]
        },
        {
          title: "Web Platform",
          details: [
            "Responsive design works on all devices",
            "Browser-based access without downloads",
            "Sync across devices with cloud backup",
            "Advanced features available on web version"
          ]
        }
      ]
    },
    {
      title: "For Schools & Educators",
      icon: Database,
      color: "from-pink-400 to-rose-500",
      content: [
        {
          title: "School Integration",
          details: [
            "Single sign-on (SSO) with school systems",
            "Class management and progress tracking",
            "Custom curriculum alignment",
            "Bulk licensing for entire schools"
          ]
        },
        {
          title: "Teacher Tools",
          details: [
            "Assignment creation and grading assistance",
            "Student progress analytics and reports",
            "Curriculum planning with AI support",
            "Parent communication features"
          ]
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      link: "/tutorials#getting-started"
    },
    {
      title: "API Documentation",
      description: "Technical integration guides",
      link: "#api-docs"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      link: "/tutorials#troubleshooting"
    },
    {
      title: "Best Practices",
      description: "Tips for optimal learning experience",
      link: "/tutorials#tips"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-6">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive guides and technical documentation for Budlee AI platform users, developers, and administrators.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="w-full py-12 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">Quick Links</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {docSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Additional Help?</h2>
            <p className="text-green-100 text-lg mb-8">
              Our support team is here to help you make the most of Budlee AI
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <FileText className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Check FAQs</h3>
                <p className="text-green-100 text-sm mb-4">Find answers to common questions</p>
                <a
                  href="/faqs"
                  className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  View FAQs
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Headphones className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Contact Support</h3>
                <p className="text-green-100 text-sm mb-4">Get direct help from our team</p>
                <a
                  href="mailto:support@budlee.ai"
                  className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  Email Us
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Code className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Developer Resources</h3>
                <p className="text-green-100 text-sm mb-4">API docs and integration guides</p>
                <a
                  href="#api-docs"
                  className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  API Docs
                </a>
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

export default DocumentationPage;