import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { ThemeProvider } from './components/service/ThemeProvider.tsx'

import './assets/style/main.css'


createRoot(document.getElementById('root')!)
.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
