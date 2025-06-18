'use client'

import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const Navigation = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" aria-label="Kravitz Dentistry Home">
                <img
                  src="/images/KravitzDentistryLogoClean.png"
                  alt="Kravitz Dentistry - Top Doctor 2025"
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                  width="120"
                  height="80"
                  loading="eager"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base font-medium">
              <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-blue-200 transition-colors">About Dr. Kravitz</a>
              <a href="#practice" className="text-white hover:text-blue-200 transition-colors">Our Practice</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
            </div>

            {/* Contact Info + Social Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="text-sm sm:text-base font-semibold">
                <a
                  href="tel:+13017614840"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="Call Dr. Joe Kravitz at 301-761-4840"
                >
                  <span className="hidden sm:inline">301-761-4840</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <a href="#" aria-label="Follow us on Facebook" className="text-blue-200 hover:text-white transition-colors">
                  <FaFacebook size={16} />
                </a>
                <a href="#" aria-label="Follow us on Twitter" className="text-blue-200 hover:text-white transition-colors">
                  <FaTwitter size={16} />
                </a>
                <a href="#" aria-label="Subscribe to our YouTube channel" className="text-blue-200 hover:text-white transition-colors">
                  <FaYoutube size={16} />
                </a>
                <a href="#" aria-label="Follow us on Instagram" className="text-blue-200 hover:text-white transition-colors">
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};


export default Navigation