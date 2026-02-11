import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  useEffect(() => {
    mixpanel.track('Terms Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 md:py-5 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Effective Date: February 10, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Welcome to Budlee AI (the "Service"), an AI-powered platform provided by Futurvy Pvt. Ltd. ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Service, including our website, mobile applications, and related services. By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">1. Definitions</h2>
            <p className="mb-4">
              "Service" refers to the Budlee AI platform, including AI chat, community features, quests, and related functionalities.
            </p>
            <p className="mb-4">
              "User" or "you" refers to any individual or entity accessing or using the Service.
            </p>
            <p className="mb-6">
              "Content" refers to any text, images, data, or materials uploaded, posted, or generated through the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">2. Eligibility</h2>
            <p className="mb-6">
              You must be at least 18 years old to use the Service, or if you are under 18, you must have the proper guidance and consent of your parents or guardians. By using the Service, you represent that you meet these requirements and have the legal capacity to enter into these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">3. Account Registration</h2>
            <p className="mb-6">
              To access certain features, you may need to create an account. You agree to provide accurate information and keep your account secure. You are responsible for all activities under your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">4. Use of Service</h2>
            <p className="mb-4">
              You may use the Service for personal, non-commercial purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations, including those under the Information Technology Act, 2000, of India.</li>
              <li>Engage in fraudulent, abusive, or harmful activities.</li>
              <li>Reverse engineer, copy, or distribute the Service without permission.</li>
              <li>Upload harmful content, such as viruses or illegal materials.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">5. Intellectual Property</h2>
            <p className="mb-6">
              All rights in the Service, including trademarks, copyrights, and proprietary technology, belong to us. You retain rights to your Content but grant us a license to use it as necessary to provide the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">6. Privacy</h2>
            <p className="mb-6">
              Your privacy is governed by our Privacy Policy, which is incorporated herein. We collect and process data in compliance with the Information Technology Act, 2000, and other applicable Indian laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">7. Termination</h2>
            <p className="mb-6">
              We may terminate or suspend your access at any time for breach of these Terms. Upon termination, your rights cease, but provisions on liability survive.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">8. Disclaimers and Limitations of Liability</h2>
            <p className="mb-6">
              The Service is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages. Our total liability is limited to the amount paid by you in the past 12 months.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">9. Governing Law and Dispute Resolution</h2>
            <p className="mb-6">
              These Terms are governed by the laws of India. Any disputes shall be resolved through arbitration in Kannur, Kerala, under the Arbitration and Conciliation Act, 1996.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">10. Amendments</h2>
            <p className="mb-6">
              We may update these Terms at any time. Continued use constitutes acceptance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-10">11. Contact Us</h2>
            <div className="mb-6">
              <p className="mb-2">For questions, contact:</p>
              <p className="font-semibold">Budlee AI Legal Team</p>
              <p><a href="mailto:legal@budlee.ai" className="text-green-600 hover:text-green-700 underline">legal@budlee.ai</a></p>
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

export default TermsPage;
