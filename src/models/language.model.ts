export interface Language {
  language: string
  data: {
    presentationTitle: string
    menuItems: {
      name: string
      link: string
      image: string
    }[]
    sections: {
      type: string
      title: string
      content: []
    }[]
    specialBullet: {
      title: string
      description: string
      image: string
    }
    bullets: {
      title: string
      description: string
      image: string
    }[]
    projects: []
    hobbies: []
    contacts: {
      type: string
      url: string
      icon: string
    }[]
    copyrightText: string
  }
}
