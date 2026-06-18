import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { portfolioContent } from './content'
import type { Language } from './types/portfolio'
import './App.css'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (savedLanguage === 'en' || savedLanguage === 'sk') {
    return savedLanguage
  }

  return navigator.language.toLowerCase().startsWith('sk') ? 'sk' : 'en'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const content = portfolioContent[language]

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
    document.title = content.seo.title

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    description?.setAttribute('content', content.seo.description)
  }, [content, language])

  return (
    <Box className="site-shell" id="top">
      <Header
        content={content}
        language={language}
        onLanguageChange={setLanguage}
      />

      <Box component="main">
        <Box component="section" className="hero-section" aria-labelledby="hero-title">
          <Container>
            <Box className="hero-layout">
              <Stack spacing={3} className="hero-copy">
                <Typography className="hero-eyebrow">
                  <span aria-hidden="true" />
                  {content.hero.eyebrow}
                </Typography>

                <Typography id="hero-title" variant="h1">
                  {content.hero.title}
                </Typography>

                <Typography variant="body1" color="text.secondary" maxWidth={650}>
                  {content.hero.introduction}
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.5}
                  className="hero-actions"
                >
                  <Button variant="contained" href="#projects">
                    {content.hero.projectsCta}
                    <span aria-hidden="true">↘</span>
                  </Button>
                  <Button variant="outlined" href="#contact">
                    {content.hero.contactCta}
                  </Button>
                </Stack>

                <Box className="hero-meta">
                  <Typography>{content.identity.role}</Typography>
                  <Typography>{content.identity.location}</Typography>
                </Box>
              </Stack>

              <Box className="hero-visual" aria-hidden="true">
                <Box className="visual-grid">
                  <span className="visual-orbit visual-orbit--outer" />
                  <span className="visual-orbit visual-orbit--inner" />
                  <span className="visual-core">ML</span>
                  <span className="tech-node tech-node--python">Python</span>
                  <span className="tech-node tech-node--aws">AWS</span>
                  <span className="tech-node tech-node--iot">IoT</span>
                  <span className="tech-node tech-node--react">React</span>
                  <span className="visual-coordinate visual-coordinate--top">
                    CLOUD / BACKEND
                  </span>
                  <span className="visual-coordinate visual-coordinate--bottom">
                    SYSTEM NODE / 01
                  </span>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Section id="about" title={content.about.title} tone="muted">
          <Stack spacing={2.5} className="about-copy">
            {content.about.paragraphs.map((paragraph) => (
              <Typography key={paragraph} variant="body1" color="text.secondary">
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Section>

        <Section id="skills" title={content.skills.title}>
          <Box className="skills-grid">
            {content.skills.groups.map((group) => (
              <Box key={group.title} className="skill-group">
                <Typography variant="h3" fontSize="1.125rem">
                  {group.title}
                </Typography>
                <Box className="chip-list">
                  {group.items.map((item) => (
                    <Chip key={item} label={item} variant="outlined" />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Section>

        <Section id="projects" title={content.projects.title} tone="muted">
          <Typography
            variant="body1"
            color="text.secondary"
            className="section-introduction"
          >
            {content.projects.introduction}
          </Typography>

          <Box className="projects-grid">
            {content.projects.items.map((project, index) => (
              <Box
                component="article"
                key={project.title}
                className={`project-card${project.featured ? ' project-card--featured' : ''}${index === 0 ? ' project-card--lead' : ''}`}
              >
                <Stack spacing={2} height="100%">
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      gap={2}
                    >
                      <Typography variant="h3" fontSize="1.35rem">
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        whiteSpace="nowrap"
                      >
                        {project.period}
                      </Typography>
                    </Stack>
                    {project.subtitle && (
                      <Typography color="text.secondary" mt={0.75}>
                        {project.subtitle}
                      </Typography>
                    )}
                  </Box>

                  <Stack component="ul" spacing={1} className="project-description">
                    {project.description.map((description) => (
                      <Typography
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        key={description}
                      >
                        {description}
                      </Typography>
                    ))}
                  </Stack>

                  <Box className="chip-list">
                    {project.technologies.map((technology) => (
                      <Chip key={technology} label={technology} size="small" />
                    ))}
                  </Box>

                  {project.links && (
                    <Stack direction="row" gap={2} flexWrap="wrap" mt="auto">
                      {project.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          {link.label} <span aria-hidden="true">↗</span>
                        </Link>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </Box>
            ))}
          </Box>

          <Typography variant="body2" color="text.secondary" mt={3}>
            {content.projects.privateNote}
          </Typography>
        </Section>

        <Section id="education" title={content.education.title}>
          <Stack spacing={2}>
            {content.education.items.map((item) => (
              <Box key={item.institution} className="education-card">
                <span className="education-mark" aria-hidden="true" />
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  gap={2}
                >
                  <Box>
                    <Typography variant="h3" fontSize="1.35rem">
                      {item.institution}
                    </Typography>
                    <Typography color="text.secondary" mt={0.75}>
                      {item.department}
                    </Typography>
                    <Typography mt={1.5}>{item.degree}</Typography>
                  </Box>
                  <Box className="education-meta">
                    <Typography fontWeight={700}>{item.period}</Typography>
                    <Typography color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Section>

        <Section id="languages" title={content.languages.title} tone="muted">
          <Box className="languages-grid">
            {content.languages.items.map((item) => (
              <Box key={item.name} className="language-card">
                <Typography variant="h3" fontSize="1.25rem">
                  {item.name}
                </Typography>
                <Typography color="primary.main" fontWeight={700} mt={1}>
                  {item.level}
                </Typography>
                <Typography color="text.secondary" mt={0.5}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Section>
      </Box>

      <Box component="footer" id="contact" className="site-footer">
        <Container>
          <Box className="footer-content">
            <Box>
              <Typography variant="h2">{content.footer.heading}</Typography>
              <Typography className="footer-message" mt={2} maxWidth={600}>
                {content.footer.message}
              </Typography>
            </Box>

            <Box className="footer-links">
              <Box>
                <Typography className="footer-label">
                  {content.footer.emailLabel}
                </Typography>
                <Link
                  href={`mailto:${content.contact.email}`}
                  className="footer-email"
                >
                  {content.contact.email}
                </Link>
              </Box>
              <Box>
                <Typography className="footer-label">
                  {content.footer.linksLabel}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Link
                    href={content.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </Link>
                  <Link
                    href={content.contact.website}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social"
                  >
                    Website <span aria-hidden="true">↗</span>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Box>

          <Typography className="copyright" color="text.secondary">
            © {new Date().getFullYear()} {content.identity.shortName}.{' '}
            {content.footer.copyright}
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default App
