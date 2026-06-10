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
      <main className="flex-grow py-16 md:py-5 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="hero-tagline text-3xl md:text-4xl lg:text-5xl mb-6 whitespace-nowrap gradient-text">
              Privacy Policy
            </h1>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Effective Date: June 10, 2026
            </p>
          </div>
 
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Budlee AI (a product of Needoo AI Innovations LLP, hereinafter "we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service, including our AI-powered chat, community features, quests, and related functionalities. By using the Service, you consent to the practices described herein.
            </p>
            <p className="mb-6">
              This Privacy Policy is adapted for Budlee AI and complies with applicable data protection laws, including transparency requirements for artificial intelligence systems.
            </p>
 
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information to provide and improve our Service:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email, phone number, and payment details when you register or make transactions.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with the Service, such as chat logs, quest completions, community posts, and device information (e.g., IP address, browser type).</li>
              <li><strong>AI Interaction Content:</strong> The text, queries, and content you share during chat interactions with Budlee AI.</li>
              <li><strong>Audio & Voice Data:</strong> When using our microphone-enabled voice-to-text or speech-to-text chat tools, we access your device's microphone to transcribe your spoken queries. This access requires your system permission, and the captured audio is processed ephemerally to generate text transcripts. We do not store raw audio recordings on our servers.</li>
              <li><strong>Payment Information:</strong> Processed via third-party providers like Stripe and RazorPay; we do not store full payment details on our servers.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">2. How We Use Information</h2>
            <p className="mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and personalize the Service.</li>
              <li>Process payments securely through Stripe and RazorPay.</li>
              <li>Improve AI responses, community interactions, and quest features.</li>
              <li>Train and improve our AI models (subject to your explicit consent).</li>
              <li>Communicate updates, support, and marketing (where permitted).</li>
              <li>Ensure security and comply with legal obligations.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">3. Sharing of Information</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share it:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>With service providers (e.g., payment processors and technical infrastructure partners).</li>
              <li>With AI service partners to process and generate responses (data is typically anonymized or pseudonymized).</li>
              <li>For legal reasons, such as responding to court orders.</li>
              <li>In case of a merger or acquisition.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">4. Data Security</h2>
            <p className="mb-6">
              We implement reasonable security measures to protect your data, including encryption and access controls. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">5. Your Rights & Data Deletion</h2>
            <p className="mb-4">
              You have the right to access, correct, or request the deletion of your personal data.
            </p>
            <p className="mb-4 font-semibold">Self-Service Account Deletion:</p>
            <p className="mb-6">
              You can initiate the permanent deletion of your account directly within the Budlee AI app by navigating to <strong>Settings &gt; Danger Zone &gt; Delete Account</strong>. Upon confirmation, your personal profile data (name, email, phone, social links) will be permanently deleted from our active records. Historical transaction and payment records are preserved in an anonymized format for financial compliance.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">6. Cookies and Tracking</h2>
            <p className="mb-6">
              We use cookies to enhance your experience. You can manage cookie preferences in your browser settings.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">7. Third-Party Services</h2>
            <p className="mb-6">
              Our Service integrates with third parties like Stripe and RazorPay for payments. Their privacy policies apply to their handling of your data.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">8. Children's Privacy</h2>
            <p className="mb-6">
              The Service is not intended for children under 18 without parental or guardian guidance. We do not knowingly collect data from minors without such consent.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">9. AI Interaction & Data Consent</h2>
            <p className="mb-4">
              Budlee AI uses generative artificial intelligence to provide educational assistance.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li>
                <strong>Model Training:</strong> We may use anonymized chat interactions to train and improve Budlee AI's accuracy and safety. We only do this with your explicit consent.
              </li>
              <li>
                <strong>Opt-In/Opt-Out:</strong> You can grant or withdraw your AI Data Usage Consent at any time via <strong>Settings &gt; Privacy & AI Settings &gt; AI Data Usage Consent</strong>. If you opt-out, your future interactions will not be used for model training.
              </li>
              <li>
                <strong>Accuracy Warning:</strong> Budlee AI is an advanced tool, but it can occasionally generate incorrect information. Users are encouraged to verify important facts with textbooks or teachers.
              </li>
              <li>
                <strong>Safety:</strong> Do not share sensitive personal information (passwords, health data, or financial secrets) within the chat interface.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">10. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Policy. We will notify you of any significant changes by posting the new Policy and updating the "Effective Date" at the top of this page.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">11. Contact Us</h2>
            <div className="mb-6">
              <p className="mb-2">For privacy inquiries:</p>
              <p className="font-semibold">Budlee AI Data Privacy Team</p>
              <p><a href="mailto:privacy@budlee.ai" className="text-green-600 hover:text-green-700 underline">privacy@budlee.ai</a></p>
              <p className="mt-2">
                Budlee AI Corporate Office,<br />
                BUILDING NO 18 214 C KODUR PO NEAR BHARATH PETROLEUM,<br />
                MALAPPURAM, KODUR-MALABAR,<br />
                KERALA - 676504,<br />
                INDIA
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