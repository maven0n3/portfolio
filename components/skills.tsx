"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Figma, Database, Layers, Smartphone, Globe, Cpu, LineChart } from "lucide-react"

const skills = [
  {
    icon: <Code className="h-8 w-8 text-blue-400" />,
    name: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with modern frameworks",
    technologies: [
      { name: "React", color: "text-blue-400", bgColor: "bg-blue-900/20" },
      { name: "Next.js", color: "text-white", bgColor: "bg-black" },
      { name: "TypeScript", color: "text-blue-500", bgColor: "bg-blue-900/20" },
      { name: "Tailwind CSS", color: "text-cyan-400", bgColor: "bg-cyan-900/20" },
    ],
  },
  {
    icon: <Database className="h-8 w-8 text-green-400" />,
    name: "Backend Development",
    description: "Building robust server-side applications and APIs",
    technologies: [
      { name: "Node.js", color: "text-green-400", bgColor: "bg-green-900/20" },
      { name: "MongoDB", color: "text-green-500", bgColor: "bg-green-900/20" },
      { name: "PostgreSQL", color: "text-blue-400", bgColor: "bg-blue-900/20" },
    ],
  },
  {
    icon: <Figma className="h-8 w-8 text-purple-400" />,
    name: "UI/UX Design",
    description: "Designing intuitive and aesthetically pleasing user experiences",
    technologies: [
      { name: "Figma", color: "text-purple-400", bgColor: "bg-purple-900/20" },
      { name: "Adobe XD", color: "text-pink-400", bgColor: "bg-pink-900/20" },
      { name: "Sketch", color: "text-yellow-400", bgColor: "bg-yellow-900/20" },
      { name: "Prototyping", color: "text-blue-400", bgColor: "bg-blue-900/20" },
    ],
  },
  {
    icon: <Layers className="h-8 w-8 text-orange-400" />,
    name: "Game Development",
    description: "Design the basic concepts of Games",
    technologies: [
      { name: "Godot", color: "text-blue-400", bgColor: "bg-blue-900/20" },
      { name: "Unreal", color: "text-pink-400", bgColor: "bg-pink-900/20" },
      { name: "Unity", color: "text-pink-500", bgColor: "bg-pink-900/20" },
      { name: "Blender", color: "text-green-400", bgColor: "bg-green-900/20" },
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-red-400" />,
    name: "Machine Learning",
    description: "Creating cross-platform mobile applications",
    technologies: [
      { name: "PyTorch", color: "text-blue-400", bgColor: "bg-blue-900/20" },
      { name: "TensorFlow", color: "text-cyan-400", bgColor: "bg-cyan-900/20" },
      { name: "Seaborn", color: "text-gray-400", bgColor: "bg-gray-800" },
      { name: "Numpy", color: "text-green-500", bgColor: "bg-green-900/20" },
      { name: "Polars", color: "text-red-500", bgColor: "bg-red-900/20" },
      { name: "JAX", color: "text-orange-500", bgColor: "bg-orange-900/20" },
      { name: "XG-Boost", color: "text-pink-500", bgColor: "bg-pink-900/20" }
    ],
  },
  {
    icon: <Globe className="h-8 w-8 text-cyan-400" />,
    name: "Data Analytics",
    description: "Optimizing websites for speed, accessibility, and SEO",
    technologies: [
      { name: "Excel", color: "text-red-400", bgColor: "bg-red-900/20" },
      { name: "Python", color: "text-blue-400", bgColor: "bg-blue-900/20" },
      { name: "SQL", color: "text-green-400", bgColor: "bg-green-900/20" },
      { name: "EDA", color: "text-yellow-400", bgColor: "bg-yellow-900/20" },
    ],
  },
  {
    icon: <Cpu className="h-8 w-8 text-indigo-400" />,
    name: "DevOps",
    description: "Streamlining development operations and deployment processes",
    technologies: [
      { name: "Docker", color: "text-blue-400", bgColor: "bg-blue-900/20" },
      { name: "CI/CD", color: "text-green-400", bgColor: "bg-green-900/20" },
      { name: "AWS", color: "text-yellow-400", bgColor: "bg-yellow-900/20" },
      { name: "Git", color: "text-pink-400", bgColor: "bg-pink-900/20" },
      { name: "GitLab", color: "text-red-400", bgColor: "bg-red-900/20" },
      { name: "Kubernetes", color: "text-orange-400", bgColor: "bg-orange-900/20" }
    ],
  },
  {
    icon: <LineChart className="h-8 w-8 text-yellow-400" />,
    name: "AI Development",
    description: "Creating interactive and informative data visualizations",
    technologies: [
      { name: "Agentic AI", color: "text-orange-400", bgColor: "bg-orange-900/20" },
      { name: "LLM", color: "text-pink-400", bgColor: "bg-pink-900/20" },
      { name: "MCP Server", color: "text-green-400", bgColor: "bg-green-900/20" },
      { name: "Generative AI", color: "text-red-400", bgColor: "bg-red-900/20" },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-24 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter mb-3"
          >
            Skills & Expertise
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
            A comprehensive overview of my technical skills and areas of expertise
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-800"
            >
              <div className="mb-4 text-gray-400">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 ${tech.bgColor} ${tech.color} text-xs rounded-full flex items-center gap-1`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
