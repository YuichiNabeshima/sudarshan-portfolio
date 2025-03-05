"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiLoader } from "react-icons/fi"
import SuccessDialog from "./SuccessDialog"

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Check if returning from FormSubmit redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const submitted = urlParams.get("submitted")

    if (submitted === "true") {
      // Remove the query parameter
      const newUrl = window.location.pathname + window.location.hash
      window.history.replaceState({}, document.title, newUrl)

      // Show success dialog
      setShowSuccessDialog(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }
  }, [])

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Try to submit the form using JavaScript
      const formElement = formRef.current
      if (!formElement) throw new Error("Form not found")

      // Create a hidden iframe to handle the form submission
      const iframe = document.createElement("iframe")
      iframe.name = "hidden-iframe"
      iframe.style.display = "none"
      document.body.appendChild(iframe)

      // Set the form target to the iframe
      formElement.target = "hidden-iframe"
      formElement.action = `https://formsubmit.co/${contactEmail}`
      formElement.method = "POST"

      // Add a hidden field for the redirect URL
      const redirectInput = document.createElement("input")
      redirectInput.type = "hidden"
      redirectInput.name = "_next"
      redirectInput.value = `${window.location.href.split("?")[0]}?submitted=true`
      formElement.appendChild(redirectInput)

      // Add other FormSubmit configuration fields
      const subjectInput = document.createElement("input")
      subjectInput.type = "hidden"
      subjectInput.name = "_subject"
      subjectInput.value = "New message from portfolio website!"
      formElement.appendChild(subjectInput)

      const templateInput = document.createElement("input")
      templateInput.type = "hidden"
      templateInput.name = "_template"
      templateInput.value = "table"
      formElement.appendChild(templateInput)

      const captchaInput = document.createElement("input")
      captchaInput.type = "hidden"
      captchaInput.name = "_captcha"
      captchaInput.value = "false"
      formElement.appendChild(captchaInput)

      // Submit the form
      formElement.submit()

      // Show success dialog after a short delay
      setTimeout(() => {
        setShowSuccessDialog(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSubmitting(false)

        // Clean up
        formElement.removeChild(redirectInput)
        formElement.removeChild(subjectInput)
        formElement.removeChild(templateInput)
        formElement.removeChild(captchaInput)
        document.body.removeChild(iframe)
      }, 2000)
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.")
      }
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      title: "Email",
      value: "Sudarshankarunanithy7@gmail.com",
      link: "mailto:Sudarshankarunanithy7@gmail.com",
    },
    {
      icon: <FiPhone size={20} />,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <FiMapPin size={20} />,
      title: "Location",
      value: "Surrey, BC",
      link: "#",
    },
  ]

  const socialLinks = [
    { icon: <FiLinkedin size={20} />, link: "#", label: "LinkedIn" },
    { icon: <FiGithub size={20} />, link: "#", label: "GitHub" },
    { icon: <XIcon size={20} />, link: "#", label: "X (formerly Twitter)" }
  ]

  // Replace this with the actual email you want to receive messages at
  const contactEmail = "Sudarshankarunanithy7@gmail.com"

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out! I'm always open
              to new challenges and collaborations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-600/50 transition-colors duration-300"
                  >
                    <div className="mr-4 text-purple-500 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-400">{info.title}</h4>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-bold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className="p-3 bg-gray-900 text-white rounded-full hover:bg-purple-600 transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-3">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                    {errorMessage}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90 disabled:opacity-70 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <SuccessDialog isOpen={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} />
    </section>
  )
}

export default Contact

