import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import './App.css'

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary" enableColorOnDark>
        <Container maxWidth="lg">
          <Box py={1.25} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="div">
              Ing. Michal Lešo
            </Typography>
          </Box>
        </Container>
      </AppBar>

      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            Work in progress
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default App
