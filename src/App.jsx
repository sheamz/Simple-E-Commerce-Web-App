import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './auth/LoginPage'; 
import Register from './auth/RegisterPage'; 
import HomePage from './pages/HomePage';
import Footer from './component/Footer'; 
import LandingPage from './pages/LandingPage'; 
import ShopPage from './pages/ShopPage';
import AddProductPage from './pages/AddProductPage';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import ProfileSetting from './pages/ProfileSetting';
import SellerDashboard from './pages/SellerDashboard';
import YourListing from './pages/YourListing';
import YourOrders from './pages/YourOrders';
import ShopSetting from './pages/ShopSetting';
import PastOrders from './pages/PastOrders';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation(); 

  const noFooterRoutes = ['/login', '/register'];

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfileSetting />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/your-listing" element={<YourListing />} />
        <Route path="/your-orders" element={<YourOrders />} />
        <Route path="/shop-setting" element={<ShopSetting />} />
        <Route path="/past-orders" element={<PastOrders />} />
        <Route path="*" element={<div>404 Not Found</div>} /> 
      </Routes>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;