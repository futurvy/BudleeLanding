import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, Code, Smartphone, Palette, Megaphone, MapPin, Clock, DollarSign } from 'lucide-react';

const CareersPage = () => {
  useEffect(() => {
    mixpanel.track('Careers Page Viewed');
  }, []);

  const openPositions = [
    {
      title: "Full Stack Developer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Django", "React", "Backend Development", "Frontend Development"],
      description: "Join our engineering team to build scalable web applications. You'll work on both backend APIs using Django and modern frontend interfaces with React.",
      icon: Code,
      color: "from-blue-400 to-indigo-500",
      formUrl: "https://forms.gle/Cs4bXzwRV111dAvi7"
    },
    {
      title: "Mobile Application Developer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["React Native", "Capacitor", "Mobile Development", "Cross-platform"],
      description: "Develop mobile applications using React Native and Capacitor. Help us bring Budlee AI to students' fingertips across iOS and Android platforms.",
      icon: Smartphone,
      color: "from-green-400 to-emerald-500",
      formUrl: "https://forms.gle/YHAEkDf886XmNjYM9"
    },
    {
      title: "UI/UX Frontend Developer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Mobile Responsiveness", "Figma", "HTML", "Tailwind CSS"],
      description: "Create beautiful, responsive user interfaces that work perfectly on all devices. Use Figma for design and Tailwind CSS for implementation.",
      icon: Palette,
      color: "from-purple-400 to-pink-500",
      formUrl: "https://forms.gle/T3Lzy2QqJ7soi7aC8"
    },
    {
      title: "Digital Marketing - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Content Marketing", "Social Media", "SEO", "Analytics"],
      description: "Help us reach more students and educators through strategic digital marketing campaigns, content creation, and community building.",
      icon: Megaphone,
      color: "from-orange-400 to-red-500",
      formUrl: "https://forms.gle/eZxZ7ziT4J5ef9JC7"
    },
    {
      title: "Graphics Designer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Graphic Design", "Branding", "Visual Content", "Creative Tools"],
      description: "Create engaging visual content for our platform, marketing materials, and educational resources that inspire learning and creativity.",
      icon: Palette,
      color: "from-yellow-400 to-orange-500",
      formUrl: "https://forms.gle/GYhk5QTRCERUgwAJ8"
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Remote Work",
      description: "Work from anywhere with flexible hours"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Balance your learning and work commitments"
    },
    {
      icon: Briefcase,
      title: "Real Impact",
      description: "Contribute to revolutionizing education"
    },
    {
      icon: DollarSign,
      title: "Competitive Stipend",
      description: "Fair compensation for your valuable contributions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Help us build the future of education. We're looking for passionate individuals who want to make learning more effective, engaging, and accessible for every student.
            </p>
          </div>
        </section>

        {/* Why Join Budlee */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Join Budlee AI?</h2>
              <p className="text-gray-600 text-lg">
                We're not just building a product—we're solving real problems in education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Open Positions</h2>
              <p className="text-gray-600 text-lg">
                We're growing our team and looking for talented individuals to join our mission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full">
                          {position.compensation}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <a
                    href={position.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Culture</h2>
              <p className="text-gray-600 text-lg">
                We believe in learning through doing, embracing challenges, and building technology that makes a real difference
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast-Paced Growth</h3>
                <p className="text-gray-600">
                  We're building something meaningful and moving quickly. You'll have the opportunity to learn, grow, and make an immediate impact.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Collaborative Environment</h3>
                <p className="text-gray-600">
                  Work with a diverse team of educators, engineers, and designers who are all passionate about improving education.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-red-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation Focus</h3>
                <p className="text-gray-600">
                  We encourage creative problem-solving and give you the freedom to experiment with new ideas and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to Apply</h2>
            <p className="text-green-100 text-lg mb-8">
              We're excited to hear from you! Here's how our application process works
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">1</div>
                <div className="text-green-100">Submit Application</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-green-100">Initial Review</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-green-100">Technical Interview</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">4</div>
                <div className="text-green-100">Join the Team</div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-green-100 mb-6">
                Ready to start your journey with Budlee AI?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for a Position
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Questions About Joining Us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always happy to chat about opportunities at Budlee AI. Reach out to us with any questions.
            </p>
            <a
              href="/contact"
              className="inline-block border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;