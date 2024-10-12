import React from 'react'
import { Briefcase, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { User } from '../types'

interface HeroProps {
  user: User
}

const Hero: React.FC<HeroProps> = ({ user }) => {
  return (
    <div className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center">
          <img 
            src={user.avatarUrl}
            alt={user.name} 
            className="rounded-full w-40 h-40 object-cover border-4 border-gray-800 mb-4"
          />
          {user.openToWork && (
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
              Open to Work
            </div>
          )}
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{user.name}</h1>
          <p className="text-lg mb-3 text-gray-300">"{user.tagline}"</p>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm">{user.position}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <MapPin className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm">{user.location}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <a href={user.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={user.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero