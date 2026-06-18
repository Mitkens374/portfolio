import { useEffect, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material'
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

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    nextLanguage: Language | null,
  ) => {
    if (nextLanguage) {
      setLanguage(nextLanguage)
    }
  }

  return (
    <Box className="site-shell">
      <AppBar className="site-header" position="sticky" elevation={0}>
        <Container>
          <Toolbar disableGutters className="site-toolbar">
            <Typography className="wordmark" component="span">
              {content.identity.shortName}
            </Typography>

            <ToggleButtonGroup
              exclusive
              size="small"
              value={language}
              onChange={handleLanguageChange}
              aria-label={content.navigation.languageLabel}
            >
              <ToggleButton value="en" aria-label="English">
                EN
              </ToggleButton>
              <ToggleButton value="sk" aria-label="Slovenčina">
                SK
              </ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">
        <Container>
          <Box className="foundation-preview">
            <Stack spacing={3} maxWidth={820}>
              <Typography color="primary.main" fontWeight={700}>
                {content.hero.eyebrow}
              </Typography>

              <Typography variant="h1">{content.hero.title}</Typography>

              <Typography variant="body1" color="text.secondary" maxWidth={680}>
                {content.hero.introduction}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant="contained" href="#projects">
                  {content.hero.projectsCta}
                </Button>
                <Button variant="outlined" href="#contact">
                  {content.hero.contactCta}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default App
