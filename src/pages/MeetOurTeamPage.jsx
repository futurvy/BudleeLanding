import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Github, Award, MapPin, Calendar } from 'lucide-react';

const MeetOurTeamPage = () => {
  useEffect(() => {
    mixpanel.track('Meet Our Team Page Viewed');
  }, []);

  const teamMembers = [
    {
      name: "Saleej Kuruniyan",
      role: "Co-founder & Head of Technology",
      image: "/images/founders/saleej.jpg",
      bio: "Saleej spearheads our technology vision, bringing over 15 years of experience in building scalable systems at industry leaders like Amazon, Intel, and Samsung. As a seasoned founder, he ensures our platform delivers reliable, high-performance solutions that scale with our growing user base.",
      linkedin: "https://www.linkedin.com/in/saleejkuruniyan/",
      experience: "CTO of Needoo AI Innovations, Senior DevOps Engineer at Wakeb Data Communications"
    },
    {
      name: "Abdul Rahim",
      role: "Co-founder & Head of AI",
      image: "/images/founders/abdul.jpg",
      bio: "Abdul drives our AI innovation, leveraging his deep expertise in data architecture and machine learning from his time at Accenture and Proofpoint. He focuses on creating intelligent systems that understand and adapt to educational needs.",
      linkedin: "https://www.linkedin.com/in/abdul-rahim-kamaludeen/",
      experience: "Data Architect at Accenture, Big Data Specialist at Proofpoint"
    },
    {
      name: "Mohammed Irfan",
      role: "Co-founder & Head of Growth",
      image: "/images/founders/irfan.jpg",
      bio: "Irfan leads our growth initiatives, combining his engineering background with a passion for education. Having successfully transitioned from telecom to edtech, he brings valuable insights from real user interactions and market validation.",
      linkedin: "https://www.linkedin.com/in/mohammed--irfan/",
      experience: "Growth & Partnerships at Budlee AI, AI Product Manager at Needoo AI Innovations"
    },
    {
      name: "Suhail Mohammed",
      role: "Co-founder & Head of Product",
      image: "/images/founders/suhail.jpg",
      bio: "Suhail shapes our product experience, drawing from his entrepreneurial journey building AI agents, procurement platforms, and EV solutions. He ensures every feature serves our mission of making learning more effective and engaging.",
      linkedin: "https://www.linkedin.com/in/suhail-in/",
      experience: "Product Head at Kadel Labs, Co-founder of Procuremart.ai"
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
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Four passionate founders bringing together expertise in AI, engineering, product, and education to revolutionize learning
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Header with Image and Basic Info */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                      {/* Profile Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0 border-4 border-white shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback Initials */}
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg" style={{display: 'none'}}>
                        <span className="text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Name and Role */}
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-green-600 font-semibold mb-2">
                          {member.role}
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center sm:justify-start gap-3">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-800 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Key Experience */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-500" />
                        Key Experience
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="w-full bg-gray-50 py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Culture & Values
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe in learning through doing, embracing challenges, and building technology that makes a real difference in education.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Problem Solvers</h3>
                <p className="text-gray-600 text-sm">
                  We identify real problems and build practical solutions, not just chase trends.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">User-Centric</h3>
                <p className="text-gray-600 text-sm">
                  Every decision is guided by direct feedback from students, teachers, and parents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Continuous Learners</h3>
                <p className="text-gray-600 text-sm">
                  We stay curious, experiment boldly, and learn from every iteration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              We're always looking for passionate individuals who want to revolutionize education.
            </p>
            <a
              href="/careers"
              className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Open Positions
            </a>
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

export default MeetOurTeamPage;