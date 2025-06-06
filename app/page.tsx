"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sparkles, Heart, Code, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { TextReveal } from "@/components/animations/text-reveal"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ["home", "about", "education", "work", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: " Real Time Solar Tracking System",
      description:
        "An automated system that dynamically orients solar panels to maximize sunlight capture using microcontroller-based control.",
      image: "img2.jpg",
      tags: ["Arduino", "C/C++", "Solar Energy", "Embedded Systems"],
      link: "#",
      gradient: "from-blue-500 to-blue-600",
      glowColor: "glow-blue",
    },
    {
      title: "A Greenhouse Monitoring and Control System Using IOT",
      description:
        "An IoT-enabled solution for real-time environmental monitoring and automated resource control in greenhouse farming.",
      image: "img5.jpg",
      tags: [" Arduino", "IoT", "Sensors", "Web Dashboard"],
      link: "#",
      gradient: "from-blue-400 to-blue-500",
      glowColor: "glow-blue-light",
    },
    {
      title: "Data Logger System for Third-Party Instrument Interface",
      description:
        "A Python-MySQL application for real-time data acquisition, logging, and analysis from external production instruments.",
      image: "img4.png",
      tags: ["Python", "MySQL", "Data Logging", "Web Interface"],
      link: "#",
      gradient: "from-blue-600 to-blue-700",
      glowColor: "glow-blue-dark",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image: "img6.jpg",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      link: "#",
      gradient: "from-blue-300 to-blue-400",
      glowColor: "glow-blue-light",
    },
  ]

  const skillColors = [
    "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    "bg-gradient-to-r from-blue-400 to-blue-500 text-white",
    "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
    "bg-gradient-to-r from-blue-300 to-blue-400 text-white",
    "bg-gradient-to-r from-blue-700 to-blue-800 text-white",
    "bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900",
    "bg-gradient-to-r from-blue-800 to-blue-900 text-white",
    "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800",
    "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
    "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-25"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-35"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Danish Mane
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "education", "work", "contact"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all capitalize relative ${
                    activeSection === section ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-blue-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-blue-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden border-t border-blue-100 bg-gradient-to-r from-blue-50 to-white"
              >
                <div className="flex flex-col space-y-4 py-4">
                  {["home", "about","education", "work", "contact"].map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-left text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors capitalize px-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {section}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4" />
              Available for new projects
            </motion.div>

            <TextReveal className="mb-2">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text-blue">Creative</span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </TextReveal>
            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                I craft <span className="text-blue-600 font-semibold">digital experiences</span> that blend beautiful
                design with powerful functionality. Passionate about creating solutions that make a{" "}
                <span className="text-blue-700 font-semibold">difference</span>.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("work")}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg glow-blue"
                >
                  <Code className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 rounded-full border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          {/* Floating icons */}
          <motion.div
            className="absolute top-20 left-10 text-blue-400"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Code className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute top-32 right-16 text-blue-500"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Palette className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-20 text-blue-300"
            animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles className="w-7 h-7" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <TextReveal>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      About Me
                    </span>
                  </h2>
                </TextReveal>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <FadeIn delay={0.2}>
                    <p className="text-justify"> 
                      I'm an enthusiastic engineering student and aspiring developer with a strong foundation in electronics, IoT, and software development. I specialize in building smart embedded systems, real-time data logging applications, and interactive web solutions that blend innovation with functionality.
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <p className="text-justify">
                      My technical experience spans across Python, C/C++, Java, and web technologies like HTML, CSS, and JavaScript. .
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-justify">
                      Beyond academics, I’m a lifelong learner who enjoys exploring new tools and trends in tech. Whether it's performing as a guitarist on stage or leading technical teams at college fests, I bring energy, creativity, and a problem-solving mindset to everything I do.
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.5}>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
                    <StaggerChildren className="flex flex-wrap gap-3">
                      {[
                        "HTML",
                        "CSS",
                        "Javascript",
                        "C/C++",
                        "Python",
                        "Java",
                        "SQL",
                      ].map((skill, index) => (
                        <StaggerItem key={skill}>
                          <motion.span
                            className={`px-4 py-2 rounded-full text-sm font-medium shadow-lg ${skillColors[index % skillColors.length]}`}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {skill}
                          </motion.span>
                        </StaggerItem>
                      ))}
                    </StaggerChildren>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-2xl overflow-hidden shadow-2xl glow-blue">
                  <img
                    src="/placeholder.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100"
      >
        <div className="max-w-4xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </TextReveal>
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="flex flex-col md:flex-row items-center md:items-start bg-white/80 rounded-2xl shadow-xl border-l-8 border-blue-500 p-8 gap-6 hover:shadow-2xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {/* Example: Graduation Cap Emoji or Icon */}
                    🎓
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-1">BE in Electronics and Telecommunication</h3>
                  <div className="text-blue-600 font-medium mb-1">International Institute of Information Technology, Pune</div>
                  <div className="text-gray-500 text-sm mb-2">2021 - 2025</div>
                  <p className="text-gray-700">
                    CGPA - 7.20
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col md:flex-row items-center md:items-start bg-white/80 rounded-2xl shadow-xl border-l-8 border-blue-400 p-8 gap-6 hover:shadow-2xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    🎓
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-1">HSC, Maharashtra</h3>
                  <div className="text-blue-500 font-medium mb-1">Manere Jr. College, Ichalkaranji.</div>
                  <div className="text-gray-500 text-sm mb-2">2019 - 2021</div>
                  <p className="text-gray-700">
                    95%
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col md:flex-row items-center md:items-start bg-white/80 rounded-2xl shadow-xl border-l-8 border-blue-400 p-8 gap-6 hover:shadow-2xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    🎓
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-1">SSC, Maharashtra</h3>
                  <div className="text-blue-500 font-medium mb-1">Saraswati Highschool, Ichalkaranji.</div>
                  <div className="text-gray-500 text-sm mb-2">2019</div>
                  <p className="text-gray-700">
                    91.40%
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Selected Work
                </span>
              </h2>
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Showcasing my journey through innovative projects that merge
                <span className="text-blue-600 font-semibold"> creativity, technology, and real-world problem solving </span>.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1} once={false}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <Card
                    className={`overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 ${project.glowColor}`}
                  >
                    <CardContent className="p-0">
                      <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                        <motion.div
                          className={`relative aspect-video md:aspect-auto ${index % 2 === 1 ? "md:order-2" : ""}`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div
                          className={`p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50 ${index % 2 === 1 ? "md:order-1" : ""}`}
                        >
                          <TextReveal>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                          </TextReveal>
                          <FadeIn delay={0.2}>
                            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                          </FadeIn>
                          <StaggerChildren className="flex flex-wrap gap-2 mb-6" delay={0.3}>
                            {project.tags.map((tag, tagIndex) => (
                              <StaggerItem key={tag}>
                                <motion.span
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${skillColors[tagIndex % skillColors.length]}`}
                                  whileHover={{ scale: 1.05, rotate: 1 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                  {tag}
                                </motion.span>
                              </StaggerItem>
                            ))}
                          </StaggerChildren>
                          <FadeIn delay={0.4}>
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Button
                                variant="outline"
                                className={`self-start group border-2 bg-gradient-to-r ${project.gradient} text-white border-transparent hover:shadow-lg`}
                                asChild
                              >
                                <a href={project.link} className="flex items-center gap-2">
                                  View Project
                                  <motion.div
                                    animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 0.8 }}
                                  >
                                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                  </motion.div>
                                </a>
                              </Button>
                            </motion.div>
                          </FadeIn>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <TextReveal>
            <h2 className="text-4xl font-bold mb-6">
              Let's <span className="gradient-text-blue text-white">Work Together</span>
            </h2>
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              <span className="text-blue-200 font-semibold"> amazing ideas</span> to life.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg glow-blue"
                  asChild
                >
                  <a href="mailto:danishmane33@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 text-blue-200 hover:bg-blue-800/50 hover:border-blue-200 px-8 py-3 rounded-full"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/178Wdl7NMuFilo7BfQ1FGzlG_zjjcIVYZ/view?usp=sharing" target="_blank" className="flex items-center gap-2" rel="noreferrer">
                    Download Resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center justify-center space-x-8">
              <motion.a
                href="https://github.com/danishmane"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github className="h-7 w-7" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/danish-mane/"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.3, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className="h-7 w-7" />
              </motion.a>
              <motion.a
                href="mailto:danishmane33@gmail.com"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-7 w-7" />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-blue-900 to-slate-900 border-t border-blue-800">
        <FadeIn>
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-blue-200">
              &copy; 2025 <span className="text-white font-semibold">Danish Mane</span>. Made with
              <span className="text-blue-400 mx-1">💙</span>
              and lots of <span className="text-blue-300">☕</span>
            </p>
          </div>
        </FadeIn>
      </footer>

      {/* Blue cursor follower */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
          mixBlendMode: "difference",
        }}
        animate={{
          x: typeof window !== "undefined" ? window.mouseX - 16 : 0,
          y: typeof window !== "undefined" ? window.mouseY - 16 : 0,
          scale: typeof window !== "undefined" && window.mouseDown ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 100, mass: 0.1 }}
      />
    </div>
  )
}
