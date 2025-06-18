export default function DentalImplants() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">Home</a>
            <span className="mx-2">/</span>
            <span>Dental Implants</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              DR. JOE KRAVITZ, DDS
            </h1>
            <div className="flex items-center justify-center mb-6">
              <span className="text-lg">EMERGENCY DENTAL CARE</span>
              <div className="mx-4 w-8 h-px bg-white"></div>
              <span className="text-lg">ROCKVILLE | MD</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              DENTAL IMPLANTS
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              If you have missing teeth, traditional dentures are not your only option. In fact, a much more
              natural-looking and feeling dental procedure can replace missing teeth for a better aesthetic and
              improved chewing and speaking – and the best part is, it's often permanent. Dental implants from our
              Rockville emergency dental practice can replace what you have lost with incredible functionality
              and results that both look and feel like natural teeth.
            </p>

            <div className="text-center mb-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Experience the Revolutionary</h3>
                <h4 className="text-3xl font-bold text-blue-400 mb-4">3 Minute Implant™</h4>
                <p className="text-lg">by Dr. Joe Kravitz</p>
                <div className="mt-6">
                  <iframe
                    src="https://player.vimeo.com/video/33733624"
                    width="640"
                    height="360"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="3 Minute Implant™ by Dr. Joe Kravitz"
                    className="w-full max-w-2xl mx-auto rounded-lg border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Are the Benefits of Dental Implants?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dental implants are a restorative solution that can repair the appearance and functionality of a patient's
              teeth. The durable and secure implants are built to act as long-lasting, natural-looking replacements for
              missing teeth. Additionally, by preserving jawbone integrity, dental implants can contribute to strong
              overall oral health.
            </p>

            <p className="text-lg text-gray-700 mb-4">Potential benefits also include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Improved ability to bite and chew</li>
              <li>No additional maintenance beyond regular brushing and flossing</li>
              <li>Lowered risk of additional oral complications caused by missing teeth</li>
              <li>Customized fit</li>
              <li>No movement along the gums</li>
              <li>Reduction in loss of soft tissue</li>
              <li>Helps stabilize adjacent teeth</li>
              <li>Natural look for an aesthetically-pleasing smile</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Schedule an Appointment</h2>
          <p className="text-xl mb-8">
            Ready to learn more about the 3 Minute Implant™? Contact Kravitz Dentistry in Rockville, MD today.
          </p>
          <div className="space-y-4">
            <div className="text-xl">
              <strong>📍 121 Congressional Lane Suite #605, Rockville, MD 20852</strong>
            </div>
            <div className="text-xl">
              <strong>📞 301-761-4840</strong>
            </div>
            <div className="text-lg">
              <strong>Office Hours:</strong> Mon - Thurs, 8:00 am - 5:00 pm
            </div>
            <a href="https://appts.valethealth.com/kravitz-dentistry-appointment-request/" className="bg-white text-blue-600 px-6 py-3 text-base font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 inline-block mt-4">
              Schedule Appointment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
