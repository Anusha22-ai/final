import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import BabyPage from './pages/BabyPage';
import BodyPage from './pages/BodyPage';
import HairPage from './pages/HairPage';
import Bestsellerpage from './pages/Bestsellerpage';
import Fragrances from './pages/Fragnances';
import MakeupPage from './pages/MakeupPage';
import NewLaunches from './pages/NewLaunchesPage';
import AllProductsPage from './pages/AllProductsPage';
import FacePage from './pages/FacePage';
import CombosPage from './pages/CombosPage';
import OffersPage from './pages/OffersPage';


function App() {
  return (<div>

    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>}></Route> 
          <Route path="/contact" element={<ContactPage/>}></Route> 
          <Route path="/checkout" element={<CartPage/>}></Route>
          <Route path="/details" element={<DetailsPage/>}></Route>
          <Route path="/" element={<SignupPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/baby-page" element={<BabyPage/>}></Route>
          <Route path="/body-page" element={<BodyPage/>}></Route>
          <Route path="/hair-page" element={<HairPage/>}></Route>
          <Route path='/best-seller' element={<Bestsellerpage/>}></Route>
          <Route path='/fragnances' element={<Fragrances/>}></Route>
          <Route path="/makeup" element={<MakeupPage/>}></Route>
          <Route path='new-launches' element={<NewLaunches/>}></Route>
          <Route path='all-products' element={<AllProductsPage/>}></Route>
          <Route path='face-page' element={<FacePage/>}></Route>
          <Route path='combos' element={<CombosPage/>}></Route>
          <Route path='offers' element={<OffersPage/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
   
  </div>);
}

export default App;
