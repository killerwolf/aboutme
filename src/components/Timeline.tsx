import React from 'react'
import { MessageSquare, Linkedin, BookOpen, Github } from 'lucide-react'
import { timelineData } from '../mockData'

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  }
}

const Timeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
        {timelineData.map((item, index) => (
          <div key={item.id} className={`flex items-center w-full my-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-xs font-medium mb-1 timeline-date">{formatDate(item.date)}</p>
                <p className="text-gray-300 text-sm mb-1">
                  {item.platform === 'github' && item.githubAction && (
                    <span className="inline-block text-xs font-semibold mr-1 px-1.5 py-0.5 rounded bg-gray-700">
                      {item.githubAction}
                    </span>
                  )}
                  {item.content}
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 text-xs transition-colors duration-200">
                  View on {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
                </a>
              </div>
            </div>
            <div className="z-20 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 absolute left-1/2 transform -translate-x-1/2">
              {item.platform === 'twitter' && <MessageSquare className="w-4 h-4 text-[#1DA1F2]" />}
              {item.platform === 'linkedin' && <Linkedin className="w-4 h-4 text-[#0077B5]" />}
              {item.platform === 'medium' && <BookOpen className="w-4 h-4 text-[#00AB6C]" />}
              {item.platform === 'github' && <Github className="w-4 h-4 text-[#6e5494]" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline