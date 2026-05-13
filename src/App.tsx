import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogIndexPage from './blog/pages/BlogIndexPage'
import { BlogPostDetailedPage } from './blog/pages/BlogPostDetailedPage'

function App() {
  

  return (
    <BrowserRouter>
     <h1>Dynamic Routing</h1> 
     <Routes>
       <Route path= "/blog" element ={<BlogIndexPage/>} />
       <Route path = "/blog/:slug"  element={<BlogPostDetailedPage />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
