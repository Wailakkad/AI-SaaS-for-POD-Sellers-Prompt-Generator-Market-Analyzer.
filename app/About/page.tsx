'use client'

import { motion } from 'framer-motion'

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

// Data
const coreFeatures = [
  {
    icon: '⚡',
    title: 'AI Prompt Generator',
    description: 'Create professional AI prompts instantly. No complex setup — just type your idea and get commercial-ready prompts.',
    color: 'bg-blue-50'
  },
  {
    icon: '📊',
    title: 'Market Analyzer (Google Trends)',
    description: 'Discover product demand and analyze niches with trusted real-world data from Google Trends. Make data-driven decisions.',
    color: 'bg-green-50'
  },
  {
    icon: '🎨',
    title: 'Trusted for POD',
    description: 'Built specifically for Print-on-Demand sellers. Optimized for Etsy, Redbubble, Amazon Merch, and other platforms.',
    color: 'bg-purple-50'
  },
  {
    icon: '🚀',
    title: 'Innovation & Simplicity',
    description: 'Cutting-edge AI combined with intuitive design. Complex technology made simple for creators who want results fast.',
    color: 'bg-amber-50'
  }
]




export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              About Us
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">
              About <span className="text-blue-600">CreatorIQ</span>
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering POD sellers and creators with AI-powered tools and trusted data insights. We combine cutting-edge prompt generation with Google Trends analytics to help you create smarter, sell faster, and grow your creative business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section
        className="py-20 lg:py-28 bg-neutral-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  CreatorIQ was born from the frustration of watching talented creators struggle with two critical challenges: generating professional AI prompts and understanding market demand.
                </p>
                
                <p>
                  As POD sellers ourselves, we spent countless hours crafting prompts through trial and error, then wondering if our designs would actually sell. We realized creators needed both — the ability to generate high-quality prompts AND the market intelligence to make informed decisions.
                </p>
                
                <p>
                  That&lsquo;s why we built the first platform to combine AI prompt generation with Google Trends-powered market analysis. Now creators can generate professional prompts in seconds AND validate their ideas with real market data.
                </p>
                
                <p className="font-medium text-neutral-900">
                  Today, thousands of creators use CreatorIQ to generate better prompts, analyze market trends, and grow their POD businesses faster than ever before.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.10),transparent_70%)] -m-8"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                {/* Platform Preview */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-auto text-sm font-medium text-neutral-600">CreatorIQ Platform</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Prompt Generator Preview */}
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-blue-600 text-sm font-medium mb-2">AI Prompts</div>
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-200 rounded w-full"></div>
                      <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                      <div className="h-2 bg-blue-400 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Market Analyzer Preview */}
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-green-600 text-sm font-medium mb-2">Market Trends</div>
                    <div className="flex items-end gap-1 h-12">
                      {[60, 40, 80, 45, 70, 55].map((height, index) => (
                        <div
                          key={index}
                          className="bg-green-400 rounded-sm flex-1"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50K+</div>
                    <div className="text-xs text-neutral-600">Prompts Generated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">25K+</div>
                    <div className="text-xs text-neutral-600">Market Reports</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">15K+</div>
                    <div className="text-xs text-neutral-600">Happy Creators</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Features Section */}
      <motion.section
        className="py-20 lg:py-28"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Core Features
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Everything creators need to succeed — AI prompt generation and market intelligence in one platform
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={cardHover}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-neutral-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

     
    </main>
  )
}