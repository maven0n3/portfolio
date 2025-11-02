"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const rippleContainerRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([])
  const [meteors, setMeteors] = useState<
    { id: number; x1: number; y1: number; x2: number; y2: number; size: number; duration: number; delay: number }[]
  >([])
  const nextRippleId = useRef(0)
  const nextMeteorId = useRef(0)
  const lastRippleTime = useRef(0)
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  // Optimize dimensions calculation
  const updateDimensions = useCallback(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [])

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [updateDimensions])

  // Create stars
  useEffect(() => {
    if (!starsRef.current || dimensions.width === 0) return

    const starCount = Math.floor((dimensions.width * dimensions.height) / 10000) // Adjust density
    const starsContainer = starsRef.current
    starsContainer.innerHTML = ""

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      // Random position
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height

      // Random size (tiny)
      const size = Math.random() * 2 + 1

      // Random twinkle delay and duration
      const twinkleDelay = Math.random() * 10
      const twinkleDuration = Math.random() * 3 + 2

      // Set styles
      star.style.left = `${x}px`
      star.style.top = `${y}px`
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Only make some stars twinkle
      if (Math.random() > 0.7) {
        star.style.animation = `twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite`
      }

      starsContainer.appendChild(star)
    }
  }, [dimensions])

  // Handle scroll and mouse move with optimized animation frame
  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Handle scroll effect
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
        parallaxRef.current.style.opacity = `${1 - scrollY * 0.002}`
      }
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])

  // Optimized mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })

    // Add ripple effect on mouse move, but throttle it
    const now = Date.now()
    if (now - lastRippleTime.current > 150) {
      // Increased throttle time to reduce lag
      lastRippleTime.current = now
      const id = nextRippleId.current++
      const size = Math.random() * 40 + 40 // Slightly smaller ripples

      // Use functional update to avoid stale state
      setRipples((prev) => {
        // Limit number of ripples to reduce DOM elements
        const updated = [...prev, { id, x: e.clientX, y: e.clientY, size }]
        if (updated.length > 5) {
          // Keep only 5 ripples max
          return updated.slice(-5)
        }
        return updated
      })

      // Remove the ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
      }, 1500) // Shorter duration
    }
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  // Create meteor with improved trajectory
  const createMeteor = useCallback(() => {
    if (dimensions.width === 0) return

    const id = nextMeteorId.current++

    // More realistic meteor trajectory (top-left to bottom-right usually)
    const startSide = Math.random() > 0.7 ? "top" : "left"
    let x1, y1, x2, y2

    if (startSide === "top") {
      // Start from top edge
      x1 = Math.random() * dimensions.width
      y1 = -50
      // End at bottom-right area
      x2 = x1 + (dimensions.width * 0.3 + Math.random() * dimensions.width * 0.5)
      y2 = dimensions.height + 100
    } else {
      // Start from left edge
      x1 = -50
      y1 = Math.random() * (dimensions.height * 0.7)
      // End at bottom-right area
      x2 = dimensions.width + 100
      y2 = y1 + (dimensions.height * 0.3 + Math.random() * dimensions.height * 0.5)
    }

    const size = Math.random() * 3 + 1 // Random size between 1 and 4
    const duration = Math.random() * 1.5 + 1 // Faster duration between 1 and 2.5 seconds
    const delay = Math.random() * 0.5 // Small random delay for natural effect

    setMeteors((prev) => [...prev, { id, x1, y1, x2, y2, size, duration, delay }])

    // Remove meteor after animation completes
    setTimeout(
      () => {
        setMeteors((prev) => prev.filter((meteor) => meteor.id !== id))
      },
      (duration + delay) * 1000,
    )
  }, [dimensions])

  // Set up meteor animation timer
  useEffect(() => {
    if (dimensions.width === 0) return

    // Create initial meteors
    createMeteor()

    // Random interval between 4-8 seconds for more natural effect
    const createRandomMeteor = () => {
      createMeteor()
      const nextTime = 4000 + Math.random() * 4000
      setTimeout(createRandomMeteor, nextTime)
    }

    const initialTimeout = setTimeout(createRandomMeteor, 6000)

    return () => clearTimeout(initialTimeout)
  }, [dimensions, createMeteor])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Calculate the transform values based on mouse position
  const calcTransform = useCallback(() => {
    if (dimensions.width === 0) return { x: 0, y: 0, scale: 1 }

    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2

    // Direction from center to mouse
    const directionX = mousePosition.x - centerX
    const directionY = mousePosition.y - centerY

    // Distance from center
    const distance = Math.sqrt(directionX * directionX + directionY * directionY)
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)
    const distanceRatio = Math.min(distance / maxDistance, 1)

    // Normalize direction
    const length = Math.max(distance, 0.1)
    const normalizedX = directionX / length
    const normalizedY = directionY / length

    // Repel effect (move away from mouse)
    const repelStrength = 25 * (1 - distanceRatio)
    const x = -normalizedX * repelStrength
    const y = -normalizedY * repelStrength

    // Scale effect (expand when mouse is closer)
    const scale = 1 + (1 - distanceRatio) * 0.05

    return { x, y, scale }
  }, [dimensions, mousePosition])

  const transform = calcTransform()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0 overflow-hidden" />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(66, 66, 66, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%)",
        }}
      />

      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="water-effect absolute inset-0 opacity-40"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          />
        </div>
      </div>

      {/* Mouse ripple effects container */}
      <div ref={rippleContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full water-mouse-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Meteor effects container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute meteor"
            style={{
              left: meteor.x1,
              top: meteor.y1,
              width: `${meteor.size}px`,
              height: `${meteor.size * 60}px`, // Make it longer for the trail
              background: `linear-gradient(to bottom, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(255, 220, 180, 0.7) 10%, 
                rgba(255, 180, 120, 0.5) 20%, 
                rgba(255, 120, 80, 0.3) 40%, 
                rgba(255, 80, 50, 0.1) 60%, 
                transparent 100%)`,
              boxShadow: "0 0 20px rgba(255, 220, 180, 0.8)",
              borderRadius: "50% 50% 0 0",
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.duration}s`,
              animationName: `meteor-${meteor.id}`,
              animationTimingFunction: "linear",
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              x: transform.x,
              scale: transform.scale,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 relative z-10">
              Creative Developer & Designer
            </span>
            <div className="water-ripple absolute inset-0 -z-10"></div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Crafting beautiful digital experiences with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-black hover:text-white transition-all duration-300 border-0"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>
        <style jsx global>{`
          .water-effect {
            background: linear-gradient(125deg, #7928ca, #ff0080, #0070f3, #00c3ff);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            filter: blur(100px);
            transform: scale(1.2);
          }
          
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .water-ripple {
            background: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.05) 20%,
              rgba(255, 255, 255, 0) 70%
            );
            mix-blend-mode: overlay;
            animation: ripple 4s ease-in-out infinite;
          }
          
          @keyframes ripple {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.3;
            }
            100% {
              transform: scale(0.8);
              opacity: 0;
            }
          }
          
          .water-mouse-ripple {
            background: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.3) 30%,
              rgba(255, 255, 255, 0) 70%
            );
            mix-blend-mode: overlay;
            animation: mouseRipple 1.5s ease-out forwards;
            pointer-events: none;
          }
          
          @keyframes mouseRipple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(3);
              opacity: 0;
            }
          }
          
          .star {
            position: absolute;
            background-color: #fff;
            border-radius: 50%;
            opacity: 0.8;
          }
          
          @keyframes twinkle {
            0% {
              opacity: 0.3;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
            100% {
              opacity: 0.3;
              transform: scale(0.8);
            }
          }
          
          .meteor {
            position: absolute;
            transform-origin: center;
            z-index: 1;
          }
          
          .meteor::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
          }
          
          ${meteors
            .map(
              (meteor) => `
            @keyframes meteor-${meteor.id} {
              0% {
                transform: translate(0, 0) rotate(${Math.atan2(meteor.y2 - meteor.y1, meteor.x2 - meteor.x1) * (180 / Math.PI) + 90}deg);
                opacity: 0;
              }
              5% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translate(${meteor.x2 - meteor.x1}px, ${meteor.y2 - meteor.y1}px) rotate(${Math.atan2(meteor.y2 - meteor.y1, meteor.x2 - meteor.x1) * (180 / Math.PI) + 90}deg);
                opacity: 0;
              }
            }
          `,
            )
            .join("\n")}
        `}</style>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Button variant="ghost" size="icon" className="rounded-full animate-bounce" onClick={scrollToAbout}>
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </section>
  )
}
