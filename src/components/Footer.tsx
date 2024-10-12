import React from 'react'
import { User } from '../types'

interface FooterProps {
  user: User
}

const Footer: React.FC<FooterProps> = ({ user }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {user.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer