import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import MLProjects from "@/components/ml-projects"
import Blogs from "@/components/blogs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: "Modern Portfolio",
  description: "A modern portfolio with aesthetic touches and dynamic layouts",
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <MLProjects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}
