import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2557d6',
      dark: '#173a96',
      light: '#e8efff',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f8fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#172033',
      secondary: '#5d6678',
    },
    divider: '#e1e5ec',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 7vw, 4.75rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.045em',
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.035em',
    },
    h3: {
      fontWeight: 650,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.75,
    },
    button: {
      fontWeight: 700,
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          minWidth: 320,
        },
        '::selection': {
          color: '#172033',
          backgroundColor: '#cbd9ff',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          minHeight: 44,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
})

export const theme = responsiveFontSizes(baseTheme)
