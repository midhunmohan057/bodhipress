import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css' 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}