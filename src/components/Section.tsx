import type { ReactNode } from 'react'
import { Box, Container, Typography } from '@mui/material'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
  tone?: 'default' | 'muted'
}

export function Section({
  id,
  title,
  children,
  tone = 'default',
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      className={`content-section content-section--${tone}`}
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <Typography id={`${id}-heading`} variant="h2" className="section-title">
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  )
}
