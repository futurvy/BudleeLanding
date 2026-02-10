import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    mixpanel.track('Privacy Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-12 md:py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Effective Date: February 10, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Budlee AI ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service, including our AI-powered chat, community features, quests, and related functionalities. By using the Service, you consent to the practices described herein.
            </p>
            <p className="mb-6">
              This Privacy Policy is adapted for Budlee AI and complies with applicable Indian laws, including the Information Technology Act, 2000.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information to provide and improve our Service:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email, phone number, and payment details when you register or make transactions.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with the Service, such as chat logs, quest completions, community posts, and device information (e.g., IP address, browser type).</li>
              <li><strong>Content:</strong> Any text, images, or data you upload or generate through AI features.</li>
              <li><strong>Payment Information:</strong> Processed via third-party providers like Stripe and RazorPay; we do not store full payment details.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Information</h2>
            <p className="mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and personalize the Service.</li>
              <li>Process payments securely through Stripe and RazorPay.</li>
              <li>Improve AI responses, community interactions, and quest features.</li>
              <li>Communicate updates, support, and marketing (with your consent).</li>
              <li>Ensure security and comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Sharing of Information</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share it:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>With service providers (e.g., Stripe and RazorPay for payments).</li>
              <li>For legal reasons, such as responding to court orders.</li>
              <li>In case of a merger or acquisition.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement reasonable security measures to protect your data, including encryption and access controls. However, no method is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="mb-6">
              Under Indian law, you have rights to access, correct, or delete your data. Contact us to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking</h2>
            <p className="mb-6">
              We use cookies to enhance your experience. You can manage cookie preferences in your browser.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Third-Party Services</h2>
            <p className="mb-6">
              Our Service integrates with third parties like Stripe and RazorPay for payments. Their privacy policies apply to their handling of your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
            <p className="mb-6">
              The Service is not intended for children under 18 without the proper guidance and consent of their parents or guardians. We do not knowingly collect data from minors without such consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Policy. We will notify you of significant changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <div className="mb-6">
              <p className="mb-2">For privacy inquiries:</p>
              <p className="font-semibold">Budlee AI Data Privacy Team</p>
              <p><a href="mailto:privacy@budlee.ai" className="text-green-600 hover:text-green-700 underline">privacy@budlee.ai</a></p>
              <p className="mt-2">
                Budlee AI Corporate Office,<br />
                LEAP Startup Incubation Centre,<br />
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

export default PrivacyPage;