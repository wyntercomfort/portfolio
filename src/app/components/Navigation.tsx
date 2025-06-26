'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const navStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none'
  }

  const linkStyle = {
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'color 0.3s',
    marginLeft: '2rem'
  }

  const activeLinkStyle = {
    ...linkStyle,
    color: '#60a5fa'
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link href="/" style={logoStyle}>
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={pathname === link.href ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = pathname === link.href ? '#60a5fa' : '#d1d5db'}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'white',
            display: 'block'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div style={{ 
          padding: '1rem 1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '0.5rem 0',
                color: pathname === link.href ? '#60a5fa' : '#d1d5db',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}