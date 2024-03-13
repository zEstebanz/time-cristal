import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/HomePage';
import Register from '../pages/Register';
import TimeCrystal from '../pages/TimeCrystal';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/timecrystal' element={<TimeCrystal />} />
        </Routes>
    )
}

export default AppRouter;
