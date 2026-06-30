export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start border-b border-gray-800 pb-12 mb-8 gap-10">
          
          <div className="max-w-md">
             <div className="font-serif font-bold text-xl mb-2 tracking-wide">BODHI PRESS FOUNDATION</div>
             
             <div className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
               <span>Publishing</span> <span className="text-blue-500">•</span>
               <span>Research</span> <span className="text-blue-500">•</span>
               <span>Education</span> <span className="text-blue-500">•</span>
               <span>Public Discourse</span>
             </div>

             <p className="text-gray-400 text-sm leading-relaxed">
               Building platforms for knowledge, dialogue, and social transformation.
             </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-400 w-full lg:w-auto">
            <div className="flex flex-col space-y-3">
              <span className="text-white font-semibold tracking-wider uppercase text-xs mb-1">Contact</span>
              <span>info@bodhipress.org</span>
              <span>Nagpur, India</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Bodhi Press Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}