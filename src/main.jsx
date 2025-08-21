import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <App />
    </AuthProvider>
  </StrictMode>,
)
