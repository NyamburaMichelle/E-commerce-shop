import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LayoutAdmin from './LayoutAdmin';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AddProducts from './Pages/AddProducts';
import AdminHome from './Pages/AdminHome';
import Orders from './Pages/Orders'; 
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route index element={<AdminHome />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
