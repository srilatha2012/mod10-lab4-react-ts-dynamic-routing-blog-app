import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogIndexPage from './blog/pages/BlogIndexPage'

function App() {
  

  return (
    <BrowserRouter>
     <h1>Dynamic Routing</h1> 
     <Routes>
       <Route path= "/blog" element ={<BlogIndexPage/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
