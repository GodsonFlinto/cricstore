import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import { Login } from './Pages/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/womens' element={<ShopCategory banner={men_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={men_banner} category="kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/signup' element={<LoginSignup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
