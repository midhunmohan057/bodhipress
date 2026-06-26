import React from 'react'

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-gray-900">
            Reclaiming Knowledge. <br/>
            <span className="text-blue-700">Building New Publics.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Bodhi Press Foundation is an independent not-for-profit institution dedicated to publishing, research, education, and public discourse. We create platforms that amplify marginalized voices, advance critical inquiry, and democratize access to knowledge.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition">
              Explore Our Work
            </button>
            <button className="border border-blue-700 text-blue-700 px-8 py-3 rounded font-bold hover:bg-blue-50 transition">
              Support the Foundation
            </button>
          </div>
          <div className="flex gap-4 text-sm font-bold text-gray-500">
            <span className="text-gray-900">Publishing</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Research</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Education</span> <span className="text-blue-700">•</span>
            <span className="text-gray-900">Public Discourse</span>
          </div>
        </div>
        
        {/* Single Hero Image Banner */}
        <div className="h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-100">
          <img 
            src="/images/hero-banner.jpg" 
            alt="Bodhi Press Foundation Hero Banner" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="bg-slate-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Knowledge is <br/> a public good.
            </h2>
            <div className="w-16 h-1 bg-blue-700 mt-8"></div>
          </div>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="font-medium text-gray-900">
              Knowledge shapes societies, yet access to its production and dissemination remains unequal.
            </p>
            <p>
              Bodhi Press Foundation creates platforms for publishing, research, education, and public engagement that nurture democratic dialogue and intellectual freedom.
            </p>
            <p>
              Our work brings together writers, researchers, educators, artists, journalists, and communities to produce and share knowledge that is relevant, rigorous, and socially meaningful.
            </p>
            <a href="#" className="text-blue-700 font-bold inline-flex items-center mt-4 hover:underline">
              Read more about us <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center border-b border-gray-200">
        <h3 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-16">What We Do</h3>
        <div className="grid md:grid-cols-4 gap-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-6">📖</div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">Publishing</h4>
            <p className="text-gray-600 leading-relaxed">Books, journals, essays, reports and digital publications.</p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-6">🔍</div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">Research</h4>
            <p className="text-gray-600 leading-relaxed">Research and documentation projects across social, cultural and contemporary issues.</p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-6">🎓</div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">Education</h4>
            <p className="text-gray-600 leading-relaxed">Workshops, training programs, mentorship initiatives and learning opportunities.</p>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-2xl mb-6">👥</div>
            <h4 className="font-bold text-xl mb-3 text-gray-900">Public Dialogue</h4>
            <p className="text-gray-600 leading-relaxed">Events, conversations and intellectual exchange on critical public issues.</p>
          </div>
        </div>
      </section>
    </>
  )
}