import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePage = () => {
  useEffect(() => {
    mixpanel.track('Cookie Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-12 md:py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Effective Date: February 10, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Budlee AI ("we," "us," or "our"), we use cookies and similar technologies to enhance your experience on our Service, including our AI-powered chat, community features, and quests. This Cookie Policy explains how we use cookies, your choices, and related information. By using our Service, you consent to our use of cookies as described herein.
            </p>
            <p className="mb-6">
              This policy is adapted for Budlee AI and complies with applicable laws, including the Information Technology Act, 2000, of India.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="mb-6">
              Cookies are small text files stored on your device when you visit our website or use our app. They help us remember your preferences and improve functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide essential features, such as login and session management.</li>
              <li>Analyze usage to improve AI responses, community interactions, and quest performance.</li>
              <li>Personalize content and advertisements.</li>
              <li>Ensure security and prevent fraud.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the Service to function (e.g., authentication).</li>
              <li><strong>Analytics Cookies:</strong> Track usage patterns (e.g., via Google Analytics).</li>
              <li><strong>Functional Cookies:</strong> Remember your settings and preferences.</li>
              <li><strong>Advertising Cookies:</strong> Deliver targeted ads based on your interests.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-6">
              We may use third-party services (e.g., analytics providers) that set their own cookies. We do not control these cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Managing Cookies</h2>
            <p className="mb-6">
              You can manage cookies through your browser settings. Disabling cookies may affect Service functionality. For more options, visit our website settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Consent</h2>
            <p className="mb-6">
              By using our Service, you consent to our use of cookies. You can withdraw consent by adjusting your settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Updates to This Policy</h2>
            <p className="mb-6">
              We may update this Policy. Significant changes will be communicated.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
            <div className="mb-6">
              <p className="mb-2">For questions about cookies:</p>
              <p className="font-semibold">Budlee AI Data Privacy Team</p>
              <p><a href="mailto:privacy@budlee.ai" className="text-green-600 hover:text-green-700 underline">privacy@budlee.ai</a></p>
              <p className="mt-2">
                Budlee AI Corporate Office,<br />
                Kannur University LEAP Startup Incubation Centre,<br />
                Kannur University, Thavakkara Campus,<br />
                Civil Station P.O., Kannur, Kerala - 670002<br />
                India
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePage;