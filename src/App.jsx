import { BrowserRouter } from 'react-router-dom'
import './assets/styles/App.scss'
import { AuthProvider } from './context/UserContext'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App