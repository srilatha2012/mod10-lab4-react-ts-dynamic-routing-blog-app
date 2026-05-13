import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogIndexPage from './blog/pages/BlogIndexPage'
import { BlogPostDetailedPage } from './blog/pages/BlogPostDetailedPage'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import LoginPage from './blog/pages/LoginPage'

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
         <Navbar />
        <h1>Dynamic Routing</h1>
        <Routes>
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostDetailedPage />} />
           <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
