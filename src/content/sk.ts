import type { PortfolioContent } from '../types/portfolio'

export const sk: PortfolioContent = {
  locale: 'sk',
  seo: {
    title: 'Michal Lešo | Backend & Cloud Developer',
    description:
      'Portfólio Michala Leša, junior backend a cloud developera so zameraním na AWS, Python, IoT a React.',
  },
  identity: {
    name: 'Ing. Michal Lešo',
    shortName: 'Michal Lešo',
    role: 'Junior Backend / Cloud Developer',
    location: 'Michaľany, Slovensko',
  },
  navigation: {
    ariaLabel: 'Hlavná navigácia',
    languageLabel: 'Vybrať jazyk',
    items: [
      { label: 'O mne', href: '#about' },
      { label: 'Zručnosti', href: '#skills' },
      { label: 'Projekty', href: '#projects' },
      { label: 'Vzdelanie', href: '#education' },
      { label: 'Jazyky', href: '#languages' },
      { label: 'Kontakt', href: '#contact' },
    ],
  },
  hero: {
    eyebrow: 'Ing. Michal Lešo',
    title: 'Developer backendových, cloudových a IoT riešení.',
    introduction:
      'Absolvent informatiky s praktickými skúsenosťami s Pythonom, AWS, serverless systémami, IoT a React aplikáciami.',
    projectsCta: 'Moje projekty',
    contactCta: 'Kontakt',
  },
  about: {
    title: 'O mne',
    paragraphs: [
      'Som absolvent informatiky na Technickej univerzite v Košiciach s projektovými skúsenosťami v backendovom vývoji, cloudových systémoch, IoT a databázových aplikáciách. Pracoval som s Pythonom, FastAPI a PostgreSQL, ako aj so službami AWS pri tvorbe serverless architektúr, autentifikácii, ukladaní dát a nasadzovaní aplikácií.',
      'Prostredníctvom akademických, tímových a klientskych projektov som získal skúsenosti s kolaboratívnym, iteratívnym a agilným vývojom. Najviac ma zaujíma backendový a cloudový vývoj, v ktorom sa chcem ďalej zdokonaľovať a podieľať sa na praktických softvérových riešeniach.',
    ],
  },
  skills: {
    title: 'Zručnosti',
    groups: [
      {
        title: 'Programovacie jazyky',
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
        title: 'Nástroje & DevOps',
        items: ['Git', 'Docker', 'NGINX', 'Cloudflare Tunnel'],
      },
    ],
  },
  projects: {
    title: 'Projekty',
    introduction:
      'Výber akademických, tímových a klientskych projektov z oblasti backendu, AWS, IoT a webu.',
    privateNote:
      'Niektoré repozitáre sú neverejné z dôvodu akademických, tímových alebo klientskych obmedzení.',
    items: [
      {
        title: 'Streetlight Monitor',
        subtitle: 'Diplomová práca — IoT systém na monitorovanie verejného osvetlenia',
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
          'Navrhol som trojvrstvový IoT prototyp pozostávajúci zo senzorových zariadení, lokálnej brány a cloudovej vrstvy na AWS.',
          'Implementoval som MQTT komunikáciu, serverless cloudové služby a vizualizačnú aplikáciu v Reacte nasadenú pomocou AWS Amplify.',
        ],
        links: [
          {
            label: 'Navštíviť web',
            href: 'https://www.streetlightmonitor.com',
          },
        ],
        featured: true,
      },
      {
        title: 'Systém na spracovanie faktúr',
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
          'V rámci tímu som pracoval na backendovej logike, spracovaní dát a cloudovej integrácii.',
          'Vytvoril som cloudový proces správy súborov a dát, extrahovaných pomocou PyMuPDF a Tesseract OCR a transformovaných do štruktúrovanej JSON podoby pomocou GPT API.',
        ],
        featured: true,
      },
      {
        title: 'Freelance web development',
        subtitle: 'Terraviso a FX-TEAM',
        period: '2025 – 2026',
        technologies: ['WordPress', 'AWS EC2', 'Docker', 'NGINX'],
        description: [
          'Navrhol, implementoval a spravoval som prezentačné webové stránky podľa požiadaviek klientov.',
          'Analyzoval som možnosti nasadenia a navrhol infraštruktúru s Dockerom a NGINX pre doplnkové služby na AWS EC2.',
        ],
        links: [
          { label: 'Terraviso', href: 'https://www.terraviso.eu' },
          { label: 'FX-TEAM', href: 'https://www.fx-team.sk' },
        ],
        featured: true,
      },
      {
        title: 'AWS Live Chat aplikácia',
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
          'Podieľal som sa na návrhu a implementácii tímovej live-chat aplikácie so serverless architektúrou na AWS.',
          'Využili sme niekoľko AWS služieb na zabezpečenie autentifikácie a live-chat funkcionalít.',
        ],
        featured: true,
      },
      {
        title: 'Meranie a optimalizácia energií',
        period: '2025',
        technologies: ['Shelly', 'MQTT', 'ZigBee', 'Home Assistant'],
        description: [
          'Pracoval som na automatizácii smart miestnosti riadenej podľa nameranej spotreby energie.',
          'Podieľal som sa na riešení zameranom na optimalizáciu spotreby a znižovanie uhlíkovej stopy.',
        ],
      },
      {
        title: 'Analýza konfigurácie Juniper zariadení',
        subtitle: 'Bakalárska práca',
        period: '2023 – 2024',
        technologies: ['JunOS', 'Python'],
        description: [
          'Porovnal som manuálny a modelovo riadený prístup ku konfigurácii sieťových zariadení vo virtuálnom prostredí.',
          'Vytvoril a nasadil som online študijné materiály podľa štruktúry kurzov CCNA 1–3.',
        ],
      },
      {
        title: 'Truth’s Last Line',
        subtitle: 'TUKE Facts Game Jam 2024',
        period: '2024',
        technologies: ['Unity'],
        description: [
          'Vytvoril som vlastné zvukové efekty pre top-down base-defence hru.',
          'Hra získala prvé miesto v hlasovaní súťažiacich a druhé miesto v hlasovaní poroty.',
        ],
        links: [
          {
            label: 'Zahrať na itch.io',
            href: 'https://fifinka.itch.io/truths-last-line',
          },
        ],
      },
    ],
  },
  education: {
    title: 'Vzdelanie',
    items: [
      {
        institution: 'Technická univerzita v Košiciach',
        department: 'Katedra počítačov a informatiky',
        degree: 'Bakalárske a inžinierske štúdium v odbore Informatika',
        location: 'Košice, Slovensko',
        period: '2021 – 2026',
      },
    ],
  },
  languages: {
    title: 'Jazyky',
    items: [
      {
        name: 'Slovenčina',
        level: 'Rodný jazyk',
        description: 'Rodný jazyk',
      },
      {
        name: 'Angličtina',
        level: 'B2',
        description: 'Technická dokumentácia a profesionálna komunikácia',
      },
      {
        name: 'Nemčina',
        level: 'A2',
        description: 'Základná komunikácia',
      },
    ],
  },
  footer: {
    heading: 'Spojme sa',
    message:
      'Som otvorený junior príležitostiam a zaujímavým projektom v oblasti softvéru, cloudu alebo IoT.',
    emailLabel: 'E-mail',
    linksLabel: 'Odkazy',
    copyright: 'Všetky práva vyhradené.',
  },
  contact: {
    email: 'leso.michal374@gmail.com',
    website: 'https://www.michalleso.com',
    github: 'https://github.com/Mitkens374',
  },
}
