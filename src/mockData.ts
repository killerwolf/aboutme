import { User, TimelineItem } from './types'

export const userData: User = {
  name: "John Doe",
  tagline: "Crafting elegant solutions to complex problems",
  position: "Senior Frontend Developer at XYZ Corp",
  location: "San Francisco, CA",
  avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  twitterUrl: "https://twitter.com",
  openToWork: true
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: '2023-05-15T10:30:00Z',
    platform: 'twitter',
    content: 'Just launched a new React component library! Check it out #ReactJS #OpenSource',
    link: 'https://twitter.com/johndoe/status/1234567890'
  },
  {
    id: 2,
    date: '2023-05-14T15:45:00Z',
    platform: 'linkedin',
    content: 'Excited to announce that I\'ll be speaking at the upcoming WebDev Conference!',
    link: 'https://www.linkedin.com/posts/johndoe_webdev-conference-activity-1234567890'
  },
  {
    id: 3,
    date: '2023-05-13T09:00:00Z',
    platform: 'medium',
    content: 'New blog post: "10 Tips for Writing Clean React Code"',
    link: 'https://medium.com/@johndoe/10-tips-for-writing-clean-react-code-1234567890'
  },
  {
    id: 4,
    date: '2023-05-12T18:20:00Z',
    platform: 'github',
    content: 'Merged pull request: Add dark mode support',
    link: 'https://github.com/johndoe/awesome-project/pull/42',
    githubAction: 'Merged PR'
  }
]