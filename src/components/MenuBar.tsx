'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function MenuBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 0 && lastScrollY === 0) {
        // Just started scrolling down from top - add delay
        timeoutId = setTimeout(() => {
          setScrolled(true)
        }, 150)
      } else if (currentScrollY === 0 && lastScrollY > 0) {
        // Just reached the top - clear timeout and reset immediately
        clearTimeout(timeoutId)
        setScrolled(false)
      }
      
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div 
      className={`fixed z-50 transition-all duration-500 ease-out animate-fade-in-down-delay-3 ${
        scrolled 
          ? 'top-2 md:top-4 left-24 right-24 md:left-64 md:right-64 lg:left-80 lg:right-80 xl:left-96 xl:right-96' 
          : 'top-6 md:top-12 left-4 right-4 md:left-10 md:right-10'
      }`}
    >
      <div 
        className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 rounded-xl transition-all duration-500 ease-out"
        style={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none'
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto md:h-10"
          />
        </div>

        {/* Centered Menu Items - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-white opacity-50 hover:opacity-75 transition-all font-medium">
            Home
          </a>
          <a href="#" className="text-white opacity-50 hover:opacity-75 transition-all font-medium">
            About
          </a>
        
        </nav>
        
        {/* Right side - Login button on desktop, hamburger on mobile */}
        <div className="flex items-center">
          {/* Login Button - Hidden on mobile */}
          <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Login to WMOJ
          </button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white opacity-50"></span>
              <span className="w-full h-0.5 bg-white opacity-50"></span>
              <span className="w-full h-0.5 bg-white opacity-50"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}