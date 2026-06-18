import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material'
import type {
  Language,
  PortfolioContent,
} from '../types/portfolio'

type HeaderProps = {
  content: PortfolioContent
  language: Language
  onLanguageChange: (language: Language) => void
}

function LanguagePicker({
  content,
  language,
  onLanguageChange,
}: HeaderProps) {
  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={language}
      onChange={(_event, nextLanguage: Language | null) => {
        if (nextLanguage) {
          onLanguageChange(nextLanguage)
        }
      }}
      aria-label={content.navigation.languageLabel}
      className="language-picker"
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="sk" aria-label="Slovenčina">
        SK
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export function Header({
  content,
  language,
  onLanguageChange,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <AppBar className="site-header" position="sticky" elevation={0}>
        <Container>
          <Toolbar disableGutters className="site-toolbar">
            <Link href="#top" underline="none" className="wordmark">
              {content.identity.shortName}
            </Link>

            <Box
              component="nav"
              className="desktop-navigation"
              aria-label={content.navigation.ariaLabel}
            >
              {content.navigation.items.map((item) => (
                <Link key={item.href} href={item.href} underline="none">
                  {item.label}
                </Link>
              ))}
            </Box>

            <Box className="header-actions">
              <Box className="desktop-language-picker">
                <LanguagePicker
                  content={content}
                  language={language}
                  onLanguageChange={onLanguageChange}
                />
              </Box>

              <IconButton
                className="menu-button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label={content.navigation.openMenuLabel}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <Box className="menu-icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </Box>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ id: 'mobile-navigation' }}
      >
        <Box className="mobile-menu">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={750}>
              {content.identity.shortName}
            </Typography>
            <IconButton
              onClick={closeMobileMenu}
              aria-label={content.navigation.closeMenuLabel}
            >
              <span aria-hidden="true">×</span>
            </IconButton>
          </Stack>

          <Box
            component="nav"
            className="mobile-navigation"
            aria-label={content.navigation.ariaLabel}
          >
            {content.navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                underline="none"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          <LanguagePicker
            content={content}
            language={language}
            onLanguageChange={onLanguageChange}
          />
        </Box>
      </Drawer>
    </>
  )
}
