"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Ambient Healthcare Monitoring",
    description: "A modern e-commerce platform with dynamic product filtering and animations",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Sklearn"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Multi Agent Finance Assistant",
    description: "Multi Agent Finance Assistant",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Docker", "Python", "Streamlit", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "CodeEnvironment",
    description: "Mobile-first travel companion with interactive maps and local recommendations",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Flask", "Jinja", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Subcontractor Research System",
    description: "Content generation tool powered by AI with customizable templates",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Yelp", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter mb-3"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "80px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of my recent work showcasing my skills and creative approach to problem-solving
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden border-0 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="rounded-full">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
