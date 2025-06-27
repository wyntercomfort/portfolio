'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Calendar, Award } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1f2937 0%, #1e3a8a 50%, #7c3aed 100%)',
    paddingTop: '5rem',
    paddingBottom: '2rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  }

  const maxWidthStyle = {
    maxWidth: '72rem',
    margin: '0 auto'
  }

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '4rem'
  }

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1.5rem'
  }

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#d1d5db',
    maxWidth: '48rem',
    margin: '0 auto'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem'
  }

  const infoSectionStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem'
  }

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '2rem',
    borderRadius: '1rem'
  }

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#d1d5db',
    marginBottom: '1.5rem'
  }

  const iconContainerStyle = {
    width: '3rem',
    height: '3rem',
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const contactTextStyle = {
    display: 'flex',
    flexDirection: 'column' as const
  }

  const contactLabelStyle = {
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.25rem'
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '0.5rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s'
  }

  const textareaStyle = {
    ...inputStyle,
    minHeight: '8rem',
    resize: 'vertical' as const
  }

  const buttonStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#d1d5db',
    marginBottom: '0.5rem'
  }

  const highlightStyle = {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '2rem'
  }

  const highlightTextStyle = {
    color: '#86efac',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  return (
    <div style={containerStyle}>
      <div style={maxWidthStyle}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={headerStyle}
        >
          <h1 style={titleStyle}>We Can Work Together</h1>
          <p style={subtitleStyle}>
            Ready to create exceptional web experiences? I would love to discuss how my expertise 
            and creative design skills can help drive your business growth.
          </p>
        </motion.div>

        <div style={gridStyle}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={infoSectionStyle}
          >
            <div style={highlightStyle}>
              <div style={highlightTextStyle}>
                <Award size={16} />
                Available for Hudu Technologies position - Website Developer with 10+ year of experience
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                Contact Information
              </h2>
              
              <div style={contactItemStyle}>
                <div style={iconContainerStyle}>
                  <Mail size={20} color="#60a5fa" />
                </div>
                <div style={contactTextStyle}>
                  <div style={contactLabelStyle}>Email</div>
                  <div>wynter@wyntercomfort.com</div>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={iconContainerStyle}>
                  <Phone size={20} color="#60a5fa" />
                </div>
                <div style={contactTextStyle}>
                  <div style={contactLabelStyle}>Phone</div>
                  <div>+1 (517) 740-4323</div>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={iconContainerStyle}>
                  <MapPin size={20} color="#60a5fa" />
                </div>
                <div style={contactTextStyle}>
                  <div style={contactLabelStyle}>Location</div>
                  <div>Jackson, Michigan, US</div>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={iconContainerStyle}>
                  <Calendar size={20} color="#60a5fa" />
                </div>
                <div style={contactTextStyle}>
                  <div style={contactLabelStyle}>Availability</div>
                  <div>Available for immediate start</div>
                </div>
              </div>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
                Why Choose Me for Hudu?
              </h3>
              <ul style={{ color: '#d1d5db', lineHeight: '1.75', paddingLeft: '1.25rem' }}>
                <li>Expert in modern web development</li>
                <li>10+ years creating high-quality, responsive websites</li>
                <li>Experience with CMS platforms and SEO optimization</li>
                <li>Strong design skills with Adobe Creative Suite</li>
                <li>Proven track record in improving conversion rates</li>
                <li>Collaborative team player with excellent communication</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={cardStyle}
          >
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Send Message
            </h2>
            
            <form onSubmit={handleSubmit} style={formStyle}>
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  placeholder="Enter your name"
                  onFocus={(e) => e.target.style.borderColor = '#60a5fa'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  placeholder="Enter your email"
                  onFocus={(e) => e.target.style.borderColor = '#60a5fa'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
              </div>

              <div>
                <label htmlFor="company" style={labelStyle}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Your company name"
                  onFocus={(e) => e.target.style.borderColor = '#60a5fa'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={textareaStyle}
                  placeholder="Tell me about your project or position..."
                  onFocus={(e) => e.target.style.borderColor = '#60a5fa'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                />
              </div>

              <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}