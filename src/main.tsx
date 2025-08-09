import { createRoot } from 'react-dom/client'
import './assets/style/main.css'
import App from './components/App.tsx'
import { ThemeProvider } from './components/service/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
