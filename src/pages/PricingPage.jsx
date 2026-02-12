import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Star, CreditCard, Shield, Users, Zap, HelpCircle, Mail, MapPin, Phone, Atom, FlaskConical, Lightbulb, Sparkles } from 'lucide-react';

const PricingPage = () => {
  useEffect(() => {
    mixpanel.track('Pricing Page Viewed');
  }, []);

  const pricingPlans = [
    {
      name: "Free Plan",
      price: { usd: "$0", inr: "₹0" },
      period: "",
      description: "Best For: Trying out basic features.",
      features: [
        "Limited API usage",
        "5 quest generations per day",
        "5 curiosity contents per day",
        "5 chat sessions per day",
        "5 learning pack contents per day"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "bg-gray-100 hover:bg-gray-200 text-gray-800",
      popular: false
    },
    {
      name: "Monthly Plan",
      price: { usd: "$10", inr: "₹990" },
      period: "per month",
      description: "Best For: Short-term, intensive use.",
      features: [
        "Unlimited usage across all platform features for 1 month",
        "Priority support",
        "Advanced AI responses"
      ],
      buttonText: "Start Monthly Plan",
      buttonStyle: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white",
      popular: false
    },
    {
      name: "Yearly Plan",
      price: { usd: "$100", inr: "₹9,990" },
      period: "per year",
      description: "Best For: Long-term learners and power users.",
      savings: "Save $20 (2 months free!)",
      features: [
        "Unlimited usage across all platform features for 1 year",
        "All monthly benefits plus discounts",
        "Exclusive content access"
      ],
      buttonText: "Start Yearly Plan",
      buttonStyle: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white",
      popular: true
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans?",
      answer: "Yes, upgrade anytime."
    },
    {
      question: "Is there a trial?",
      answer: "The free plan serves as a trial."
    },
    {
      question: "Age Policy",
      answer: "Users below 18 years need to be supervised by their parents while using Budlee AI."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-5 px-4 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"></div>
          
          {/* Floating Doodles - Hidden on mobile, visible on md+ */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            {/* Top Left - Atom */}
            <div className="absolute top-8 left-[8%] text-green-300 animate-float-slow">
              <Atom className="w-10 h-10 opacity-60" />
            </div>
            
            {/* Top Right - Flask */}
            <div className="absolute top-12 right-[12%] text-yellow-400 animate-float-medium">
              <FlaskConical className="w-8 h-8 opacity-50" />
            </div>
            
            {/* Middle Left - Lightbulb */}
            <div className="absolute top-1/3 left-[4%] text-orange-300 animate-float-fast">
              <Lightbulb className="w-7 h-7 opacity-50" />
            </div>
            
            {/* Bottom Right - Stars */}
            <div className="absolute bottom-28 right-[6%] text-green-400 animate-float-slow">
              <Star className="w-8 h-8 opacity-40 fill-current" />
            </div>
            
            {/* Top Center - Sparkles */}
            <div className="absolute top-6 left-[35%] text-yellow-400 animate-float-medium">
              <Sparkles className="w-6 h-6 opacity-50" />
            </div>
            
            {/* Bottom Left - Star */}
            <div className="absolute bottom-24 left-[10%] text-orange-400 animate-float-fast">
              <Star className="w-5 h-5 opacity-40 fill-current" />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-20 right-[22%] w-16 h-16 rounded-full bg-green-200 opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-40 left-[18%] w-12 h-12 rounded-full bg-yellow-200 opacity-20 animate-pulse-slow"></div>
          </div>

          {/* Mobile Floating Doodles - Smaller, fewer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden md:hidden">
            <div className="absolute top-4 right-[8%] text-green-300 animate-float-slow">
              <Atom className="w-6 h-6 opacity-40" />
            </div>
            <div className="absolute top-20 left-[5%] text-yellow-400 animate-float-medium">
              <Star className="w-5 h-5 opacity-40 fill-current" />
            </div>
            <div className="absolute bottom-32 right-[10%] text-orange-300 animate-float-fast">
              <Sparkles className="w-5 h-5 opacity-40" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-0">
              Budlee AI <span className="gradient-text">Pricing</span> Plans
            </h1>
            <p className="text-gray-500 text-sm mt-0">
              Prices are in USD for global users and INR for India.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border flex flex-col ${plan.popular ? 'border-orange-300 ring-2 ring-orange-200' : 'border-gray-100'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-800">{plan.price.usd}</span>
                      <span className="text-gray-600 text-lg"> / {plan.price.inr}</span>
                      {plan.period && <span className="text-gray-600 text-sm"> {plan.period}</span>}
                    </div>
                    {plan.savings && (
                      <div className="mb-2">
                        <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {plan.savings}
                        </span>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button 
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.buttonStyle}`}
                      onClick={() => {
                        mixpanel.track('Pricing Plan Selected', { planName: plan.name });
                        window.location.href = 'https://app.budlee.ai';
                      }}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Subscribe */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text text-center">How to Subscribe</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Sign up or log in</h3>
                <p className="text-gray-600 text-sm">Create your account or access existing one</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Select your plan</h3>
                <p className="text-gray-600 text-sm">Go to Settings > Subscription and choose your plan</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Enjoy unlimited access</h3>
                <p className="text-gray-600 text-sm">Pay via Stripe or RazorPay and start learning</p>
              </div>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text text-center">Important Notes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Pricing Details</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Prices exclude taxes</li>
                      <li>• For school users, subscriptions are handled by school plans</li>
                      <li>• No refunds; cancel anytime with access until period ends</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Need Help?</h3>
                    <p className="text-gray-600 text-sm">
                      For more details, visit our <Link to="/faqs" className="text-green-600 hover:text-green-700 font-medium transition-colors">FAQs</Link> or contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-green-500" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap text-white">Budlee AI Support Team</h2>
            <p className="text-green-100 text-lg mb-8">
              Need help with pricing or have questions? We're here to help!
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-center gap-3 text-white mb-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email Support</span>
                </div>
                <p className="text-green-100">support@budlee.ai</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-start gap-3 text-white">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div className="text-left">
                    <p className="font-medium mb-1">Corporate Office</p>
                    <p className="text-green-100 text-sm">
                      LEAP Startup Incubation Centre<br />
                      Kannur University, Thavakkara Campus<br />
                      Civil Station P.O., Kannur, Kerala - 670002<br />
                      India
                    </p>
                  </div>
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

export default PricingPage;