import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Content from './pages/Content';
import About from './pages/About';
import Contact from './pages/Contact';
import Subjects from './pages/Subjects';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home/>}>
              <Route index element={<Content/>} />
              <Route path="about" element={<About/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="subjects" element={<Subjects/>} />
            </Route>
    </Routes>
    </BrowserRouter>
  )
}
