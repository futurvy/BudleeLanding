import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

const FaqsPage = () => {
  useEffect(() => {
    mixpanel.track('FAQs Page Viewed');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqCategories = [
    {
      title: "General",
      icon: HelpCircle,
      color: "from-blue-400 to-indigo-500",
      questions: [
        {
          question: "What is Budlee AI?",
          answer: "Budlee AI is an AI-powered platform offering chat, community features, quests, and a curiosity centre for learning and interaction."
        },
        {
          question: "Is Budlee AI free?",
          answer: "Yes, with a free usage limit. Unlimited features require a subscription."
        },
        {
          question: "Who can use Budlee AI?",
          answer: "Anyone 18+ in India. School users access via school plans."
        }
      ]
    },
    {
      title: "Account and Registration",
      icon: HelpCircle,
      color: "from-green-400 to-emerald-500",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Sign up on our website or app with your email and details."
        },
        {
          question: "Can I change my account information?",
          answer: "Yes, in your account settings."
        },
        {
          question: "What if I forget my password?",
          answer: "Use the \"Forgot Password\" link to reset it."
        }
      ]
    },
    {
      title: "Features",
      icon: HelpCircle,
      color: "from-purple-400 to-violet-500",
      questions: [
        {
          question: "How does AI Chat work?",
          answer: "Ask questions, and our AI provides responses based on your input."
        },
        {
          question: "What is the Community feature?",
          answer: "A space to connect, share, and discuss with other users."
        },
        {
          question: "How do Quests work?",
          answer: "Complete gamified tasks to earn rewards and learn."
        },
        {
          question: "What is the Curiosity Centre?",
          answer: "A hub for exploring topics in depth with AI assistance."
        }
      ]
    },
    {
      title: "Subscriptions and Payments",
      icon: HelpCircle,
      color: "from-orange-400 to-red-500",
      questions: [
        {
          question: "What are the subscription plans?",
          answer: "Monthly or yearly for unlimited access."
        },
        {
          question: "How do I pay?",
          answer: "Via Stripe or RazorPay."
        },
        {
          question: "Is there a refund?",
          answer: "No refunds. Cancel anytime; access until period ends."
        },
        {
          question: "For school users?",
          answer: "Subscriptions are handled by schools; contact your administrator."
        }
      ]
    },
    {
      title: "Privacy and Security",
      icon: HelpCircle,
      color: "from-teal-400 to-cyan-500",
      questions: [
        {
          question: "How is my data protected?",
          answer: "We use encryption and comply with Indian laws. See our Privacy Policy."
        },
        {
          question: "Do you share my data?",
          answer: "Only as described in our Privacy Policy."
        },
        {
          question: "What about cookies?",
          answer: "We use cookies for functionality; manage in your settings."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: HelpCircle,
      color: "from-pink-400 to-rose-500",
      questions: [
        {
          question: "The app isn't working. What do I do?",
          answer: "Clear cache, update app, or contact support."
        },
        {
          question: "Can I use Budlee AI on mobile?",
          answer: "Yes, via our app."
        },
        {
          question: "How do I report a bug?",
          answer: "Email us at support@budlee.ai with details."
        }
      ]
    },
    {
      title: "Legal",
      icon: HelpCircle,
      color: "from-yellow-400 to-orange-500",
      questions: [
        {
          question: "What are the Terms of Service?",
          answer: "Governed by Indian law; see our Terms page."
        },
        {
          question: "How do I contact you?",
          answer: "Email legal@budlee.ai or visit our office."
        }
      ]
    }
  ];

  const toggleExpanded = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about Budlee AI. If you don't find what you're looking for, contact us at support@budlee.ai.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const isExpanded = expandedItems.has(`${categoryIndex}-${questionIndex}`);
                    return (
                      <div key={questionIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <button
                          onClick={() => toggleExpanded(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-800 pr-4">
                            {faq.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search terms or browse all categories above.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              If these FAQs don't help, reach out to our support team. We're here to assist you!
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Get in touch with our support team</p>
                <a
                  href="mailto:support@budlee.ai"
                  className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  support@budlee.ai
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Our Office</h3>
                <p className="text-gray-600 mb-4">Located in Kannur University</p>
                <div className="text-sm text-gray-600 text-left">
                  <p className="font-medium">Budlee AI Corporate Office</p>
                  <p>LEAP Startup Incubation Centre</p>
                  <p>Kannur University, Thavakkara Campus</p>
                  <p>Civil Station P.O., Kannur, Kerala - 670002</p>
                  <p className="font-medium mt-1">India</p>
                </div>
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

export default FaqsPage;