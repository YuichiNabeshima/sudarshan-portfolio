"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SkillBar from "./SkillBar"

const About = () => {
  const ref = useRef(null)
  const skillsRef = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 })

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

  const skills = [
    {
      name: "Data Engineering",
      percentage: 95,
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Python & SQL",
      percentage: 98,
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Big Data Technologies",
      percentage: 90,
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Cloud Platforms",
      percentage: 85,
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Data Visualization",
      percentage: 88,
      color: "from-purple-600 to-indigo-600",
    },
  ]

  const experienceYears = 2+

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30 blur-lg"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Sudarshan Karunanithy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Data Engineer & Analytics Specialist</h3>
              <p className="text-gray-300 mb-6">
                As a Data Engineer and Analyst i am passionate about designing efficient data pipelines and unlocking actionable insights from data. 
                With a strong foundation in data engineering, analytics, and business intelligence, I specialize in SQL, Python, and 
                cloud-based data solutions.
              </p>
              <p className="text-gray-300 mb-6">
                I have 3+ years of professional experience as a Data Analyst, where I worked extensively with data visualization, reporting, and 
                business intelligence tools to drive data-driven decision-making. Additionally, I have successfully completed multiple freelance projects 
                in data engineering, focusing on data migration from on-prem to cloud, ETL pipeline development, and data transformation processes.
              </p>
              <p className="text-gray-300 mb-6">
                With hands-on experience in data analytics, I transitioned into data engineering to gain a deeper understanding of the entire data lifecycle. 
                My expertise includes working with Databricks to build and optimize big data workflows, develop scalable ETL pipelines, and implement 
                machine learning solutions on distributed computing frameworks. I leverage Apache Spark within Databricks to process large-scale datasets efficiently, 
                ensuring seamless data integration and transformation.
              </p>
              <p className="text-gray-300 mb-6">
                I am always open to collaborating on innovative projects, solving complex data challenges, and exploring new opportunities in data engineering and analytics. 
                Let’s connect and build data-driven solutions together!
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {["Python", "SQL", "Apache Spark", "Apache Airflow", "AWS", "Azure", "Kafka", "ETL/ELT Pipelines", "Snowflake", "Tableau", "Data Pipeline Automation"," Data Integration & Transformation", "PowerBI", "GitHub", "Data Governance & Security", "Data Quality Monitoring & Performance Tuning"].map(
                  (skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ),
                )}
              </div>
              <motion.a
                href="#experience"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Experience
              </motion.a>
            </motion.div>
          </div>

          <motion.div ref={skillsRef} variants={itemVariants} className="mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="flex items-baseline">
                  <span className="text-8xl md:text-9xl font-bold text-white">{experienceYears}</span>
                  <span className="text-4xl md:text-5xl font-bold text-purple-500">+</span>
                </div>
                <p className="text-xl text-gray-300 mt-2">
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Core Skills</h3>

                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    delay={index * 0.2}
                    inView={skillsInView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

