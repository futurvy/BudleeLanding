import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, Tag, Search, BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    mixpanel.track('Blog Page Viewed');
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Education Technology',
    'AI & Learning',
    'Teaching Tips',
    'Student Success',
    'Innovation'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Classroom Learning",
      slug: "how-ai-is-revolutionizing-classroom-learning",
      excerpt: "Discover how artificial intelligence is transforming traditional education methods and creating personalized learning experiences for every student.",
      author: "Dr. Sarah Chen",
      date: "2024-02-15",
      category: "AI & Learning",
      readTime: "5 min read",
      image: "/images/blog/ai-classroom.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Personalized Education",
      slug: "the-future-of-personalized-education",
      excerpt: "Explore how adaptive learning platforms are creating customized educational journeys that cater to individual student needs and learning styles.",
      author: "Prof. Michael Rodriguez",
      date: "2024-02-12",
      category: "Education Technology",
      readTime: "7 min read",
      image: "/images/blog/personalized-learning.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Building Digital Literacy Skills for Tomorrow",
      slug: "building-digital-literacy-skills-for-tomorrow",
      excerpt: "Essential digital literacy skills that every student needs to succeed in the modern world, and how educators can integrate them into their curriculum.",
      author: "Emma Thompson",
      date: "2024-02-10",
      category: "Teaching Tips",
      readTime: "6 min read",
      image: "/images/blog/digital-literacy.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Gamification: Making Learning Fun and Effective",
      slug: "gamification-making-learning-fun-and-effective",
      excerpt: "How game-based learning techniques can increase student engagement and improve knowledge retention across all age groups.",
      author: "Dr. James Park",
      date: "2024-02-08",
      category: "Student Success",
      readTime: "4 min read",
      image: "/images/blog/gamification.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of AI Tutors in Education",
      slug: "the-rise-of-ai-tutors-in-education",
      excerpt: "Examining the impact of AI-powered tutoring systems on student outcomes and the future of one-on-one learning support.",
      author: "Lisa Wang",
      date: "2024-02-05",
      category: "Innovation",
      readTime: "8 min read",
      image: "/images/blog/ai-tutors.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Creating Inclusive Learning Environments",
      slug: "creating-inclusive-learning-environments",
      excerpt: "Strategies for educators to create welcoming classrooms that support diverse learning needs and foster equity in education.",
      author: "Dr. Maria Gonzalez",
      date: "2024-02-03",
      category: "Teaching Tips",
      readTime: "6 min read",
      image: "/images/blog/inclusive-learning.jpg",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-20 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-6">
              Budlee AI <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Insights, trends, and expert perspectives on AI-powered education, teaching innovation, and the future of learning.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="w-full py-8 px-4 md:px-12 lg:px-20 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white opacity-50" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link to={`/blog/${post.slug}`} className="text-green-600 hover:text-green-700 font-medium transition-colors">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Latest Articles</h2>

            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white opacity-50" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                        <Link to={`/blog/${post.slug}`} className="text-green-600 hover:text-green-700 font-medium transition-colors text-sm">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-green-100 text-lg mb-8">
              Get the latest insights on AI-powered education delivered to your inbox
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="bg-white text-green-600 hover:bg-green-50 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe
                </button>
              </div>
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

export default BlogPage;