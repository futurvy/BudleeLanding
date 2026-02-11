import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, MessageCircle, Trophy, Lightbulb, Settings, AlertCircle, Zap } from 'lucide-react';

const TutorialsPage = () => {
  useEffect(() => {
    mixpanel.track('Tutorials Page Viewed');
  }, []);

  const tutorialSections = [
    {
      title: "Getting Started",
      icon: BookOpen,
      color: "from-blue-400 to-indigo-500",
      content: [
        {
          title: "Sign Up",
          description: "Visit our website or download the app. Create an account with your email.",
          steps: [
            "Go to budlee.ai or download our mobile app",
            "Click 'Sign Up' and enter your email address",
            "Verify your email and complete your profile",
            "Choose your preferred learning path"
          ]
        },
        {
          title: "Explore Free Tier",
          description: "Access basic features without payment to get familiar with the platform.",
          steps: [
            "Log in to your account",
            "Try the AI Chat with basic queries",
            "Join a community discussion",
            "Complete a sample quest"
          ]
        },
        {
          title: "Upgrade Your Account",
          description: "Subscribe for unlimited use via Stripe or RazorPay.",
          steps: [
            "Go to Settings > Subscription",
            "Choose monthly or yearly plan",
            "Enter payment details",
            "Confirm subscription"
          ]
        }
      ]
    },
    {
      title: "AI Chat Tutorial",
      icon: MessageCircle,
      color: "from-green-400 to-emerald-500",
      content: [
        {
          title: "What It Is",
          description: "Intelligent conversations powered by AI for learning and assistance.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Log in and navigate to the Chat section",
            "Type your query (e.g., \"Explain quantum physics\")",
            "Receive AI-generated responses",
            "Save or share important chats for later reference"
          ]
        },
        {
          title: "Tips for Better Results",
          description: "",
          steps: [
            "Use clear, specific language for better answers",
            "Break complex questions into smaller parts",
            "Avoid sensitive or inappropriate topics",
            "Follow up with related questions to deepen understanding"
          ]
        }
      ]
    },
    {
      title: "Community Tutorial",
      icon: BookOpen,
      color: "from-purple-400 to-violet-500",
      content: [
        {
          title: "What It Is",
          description: "Connect and discuss with other learners and educators.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Go to the Community tab from the main menu",
            "Browse existing groups or create your own",
            "Post questions, share ideas, or start discussions",
            "Interact via comments, likes, and direct messages"
          ]
        },
        {
          title: "Best Practices",
          description: "",
          steps: [
            "Follow community guidelines and be respectful",
            "Report inappropriate content using the report button",
            "Engage actively to build meaningful connections",
            "Share your knowledge and help others learn"
          ]
        }
      ]
    },
    {
      title: "Quests Tutorial",
      icon: Trophy,
      color: "from-orange-400 to-red-500",
      content: [
        {
          title: "What It Is",
          description: "Gamified learning challenges that make education fun and engaging.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Access Quests from the main menu",
            "Select a quest that matches your interests or goals",
            "Complete tasks, answer questions, and earn points",
            "Track your progress and achievements in your profile"
          ]
        },
        {
          title: "Maximizing Learning",
          description: "",
          steps: [
            "Quests adapt to your skill level automatically",
            "Repeat quests to reinforce learning and earn more points",
            "Combine different quest types for comprehensive learning",
            "Share your achievements with the community"
          ]
        }
      ]
    },
    {
      title: "Curiosity Centre Tutorial",
      icon: Lightbulb,
      color: "from-teal-400 to-cyan-500",
      content: [
        {
          title: "What It Is",
          description: "Deep-dive exploration hub for in-depth learning on any topic.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Enter the Curiosity Centre from the main menu",
            "Search for topics or browse curated collections",
            "Engage with AI-curated content and resources",
            "Save favorites and create personal learning paths"
          ]
        },
        {
          title: "Advanced Features",
          description: "",
          steps: [
            "Use filters to find content at your level",
            "Create custom collections of related topics",
            "Share discoveries with friends and study groups",
            "Track your exploration history and interests"
          ]
        }
      ]
    }
  ];

  const quickTips = [
    {
      icon: Settings,
      title: "Customize Your Experience",
      description: "Adjust notifications, themes, and learning preferences in settings."
    },
    {
      icon: AlertCircle,
      title: "Troubleshooting",
      description: "Clear cache, update app, or contact support if you encounter issues."
    },
    {
      icon: Zap,
      title: "Advanced Tips",
      description: "Use offline mode for saved content and explore API integrations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-0">
              <span className="gradient-text">Tutorials</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Master Budlee AI with our comprehensive tutorials. Learn how to make the most of our AI-powered learning platform.
            </p>
          </div>
        </section>

        {/* Tutorial Sections */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {tutorialSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-10">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>

                {/* Content Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.steps.length > 0 && (
                        <ol className="space-y-2">
                          {item.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-gray-600 text-sm flex items-start gap-2">
                              <span className="text-green-500 font-bold mt-1">{stepIndex + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Quick Tips & Tricks</h2>
              <p className="text-gray-600 text-lg">
                Make the most of your Budlee AI experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {quickTips.map((tip, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Need More Help?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive documentation or reach out to our support team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/documentation"
                className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-lg transition-all duration-300"
              >
                View Documentation
              </a>
              <a
                href="/faqs"
                className="inline-block border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Browse FAQs
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Contact Support
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

export default TutorialsPage;