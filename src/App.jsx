import './App.css'
import Header from './component/Header';
import {Routes,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import Features from './component/Features';
import Project from './component/Projects';
import Resume from './component/Resume';
import Testinomial from './component/Testinomial';
import Contacts from './component/Contact';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/features' element={<Features/>}></Route>
      <Route path='/projects' element={<Project/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='/testinomial' element={<Testinomial/>}></Route>
      <Route path='/contact' element={<Contacts/>}></Route>
    </Routes>
   </>
  )
}

export default App
