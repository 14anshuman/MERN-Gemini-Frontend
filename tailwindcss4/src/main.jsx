import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './Context/userContext.jsx'
import './index.css'
import App from './App.jsx'
import { ChatProvider } from './Context/ChatContext.jsx'

export const server = "https://localhost:5000";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <UserProvider>
      <ChatProvider>
      <App />
      </ChatProvider>
     
     </UserProvider>
  </StrictMode>,
)
