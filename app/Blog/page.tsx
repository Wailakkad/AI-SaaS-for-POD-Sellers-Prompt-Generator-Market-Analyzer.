'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
}

// Blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to AI Prompt Engineering for POD Success',
    excerpt: 'Master the art of creating high-converting AI prompts that generate commercial-quality designs. Learn proven formulas and techniques used by top POD sellers.',
    category: 'AI Tools',
    image: '/blog-1.jpg',
    readTime: '8 min read',
    publishDate: 'Dec 15, 2024',
    slug: 'ai-prompt-engineering-pod-success'
  },
  {
    id: 2,
    title: 'Google Trends Data: Finding Your Next Profitable POD Niche',
    excerpt: 'Discover how to use Google Trends data to identify emerging market opportunities. Real case studies from successful POD sellers making $10K+/month.',
    category: 'Market Trends',
    image: '/blog-2.jpg',
    readTime: '6 min read',
    publishDate: 'Dec 12, 2024',
    slug: 'google-trends-profitable-pod-niches'
  },
  {
    id: 3,
    title: '10 Etsy SEO Mistakes That Kill Your POD Sales',
    excerpt: 'Avoid these common SEO pitfalls that prevent your designs from ranking. Learn the optimization strategies that drive consistent organic traffic and sales.',
    category: 'POD Growth',
    image: '/blog-3.jpg',
    readTime: '5 min read',
    publishDate: 'Dec 10, 2024',
    slug: 'etsy-seo-mistakes-pod-sales'
  },
  {
    id: 4,
    title: 'Midjourney vs DALL-E 3: Best AI Tool for POD Designs',
    excerpt: 'Complete comparison of the top AI art generators for print-on-demand. Discover which platform delivers the best commercial results for your niche.',
    category: 'AI Tools',
    image: '/blog-4.jpg',
    readTime: '7 min read',
    publishDate: 'Dec 8, 2024',
    slug: 'midjourney-vs-dalle-pod-designs'
  },
  {
    id: 5,
    title: 'Seasonal Trends Analysis: Q1 2025 POD Opportunities',
    excerpt: 'Data-driven insights into the most profitable seasonal niches for early 2025. Get ahead of the competition with these trending product categories.',
    category: 'Market Trends',
    image: '/blog-5.jpg',
    readTime: '9 min read',
    publishDate: 'Dec 5, 2024',
    slug: 'seasonal-trends-q1-2025-pod'
  },
  {
    id: 6,
    title: 'From $0 to $5K: My 90-Day POD Success Blueprint',
    excerpt: 'Step-by-step case study showing exactly how one creator built a profitable POD business using AI tools and market data. Includes all strategies and results.',
    category: 'POD Growth',
    image: '/blog-6.jpg',
    readTime: '12 min read',
    publishDate: 'Dec 3, 2024',
    slug: 'pod-success-blueprint-90-days'
  }
]

const categories = [
  { name: 'All Posts', count: blogPosts.length, color: 'bg-neutral-100' },
  { name: 'AI Tools', count: 2, color: 'bg-blue-100' },
  { name: 'Market Trends', count: 2, color: 'bg-green-100' },
  { name: 'POD Growth', count: 2, color: 'bg-purple-100' }
]

export default function BlogPage() {
  return (
    <main>
      {/* SEO Meta Description Placeholder - Add to your page component */}
      {/* <meta name="description" content="Expert insights, AI tools guides, and market trends for POD sellers. Learn proven strategies to grow your print-on-demand business with data-driven content." /> */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            className="text-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              📚 Blog & Resources
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">
              Insights & Resources for <span className="text-blue-600">POD Sellers</span>
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Latest tips, trends, and guides to help you succeed with AI and POD. Data-driven insights from industry experts and successful creators.
            </p>
            
            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`inline-flex items-center px-4 py-2 rounded-full ${category.color} text-neutral-700 text-sm font-medium hover:scale-105 transition-all duration-200`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-60">({category.count})</span>
                </button>
              ))}
            </motion.div>
          </motion.header>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                whileHover={cardHover}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                {/* Featured Image */}
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">
                        {post.category === 'AI Tools' ? '🤖' : 
                         post.category === 'Market Trends' ? '📊' : '🚀'}
                      </span>
                    </div>
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <header className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        post.category === 'AI Tools' ? 'bg-blue-100 text-blue-700' :
                        post.category === 'Market Trends' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {post.category}
                      </span>
                      <div className="text-xs text-neutral-500">{post.readTime}</div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>
                  </header>
                  
                  <p className="text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <footer className="flex items-center justify-between">
                    <time className="text-sm text-neutral-500" dateTime={post.publishDate}>
                      {post.publishDate}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </footer>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          {/* Load More Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="inline-flex items-center bg-white text-neutral-700 border-2 border-neutral-200 hover:border-neutral-300 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Load More Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            <p className="text-sm text-neutral-500 mt-4">
              Showing 6 of 24 articles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <motion.section
        className="py-20 lg:py-28 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Never Miss an Insight
              </h2>
              
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Get the latest POD strategies, AI tools updates, and market trends delivered to your inbox weekly.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                  <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                
                <p className="text-sm opacity-60 mt-4">
                  Join 15,000+ creators. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      
    </main>
  )
}