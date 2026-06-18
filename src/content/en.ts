import type { PortfolioContent } from '../types/portfolio'

export const en: PortfolioContent = {
  locale: 'en',
  seo: {
    title: 'Michal Lešo | Backend & Cloud Developer',
    description:
      'Portfolio of Michal Lešo, a junior backend and cloud developer focused on AWS, Python, IoT and React.',
  },
  identity: {
    name: 'Ing. Michal Lešo',
    shortName: 'Michal Lešo',
    role: 'Junior Backend / Cloud Developer',
    location: 'Michaľany, Slovakia',
  },
  navigation: {
    ariaLabel: 'Main navigation',
    languageLabel: 'Select language',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Education', href: '#education' },
      { label: 'Languages', href: '#languages' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    eyebrow: 'Ing. Michal Lešo',
    title: 'Backend, cloud and IoT solutions developer.',
    introduction:
      'Computer Science graduate with hands-on experience in Python, AWS, serverless systems, IoT and React applications.',
    projectsCta: 'My projects',
    contactCta: 'Contact',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'I am a Computer Science graduate from the Technical University of Košice with hands-on experience in backend development, cloud-based systems, IoT and database-backed applications. I have worked with Python, FastAPI and PostgreSQL, as well as AWS services for building serverless architectures, authentication, data storage and application deployment.',
      'Through academic, team and client projects, I have gained experience with collaborative, iterative and agile development. I am especially interested in backend and cloud development, where I want to continue improving while contributing to practical software.',
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'Languages',
        items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
      },
      {
        title: 'Backend',
        items: ['FastAPI', 'REST APIs', 'PostgreSQL'],
      },
      {
        title: 'Frontend',
        items: ['React', 'Material UI'],
      },
      {
        title: 'Cloud',
        items: [
          'AWS Lambda',
          'DynamoDB',
          'AppSync',
          'Cognito',
          'Amplify',
          'S3',
          'RDS',
          'IoT Core',
          'EventBridge',
          'SNS',
          'EC2',
        ],
      },
      {
        title: 'Tools & DevOps',
        items: ['Git', 'Docker', 'NGINX', 'Cloudflare Tunnel'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    introduction:
      'A selection of academic, team and client work across backend development, AWS, IoT and the web.',
    privateNote:
      'Some repositories are private because of academic, team or client constraints.',
    items: [
      {
        title: 'Streetlight Monitor',
        subtitle: 'Master’s thesis — IoT system for public lighting monitoring',
        period: '2025 – 2026',
        technologies: [
          'AWS IoT Core',
          'Lambda',
          'DynamoDB',
          'AppSync',
          'EventBridge',
          'SNS',
          'Cognito',
          'ESP8266',
          'MQTT',
          'Docker',
          'React',
          'NGINX',
          'Cloudflare Tunnel',
          'Amplify',
        ],
        description: [
          'Designed a three-layer IoT prototype made up of sensor devices, a local gateway and an AWS cloud layer.',
          'Implemented MQTT communication, serverless cloud services and a React visualization application deployed with AWS Amplify.',
        ],
        links: [
          {
            label: 'Visit website',
            href: 'https://www.streetlightmonitor.com',
          },
        ],
        featured: true,
      },
      {
        title: 'Invoice Processing System',
        period: '2025',
        technologies: [
          'Python',
          'FastAPI',
          'AWS S3',
          'AWS RDS',
          'PostgreSQL',
          'GPT API',
          'PyMuPDF',
          'Tesseract OCR',
        ],
        description: [
          'Worked in a team on backend logic, data processing and cloud integration.',
          'Built a cloud-based file and data management flow, with data extracted using PyMuPDF and Tesseract OCR and transformed into structured JSON using the GPT API.',
        ],
        featured: true,
      },
      {
        title: 'Freelance Web Development',
        subtitle: 'Terraviso and FX-TEAM',
        period: '2025 – 2026',
        technologies: ['WordPress', 'AWS EC2', 'Docker', 'NGINX'],
        description: [
          'Designed, implemented and maintained presentation websites based on client requirements.',
          'Analyzed deployment options and proposed a Docker and NGINX infrastructure setup for additional services using AWS EC2.',
        ],
        links: [
          { label: 'Terraviso', href: 'https://www.terraviso.eu' },
          { label: 'FX-TEAM', href: 'https://www.fx-team.sk' },
        ],
        featured: true,
      },
      {
        title: 'AWS Live Chat Application',
        period: '2025',
        technologies: [
          'AWS Lambda',
          'DynamoDB',
          'AppSync',
          'Cognito',
          'Amplify',
          'React',
        ],
        description: [
          'Helped design and implement a team live-chat application using a serverless AWS architecture.',
          'Used multiple AWS services for authentication and live-chat functions.',
        ],
        featured: true,
      },
      {
        title: 'Energy Measurement and Optimization',
        period: '2025',
        technologies: ['Shelly', 'MQTT', 'ZigBee', 'Home Assistant'],
        description: [
          'Worked on smart-room automation driven by measured energy consumption.',
          'Contributed to a solution focused on energy optimization and carbon-footprint reduction.',
        ],
      },
      {
        title: 'Juniper Device Configuration Analysis',
        subtitle: 'Bachelor’s thesis',
        period: '2023 – 2024',
        technologies: ['JunOS', 'Python'],
        description: [
          'Compared manual and model-driven network device configuration in a virtual environment.',
          'Created and deployed online study materials following the CCNA 1–3 course structure.',
        ],
      },
      {
        title: 'Truth’s Last Line',
        subtitle: 'TUKE Facts Game Jam 2024',
        period: '2024',
        technologies: ['Unity'],
        description: [
          'Contributed custom sound design to a top-down base-defence game.',
          'The game placed first in the participants’ vote and second in the jury vote.',
        ],
        links: [
          {
            label: 'Play on itch.io',
            href: 'https://fifinka.itch.io/truths-last-line',
          },
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        institution: 'Technical University of Košice',
        department: 'Department of Computers and Informatics',
        degree: 'Bachelor’s and Master’s degree in Computer Science',
        location: 'Košice, Slovakia',
        period: '2021 – 2026',
      },
    ],
  },
  languages: {
    title: 'Languages',
    items: [
      {
        name: 'Slovak',
        level: 'Native',
        description: 'Native language',
      },
      {
        name: 'English',
        level: 'B2',
        description: 'Technical documentation and professional communication',
      },
      {
        name: 'German',
        level: 'A2',
        description: 'Basic communication',
      },
    ],
  },
  footer: {
    heading: 'Let’s get in touch',
    message:
      'I am open to junior opportunities and interesting software, cloud or IoT projects.',
    emailLabel: 'Email',
    linksLabel: 'Links',
    copyright: 'All rights reserved.',
  },
  contact: {
    email: 'leso.michal374@gmail.com',
    website: 'https://www.michalleso.com',
    github: 'https://github.com/Mitkens374',
  },
}
