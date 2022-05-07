import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
