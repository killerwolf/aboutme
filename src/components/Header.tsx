import React from 'react'
import { Code2, Github, Linkedin, Twitter } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code2 className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">John Doe</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header