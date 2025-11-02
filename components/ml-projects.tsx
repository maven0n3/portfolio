"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Github, Brain, Cpu, BarChart3, Network, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Each project now has multiple images
const mlProjects = [
  {
    id: 1,
    title: "Image Classification Model",
    description: "Deep learning model for classifying images with high accuracy using convolutional neural networks",
    images: [
      "/placeholder.svg?height=600&width=800&text=Image+Classification+1",
      "/placeholder.svg?height=600&width=800&text=Image+Classification+2",
      "/placeholder.svg?height=600&width=800&text=Image+Classification+3",
    ],
    icon: <Brain className="h-6 w-6 text-purple-400" />,
    tags: [
      { name: "TensorFlow", color: "text-orange-400", bgColor: "bg-orange-900/20" },
      { name: "CNN", color: "text-blue-400", bgColor: "bg-blue-900/20" },
      { name: "Computer Vision", color: "text-green-400", bgColor: "bg-green-900/20" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Natural Language Processing API",
    description: "API for text analysis, sentiment detection, and language understanding using transformer models",
    images: [
      "/placeholder.svg?height=600&width=800&text=NLP+API+1",
      "/placeholder.svg?height=600&width=800&text=NLP+API+2",
      "/placeholder.svg?height=600&width=800&text=NLP+API+3",
    ],
    icon: <Network className="h-6 w-6 text-blue-400" />,
    tags: [
      { name: "PyTorch", color: "text-red-400", bgColor: "bg-red-900/20" },
      { name: "BERT", color: "text-yellow-400", bgColor: "bg-yellow-900/20" },
      { name: "NLP", color: "text-green-400", bgColor: "bg-green-900/20" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Predictive Analytics Dashboard",
    description: "Interactive dashboard for time-series forecasting and predictive analytics with visualization",
    images: [
      "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard+1",
      "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard+2",
      "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard+3",
    ],
    icon: <BarChart3 className="h-6 w-6 text-green-400" />,
    tags: [
      { name: "Scikit-learn", color: "text-blue-400", bgColor: "bg-blue-900/20" },
      { name: "Pandas", color: "text-purple-400", bgColor: "bg-purple-900/20" },
      { name: "Time Series", color: "text-cyan-400", bgColor: "bg-cyan-900/20" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Reinforcement Learning Environment",
    description: "Custom environment for training and evaluating reinforcement learning agents",
    images: [
      "/placeholder.svg?height=600&width=800&text=RL+Environment+1",
      "/placeholder.svg?height=600&width=800&text=RL+Environment+2",
      "/placeholder.svg?height=600&width=800&text=RL+Environment+3",
    ],
    icon: <Cpu className="h-6 w-6 text-cyan-400" />,
    tags: [
      { name: "OpenAI Gym", color: "text-green-400", bgColor: "bg-green-900/20" },
      { name: "RL", color: "text-red-400", bgColor: "bg-red-900/20" },
      { name: "Python", color: "text-yellow-400", bgColor: "bg-yellow-900/20" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
]

// Component for the image carousel
function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useRef(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const nextImage = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative h-64 w-full overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-blue-900/30 z-10" />

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt="Project image"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function MLProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="ml-projects" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter mb-3"
          >
            Machine Learning Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "80px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Exploring the intersection of machine learning, data science, and software development
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {mlProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden border-0 bg-gray-900/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full group hover:scale-[1.02] hover:bg-gray-800/50">
                <ImageCarousel images={project.images} />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm p-2 rounded-full z-20">
                  {project.icon}
                </div>
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-1000"></div>

                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`px-3 py-1 ${tag.bgColor} ${tag.color} text-xs rounded-full flex items-center gap-1 group-hover:scale-105 transition-transform duration-300`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full group-hover:border-purple-500 group-hover:text-purple-400 transition-colors duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300"
                      >
                        Live Demo
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full px-8 border-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300"
          >
            View All ML Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
