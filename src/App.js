
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './component/Pages/Contact/Contact';
import Home from './component/Pages/Home/Home';
import Skill from './component/Pages/Skill/Skill';
import Navbar from './component/Shared/Navbar';
import Project from './component/Pages/Project/Project';
import Blog from './component/Pages/Blog/Blog';
import About from './component/Pages/About.js/About';








function App() {
  return (
    <div className="px-12">
      
    
    
   
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/about' element={<About></About>}></Route>
   

    
     
     <Route path='/skill' element={<Skill></Skill>}></Route>
     <Route path='/project' element={<Project></Project>}></Route>
     <Route path='/blog' element={<Blog></Blog>}></Route>

     <Route path='/contact' element={<Contact></Contact>}></Route>

   </Routes>
   <Navbar></Navbar>
     
    </div>
  );
}

export default App;
