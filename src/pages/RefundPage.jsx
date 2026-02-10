import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPage = () => {
  useEffect(() => {
    mixpanel.track('Refund Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-12 md:py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Refund Policy
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Effective Date: February 10, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Budlee AI ("we," "us," or "our"), we strive to provide a seamless experience with our AI-powered platform, including chat, community, and quest features. This Refund Policy outlines our policies regarding payments, subscriptions, and refunds. By using our Service, you agree to this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Subscription Model</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Our Service offers a free usage limit for basic features.</li>
              <li>For unlimited access, users can subscribe to monthly or yearly plans.</li>
              <li>Payments are processed securely via third-party providers, Stripe and RazorPay.</li>
              <li>For school users, subscriptions are handled by school plans, over which we have no control on individual accounts.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Refund Eligibility</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All payments are final. We do not offer refunds for any paid subscriptions or transactions.</li>
              <li>This includes partial or full refunds, regardless of usage or dissatisfaction.</li>
              <li>For school users, refunds are managed through school plans and are not handled by us.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cancellation Policy</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You may cancel your subscription at any time through your account settings.</li>
              <li>Upon cancellation, your account remains active until the end of the current subscription period.</li>
              <li>No refunds will be issued for the remaining period.</li>
              <li>For school users, cancellations must be coordinated through the school plan administrators.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Processing</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Payments are handled by Stripe and RazorPay. Their terms apply to transaction processing.</li>
              <li>We do not store payment details; all sensitive information is managed by these providers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Exceptions</h2>
            <p className="mb-6">
              Refunds may be considered in rare cases of technical errors on our end, at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
            <div className="mb-6">
              <p className="mb-2">For questions about refunds or cancellations:</p>
              <p className="font-semibold">Budlee AI Support Team</p>
              <p><a href="mailto:support@budlee.ai" className="text-green-600 hover:text-green-700 underline">support@budlee.ai</a></p>
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

export default RefundPage;