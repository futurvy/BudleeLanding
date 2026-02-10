import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OurStoryPage = () => {
  useEffect(() => {
    mixpanel.track('Our Story Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-6">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              How four passionate founders came together to revolutionize learning through AI
            </p>
          </div>
        </section>

        {/* Story Content */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* The Beginning */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">The Beginning</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Budlee AI was born from a shared frustration with traditional education. Our founders, who have known each other for several years through startup events and founder communities in Chennai and Bangalore, recognized a fundamental problem: students were memorizing information without truly understanding concepts, and there was no structured way to explore interests during school years.
                </p>
                <p className="mb-4">
                  The team consists of second-time founders with deep experience in technology, AI, and education. Saleej, Abdul, and Irfan connected through early founder networks, while Suhail joined through learning circles and founder communities. This diverse background gave us unique insights into both the technical possibilities and the real-world challenges of education.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">The Problem We Saw</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Students Memorizing, Not Understanding</h3>
                  <p className="text-gray-600">
                    Even academically strong students often move forward without deep understanding or clarity about what they truly want to pursue, creating a gap between school learning and interest-driven growth.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">No Structured Interest Exploration</h3>
                  <p className="text-gray-600">
                    Students rely heavily on tuition to clear doubts and have no structured way to explore their interests during school, missing opportunities to build real expertise early.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Solution</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We started working on Budlee AI in mid-2025, initially as a part-time project while validating our learning flow with real students. Our approach is unique: we connect everyday school learning with guided exploration, creating a single connected journey where understanding concepts, practicing, testing, and exploring interests are tightly linked.
                </p>
                <p className="mb-4">
                  Unlike other learning apps that treat school learning, interest discovery, and skill development as separate experiences, Budlee AI bridges this gap. Students learn each chapter through guided learning packs with short explanations, videos, examples, and quick practice. While studying, they can ask questions in context, and Budlee explains concepts in simple language using visuals and syllabus-aligned examples.
                </p>
                <p className="mb-4">
                  Most importantly, Budlee continuously observes what students study, ask questions about, and spend time on, using this data to actively guide them toward subjects and topics they enjoy, helping them build real expertise from school itself.
                </p>
              </div>
            </div>

            {/* Our Progress */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Where We Are Today</h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">2025</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">CBSE</div>
                    <div className="text-gray-600">Curriculum Focus</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">6-10</div>
                    <div className="text-gray-600">Grade Range</div>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                  Based in Bangalore with access to top talent and the education ecosystem, we're building the future of learning while planning expansion across major curricula worldwide.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Join Our Mission</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're just getting started. Help us build the learning companion that every student deserves.
              </p>
              <a
                href="/schools"
                className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More About Budlee for Schools
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurStoryPage;