'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1f2937 0%, #1e3a8a 50%, #7c3aed 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1.5rem',
    paddingTop: '4rem',
    position: 'relative' as const,
    overflow: 'hidden'
  }

  const backgroundOrbStyle1 = {
    position: 'absolute' as const,
    top: '25%',
    left: '25%',
    width: '24rem',
    height: '24rem',
    backgroundColor: '#3b82f6',
    opacity: 0.2,
    borderRadius: '50%',
    filter: 'blur(3rem)',
    animation: 'pulse 2s infinite'
  }

  const backgroundOrbStyle2 = {
    position: 'absolute' as const,
    bottom: '25%',
    right: '25%',
    width: '24rem',
    height: '24rem',
    backgroundColor: '#8b5cf6',
    opacity: 0.2,
    borderRadius: '50%',
    filter: 'blur(3rem)',
    animation: 'pulse 2s infinite 1s'
  }

  const contentStyle = {
    position: 'relative' as const,
    zIndex: 10,
    textAlign: 'center' as const,
    maxWidth: '64rem',
    margin: '0 auto'
  }

  const nameStyle = {
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const subtitleStyle = {
    fontSize: 'clamp(1.25rem, 4vw, 2rem)',
    color: '#d1d5db',
    marginBottom: '2rem'
  }

  const descriptionStyle = {
    fontSize: '1.125rem',
    color: '#9ca3af',
    maxWidth: '32rem',
    margin: '0 auto',
    lineHeight: '1.75',
    marginBottom: '3rem'
  }

  const buttonContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem'
  }

  const primaryButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s',
    fontSize: '1rem',
    fontWeight: '500'
  }

  const socialContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem'
  }

  const socialLinkStyle = {
    color: '#9ca3af',
    transition: 'color 0.3s',
    textDecoration: 'none'
  }

  return (
    <div style={containerStyle}>
      {/* Background orbs */}
      <div style={backgroundOrbStyle1}></div>
      <div style={backgroundOrbStyle2}></div>

      <div style={contentStyle}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={nameStyle}>
            Wynter Comfort
          </h1>
          <h2 style={subtitleStyle}>
          Creative Web Designer & Developer
          </h2>
          <p style={descriptionStyle}>
            Crafting exceptional digital experiences with modern technologies. 
            Expert in WordPress, HTML, CSS, JavaScript with 10+ years creating high-quality, 
            responsive websites and digital marketing designs. 3+ years using React and Next.js,
            Passionate about combining technical expertise with creative design to drive business growth.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={buttonContainerStyle}
        >
          <Link 
            href="/projects" 
            style={primaryButtonStyle}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            View My Work
            <ArrowRight size={16} />
          </Link>
          <a 
            href="/documents/resume.pdf" 
            download="WynterComfort-Resume.pdf"
            style={primaryButtonStyle}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={socialContainerStyle}
        >
          <a 
            href="https://www.linkedin.com/in/wynter-comfort-69a294146/" 
            style={socialLinkStyle}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9ca3af'}
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:wynter@wyntercomfort.com" 
            style={socialLinkStyle}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9ca3af'}
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  )
}