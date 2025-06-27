'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'

export default function About() {
  const skills = [
    { name: 'HTML/CSS/JavaScript', level: 95 },
    { name: 'CMS (Contentful/WordPress)', level: 95 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Adobe Creative Suite', level: 90 },
    { name: 'SEO & Analytics', level: 80 },
    { name: 'Next.js', level: 75 },
  ]

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design-First',
      description: 'Creating beautiful interfaces that provide exceptional user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency across all devices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver outstanding results.'
    }
  ]

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginBottom: '5rem'
  }

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '2rem',
    borderRadius: '1rem'
  }

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem'
  }

  const textStyle = {
    color: '#d1d5db',
    lineHeight: '1.75',
    marginBottom: '1rem'
  }

  const skillBarContainerStyle = {
    marginBottom: '1rem'
  }

  const skillHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem'
  }

  const skillNameStyle = {
    color: '#d1d5db'
  }

  const skillPercentStyle = {
    color: '#9ca3af'
  }

  const skillBarBgStyle = {
    width: '100%',
    backgroundColor: '#374151',
    borderRadius: '9999px',
    height: '0.5rem'
  }

  const valuesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  }

  const valueCardStyle = {
    ...cardStyle,
    textAlign: 'center' as const,
    transition: 'all 0.3s',
    cursor: 'pointer'
  }

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  }

  const valueTitle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem'
  }

  const valueDescStyle = {
    color: '#d1d5db',
    fontSize: '0.875rem'
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
          <h1 style={titleStyle}>About Me</h1>
          <p style={subtitleStyle}>
            I am a passionate developer who loves creating digital experiences that make a difference.
          </p>
        </motion.div>

        <div style={gridStyle}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={cardStyle}
          >
            <h2 style={cardTitleStyle}>My Story</h2>
            <div style={textStyle}>
              <p style={{ marginBottom: '1rem' }}>
              Experienced WordPress Developer with 10+ years of expertise in developing, maintaining, 
                and customizing enterprise-level WordPress websites. I bring a proven track record in 
                full-stack development with strong backend and frontend skills.
              </p>
              <p style={{ marginBottom: '1rem' }}>
              Over the past 3+ years, I have expanded my expertise into modern JavaScript frameworks, 
                specializing in React and Next.js development. I excel at creating high-performance, 
                scalable web applications that combine the best of traditional CMS flexibility with 
                cutting-edge frontend technologies.
              </p>
              <p>
              My unique background spans custom theme and plugin development, database management, 
                cloud infrastructure, and innovative web solutions including 3D web development and 
                interactive product configurators. This diverse skill set allows me to tackle complex 
                projects from concept to deployment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={cardStyle}
          >
            <h2 style={cardTitleStyle}>Skills</h2>
            <div>
              {skills.map((skill, index) => (
                <div key={skill.name} style={skillBarContainerStyle}>
                  <div style={skillHeaderStyle}>
                    <span style={skillNameStyle}>{skill.name}</span>
                    <span style={skillPercentStyle}>{skill.level}%</span>
                  </div>
                  <div style={skillBarBgStyle}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      style={{
                        background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
                        height: '100%',
                        borderRadius: '9999px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 style={{
            ...titleStyle,
            fontSize: '2.25rem',
            textAlign: 'center' as const,
            marginBottom: '3rem'
          }}>
            What I Value
          </h2>
          <div style={valuesGridStyle}>
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  style={valueCardStyle}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                >
                  <div style={iconContainerStyle}>
                    <IconComponent size={48} color="#60a5fa" />
                  </div>
                  <h3 style={valueTitle}>{value.title}</h3>
                  <p style={valueDescStyle}>{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}