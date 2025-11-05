// components/Navigation.tsx
'use client'

import { useState,useEffect } from 'react'
import { MenuIcon, CloseIcon,HomeIcon,UserIcon,CodeIcon,BriefcaseIcon,ContactIcon,ProjectIcon } from './Icons'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsOpen(false)
  }

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '#home', icon: HomeIcon },
    { name: 'About', href: '#about', icon: UserIcon },
    { name: 'Skills', href: '#skills', icon: CodeIcon },
    { name: 'Projects', href: '#projects', icon: ProjectIcon },
    { name: 'Experience', href: '#experience', icon: BriefcaseIcon },
    { name: 'Contact', href: '#contact', icon: ContactIcon },
  ]

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#home" 
              className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300"
              onClick={handleNavClick}
            >
              Venkat.S
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary font-medium transition-all duration-300 rounded-lg hover:bg-primary/5 group"
                >
                  <item.icon />
                  <span>{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-20">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="relative bg-white/95 backdrop-blur-md border-l border-gray-200 shadow-xl w-80 ml-auto h-full animate-in slide-in-from-right duration-300">
            <div className="flex flex-col p-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 font-medium transition-all duration-200 rounded-lg group"
                  onClick={handleNavClick}
                >
                  <item.icon />
                  <span className="text-lg">{item.name}</span>
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
              
              {/* Contact CTA in Mobile Menu */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  className="block w-full bg-primary hover:bg-secondary text-white text-center font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  onClick={handleNavClick}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation