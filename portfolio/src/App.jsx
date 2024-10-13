'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const sections = ['home', 'about', 'projects', 'skills', 'contact']

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (
          scrollPosition >= offsetTop - windowHeight / 2 &&
          scrollPosition < offsetTop + offsetHeight - windowHeight / 2
        ) {
          setActiveSection(section)
        }
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white-900 bg-opacity-80 backdrop-blur-md">
        <ul className="flex justify-center py-4 space-x-8">
          {sections.map((section) => (
            <li key={section}>
              <Button
                variant="ghost"
                onClick={() => scrollTo(section)}
                className={`capitalize ${
                  activeSection === section ? 'text-primary' : 'text-white-400'
                } hover:text-primary transition-colors`}
              >
                {section}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Ogounaine Hamza
          </h1>
          <p className="text-2xl text-white-300">Web Developer & Designer</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <Button onClick={() => scrollTo('about')} className="group">
            Learn More
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg mb-4 text-white-300">
            Hi, I'm Hamza! I'm a passionate web developer and designer with a keen eye for creating
            beautiful, functional, and user-friendly websites. With a strong foundation in both
            front-end and back-end technologies, I strive to bring innovative ideas to life.
          </p>
          <p className="text-lg text-white-300">
            When I'm not coding, you can find me exploring new design trends, contributing to
            open-source projects, or enjoying a good cup of coffee while sketching new UI concepts.
          </p>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white-800 border-white-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Project {project}</h3>
                  <p className="text-sm mb-4 text-white-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Button variant="secondary">View Project</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">My Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'React', level: 80 },
            { name: 'Node.js', level: 75 },
            { name: 'UI/UX Design', level: 85 },
            { name: 'Python', level: 70 },
          ].map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-white-300">{skill.name}</span>
                <span className="text-white-400">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white-800 p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-white-300">
                Name
              </label>
              <Input id="name" className="bg-white-700 text-white-100" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-white-300">
                Email
              </label>
              <Input id="email" type="email" className="bg-white-700 text-white-100" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-white-300">
                Message
              </label>
              <Textarea
                id="message"
                rows={4}
                className="bg-white-700 text-white-100"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          <div className="mt-8 flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="text-white-400 hover:text-primary">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white-400 hover:text-primary">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white-400 hover:text-primary">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}