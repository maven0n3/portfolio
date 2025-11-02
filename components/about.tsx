"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import TechIcon from "./tech-icon"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const allTechnologies = [
    "JavaScript",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "TensorFlow",
    "PyTorch",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS",
    "Git",
    "Rust",
    "C++",
    "Kubernetes",
    "MATLAB",
    "Spark",
    "Hugging Face",
    "MLflow",
    "CMake",
  ]

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer and designer with a keen eye for aesthetics and a love for creating dynamic,
              interactive experiences. With expertise in modern web technologies, I craft digital solutions that are
              both beautiful and functional.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description and Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  My approach combines technical precision with creative vision, resulting in projects that not only
                  meet requirements but exceed expectations in terms of user experience and visual appeal.
                </p>

                <p className="text-lg text-muted-foreground">
                  I specialize in full-stack development, machine learning integration, and creating seamless user
                  interfaces that tell compelling stories through design and interaction.
                </p>

                <p className="text-lg text-muted-foreground">
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                  or writing about the latest developments in web technology.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button className="rounded-full px-6 bg-white text-black hover:bg-gray-200">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>

                <Button variant="outline" className="rounded-full px-6">
                  My Process
                </Button>
              </div>

              {/* Stats */}
              <div className="pt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Languages & Tools</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {allTechnologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <TechIcon name={tech} size={32} />
                      <span className="text-xs text-center font-medium group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Categories */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Core Competencies</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Frontend Development</span>
                    <div className="flex-1 mx-4 bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-[90%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Backend Development</span>
                    <div className="flex-1 mx-4 bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">UI/UX Design</span>
                    <div className="flex-1 mx-4 bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[80%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Machine Learning</span>
                    <div className="flex-1 mx-4 bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-[75%]"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
