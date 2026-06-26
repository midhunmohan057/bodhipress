import React from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Darkened Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="relative ml-auto w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-200">
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-gray-100">
            <span className="font-serif font-bold text-lg tracking-wider text-gray-900">MENU</span>
            <button 
              onClick={onClose} 
              className="p-2 text-gray-400 hover:text-gray-900 focus:outline-none"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-6 mt-8 text-lg font-semibold text-gray-800">
            <a href="#" onClick={onClose} className="hover:text-blue-700 transition">About Us</a>
            <a href="#" onClick={onClose} className="hover:text-blue-700 transition">Initiatives</a>
            <a href="#" onClick={onClose} className="hover:text-blue-700 transition">Publications</a>
            <a href="#" onClick={onClose} className="hover:text-blue-700 transition">Research</a>
            <a href="#" onClick={onClose} className="hover:text-blue-700 transition">Media</a>
            <a href="#" onClick={onClose} className="hover:text-blue-700 transition">Get Involved</a>
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <button className="w-full bg-blue-700 text-white py-3 rounded font-bold text-sm hover:bg-blue-800 transition shadow-sm">
            Support Us
          </button>
        </div>
      </div>
    </div>
  )
}