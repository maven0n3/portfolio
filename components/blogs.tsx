"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const blogs = [
  {
    id: 1,
    title: "Building Responsive UIs with Modern CSS Techniques",
    excerpt: "Explore the latest CSS features that make responsive design easier and more powerful than ever before.",
    image: "/placeholder.svg?height=600&width=800&text=CSS+Techniques",
    date: "May 15, 2023",
    readTime: "8 min read",
    tags: ["CSS", "Web Design", "Responsive"],
    mediumUrl: "https://medium.com/",
    slug: "building-responsive-uis",
  },
  {
    id: 2,
    title: "Machine Learning for Frontend Developers",
    excerpt: "How to integrate machine learning models into your web applications for enhanced user experiences.",
    image: "/placeholder.svg?height=600&width=800&text=ML+for+Frontend",
    date: "June 22, 2023",
    readTime: "12 min read",
    tags: ["Machine Learning", "JavaScript", "TensorFlow.js"],
    mediumUrl: "https://medium.com/",
    slug: "ml-for-frontend-developers",
  },
  {
    id: 3,
    title: "The Future of Web Animation: Performance and Accessibility",
    excerpt: "Creating smooth, accessible animations that enhance user experience without sacrificing performance.",
    image: "/placeholder.svg?height=600&width=800&text=Web+Animation",
    date: "July 8, 2023",
    readTime: "10 min read",
    tags: ["Animation", "Performance", "Accessibility"],
    mediumUrl: "https://medium.com/",
    slug: "future-of-web-animation",
  },
  {
    id: 4,
    title: "Building a Design System from Scratch",
    excerpt: "A step-by-step guide to creating a cohesive design system that scales with your product.",
    image: "/placeholder.svg?height=600&width=800&text=Design+System",
    date: "August 17, 2023",
    readTime: "15 min read",
    tags: ["Design Systems", "UI/UX", "Component Library"],
    mediumUrl: "https://medium.com/",
    slug: "design-system-from-scratch",
  },
  {
    id: 5,
    title: "Optimizing React Applications for Production",
    excerpt: "Advanced techniques to improve the performance of your React applications in production environments.",
    image: "/placeholder.svg?height=600&width=800&text=React+Optimization",
    date: "September 5, 2023",
    readTime: "11 min read",
    tags: ["React", "Performance", "Optimization"],
    mediumUrl: "https://medium.com/",
    slug: "optimizing-react-apps",
  },
  {
    id: 6,
    title: "The Art of Technical Writing",
    excerpt: "How to write clear, concise, and engaging technical content that resonates with your audience.",
    image: "/placeholder.svg?height=600&width=800&text=Technical+Writing",
    date: "October 12, 2023",
    readTime: "9 min read",
    tags: ["Writing", "Documentation", "Communication"],
    mediumUrl: "https://medium.com/",
    slug: "art-of-technical-writing",
  },
]

export default function Blogs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="blogs" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter mb-3"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "80px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Thoughts, insights, and tutorials on design, development, and technology
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Card className="overflow-hidden border-0 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full group hover:scale-[1.02]">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-rose-400 transition-all duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center px-3 py-1 bg-gray-800/70 text-gray-300 text-xs rounded-full"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Link href={`/blog/${blog.slug}`} passHref>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full group-hover:border-amber-400 group-hover:text-amber-400 transition-colors duration-300"
                      >
                        Read More
                      </Button>
                    </Link>
                    <a href={blog.mediumUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 transition-all duration-300"
                      >
                        Read on Medium
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full px-8 border-gradient-to-r from-amber-400 to-rose-500 hover:bg-gradient-to-r hover:from-amber-400/10 hover:to-rose-500/10 transition-all duration-300"
          >
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
