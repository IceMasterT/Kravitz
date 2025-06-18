export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-blue-900 text-white py-12 sm:py-16 lg:py-20 relative" itemScope itemType="https://schema.org/MedicalBusiness">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/images/KravitzDentistryCare.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
          role="img"
          aria-label="Kravitz Dentistry office interior"
        ></div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <img
                src="/images/KravitzDentistryLogoClean.png"
                alt="Kravitz Dentistry - Top Doctor 2025 - Emergency Dental Care Rockville MD"
                className="hero-logo h-16 sm:h-20 lg:h-24 w-auto mx-auto mb-4 sm:mb-6 object-contain object-position-center"
                width="200"
                height="96"
                loading="eager"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 text-white drop-shadow-lg" itemProp="name">
              DR. JOE KRAVITZ, DDS
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white drop-shadow-md">
              Your Emergency Dental Care Solution
            </h2>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Rockville</span> • <span itemProp="addressRegion">MD</span>
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10 text-white px-4 sm:px-0">
              Experience the revolutionary <strong>3 Minute Implant™</strong> by <strong>Top Doctor 2025</strong> Dr. Joe Kravitz.
              Emergency dental care when you need it most, with cutting-edge implant technology that transforms your smile in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a
                href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/"
                className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Request appointment with Dr. Joe Kravitz for 3 Minute Implant"
              >
                Request Appointment
              </a>
              <a
                href="tel:+13017614840"
                className="bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Call Dr. Joe Kravitz at 301-761-4840"
                itemProp="telephone"
              >
                Call: 301-761-4840
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gray-50" itemScope itemType="https://schema.org/MedicalBusiness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-gray-900 mb-12 sm:mb-16">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm text-center" itemScope itemType="https://schema.org/MedicalProcedure">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" itemProp="name">3 Minute Implant™</h3>
              <p className="text-gray-700 mb-6" itemProp="description">
                Experience Dr. Kravitz's revolutionary 3 Minute Implant™ technique for fast, effective tooth replacement.
              </p>
              <a
                href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/"
                className="text-blue-600 hover:text-blue-900 font-medium inline-block px-4 py-2 rounded transition-colors"
                aria-label="Schedule appointment for 3 Minute Implant procedure"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm text-center" itemScope itemType="https://schema.org/MedicalProcedure">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" itemProp="name">Emergency Dental Care</h3>
              <p className="text-gray-700 mb-6" itemProp="description">
                Immediate dental care when you need it most. We're here to help with your dental emergencies.
              </p>
              <a
                href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/"
                className="text-blue-600 hover:text-blue-900 font-medium inline-block px-4 py-2 rounded transition-colors"
                aria-label="Schedule emergency dental care appointment"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm text-center sm:col-span-2 lg:col-span-1" itemScope itemType="https://schema.org/MedicalProcedure">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" itemProp="name">General Dentistry</h3>
              <p className="text-gray-700 mb-6" itemProp="description">
                Comprehensive dental care including cleanings, fillings, and preventive treatments.
              </p>
              <a
                href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/"
                className="text-blue-600 hover:text-blue-900 font-medium inline-block px-4 py-2 rounded transition-colors"
                aria-label="Schedule general dentistry appointment"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden" itemScope itemType="https://schema.org/Person">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-10 left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-blue-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-blue-200 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4" itemProp="name">
              Meet <span className="text-blue-600">Dr. Joseph Kravitz</span>
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0" itemProp="jobTitle">
              Leading Prosthodontist & Pioneer of the Three Minute Implant™
            </p>
            <div className="mt-4 sm:mt-6">
              <img
                src="/images/KravitzDentistryTopDoc.webp"
                alt="Top Doctor 2025 - Dr. Joseph Kravitz"
                className="badge-image h-16 sm:h-20 w-auto mx-auto object-contain object-position-center"
                width="120"
                height="80"
                loading="lazy"
                itemProp="award"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-6">
              {/* Mission Statement */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beyond Treating Teeth</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dr. Joseph Kravitz is a leading prosthodontist whose mission reaches beyond treating teeth.
                  He is fully dedicated to <strong className="text-blue-600">restoring confidence, comfort, and quality of life</strong> for every patient he serves.
                  Through careful diagnostics and a patient-centered approach, Dr. Kravitz provides procedures that are both 
                  <strong className="text-blue-600"> minimally invasive and remarkably gentle</strong>.
                </p>
              </div>

              {/* Innovation Highlight */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Groundbreaking Innovation</h3>
                <p className="text-lg leading-relaxed text-gray-900 mb-4">
                  His pioneering advancement, the <strong className="text-blue-600">Three Minute Implant</strong>, developed through years of focused research
                  and clinical refinement, has <strong className="text-blue-600">transformed the lives of thousands</strong> in Maryland and the greater Washington DC area.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span className="text-sm font-medium text-white">Thousands of Lives Transformed</span>
                </div>
              </div>

              {/* Patient Testimonial */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-blue-600">"</div>
                  <div>
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                      The Three Minute Implant is truly amazing. There is a little pressure and then it is done.
                      I had been terrified of dentists since childhood. In fact, I fainted in the dental chair more than once
                      before meeting Dr. Kravitz. Dr. K and his team are kind and understanding. They explained the procedure
                      and why it would not hurt, and it did not. Now, visiting Dr. K feels more like going to a spa than to a dental office.
                      It is actually enjoyable.
                    </p>
                    <p className="text-blue-600 font-semibold">— Nancy Jameson, Patient</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image and Stats */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="relative inline-block max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/images/Dr.JoeKravitz.jpg"
                      alt="Dr. Joe Kravitz, DDS - Top Doctor 2025"
                      className="doctor-image w-full h-full object-cover object-position-center"
                      width="400"
                      height="400"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3 MIN</div>
                  <div className="text-sm text-gray-600">Implant Procedure</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Lives Transformed</div>
                </div>
              </div>

              {/* 3 Minute Implant Details */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-8 rounded-xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-center text-white">The Revolutionary 3 Minute Implant™</h3>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-white">
                    Dr. Kravitz's groundbreaking 3 Minute Implant™ procedure represents a paradigm shift in dental implant technology.
                    This innovative technique allows for immediate tooth replacement in just minutes, not months.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-sky-200">Key Benefits:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          Immediate results in one visit
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          Minimal discomfort and recovery time
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          No temporary dentures needed
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          Preserves jawbone structure
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-sky-200">Perfect For:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          Single tooth replacement
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          Multiple missing teeth
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          Emergency dental situations
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                          Busy professionals
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <a
                      href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/"
                      className="bg-white text-blue-600 px-8 py-3 text-lg font-bold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-block"
                    >
                      Experience the 3 Minute Implant™
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Kravitz Dentistry Section */}
      <section id="practice" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              About <span className="text-blue-600">Kravitz Dentistry</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Practice Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialty Dental Practice in Rockville, Maryland</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kravitz Dentistry PC is a specialty dental practice located in Rockville, Maryland.
                  The team combines <strong className="text-blue-600">leading-edge technology</strong> with a
                  <strong className="text-blue-600">caring and welcoming atmosphere</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Patients receive clear communication, beautiful and comfortable treatment, and thoughtful follow-up
                  for a variety of needs including:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Broken teeth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Missing teeth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Crooked teeth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Gum infections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Jaw pain</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">And more</span>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At the center of Dr. Kravitz's work is a deep understanding of what people value. He knows that his patients want to
                  <strong className="text-blue-600"> feel healthy, enjoy their lives, and smile without fear</strong>. He respects the importance of time, balance, and well-being.
                  He also understands that having a complete set of strong and healthy teeth supports not only physical health but also
                  <strong className="text-blue-600"> emotional connection, self-esteem, and personal confidence</strong>.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-blue-200 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Visit Our Practice</h3>

                {/* Contact Details - Compact Layout */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Address
                    </h4>
                    <p className="text-gray-700 ml-7">121 Congressional Lane Suite #605</p>
                    <p className="text-gray-700 ml-7">Rockville, MD 20852</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Phone
                    </h4>
                    <p className="text-xl font-bold text-gray-900 ml-7">
                      <a href="tel:+13017614840" className="hover:text-blue-600 transition-colors">
                        301-761-4840
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Office Hours
                    </h4>
                    <p className="text-gray-700 ml-7">Monday - Thursday</p>
                    <p className="text-gray-700 ml-7">8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Location
                  </h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.8234567890123!2d-77.1527576!3d39.0840071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c93e1d8457d7%3A0x8c9b45fa88a82aaf!2s121%20Congressional%20Ln%20%23605%2C%20Rockville%2C%20MD%2020852!5e0!3m2!1sen!2sus!4v1628555568222!5m2!1sen!2sus"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kravitz Dentistry Location - 121 Congressional Lane Suite #605, Rockville, MD 20852"
                    ></iframe>
                  </div>
                </div>

                <a
                  href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/"
                  className="bg-blue-600 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-blue-300 transition-colors duration-200 shadow-lg inline-block w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Schedule Your Visit
                </a>
              </div>

              {/* Recognition */}
              <div className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">National Recognition</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Through extensive research and hands-on care, Dr. Kravitz developed one of the most efficient and gentle procedures
                  available for immediate dental implants. His dedication to excellence has led to national recognition, with appearances on:
                </p>
                <div className="flex justify-center space-x-6 text-2xl font-bold mb-3">
                  <span className="text-blue-600">ABC</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-blue-600">NBC</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-blue-600">FOX</span>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Sharing innovative techniques and compassionate philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white drop-shadow-lg">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
            Schedule a consultation with Dr. Kravitz to discover how the revolutionary 3 Minute Implant™ can help you achieve the smile of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto">
            <a href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/" className="bg-white text-black px-8 py-6 text-lg font-bold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 flex-1 flex flex-col justify-center items-center min-h-[120px]">
              <div className="text-sm font-medium text-gray-600 mb-2">Book Online</div>
              <div className="text-lg font-bold">Schedule Consultation</div>
            </a>
            <div className="bg-white text-black px-8 py-6 rounded-xl shadow-lg flex-1 flex flex-col justify-center items-center min-h-[120px]">
              <div className="text-sm font-medium text-gray-600 mb-2">Call Now</div>
              <a href="tel:+13017614840" className="text-2xl font-bold text-black hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded">
                301-761-4840
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
