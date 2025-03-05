"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projects = [
    {
      title: "Real-time Analytics Platform",
      description:
        "A real-time analytics platform that processes streaming data from IoT devices and provides insights through interactive dashboards.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Apache Kafka", "Spark Streaming", "Python", "React", "AWS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Data Quality Framework",
      description:
        "An open-source framework for monitoring data quality in data pipelines, with automated testing and alerting capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Great Expectations", "Airflow", "Docker", "Grafana"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Customer Segmentation Engine",
      description:
        "A machine learning-based customer segmentation engine that helps businesses identify and target different customer groups.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Scikit-learn", "PySpark", "Tableau", "PostgreSQL"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "ETL Orchestration Tool",
      description:
        "A tool for orchestrating and monitoring ETL workflows across multiple data sources and destinations with a user-friendly interface.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "FastAPI", "React", "Redis", "Docker"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Experience</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A selection of data engineering and analytics projects I've worked on, showcasing my skills in building
              data pipelines, analytics solutions, and data-driven applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.links.demo}
                      className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={18} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Interested in working together?
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

