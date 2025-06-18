import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex justify-center">
            {/* Practice Info */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Kravitz Dentistry - Your Emergency Dental Care Solution
              </h3>
              <div className="space-y-2 text-gray-500">
                <p>121 Congressional Lane Suite #605</p>
                <p>Rockville, MD 20852</p>
                <p className="font-semibold text-xl text-gray-900">
                  <a href="tel:+13017614840" className="hover:text-blue-900">
                    301-761-4840
                  </a>
                </p>
                <p className="text-sm">
                  <strong>Office Hours:</strong> Mon - Thurs, 8:00 am - 5:00 pm
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#"
                   title="Follow us on Facebook"
                   className="text-gray-400 hover:text-blue-900 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#"
                   title="Follow us on Twitter"
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#"
                   title="Subscribe to our YouTube channel"
                   className="text-gray-400 hover:text-red-600 transition-colors">
                  <FaYoutube size={24} />
                </a>
                <a href="#"
                   title="Follow us on Instagram"
                   className="text-gray-400 hover:text-pink-600 transition-colors">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>Copyright © 2025 Kravitz Dentistry</p>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-900">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
