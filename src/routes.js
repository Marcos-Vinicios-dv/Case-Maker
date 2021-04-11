import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Customizar from './pages/Customizar';
import Home from './pages/Home';
import Login from './pages/Login';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="customizar" element={<Customizar />}/> 
            <Route path="cart" element={<Cart/>}/> 
            <Route path="login" element={<Login />}/>            
        </Routes>
    );
}