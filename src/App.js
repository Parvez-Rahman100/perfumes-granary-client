import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
