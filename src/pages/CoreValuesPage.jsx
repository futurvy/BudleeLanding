import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Users, Lightbulb, Target, Zap, Shield } from 'lucide-react';

const CoreValuesPage = () => {
  useEffect(() => {
    mixpanel.track('Core Values Page Viewed');
  }, []);

  const coreValues = [
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make starts with the student. We believe in creating learning experiences that adapt to how students actually learn, not how we think they should learn.",
      color: "from-pink-400 to-rose-500",
      details: [
        "Direct feedback from students shapes our product",
        "Learning flows designed around real student behavior",
        "Accessibility and inclusivity at our core"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation Through Curiosity",
      description: "We embrace curiosity as the foundation of learning. Our AI doesn't just answer questions—it sparks interest and guides students toward deeper exploration.",
      color: "from-yellow-400 to-orange-500",
      details: [
        "Continuous observation of learning patterns",
        "Personalized guidance toward interests",
        "Building expertise from school itself"
      ]
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Learning is not solitary. We believe in connecting students, teachers, and parents in a shared journey of discovery and growth.",
      color: "from-blue-400 to-indigo-500",
      details: [
        "Teachers get clear visibility into class progress",
        "Parents actively participate in learning journeys",
        "Community-driven improvement"
      ]
    },
    {
      icon: Target,
      title: "Practical Problem Solving",
      description: "We identify real problems and build practical solutions. No feature exists just because it's technically impressive—it must serve a genuine learning need.",
      color: "from-green-400 to-emerald-500",
      details: [
        "Real classroom challenges drive our roadmap",
        "Data-driven decision making",
        "Iterating based on actual usage patterns"
      ]
    },
    {
      icon: Zap,
      title: "Fast, Fearless Execution",
      description: "We move quickly, experiment boldly, and learn from every iteration. Building the future of education requires both speed and courage.",
      color: "from-purple-400 to-violet-500",
      details: [
        "Rapid prototyping and testing",
        "Embracing calculated risks",
        "Learning from failures, not avoiding them"
      ]
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build trust through transparency. Students, parents, and educators should always understand how our AI works and why it makes certain recommendations.",
      color: "from-teal-400 to-cyan-500",
      details: [
        "Clear explanation of AI recommendations",
        "Privacy-first approach to student data",
        "Open communication about our methods"
      ]
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
              Our <span className="gradient-text">Core Values</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do at Budlee AI, from product development to how we work as a team
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {value.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Values Matter */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Our Values Matter</h2>
              <p className="text-gray-600 text-lg">
                In education technology, values aren't just nice-to-have—they're essential for building trust and creating real impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">For Students</h3>
                <p className="text-gray-600 mb-4">
                  Our student-centric approach ensures that Budlee AI adapts to how students actually learn, not how adults think they should learn. This creates more effective, engaging, and personalized learning experiences.
                </p>
                <p className="text-gray-600">
                  When students trust their learning companion, they're more likely to engage deeply and build lasting understanding.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">For Educators & Parents</h3>
                <p className="text-gray-600 mb-4">
                  Transparency and collaboration mean that teachers and parents are active participants in the learning journey, not passive observers. They understand how our AI works and can provide meaningful input.
                </p>
                <p className="text-gray-600">
                  This collaborative approach leads to better outcomes for everyone involved in a student's education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Live Our Values */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">How We Live Our Values</h2>
              <p className="text-gray-600 text-lg">
                Our values guide our daily work and long-term decisions
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">In Product Development</h3>
                <p className="text-gray-600">
                  Every feature starts with real student needs. We conduct extensive user research, test with actual students, and iterate based on feedback. Our AI recommendations are transparent and explainable, building trust through understanding.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">In Our Team Culture</h3>
                <p className="text-gray-600">
                  We embrace fast execution and fearless experimentation. Team members are encouraged to take calculated risks, learn from failures, and share knowledge openly. Our collaborative approach extends beyond the team to include educators, students, and parents.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">In Our Partnerships</h3>
                <p className="text-gray-600">
                  We work with schools, educators, and parents as true partners. We share data transparently, involve them in decision-making, and ensure our technology serves their needs, not just our business goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience Our Values in Action</h2>
            <p className="text-green-100 text-lg mb-8">
              See how our commitment to student-centric, innovative learning is transforming education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.budlee.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try Budlee AI
              </a>
              <a
                href="/schools"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Learn for Schools
              </a>
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

export default CoreValuesPage;