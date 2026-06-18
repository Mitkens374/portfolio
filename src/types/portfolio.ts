export type Language = 'en' | 'sk'

export type NavigationItem = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  subtitle?: string
  period: string
  technologies: string[]
  description: string[]
  links?: ProjectLink[]
  featured?: boolean
}

export type EducationItem = {
  institution: string
  department: string
  degree: string
  location: string
  period: string
}

export type SpokenLanguage = {
  name: string
  level: string
  description: string
}

export type PortfolioContent = {
  locale: Language
  seo: {
    title: string
    description: string
  }
  identity: {
    name: string
    shortName: string
    role: string
    location: string
  }
  navigation: {
    ariaLabel: string
    languageLabel: string
    items: NavigationItem[]
  }
  hero: {
    eyebrow: string
    title: string
    introduction: string
    projectsCta: string
    contactCta: string
  }
  about: {
    title: string
    paragraphs: string[]
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  projects: {
    title: string
    introduction: string
    privateNote: string
    items: Project[]
  }
  education: {
    title: string
    items: EducationItem[]
  }
  languages: {
    title: string
    items: SpokenLanguage[]
  }
  footer: {
    heading: string
    message: string
    emailLabel: string
    linksLabel: string
    copyright: string
  }
  contact: {
    email: string
    website: string
    github: string
  }
}
