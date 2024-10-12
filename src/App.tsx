import React from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import { userData } from './mockData'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Hero user={userData} />
      <main className="flex-grow">
        <Timeline />
      </main>
      <Footer user={userData} />
    </div>
  )
}

export default App