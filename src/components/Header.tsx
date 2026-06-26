import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1d3557] text-white rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-blue-700 transition">
              ≡
            </div>
            <div className="font-serif font-bold text-lg leading-tight uppercase tracking-wide text-gray-900">
              Bodhi Press <br /> Foundation
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
            <a href="#" className="hover:text-blue-700 transition">About Us</a>
            <a href="#" className="hover:text-blue-700 transition">Initiatives</a>
            <a href="#" className="hover:text-blue-700 transition">Publications</a>
            <a href="#" className="hover:text-blue-700 transition">Research</a>
            <a href="#" className="hover:text-blue-700 transition">Media</a>
            <a href="#" className="hover:text-blue-700 transition">Get Involved</a>
          </nav>

          {/* Desktop Actions & Mobile Hamburger Trigger */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-blue-700 text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-blue-800 transition">
              Support Us
            </button>
            
            <button className="text-gray-400 hover:text-gray-900 p-2" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden text-gray-700 hover:text-gray-900 p-2 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}