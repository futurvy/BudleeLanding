import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Users, DollarSign, TrendingUp, Award, Handshake, Target, CheckCircle, Star, Zap, AlertCircle, Loader2 } from 'lucide-react';

/*
EmailJS Setup Instructions:
1. Go to https://www.emailjs.com/ and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}} - Applicant's full name
   - {{from_email}} - Applicant's email
   - {{partner_type}} - Selected partnership type
   - {{message}} - Applicant's message
   - {{to_email}} - Should be set to sales@budlee.ai
4. Replace the serviceId, templateId, and publicKey in handleFormSubmit with your actual IDs
*/

const PartnerProgramsPage = () => {
  const [formStatus, setFormStatus] = useState(null); // null, 'loading', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');
  const [selectedPartnershipType, setSelectedPartnershipType] = useState('');

  useEffect(() => {
    mixpanel.track('Partner Programs Page Viewed');
  }, []);

  // Handle hash changes to pre-select partnership type
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#referral-form')) {
        setSelectedPartnershipType('referral');
      } else if (hash.startsWith('#affiliate-form')) {
        setSelectedPartnershipType('affiliate');
      } else if (hash.startsWith('#reseller-form')) {
        setSelectedPartnershipType('reseller');
      } else if (hash.startsWith('#integration-form')) {
        setSelectedPartnershipType('integration');
      }
    };

    // Check hash on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    try {
      const templateParams = {
        from_name: `${e.target.firstName.value} ${e.target.lastName.value}`,
        from_email: e.target.email.value,
        phone: e.target.phone.value,
        partner_type: e.target.partnerType.value,
        message: e.target.message.value,
        to_email: 'sales@budlee.ai'
      };

      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.PARTNER_TEMPLATE_ID, templateParams, EMAILJS_CONFIG.PUBLIC_KEY);

      setFormStatus('success');
      setFormMessage('Thank you for your interest! We\'ll be in touch soon.');
      e.target.reset();

      // Track successful form submission
      mixpanel.track('Partner Application Submitted', {
        partnerType: templateParams.partner_type
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('error');
      setFormMessage('There was an error sending your application. Please try again or contact us directly at sales@budlee.ai');

      // Track form submission error
      mixpanel.track('Partner Application Error', {
        error: error.text || error.message
      });
    }
  };

  const partnerPrograms = [
    {
      icon: Users,
      title: "Referral Program",
      description: "Earn commissions by referring schools, educators, and institutions to Budlee AI.",
      color: "from-blue-400 to-indigo-500",
      benefits: [
        "Up to 15% commission on referrals",
        "Monthly payouts",
        "Real-time tracking dashboard",
        "Dedicated partner support"
      ],
      cta: "Join Referral Program",
      link: "#referral-form",
      type: "referral"
    },
    {
      icon: Handshake,
      title: "Affiliate Program",
      description: "Promote Budlee AI through your website, blog, or social media channels.",
      color: "from-green-400 to-emerald-500",
      benefits: [
        "Custom affiliate links",
        "Detailed analytics and reporting",
        "Marketing materials provided",
        "Flexible commission structure"
      ],
      cta: "Become an Affiliate",
      link: "#referral-form",
      type: "affiliate"
    },
    {
      icon: Target,
      title: "Reseller Partnership",
      description: "Become an authorized reseller and offer Budlee AI as part of your educational solutions.",
      color: "from-purple-400 to-violet-500",
      benefits: [
        "Wholesale pricing",
        "Partner portal access",
        "Co-marketing opportunities",
        "Priority technical support"
      ],
      cta: "Apply for Reseller",
      link: "#referral-form",
      type: "reseller"
    },
    {
      icon: Award,
      title: "Integration Partnership",
      description: "Integrate Budlee AI into your existing educational platforms and tools.",
      color: "from-orange-400 to-red-500",
      benefits: [
        "API access and documentation",
        "Joint development opportunities",
        "Revenue sharing model",
        "Technical integration support"
      ],
      cta: "Explore Integration",
      link: "#referral-form",
      type: "integration"
    }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Educational Consultant",
      earnings: "$12,500",
      period: "Last 6 months",
      testimonial: "The referral program has been a game-changer for my consulting business. The commissions are generous and the support team is fantastic.",
      avatar: "SJ"
    },
    {
      name: "TechEdu Solutions",
      role: "EdTech Reseller",
      earnings: "$45,000",
      period: "This year",
      testimonial: "Partnering with Budlee AI has significantly boosted our revenue. Their platform integrates perfectly with our existing solutions.",
      avatar: "TS"
    },
    {
      name: "EduBlog Network",
      role: "Content Creator",
      earnings: "$8,200",
      period: "Last quarter",
      testimonial: "The affiliate program materials are excellent, and the conversion rates are impressive. It's been a great addition to our content monetization.",
      avatar: "EN"
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
              Partner <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Join our partner ecosystem and earn commissions while helping schools transform education with Budlee AI
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Choose Your Partnership</h2>
              <p className="text-gray-600 text-lg">
                Multiple ways to partner with Budlee AI and grow your income
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={program.link}
                    className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full text-center"
                    onClick={() => setSelectedPartnershipType(program.type)}
                  >
                    {program.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Partner Success Stories</h2>
              <p className="text-gray-600 text-lg">
                Real partners, real results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{story.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{story.name}</h4>
                      <p className="text-gray-600 text-sm">{story.role}</p>
                    </div>
                  </div>

                  {/* Earnings */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <span className="text-2xl font-bold text-green-600">{story.earnings}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{story.period}</p>
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-600 text-sm italic">"{story.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Partner With Budlee AI?</h2>
              <p className="text-gray-600 text-lg">
                Join a growing ecosystem of education innovators
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Growing Market</h3>
                <p className="text-gray-600 text-sm">Education technology is expanding rapidly with increasing demand for AI-powered learning solutions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Proven Product</h3>
                <p className="text-gray-600 text-sm">Budlee AI has helped thousands of students improve their learning outcomes with our innovative platform.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-red-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">High Conversions</h3>
                <p className="text-gray-600 text-sm">Our platform converts leads effectively, ensuring you earn commissions on successful partnerships.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Dedicated Support</h3>
                <p className="text-gray-600 text-sm">Our partner success team provides ongoing support, marketing materials, and strategic guidance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section id="referral-form" className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Start Earning Today</h2>
            <p className="text-green-100 text-lg mb-8">
              Join thousands of partners who are already earning with Budlee AI
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              {/* Status Message */}
              {formStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  formStatus === 'success'
                    ? 'bg-green-100/20 border border-green-300/30 text-green-100'
                    : formStatus === 'error'
                    ? 'bg-red-100/20 border border-red-300/30 text-red-100'
                    : 'bg-blue-100/20 border border-blue-300/30 text-blue-100'
                }`}>
                  {formStatus === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  {formStatus === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  {formStatus === 'loading' && <Loader2 className="w-5 h-5 flex-shrink-0 animate-spin" />}
                  <span>{formMessage}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="partnerFirstName" className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="partnerFirstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="partnerLastName" className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="partnerLastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="partnerEmail" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="partnerEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="partnerPhone" className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="partnerPhone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="partnerType" className="block text-sm font-medium text-white mb-2">
                    Partnership Type *
                  </label>
                  <select
                    id="partnerType"
                    name="partnerType"
                    required
                    value={selectedPartnershipType}
                    onChange={(e) => setSelectedPartnershipType(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  >
                    <option value="" className="text-gray-800">Select partnership type</option>
                    <option value="referral" className="text-gray-800">Referral Program</option>
                    <option value="affiliate" className="text-gray-800">Affiliate Program</option>
                    <option value="reseller" className="text-gray-800">Reseller Partnership</option>
                    <option value="integration" className="text-gray-800">Integration Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="partnerMessage" className="block text-sm font-medium text-white mb-2">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="partnerMessage"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                    placeholder="Describe your experience, audience, or how you plan to promote Budlee AI..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                  >
                    {formStatus === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                    {formStatus === 'loading' ? 'Sending Application...' : 'Apply for Partnership'}
                  </button>
                </div>
              </form>
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

export default PartnerProgramsPage;