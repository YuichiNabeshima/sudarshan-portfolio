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
      degree: "Diploma in Data Engineering and Analytics",
      institution: "Canadian College of Technology and Business, Vancouver",
      year: "2024 - 2025",
      description: (
        <>
          <p>Focus: Data engineering, big data technologies, and analytics.</p>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Hands-on experience in ETL pipeline development and data warehousing.</li>
            <li>Exposure to big data processing frameworks like Apache Spark and Hadoop.</li>
            <li>Gained skills in SQL, Python, and cloud-based data solutions.</li>
            <li>Developed data-driven decision-making abilities through real-world projects.</li>
          </ul>
        </>
      ),
    },
    {
      degree: "Master of Business Administration in Finance and Marketing",
      institution: "SSN College of Engineering, Chennai",
      year: "2013 - 2015",
      description: (
        <>
          <p>Focus: Business strategy, financial management, and market analytics.</p>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Specialized in market research, consumer behavior, and digital marketing strategies.</li>
            <li>Developed strong analytical and decision-making skills for business problem-solving.</li>
            <li>Gained experience in financial planning, risk assessment, and business development.</li>
            <li>Worked on case studies involving market trends and competitive analysis.</li>
          </ul>
        </>
      ),
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Anna University, Chennai",
      year: "2009 - 2013",
      description: (
        <>
          <p>Focus: Core engineering principles, communication systems, and problem-solving.</p>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Built a solid foundation in electronic circuits, communication networks, and programming.</li>
            <li>Developed critical thinking and problem-solving skills for technical challenges.</li>
            <li>Completed projects on embedded systems and signal processing.</li>
            <li>Gained exposure to software tools and database management fundamentals.</li>
          </ul>
        </>
      ),
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

