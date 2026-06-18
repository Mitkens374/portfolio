import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5b4ff7',
      dark: '#3d32cc',
      light: '#eceafe',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f7f3',
      paper: '#ffffff',
    },
    text: {
      primary: '#171725',
      secondary: '#676678',
    },
    divider: '#dedde5',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      'Inter, Aptos, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 750,
      fontSize: 'clamp(3rem, 7vw, 5.65rem)',
      lineHeight: 0.98,
      letterSpacing: '-0.06em',
    },
    h2: {
      fontWeight: 740,
      fontSize: 'clamp(2.15rem, 4vw, 3.4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.045em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
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
          color: '#171725',
          backgroundColor: '#d9d5ff',
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
          paddingInline: 23,
          minHeight: 48,
          transition: 'transform 160ms ease, box-shadow 160ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
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
