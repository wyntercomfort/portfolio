'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  featured: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: '3D Jersey Configurator',
      description: 'An innovative 3D jersey customization platform for Notorious Brand, creating an interactive web application that allows customers to design custom sports jerseys in real-time with photorealistic 3D visualization.',
      image: '/images/projects/project1.png',
      tech: ['Three.js', 'HTML/CSS/JS'],
      demo: 'https://notoriousbrand.net/jersey-configurator',
      featured: true
    },
    {
      title: 'E-Commerce Platform Redesign',
      description: 'Full website redesign and development with WordPress CMS, responsive design, and analytics tracking. Improved conversion rates and user experience across all devices.',
      image: '/images/projects/project2.png',
      tech: ['WordPress CMS', 'Responsive Design', 'Adobe Creative Suite'],
      demo: 'https://notoriousbrand.net',
      featured: true
    },
    {
      title: 'Creative Website Redesign',
      description: 'Full website redesign and development with WordPress CMS, responsive design, and analytics tracking. Improved conversion rates and user experience across all devices.',
      image: '/images/projects/project3.png',
      tech: ['WordPress CMS', 'Figma', 'Google Analytics', 'SEO'],
      demo: 'https://securifyr.com',
      featured: false
    },
    {
      title: 'Corporate Website & Brand Identity',
      description: 'Complete brand identity and website development with custom graphics and content management system for easy updates.',
      image: '/images/projects/project4.png',
      tech: ['WordPress', 'Adobe Illustrator', 'Brand Design'],
      demo: 'https://neurogenx.com',
      featured: false
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
    maxWidth: '80rem',
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

  const sectionTitleStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '2rem'
  }

  const featuredGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem',
    marginBottom: '5rem'
  }

  const regularGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  }

  const featuredCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    overflow: 'hidden',
    transition: 'all 0.3s',
    cursor: 'pointer'
  }

  const imageStyle = {
    width: '100%',
    height: '16rem',
    objectFit: 'cover' as const
  }

  const cardContentStyle = {
    padding: '1.5rem'
  }

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.75rem'
  }

  const cardDescStyle = {
    color: '#d1d5db',
    marginBottom: '1rem',
    lineHeight: '1.6'
  }

  const techContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    marginBottom: '1.5rem'
  }

  const techTagStyle = {
    padding: '0.25rem 0.75rem',
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    color: '#93c5fd',
    borderRadius: '9999px',
    fontSize: '0.875rem'
  }

  const linksContainerStyle = {
    display: 'flex',
    gap: '1rem'
  }

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'color 0.3s'
  }

  const primaryLinkStyle = {
    ...linkStyle,
    color: '#60a5fa'
  }

  const smallCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    transition: 'all 0.3s'
  }

  const smallCardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.75rem'
  }

  const smallTechTagStyle = {
    padding: '0.125rem 0.5rem',
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    color: '#c4b5fd',
    borderRadius: '0.25rem',
    fontSize: '0.75rem'
  }

  const smallTechContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    marginBottom: '1rem'
  }

  const smallLinksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const smallLinksLeftStyle = {
    display: 'flex',
    gap: '1rem'
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
          <h1 style={titleStyle}>My Projects</h1>
          <p style={subtitleStyle}>
            A collection of projects that showcase my expertise and passion for creating 
            high-converting websites that drive business growth.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '5rem' }}
        >
          <h2 style={sectionTitleStyle}>Featured Projects</h2>
          <div style={featuredGridStyle}>
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                style={featuredCardStyle}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={600}
                  height={400}
                  style={imageStyle}
                />
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{project.title}</h3>
                  <p style={cardDescStyle}>{project.description}</p>
                  <div style={techContainerStyle}>
                    {project.tech.map(tech => (
                      <span key={tech} style={techTagStyle}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={linksContainerStyle}>
                    <a 
                      href={project.demo}
                      style={primaryLinkStyle}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#93c5fd'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#60a5fa'}
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 style={sectionTitleStyle}>Other Projects</h2>
          <div style={regularGridStyle}>
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                style={smallCardStyle}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <h3 style={smallCardTitleStyle}>{project.title}</h3>
                <p style={cardDescStyle}>{project.description}</p>
                <div style={smallTechContainerStyle}>
                  {project.tech.map(tech => (
                    <span key={tech} style={smallTechTagStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={smallLinksStyle}>
                  <div style={smallLinksLeftStyle}>
                    <a 
                      href={project.demo} 
                      style={linkStyle}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#d1d5db'}
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  </div>
                  <ArrowRight 
                    size={16} 
                    color="#9ca3af" 
                    style={{ transition: 'transform 0.3s' }}
                    onMouseEnter={(e) => (e.target as SVGElement).style.transform = 'translateX(4px)'}
                    onMouseLeave={(e) => (e.target as SVGElement).style.transform = 'translateX(0)'}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}