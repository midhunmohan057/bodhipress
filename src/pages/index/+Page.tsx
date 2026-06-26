import React from 'react'

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-gray-900 tracking-tight">
            Reclaiming Knowledge. <br/>
            <span className="text-blue-700">Building New Publics.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
            Bodhi Press Foundation is an independent not-for-profit institution dedicated to publishing, research, education, and public discourse. We create platforms that amplify marginalized voices, advance critical inquiry, and democratize access to knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
            <button className="w-full sm:w-auto bg-blue-700 text-white px-8 py-3.5 rounded font-bold hover:bg-blue-800 transition cursor-pointer text-center shadow-xs">
              Explore Our Work
            </button>
            <button className="w-full sm:w-auto border border-blue-700 text-blue-700 px-8 py-3.5 rounded font-bold hover:bg-blue-50 transition cursor-pointer text-center">
              Support the Foundation
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-bold text-gray-500">
            <span className="text-gray-900">Publishing</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Research</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Education</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Public Discourse</span>
          </div>
        </div>
        
        {/* Option 2 Applied: Proportional mobile aspect ratio + object-top anchor lock */}
        <div className="aspect-[16/10] md:aspect-auto md:h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-100">
          <img 
            src="/images/hero-banner.jpg" 
            alt="Bodhi Press Foundation Hero Banner" 
            className="w-full h-full object-cover object-top" 
          />
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">About Us</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Knowledge is <br className="hidden sm:inline" /> a public good.
            </h2>
            <div className="w-16 h-1 bg-blue-700 mt-6 md:mt-8"></div>
          </div>
          <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-gray-900">
              Knowledge shapes societies, yet access to its production and dissemination remains unequal.
            </p>
            <p>
              Bodhi Press Foundation creates platforms for publishing, research, education, and public engagement that nurture democratic dialogue and intellectual freedom.
            </p>
            <p>
              Our work brings together writers, researchers, educators, artists, journalists, and communities to produce and share knowledge that is relevant, rigorous, and socially meaningful.
            </p>
            <a href="/about" className="text-blue-700 font-bold inline-flex items-center mt-2 hover:underline">
              Read more about us <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center border-b border-gray-200">
        <h3 className="text-blue-700 font-bold uppercase tracking-widest text-xs sm:text-sm mb-12 md:mb-16">What We Do</h3>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">📖</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Publishing</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Books, journals, essays, reports and digital publications.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">🔍</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Research</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Research and documentation projects across social, cultural and contemporary issues.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">🎓</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Education</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Workshops, training programs, mentorship initiatives and learning opportunities.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-5">👥</div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Public Dialogue</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">Events, conversations and intellectual exchange on critical public issues.</p>
          </div>
        </div>
      </section>
    </>
  )
}