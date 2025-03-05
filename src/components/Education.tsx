"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiAward, FiBookOpen } from "react-icons/fi"

const Education = () => {
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

  const education = [
    {
      degree: "Master of Technology in Computer Science",
      institution: "Indian Institute of Technology, Delhi",
      year: "2014 - 2016",
      description: "Specialized in Data Science and Machine Learning with a focus on big data technologies.",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Delhi Technological University",
      year: "2010 - 2014",
      description: "Graduated with honors, focusing on database systems and software engineering.",
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      year: "2022",
      icon: <FiAward size={20} />,
    },
    {
      name: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2021",
      icon: <FiAward size={20} />,
    },
    {
      name: "Databricks Certified Developer for Apache Spark",
      issuer: "Databricks",
      year: "2020",
      icon: <FiAward size={20} />,
    },
    {
      name: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      year: "2019",
      icon: <FiAward size={20} />,
    },
    {
      name: "Cloudera Certified Professional: Data Engineer",
      issuer: "Cloudera",
      year: "2018",
      icon: <FiAward size={20} />,
    },
    {
      name: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      year: "2017",
      icon: <FiAward size={20} />,
    },
  ]

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My academic background and professional certifications that have equipped me with the knowledge and skills
              in data engineering and analytics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <FiBookOpen size={24} className="text-purple-500 mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                    <div className="inline-block px-3 py-1 mb-4 bg-purple-900/30 text-purple-400 rounded-full text-sm">
                      {edu.year}
                    </div>
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <h5 className="text-purple-500 mb-4">{edu.institution}</h5>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <FiAward size={24} className="text-purple-500 mr-3" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-600/50 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="mr-4 text-purple-500">{cert.icon}</div>
                    <div>
                      <h4 className="font-bold">{cert.name}</h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

