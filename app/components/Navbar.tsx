'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md drop-shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between min-h-[120px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/KravitzDentistryLogo.jpg"
              alt="Kravitz Dentistry Logo"
              width={320}
              height={100}
              className="h-24 w-auto"
            />
          </Link>

            {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-500 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-gray-500 font-medium">
              About
            </Link>
            <Link href="/services" className="text-black hover:text-gray-500 font-medium">
              Services
            </Link>
            <Link href="/gallery" className="text-black hover:text-gray-500 font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-500 font-medium">
              Contact
            </Link>
            <button className="btn-primary text-sm px-6 py-2">
              Request Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-black hover:text-gray-500 font-medium">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-black hover:text-gray-500 font-medium">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-black hover:text-gray-500 font-medium">
                Services
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-black hover:text-gray-500 font-medium">
                Gallery
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-black hover:text-gray-500 font-medium">
                Contact
              </Link>
              <button className="w-full btn-primary text-sm px-6 py-2 mt-4">
                Request Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 