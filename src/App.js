
import './App.css';
import BlogHome from "./Screen/BlogHome"
import Write from './Components/write/write';
import Blog1 from './Screen/blogDetails/blogDetails1';
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<BlogHome/>}/>
      <Route path='write' element={<Write/>}/>  
      <Route path='/blog1/:id' element={<Blog1/>}/>
      </Routes>
    </div>
  );
}

export default App;
