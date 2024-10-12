export interface User {
  name: string
  tagline: string
  position: string
  location: string
  avatarUrl: string
  githubUrl: string
  linkedinUrl: string
  twitterUrl: string
  openToWork: boolean
}

export interface TimelineItem {
  id: number
  date: string
  platform: 'twitter' | 'linkedin' | 'medium' | 'github'
  content: string
  link: string
  githubAction?: string
}